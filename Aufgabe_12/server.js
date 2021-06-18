"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let urlDB = "mongodb+srv://Testuser:passwort@clustertristan.gdas8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    function startServer(_port) {
        let server = Http.createServer(); //erstellt Server
        console.log("Server gestartet");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function handleRequest(_request, _response) {
        console.log("Daten angekommen"); //Überprüfung ob Daten angekommen sind
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften von HTML
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis: * alle dürfen darauf zugreifen
        if (_request.url) {
            let url = Url.parse(_request.url, true); //umwandlung query in assoziatives Array
            let pathname = url.pathname; //pathname in string speichern
            let eingabe = { vorname: url.query.vorname + "", nachname: url.query.nachname + "", adresse: url.query.feedback + "" };
            if (pathname == "/datenVerschicken") { //wenn ein man Daten verschicken möchte
                let daten = await abspeichern(urlDB, eingabe); //Funktion abspeichern aufrufen
                _response.write(daten); //Antwort zurückgeben
            }
            else if (pathname == "/datenAusgabe") {
                let antwort = await dbAuslesen(urlDB);
                _response.write(JSON.stringify(antwort)); //wenn Daten abgeschickt sind und in DB speichern
            }
        }
        _response.end(); //Antwort fertig und zurückgeschickt -->beendet
    } //Ende Funktion handleRequest
    async function abspeichern(_url, _eingabe) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Database").collection("Studentslist"); //eigene neue Collection aufrufen
        infos.insertOne(_eingabe); //eingegebene Daten in DB spreichern
        let antwort = "Eingespreichert";
        return antwort;
    }
    async function dbAuslesen(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Database").collection("Studentslist"); //eigene neue Collection aufrufen
        let cursor = infos.find(); //Suche der gesamten DB aber spezielle ist auch möglich mit .find({name: "..."})
        let result = await cursor.toArray(); //auslesen der kompletten DB
        return result;
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {})); //Ende namespace
//# sourceMappingURL=server.js.map