import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    connectTODB("mongodb+srv://Testuser:passwort@clustertristan.gdas8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

    async function connectTODB(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);

        await mongoClient.connect();

        let students: Mongo.Collection = mongoClient.db("Database").collection("Studentslist");
        let s: Student = { name: "Benz", alter: 73, Schule: "HH" };
        students.insertOne(s);
        let cursor: Mongo.Cursor = students.find();

        let result: Student[] = await cursor.toArray();
        console.log(result);
        
    }

    interface Student {
        name: string;
        alter: number;
        Schule: string;
    }



    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        /*if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);     //Die in der Request enthaltene URL wird in ein assoziatives Array geparsed/umformatiert
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br>");
                }
            }
            else if (url.pathname == "/json") {
                let jsonString: string = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            }
        }*/

        //_response.write(_request.url);
        _response.end();
    }

}