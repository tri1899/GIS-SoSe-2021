import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {

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
            let jsonstring: string = JSON.stringify(url.query);
            console.log(jsonstring);
            
            if (url.pathname == "/datenspeichern") { 
                let student: Student = JSON.parse(jsonstring);
                let antwortdatenbank: string = await abspeichern(mongoUrl, student); 
                _response.write(antwortdatenbank);
            }

            else if (url.pathname == "/datenauslesen") {
                let antwort: Student[] = await dbAuslesen(mongoUrl);
                _response.write(JSON.stringify(antwort)); 
            }
        }
        _response.end(); 
    }

    async function abspeichern(_url: string, _student: Student): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let meinedatenbank: Mongo.Collection = mongoClient.db("Database").collection("Studentslist");
        meinedatenbank.insertOne(_student);
        let antwort: string = "Student wurde gespeichert!";
        return antwort;
    }


    async function dbAuslesen(_url: string): Promise<Student[]> { 
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        let infos: Mongo.Collection = mongoClient.db("Database").collection("Studentslist");
        let cursor: Mongo.Cursor = infos.find();
        let result: Student[] = await cursor.toArray();
        return result;

    }
    interface Student {
        vorname: string;
        nachname: string;
        adresse: string;

    }
} //Ende namespace






