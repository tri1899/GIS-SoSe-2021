"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let mongoUrl = "mongodb+srv://Testuser:passwort@clustertristan.gdas8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // zum verbinden, auf die Datenbank
    //1. Server starten
    let port = Number(process.env.PORT); // Server wird gestartet --> Port angelegt.
    if (!port) // vgl. Code von Praktikumsaufgabe P 3.1
        port = 8100;
    Serverstarten(port);
    function Serverstarten(_port) {
        let server = Http.createServer();
        console.log("Starting Server.");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    let options = { useNewUrlParser: true, useUnifiedTopology: true }; // mit der Datenbank connected.
    let mongoClient = new Mongo.MongoClient(mongoUrl, options); // Code vgl. Praktikum, Grundlagen DB und Datenbank und Server
    //2. handle Request
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true); //Die in der Request enthaltene URL wird in ein assoziatives Array geparsed/umformatiert
            let jsonstring = JSON.stringify(url.query); //Zum Feedback geben
            console.log(jsonstring);
            if (url.pathname == "/regestrieren") { // auswertung
                let user = JSON.parse(jsonstring); //Wieder in ein JSON Objekt umwandeln --> damit ich weiter arbeiten kann
                let antwortdatenbank = await Registrierung(user);
                _response.write(antwortdatenbank); //an Client schicken
            }
            else if (url.pathname == "/login") {
                let user = JSON.parse(jsonstring);
                let antwortdatenbank = await Login(user);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/datenauslesen") {
                let userliste = await Rezepteauslesen(); //Der await Operator wird genutzt, um auf einen Promise zu warten.
                _response.write(JSON.stringify(userliste)); // Array wird in ein JSON- String konvertiert
            }
            else if (url.pathname == "/rezepterstellen") {
                let rezept = JSON.parse(jsonstring);
                let antwortdatenbank = await Rezepterstellen(rezept);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/favorisieren") {
                let rezeptfav = JSON.parse(jsonstring);
                let antwortdatenbank = await Favorisieren(rezeptfav);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/favsauslesen") {
                let favsauslesen = JSON.parse(jsonstring);
                let favsliste = await Favsauslesen(favsauslesen);
                _response.write(JSON.stringify(favsliste));
            }
            else if (url.pathname == "/loeschen") {
                let loeschenausfav = JSON.parse(jsonstring);
                let antwortdatenbank = await FavsLoeschen(loeschenausfav);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/anzeigenmeineRezepte") {
                let meinerezepte = JSON.parse(jsonstring);
                let meinerezpteliste = await Meinerezepteauslesen(meinerezepte);
                _response.write(JSON.stringify(meinerezpteliste));
            }
            else if (url.pathname == "/loeschenausdatenbank") {
                let loeschenausfav = JSON.parse(jsonstring);
                let antwortdatenbank = await Datenbankloeschen(loeschenausfav);
                _response.write(antwortdatenbank);
            }
        }
        _response.end(); // Antowrt ist fertig und wird losgeschickt
    }
    async function Datenbankloeschen(_loeschenausfav) {
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("Rezeptenliste").collection("Rezepte"); // auf meine Database und Collection zugreifen.
        meinedatenbank.deleteOne(_loeschenausfav);
        let antwort = "gelöscht!";
        return antwort; //Antowrt geben
    }
    async function Meinerezepteauslesen(_aktiveruser) {
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("Rezeptenliste").collection("Rezepte");
        let aktivernutzer = _aktiveruser.aktiveruser;
        let cursor = meinedatenbank.find({ aktiveruser: aktivernutzer });
        let antwort = await cursor.toArray();
        return antwort;
    }
    //Favoriten löschen
    async function FavsLoeschen(_loeschenausfav) {
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("User").collection("Favoritenliste");
        meinedatenbank.deleteOne(_loeschenausfav);
        let antwort = "gelöscht!";
        return antwort;
    }
    // Favoriten auslesen
    async function Favsauslesen(_aktiveruser) {
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("User").collection("Favoritenliste");
        let aktivernutzer = _aktiveruser.aktiveruser;
        let cursor = meinedatenbank.find({ aktiveruser: aktivernutzer });
        let antwort = await cursor.toArray();
        return antwort;
    }
    // Favorisieren
    async function Favorisieren(_rezeptfav) {
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("User").collection("Favoritenliste");
        meinedatenbank.insertOne(_rezeptfav);
        let antwort = "hinzugefügt!";
        return antwort;
    }
    // Rezept erstellen
    async function Rezepterstellen(_rezept) {
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("Rezeptenliste").collection("Rezepte");
        meinedatenbank.insertOne(_rezept);
        let antwort = "Rezept wurde angelegt";
        return antwort;
    }
    // Rezepteauslesen
    async function Rezepteauslesen() {
        await mongoClient.connect();
        let meinedatenbank = mongoClient.db("Rezeptenliste").collection("Rezepte");
        let cursor = meinedatenbank.find();
        let antwort = await cursor.toArray();
        return antwort;
    }
    // Daten in die Datenbank schreiben
    async function Registrierung(_user) {
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
    async function Login(_user) {
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