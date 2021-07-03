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
                let antwortdatenbank: string = await  Login (mongoUrl, user);
                _response.write(antwortdatenbank);
                
            }
        }
        _response.end();
    }

    // Daten in die Datenbank schreiben
    async function Registrierung(_url: string, _student: User): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        if (_student.nutzername && _student.passwort != "") {
            let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Userlist");
            meinedatenbank.insertOne(_student);
            let antwort: string = "User wurde gespeichert";
            return antwort;
        } else {
            let antwort: string = "Füllen Sie die Felder bitte aus";
            return antwort;
        }
    }

    async function Login(_url: string, _student: User): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("User").collection("Userlist");

        if (meinedatenbank.find({nutzername: _student.nutzername}) && meinedatenbank.find({passwort: _student.passwort})) {
            let antwort: string = "User wurde gefunden";
            return antwort;
        } else {
            let antwort: string = "User wurde nicht gefunden";
            return antwort;
        }   
    }

    interface User {
        nutzername: string;
        passwort: string;
    }
}