import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {


    let urlDB: string = "mongodb+srv://Testuser:passwort@clustertristan.gdas8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    startServer(port);


    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer(); //erstellt Server
        console.log("Server gestartet");
        server.listen(_port);
        server.addListener("request", handleRequest);

    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Daten angekommen"); //Überprüfung ob Daten angekommen sind
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften von HTML
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis: * alle dürfen darauf zugreifen

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //umwandlung query in assoziatives Array
            let pathname: string = <string>url.pathname; //pathname in string speichern
            let eingabe: Eingabe = { vorname: url.query.vorname + "", nachname: url.query.nachname + "", adresse: url.query.feedback + "" };

            if (pathname == "/datenVerschicken") { //wenn ein man Daten verschicken möchte
                let daten: string = await abspeichern(urlDB, eingabe); //Funktion abspeichern aufrufen
                _response.write(daten); //Antwort zurückgeben
            }

            else if (pathname == "/datenAusgabe") {
                let antwort: Eingabe[] = await dbAuslesen(urlDB);
                _response.write(JSON.stringify(antwort)); //wenn Daten abgeschickt sind und in DB speichern
            }
        }
        _response.end(); //Antwort fertig und zurückgeschickt -->beendet
    } //Ende Funktion handleRequest

    async function abspeichern(_url: string, _eingabe: Eingabe): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let infos: Mongo.Collection = mongoClient.db("Database").collection("Studentslist"); //eigene neue Collection aufrufen
        infos.insertOne(_eingabe); //eingegebene Daten in DB spreichern
        let antwort: string = "Eingespreichert";
        return antwort;
    }

    async function dbAuslesen(_url: string): Promise<Eingabe[]> { //bekommt Interface Array zurück
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let infos: Mongo.Collection = mongoClient.db("Database").collection("Studentslist"); //eigene neue Collection aufrufen
        let cursor: Mongo.Cursor = infos.find(); //Suche der gesamten DB aber spezielle ist auch möglich mit .find({name: "..."})
        let result: Eingabe[] = await cursor.toArray(); //auslesen der kompletten DB
        return result;

    }
    interface Eingabe {
        vorname: string;
        nachname: string;
        adresse: string;

    }
} //Ende namespace






