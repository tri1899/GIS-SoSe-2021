import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";



export namespace Endabgabe {

    let mongoUrl: string = "mongodb+srv://Testuser:passwort@clustertristan.gdas8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // zum verbinden, auf die Datenbank


    //1. Server starten
    let port: number = Number(process.env.PORT); // Server wird gestartet --> Port angelegt.
    if (!port)                                   // vgl. Code von Praktikumsaufgabe P 3.1
        port = 8100;

    Serverstarten(port);


    function Serverstarten(_port: number | string): void { //vgl. Code von Praktikumsaufgabe P 3.1 --> Server wird gestartet
        let server: Http.Server = Http.createServer();
        console.log("Starting Server.");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true }; // mit der Datenbank connected.
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(mongoUrl, options); // Code vgl. Praktikum, Grundlagen DB und Datenbank und Server


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
                let antwortdatenbank: string = await Registrierung(mongoUrl, user);
                _response.write(antwortdatenbank); //an Client schicken
            }

            else if (url.pathname == "/login") {
                let user: User = JSON.parse(jsonstring);
                let antwortdatenbank: string = await Login(mongoUrl, user);
                _response.write(antwortdatenbank);

            }

            else if (url.pathname == "/datenauslesen") {
                let userliste: MeineRezepte[] = await Rezepteauslesen(mongoUrl); //Der await Operator wird genutzt, um auf einen Promise zu warten.
                _response.write(JSON.stringify(userliste)); // Array wird in ein JSON- String konvertiert
            }

            else if (url.pathname == "/rezepterstellen") {
                let rezept: MeineRezepte = JSON.parse(jsonstring);
                let antwortdatenbank: string = await Rezepterstellen(mongoUrl, rezept);
                _response.write(antwortdatenbank);
            }

            else if (url.pathname == "/favorisieren") {
                let rezeptfav: MeineRezepte = JSON.parse(jsonstring);
                let antwortdatenbank: string = await Favorisieren(mongoUrl, rezeptfav);
                _response.write(antwortdatenbank);
            }

            else if (url.pathname == "/favsauslesen") {
                let favsauslesen: MeineRezepte = JSON.parse(jsonstring);
                let favsliste: MeineRezepte[] = await Favsauslesen(mongoUrl, favsauslesen);
                _response.write(JSON.stringify(favsliste));

            }

            else if (url.pathname == "/loeschen") {
                let loeschenausfav: MeineRezepte = JSON.parse(jsonstring);
                let antwortdatenbank: string = await FavsLoeschen(mongoUrl, loeschenausfav);
                _response.write(antwortdatenbank);
            }

            else if (url.pathname == "/anzeigenmeineRezepte") {
                let meinerezepte: MeineRezepte = JSON.parse(jsonstring);
                let meinerezpteliste: MeineRezepte[] = await Meinerezepteauslesen(mongoUrl, meinerezepte);
                _response.write(JSON.stringify(meinerezpteliste));

            }

            else if (url.pathname == "/loeschenausdatenbank") {
                let loeschenausfav: MeineRezepte = JSON.parse(jsonstring);
                let antwortdatenbank: string = await Datenbankloeschen(mongoUrl, loeschenausfav);
                _response.write(antwortdatenbank);
            }
        }
        _response.end(); // Antowrt ist fertig und wird losgeschickt
    }

    async function Datenbankloeschen(_url: string, _loeschenausfav: MeineRezepte): Promise<string> {
        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("Rezeptenliste").collection("Rezepte"); // auf meine Database und Collection zugreifen.
        meinedatenbank.deleteOne(_loeschenausfav); 
        let antwort: string = "gelöscht!";
        return antwort; //Antowrt geben
    }



    async function Meinerezepteauslesen(_url: string, _aktiveruser: MeineRezepte): Promise<MeineRezepte[]> {

        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("Rezeptenliste").collection("Rezepte");
        let aktivernutzer: string = _aktiveruser.aktiveruser;

        let cursor: Mongo.Cursor = meinedatenbank.find({ aktiveruser: aktivernutzer });
        let antwort: MeineRezepte[] = await cursor.toArray();
        return antwort;

    }

    //Favoriten löschen

    async function FavsLoeschen(_url: string, _loeschenausfav: MeineRezepte): Promise<string> {

        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Favoritenliste");
        meinedatenbank.deleteOne(_loeschenausfav);
        let antwort: string = "gelöscht!";
        return antwort;
    }

    // Favoriten auslesen

    async function Favsauslesen(_url: string, _aktiveruser: MeineRezepte): Promise<MeineRezepte[]> {

        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Favoritenliste");
        let aktivernutzer: string = _aktiveruser.aktiveruser;

        let cursor: Mongo.Cursor = meinedatenbank.find({ aktiveruser: aktivernutzer });
        let antwort: MeineRezepte[] = await cursor.toArray();
        return antwort;
    }

    // Favorisieren

    async function Favorisieren(_url: string, _rezeptfav: MeineRezepte): Promise<string> {

        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Favoritenliste");
        meinedatenbank.insertOne(_rezeptfav);
        let antwort: string = "hinzugefügt!";
        return antwort;
    }

    // Rezept erstellen
    async function Rezepterstellen(_url: string, _rezept: MeineRezepte): Promise<string> {

        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("Rezeptenliste").collection("Rezepte");
        meinedatenbank.insertOne(_rezept);
        let antwort: string = "Rezept wurde angelegt";
        return antwort;
    }

    // Rezepteauslesen
    async function Rezepteauslesen(_url: string): Promise<MeineRezepte[]> {

        await mongoClient.connect();


        let meinedatenbank: Mongo.Collection = mongoClient.db("Rezeptenliste").collection("Rezepte");
        let cursor: Mongo.Cursor = meinedatenbank.find();
        let antwort: MeineRezepte[] = await cursor.toArray();
        return antwort;

    }

    // Daten in die Datenbank schreiben
    async function Registrierung(_url: string, _user: User): Promise<string> {

        await mongoClient.connect();

        if (_user.nutzername && _user.passwort != "") {

            let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Userlist");

            let cursor: Mongo.Cursor = meinedatenbank.find();
            let alleuser: User[] = await cursor.toArray();

            let ueberpruefen: string = await UeberpruefenUserDatenbanknurName(alleuser, _user);

            if (ueberpruefen == "User wurde gefunden") {
                let antwort: string = "Der Name existiert schon!";
                return antwort;
            }
            meinedatenbank.insertOne(_user);
            return ueberpruefen;
        }
        let antwort: string = "Füllen Sie bitte alle Felder aus!";

        return antwort;

    }

    async function Login(_url: string, _user: User): Promise<string> {
        await mongoClient.connect();

        if (_user.nutzername && _user.passwort != "") {

            let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Userlist");

            let cursor: Mongo.Cursor = meinedatenbank.find();
            let alleuser: User[] = await cursor.toArray();

            let ueberpruefen: string = await UeberpruefenUserDatenbank(alleuser, _user);

            if (ueberpruefen == "User wurde nicht gefunden.") {
                return ueberpruefen;
            } else {
                return ueberpruefen;
            }
        }
        let antwort: string = "Füllen Sie bitte alle Felder aus!";
        return antwort;

    }

    async function UeberpruefenUserDatenbank(_userarray: User[], _user: User): Promise<string> { // Für Login
        for (let i: number = 0; i < _userarray.length; i++) {
            if (_userarray[i].nutzername == _user.nutzername && _userarray[i].passwort == _user.passwort) {
                let antwort: string = _user.nutzername;
                return antwort;
            }
        }
        let antwort: string = "User wurde nicht gefunden.";
        return antwort;
    }

    async function UeberpruefenUserDatenbanknurName(_userarray: User[], _user: User): Promise<string> { // Für Registrierung
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

    interface MeineRezepte {
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

/*
    async function Rezeptupdate(_url: string, _rezept: MeineRezepte): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("Rezeptenliste").collection("Rezepte");


        let cursor: Mongo.Cursor = meinedatenbank.find();
        let gefundesnesRezept: MeineRezepte[] = await cursor.toArray();
        let rezept: string = JSON.stringify(gefundesnesRezept);
        let meinerezept: MeineRezepte[] = JSON.parse(rezept);

        for (let i: number = 0; i < meinerezept.length; i++) {
            if (meinerezept[i].titel == _rezept.titel) {
            let gefunden: MeineRezepte = meinerezept[i];
            meinedatenbank.replaceOne(gefunden, _rezept, { upsert: true });
            let antwort: string = "update";
            return antwort;
            }
            let antowrt: string = "nicht gefunden";
            return antowrt;
        }
        let antowrt: string = "nicht gefunden";
        return antowrt;
    }*/
