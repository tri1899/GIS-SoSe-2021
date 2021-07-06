import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";



export namespace Endabgabev2 {

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

            /*if (url.pathname == "/regestrieren") {
                let user: User = JSON.parse(jsonstring); //Wieder in ein JSON Objekt umwandeln
                let antwortdatenbank: string = await Registrierung(mongoUrl, user);
                _response.write(antwortdatenbank); //an Client schicken
            }*/

            if (url.pathname == "/login") {
                let user: User = JSON.parse(jsonstring);
                let useraktiv: string = await Login(mongoUrl, user);
                _response.write(useraktiv);

            }

            else if (url.pathname == "/favs") {
                let favsname: Aktiveruser = JSON.parse(jsonstring);
                let userfavs: string = await Anlegen(mongoUrl, favsname);
                _response.write(userfavs);
            }
        }
        _response.end();
    }

    async function Anlegen (_url: string, _favsname: Aktiveruser): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection(_favsname.nutzername);

        meinedatenbank.insertOne(_favsname.nutzername);
        let antwort: string = "User wurde gespeichert";
        return antwort;  
    }

    async function Login(_url: string, _user: User): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Userlist");

        let cursor: Mongo.Cursor = meinedatenbank.find();
        let alleuser: User[] = await cursor.toArray();

        let ueberpruefen: string = await UeberpruefenUserDatenbank(alleuser, _user);

        return ueberpruefen;
    }

    async function UeberpruefenUserDatenbank(_userarray: User[], _user: User): Promise<string> { // Für Login
        for (let i: number = 0; i < _userarray.length; i++) {
            if (_userarray[i].nutzername == _user.nutzername && _userarray[i].passwort == _user.passwort) {
                let aktiveruser: string = _user.nutzername;
                return aktiveruser;
            }
        }
        let antwort: string = "User wurde nicht gefunden.";
        return antwort;
    }










    // User in Datenbank schreiben
    /*async function Registrierung(_url: string, _user: User): Promise<string> {
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

    async function UeberpruefenUserDatenbanknurName(_userarray: User[], _user: User): Promise<string> { // Für Registrierung
        for (let i: number = 0; i < _userarray.length; i++) {
            if (_userarray[i].nutzername == _user.nutzername) {
                let antwort: string = "User wurde gefunden";
                return antwort;
            }
        }
        let antwort: string = "User wurde nicht gefunden.";
        return antwort;
    }*/


    interface User {
        nutzername: string;
        passwort: string;
    }

    interface Aktiveruser {
        nutzername: string;
    }
}
