import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";



export namespace Endabgabe {
    let user: Mongo.Collection;
    let fav: Mongo.Collection;
    let rezepte: Mongo.Collection;

    let mongoUrl: string = "mongodb+srv://Testuser:passwort@clustertristan.gdas8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // zum verbinden, auf die Datenbank


    //1. Server starten
    let port: number = Number(process.env.PORT); // Server wird gestartet --> Port angelegt.
    if (!port)                                   // vgl. Code von Praktikumsaufgabe P 3.1
        port = 8100;

    serverstarten(port);
    datenbankverbinden(mongoUrl);


    function serverstarten(_port: number | string): void { //vgl. Code von Praktikumsaufgabe P 3.1 --> Server wird gestartet
        let server: Http.Server = Http.createServer();
        console.log("Starting Server.Yes!");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function datenbankverbinden(_url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true }; // mit der Datenbank connected.
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options); // Code vgl. Praktikum, Grundlagen DB und Datenbank und Server
        await mongoClient.connect();

        user = mongoClient.db("User").collection("Userlist");
        fav = mongoClient.db("User").collection("Favoritenliste");
        rezepte = mongoClient.db("Rezeptenliste").collection("Rezepte");

    }

    //2. handle Request
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> { //vgl. Code von Praktikumsaufgabe P 3.1
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //Die in der Request enthaltene URL wird in ein assoziatives Array geparsed/umformatiert
            let jsonstring: string = JSON.stringify(url.query); //Zum Feedback geben
            console.log(jsonstring);

            if (url.pathname == "/regestrieren") { // auswertung
                let user: User = JSON.parse(jsonstring); //Wieder in ein JSON Objekt umwandeln --> damit ich weiter arbeiten kann
                let antwortdatenbank: string = await registrierung(user);
                _response.write(antwortdatenbank); //an Client schicken
            }

            else if (url.pathname == "/login") {
                let user: User = JSON.parse(jsonstring);
                let antwortdatenbank: string = await login(user);
                _response.write(antwortdatenbank);

            }

            else if (url.pathname == "/datenauslesen") {
                let userliste: MeineRezept[] = await rezepteauslesen(); //Der await Operator wird genutzt, um auf einen Promise zu warten.
                _response.write(JSON.stringify(userliste)); // Array wird in ein JSON- String konvertiert
            }

            else if (url.pathname == "/rezepterstellen") {
                let rezept: MeineRezept = JSON.parse(jsonstring);
                let antwortdatenbank: string = await rezepterstellen(rezept);
                _response.write(antwortdatenbank);
            }

            else if (url.pathname == "/favorisieren") {
                let rezeptfav: MeineRezept = JSON.parse(jsonstring);
                let antwortdatenbank: string = await favorisieren(rezeptfav);
                _response.write(antwortdatenbank);
            }

            else if (url.pathname == "/favsauslesen") {
                let favsauslesenlassen: MeineRezept = JSON.parse(jsonstring);
                let favsliste: MeineRezept[] = await favsauslesen(favsauslesenlassen);
                _response.write(JSON.stringify(favsliste));

            }

            else if (url.pathname == "/loeschen") {
                let loeschenausfav: MeineRezept = JSON.parse(jsonstring);
                let antwortdatenbank: string = await favsLoeschen(loeschenausfav);
                _response.write(antwortdatenbank);
            }

            else if (url.pathname == "/anzeigenmeineRezepte") {
                let meinerezepte: MeineRezept = JSON.parse(jsonstring);
                let meinerezpteliste: MeineRezept[] = await meinerezepteauslesen(meinerezepte);
                _response.write(JSON.stringify(meinerezpteliste));

            }

            else if (url.pathname == "/loeschenausdatenbank") {
                let loeschenausfav: MeineRezept = JSON.parse(jsonstring);
                let antwortdatenbank: string = await datenbankloeschen(loeschenausfav);
                _response.write(antwortdatenbank);
            }
        }
        _response.end(); // Antowrt ist fertig und wird losgeschickt
    }

    async function datenbankloeschen(_loeschenausfav: MeineRezept): Promise<string> {
  
        rezepte.deleteOne(_loeschenausfav);
        let antwort: string = "gelöscht!";
        return antwort; //Antowrt geben
    }



    async function meinerezepteauslesen(_aktiveruser: MeineRezept): Promise<MeineRezept[]> {

        let aktivernutzer: string = _aktiveruser.aktiveruser;
        let cursor: Mongo.Cursor = rezepte.find({ aktiveruser: aktivernutzer });
        let antwort: MeineRezept[] = await cursor.toArray();
        return antwort;

    }

    //Favoriten löschen

    async function favsLoeschen(_loeschenausfav: MeineRezept): Promise<string> {

        fav.deleteOne(_loeschenausfav);
        let antwort: string = "gelöscht!";
        return antwort;
    }

    // Favoriten auslesen

    async function favsauslesen(_aktiveruser: MeineRezept): Promise<MeineRezept[]> {

        let aktivernutzer: string = _aktiveruser.aktiveruser;

        let cursor: Mongo.Cursor = fav.find({ aktiveruser: aktivernutzer });
        let antwort: MeineRezept[] = await cursor.toArray();
        return antwort;
    }

    // Favorisieren

    async function favorisieren(_rezeptfav: MeineRezept): Promise<string> {

        fav.insertOne(_rezeptfav);
        let antwort: string = "hinzugefügt!";
        return antwort;
    }

    // Rezept erstellen
    async function rezepterstellen(_rezept: MeineRezept): Promise<string> {

        rezepte.insertOne(_rezept);
        let antwort: string = "Rezept wurde angelegt";
        return antwort;
    }

    // Rezepteauslesen
    async function rezepteauslesen(): Promise<MeineRezept[]> {

        let cursor: Mongo.Cursor = rezepte.find();
        let antwort: MeineRezept[] = await cursor.toArray();
        return antwort;

    }

    // Daten in die Datenbank schreiben
    async function registrierung(_user: User): Promise<string> {

        if (_user.nutzername && _user.passwort != "") {

            let cursor: Mongo.Cursor = user.find();
            let alleuser: User[] = await cursor.toArray();

            let ueberpruefen: string = await ueberpruefenUserDatenbanknurName(alleuser, _user);

            if (ueberpruefen == "User wurde gefunden") {
                let antwort: string = "Der Name existiert schon!";
                return antwort;
            }
            user.insertOne(_user);
            return ueberpruefen;
        }
        let antwort: string = "Füllen Sie bitte alle Felder aus!";

        return antwort;

    }

    async function login(_user: User): Promise<string> {

        if (_user.nutzername && _user.passwort != "") {

            let cursor: Mongo.Cursor = user.find();
            let alleuser: User[] = await cursor.toArray();

            let ueberpruefen: string = await ueberpruefenUserDatenbank(alleuser, _user);

            if (ueberpruefen == "User wurde nicht gefunden.") {
                return ueberpruefen;
            } else {
                return ueberpruefen;
            }
        }
        let antwort: string = "Füllen Sie bitte alle Felder aus!";
        return antwort;

    }

    async function ueberpruefenUserDatenbank(_userarray: User[], _user: User): Promise<string> { // Für Login
        for (let i: number = 0; i < _userarray.length; i++) {
            if (_userarray[i].nutzername == _user.nutzername && _userarray[i].passwort == _user.passwort) {
                let antwort: string = _user.nutzername;
                return antwort;
            }
        }
        let antwort: string = "User wurde nicht gefunden.";
        return antwort;
    }

    async function ueberpruefenUserDatenbanknurName(_userarray: User[], _user: User): Promise<string> { // Für Registrierung
        for (let i: number = 0; i < _userarray.length; i++) {
            if (_userarray[i].nutzername == _user.nutzername) {
                let antwort: string = "User wurde gefunden";
                return antwort;
            }
        }
        let antwort: string = _user.nutzername;
        return antwort;
    }


    interface User {
        nutzername: string;
        passwort: string;
    }

    interface MeineRezept {
        aktiveruser: string;
        titel: string;
        arbeitszeit: string;
        zutat1: string;
        zutat2: string;
        zutat3: string;
        zutat4: string;
        zutat5: string;
        zutat6: string;
        zutat7: string;
        zutat8: string;
        zutat9: string;
        zutat10: string;
        zubereitungsanweisung: string;
    }
}

