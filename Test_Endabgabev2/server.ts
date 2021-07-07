import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";



export namespace Endabgabe {

    let mongoUrl: string = "mongodb+srv://Testuser:passwort@clustertristan.gdas8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


    //1. Server starten
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    Serverstarten(port);


    function Serverstarten(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("Starting Server!");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }


    //2. handle Request
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //Die in der Request enthaltene URL wird in ein assoziatives Array geparsed/umformatiert
            let jsonstring: string = JSON.stringify(url.query); //Zum Feedback geben
            console.log(jsonstring);

            if (url.pathname == "/regestrieren") {
                let user: User = JSON.parse(jsonstring); //Wieder in ein JSON Objekt umwandeln
                let antwortdatenbank: string = await Registrierung(mongoUrl, user);
                _response.write(antwortdatenbank); //an Client schicken
            }

            else if (url.pathname == "/login") {
                let user: User = JSON.parse(jsonstring);
                let antwortdatenbank: string = await Login(mongoUrl, user);
                _response.write(antwortdatenbank);

            }

            else if (url.pathname == "/datenauslesen") {
                let userliste: Rezept[] = await Rezepteauslesen(mongoUrl);
                _response.write(JSON.stringify(userliste));
            }

            else if (url.pathname == "/rezepterstellen") {
                let rezept: Rezept = JSON.parse(jsonstring);
                let antwortdatenbank: string = await Rezepterstellen(mongoUrl, rezept);
                _response.write(antwortdatenbank);
            }

            else if (url.pathname == "/favorisieren") {
                let rezept: Rezept = JSON.parse(jsonstring);
                let antwortdatenbank: string = await Favorisieren(mongoUrl, rezept);
                _response.write(antwortdatenbank);
            }
        }
        _response.end();
    }

    async function Favorisieren (_url: string, _rezept: Rezept): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Userlist");
        meinedatenbank.insertOne(_rezept);
        let antwort: string = "hinzugefügt!";
        return antwort;
    }

    // Rezept erstellen
    async function Rezepterstellen(_url: string, _rezept: Rezept): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        if (_rezept.titel && _rezept.arbeitszeit && _rezept.zutat && _rezept.zubereitungsanweisung != "") {
        
        
        let meinedatenbank: Mongo.Collection = mongoClient.db("Rezeptenliste").collection("Rezepte");
        meinedatenbank.insertOne(_rezept);
        let antwort: string = "Rezept wurde angelegt";
        return antwort;
        }
        let antwort: string = "Füllen Sie bitte alle Felder aus!";
        return antwort;


    }

    // Rezepteauslesen
    async function Rezepteauslesen(_url: string): Promise<Rezept[]> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        

        let meinedatenbank: Mongo.Collection = mongoClient.db("Rezeptenliste").collection("Rezepte");
        let cursor: Mongo.Cursor = meinedatenbank.find();
        let antwort: Rezept[] = await cursor.toArray();
        return antwort;

    }

    // Daten in die Datenbank schreiben
    async function Registrierung(_url: string, _user: User): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        if (_user.nutzername && _user.passwort != "") {

            let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Userlist");

            let cursor: Mongo.Cursor = meinedatenbank.find();
            let alleuser: User[] = await cursor.toArray();

            let ueberpruefen: string = await UeberpruefenUserDatenbanknurName(alleuser, _user);

            if (ueberpruefen == "User wurde nicht gefunden.") {
                meinedatenbank.insertOne(_user);
                let antwort: string = "User wurde gespeichert";
                return antwort;
            } else if ("User wurde gefunden") {
                let antwort: string = "Der Name existiert schon!";
                return antwort;
            }
        }
        let antwort: string = "Füllen Sie bitte alle Felder aus!";

        return antwort;

    }

    async function Login(_url: string, _user: User): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        if (_user.nutzername && _user.passwort != "") {

            let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Userlist");

            let cursor: Mongo.Cursor = meinedatenbank.find();
            let alleuser: User[] = await cursor.toArray();

            let ueberpruefen: string = await UeberpruefenUserDatenbank(alleuser, _user);
            
            if (ueberpruefen == "User wurde gefunden") {
                return ueberpruefen;
            } else if ("User wurde nicht gefunden.") {
                return ueberpruefen;
            }
        }
        let antwort: string = "Füllen Sie bitte alle Felder aus!";
        return antwort;

    }

    async function UeberpruefenUserDatenbank(_userarray: User[], _user: User): Promise<string> { // Für Login
        for (let i: number = 0; i < _userarray.length; i++) {
            if (_userarray[i].nutzername == _user.nutzername && _userarray[i].passwort == _user.passwort) {
                let antwort: string = "User wurde gefunden";
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
        let antwort: string = "User wurde nicht gefunden.";
        return antwort;
    }


    interface User {
        nutzername: string;
        passwort: string;
    }

    interface Rezept {
        titel: string;
        arbeitszeit: string;
        zutat: string;
        zubereitungsanweisung: string;
    }
}
