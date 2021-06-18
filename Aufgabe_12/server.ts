import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Aufgabe3_4 {

    interface Student {
        [type: string]: string | string[];
    }

    let students: Mongo.Collection;
    let mongoURL: string = "mongodb+srv://Testuser:passwort@clustertristan.gdas8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    startServer(port);
    connectToDB(mongoURL);

    function startServer(_port: number): void {
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }


    async function connectToDB(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Database").collection("Studentslist");
        console.log("Database connected", students != undefined);
        

        
        /* retrieveStudents();
        async function retrieveStudents(): Promise<void> {
            let students: Mongo.Collection = mongoClient.db("Test").collection("Students");
            let cursor: Mongo.Cursor = students.find();
            let result: Student[] = await cursor.toArray();
            console.log(result);
        } */


    }

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);     //Die in der Request enthaltene URL wird in ein assoziatives Array geparsed/umformatiert
            let jsonString: string = JSON.stringify(url.query);
            console.log(jsonString);
            _response.write(url.query);
            saveInDB(url.query);
        }
        
        _response.end();
    }

    function saveInDB(_student: Student): void {
        students.insert(_student);
    }

}

