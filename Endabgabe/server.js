"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
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
            let jsonstring = JSON.stringify(url.query); //Zum Feedback geben
            console.log(jsonstring);
            if (url.pathname == "/regestrieren") {
                let user = JSON.parse(jsonstring); //Wieder in ein JSON Objekt umwandeln
                let antwortdatenbank = await Registrierung(mongoUrl, user);
                _response.write(antwortdatenbank); //an Client schicken
            }
            else if (url.pathname == "/login") {
                let user = JSON.parse(jsonstring);
                let antwortdatenbank = await Login(mongoUrl, user);
                _response.write(antwortdatenbank);
            }
        }
        _response.end();
    }
    // Daten in die Datenbank schreiben
    async function Registrierung(_url, _user) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        if (_user.nutzername && _user.passwort != "") {
            let meinedatenbank = mongoClient.db("User").collection("Userlist");
            meinedatenbank.insertOne(_user);
            let antwort = "User wurde gespeichert";
            return antwort;
        }
        else {
            let antwort = "Füllen Sie die Felder bitte aus";
            return antwort;
        }
    }
    async function Login(_url, _user) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("User").collection("Userlist");
        let cursor = meinedatenbank.find();
        let alleuser = await cursor.toArray();
        for (let i = 0; i < alleuser.length; i++) {
            if (alleuser[i] == _user) {
                let antwort = "User wurde gefunden";
                return antwort;
            }
            else {
                let antwort = "User wurde nicht gefunden12345.";
                return antwort;
            }
        }
        let antwort = "User wurde nicht gefunden11";
        return antwort;
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map