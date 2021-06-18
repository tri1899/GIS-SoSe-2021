"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let mongoUrl = "mongodb+srv://Testuser:passwort@clustertristan.gdas8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    //1. Server starten
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    Serverstarten(port);
    function Serverstarten(_port) {
        let server = Http.createServer();
        console.log("Starting Server!");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    //2. handle Request
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true); //Die in der Request enthaltene URL wird in ein assoziatives Array geparsed/umformatiert
            let jsonstring = JSON.stringify(url.query);
            console.log(jsonstring);
            if (url.pathname == "/datenspeichern") {
                let student = JSON.parse(jsonstring);
                let antwortdatenbank = await abspeichern(mongoUrl, student);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/datenAusgabe") {
                let antwort = await dbAuslesen(mongoUrl);
                _response.write(JSON.stringify(antwort));
            }
        }
        _response.end();
    }
    async function abspeichern(_url, _student) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("Database").collection("Studentslist");
        meinedatenbank.insertOne(_student);
        let antwort = "Student wurde gespeichert!";
        return antwort;
    }
    async function dbAuslesen(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Database").collection("Studentslist");
        let cursor = infos.find();
        let result = await cursor.toArray();
        return result;
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {})); //Ende namespace
//# sourceMappingURL=server.js.map