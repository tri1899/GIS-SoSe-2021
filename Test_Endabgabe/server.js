"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabev2 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabev2;
(function (Endabgabev2) {
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
            /*if (url.pathname == "/regestrieren") {
                let user: User = JSON.parse(jsonstring); //Wieder in ein JSON Objekt umwandeln
                let antwortdatenbank: string = await Registrierung(mongoUrl, user);
                _response.write(antwortdatenbank); //an Client schicken
            }*/
            if (url.pathname == "/login") {
                let user = JSON.parse(jsonstring);
                let useraktiv = await Login(mongoUrl, user);
                _response.write(useraktiv);
            }
        }
        _response.end();
    }
    async function Login(_url, _user) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("User").collection("Userlist");
        let cursor = meinedatenbank.find();
        let alleuser = await cursor.toArray();
        let ueberpruefen = await UeberpruefenUserDatenbank(alleuser, _user);
        return ueberpruefen;
    }
    async function UeberpruefenUserDatenbank(_userarray, _user) {
        for (let i = 0; i < _userarray.length; i++) {
            if (_userarray[i].nutzername == _user.nutzername && _userarray[i].passwort == _user.passwort) {
                let aktiveruser = _user.nutzername;
                return aktiveruser;
            }
        }
        let antwort = "User wurde nicht gefunden.";
        return antwort;
    }
})(Endabgabev2 = exports.Endabgabev2 || (exports.Endabgabev2 = {}));
//# sourceMappingURL=server.js.map