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
            else if (url.pathname == "/datenauslesen") {
                let userliste = await Rezepteauslesen(mongoUrl);
                _response.write(JSON.stringify(userliste));
            }
            else if (url.pathname == "/rezepterstellen") {
                let rezept = JSON.parse(jsonstring);
                let antwortdatenbank = await Rezepterstellen(mongoUrl, rezept);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/favorisieren") {
                let rezeptfav = JSON.parse(jsonstring);
                let antwortdatenbank = await Favorisieren(mongoUrl, rezeptfav);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/favsauslesen") {
                let favsauslesen = JSON.parse(jsonstring);
                let favsliste = await Favsauslesen(mongoUrl, favsauslesen);
                _response.write(JSON.stringify(favsliste));
            }
        }
        _response.end();
    }
    async function Favsauslesen(_url, _aktiveruser) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("User").collection("Favoritenliste");
        console.log(_aktiveruser.aktiveruser);
        let cursor = meinedatenbank.find({ aktiveruser: "wertzu" });
        let antwort = await cursor.toArray();
        return antwort;
    }
    async function Favorisieren(_url, _rezeptfav) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("User").collection("Favoritenliste");
        meinedatenbank.insertOne(_rezeptfav);
        let antwort = "hinzugefügt!";
        return antwort;
    }
    // Rezept erstellen
    async function Rezepterstellen(_url, _rezept) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        if (_rezept.titel && _rezept.arbeitszeit && _rezept.zutat && _rezept.zubereitungsanweisung != "") {
            let meinedatenbank = mongoClient.db("Rezeptenliste").collection("Rezepte");
            meinedatenbank.insertOne(_rezept);
            let antwort = "Rezept wurde angelegt";
            return antwort;
        }
        let antwort = "Füllen Sie bitte alle Felder aus!";
        return antwort;
    }
    // Rezepteauslesen
    async function Rezepteauslesen(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("Rezeptenliste").collection("Rezepte");
        let cursor = meinedatenbank.find();
        let antwort = await cursor.toArray();
        return antwort;
    }
    // Daten in die Datenbank schreiben
    async function Registrierung(_url, _user) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        if (_user.nutzername && _user.passwort != "") {
            let meinedatenbank = mongoClient.db("User").collection("Userlist");
            let cursor = meinedatenbank.find();
            let alleuser = await cursor.toArray();
            let ueberpruefen = await UeberpruefenUserDatenbanknurName(alleuser, _user);
            if (ueberpruefen == "User wurde gefunden") {
                let antwort = "Der Name existiert schon!";
                return antwort;
            }
            meinedatenbank.insertOne(_user);
            return ueberpruefen;
        }
        let antwort = "Füllen Sie bitte alle Felder aus!";
        return antwort;
    }
    async function Login(_url, _user) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        if (_user.nutzername && _user.passwort != "") {
            let meinedatenbank = mongoClient.db("User").collection("Userlist");
            let cursor = meinedatenbank.find();
            let alleuser = await cursor.toArray();
            let ueberpruefen = await UeberpruefenUserDatenbank(alleuser, _user);
            if (ueberpruefen == "User wurde nicht gefunden.") {
                return ueberpruefen;
            }
            else {
                return ueberpruefen;
            }
        }
        let antwort = "Füllen Sie bitte alle Felder aus!";
        return antwort;
    }
    async function UeberpruefenUserDatenbank(_userarray, _user) {
        for (let i = 0; i < _userarray.length; i++) {
            if (_userarray[i].nutzername == _user.nutzername && _userarray[i].passwort == _user.passwort) {
                let antwort = _user.nutzername;
                return antwort;
            }
        }
        let antwort = "User wurde nicht gefunden.";
        return antwort;
    }
    async function UeberpruefenUserDatenbanknurName(_userarray, _user) {
        for (let i = 0; i < _userarray.length; i++) {
            if (_userarray[i].nutzername == _user.nutzername) {
                let antwort = "User wurde gefunden";
                return antwort;
            }
        }
        let antwort = _user.nutzername;
        return antwort;
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map