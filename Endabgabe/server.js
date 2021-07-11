"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    let user;
    let fav;
    let rezepte;
    let mongoUrl = "mongodb+srv://Testuser:passwort@clustertristan.gdas8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // zum verbinden, auf die Datenbank
    //1. Server starten
    let port = Number(process.env.PORT); // Server wird gestartet --> Port angelegt.
    if (!port) // vgl. Code von Praktikumsaufgabe P 3.1
        port = 8100;
    serverstarten(port);
    datenbankverbinden(mongoUrl);
    function serverstarten(_port) {
        let server = Http.createServer();
        console.log("Starting Server.Yes!");
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function datenbankverbinden(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true }; // mit der Datenbank connected.
        let mongoClient = new Mongo.MongoClient(_url, options); // Code vgl. Praktikum, Grundlagen DB und Datenbank und Server
        await mongoClient.connect();
        user = mongoClient.db("User").collection("Userlist");
        fav = mongoClient.db("User").collection("Favoritenliste");
        rezepte = mongoClient.db("Rezeptenliste").collection("Rezepte");
    }
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
                let antwortdatenbank = await registrierung(user);
                _response.write(antwortdatenbank); //an Client schicken
            }
            else if (url.pathname == "/login") {
                let user = JSON.parse(jsonstring);
                let antwortdatenbank = await login(user);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/datenauslesen") {
                let userliste = await rezepteauslesen(); //Der await Operator wird genutzt, um auf einen Promise zu warten.
                _response.write(JSON.stringify(userliste)); // Array wird in ein JSON- String konvertiert
            }
            else if (url.pathname == "/rezepterstellen") {
                let rezept = JSON.parse(jsonstring);
                let antwortdatenbank = await rezepterstellen(rezept);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/favorisieren") {
                let rezeptfav = JSON.parse(jsonstring);
                let antwortdatenbank = await favorisieren(rezeptfav);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/favsauslesen") {
                let favsauslesenlassen = JSON.parse(jsonstring);
                let favsliste = await favsauslesen(favsauslesenlassen);
                _response.write(JSON.stringify(favsliste));
            }
            else if (url.pathname == "/loeschen") {
                let loeschenausfav = JSON.parse(jsonstring);
                let antwortdatenbank = await favsLoeschen(loeschenausfav);
                _response.write(antwortdatenbank);
            }
            else if (url.pathname == "/anzeigenmeineRezepte") {
                let meinerezepte = JSON.parse(jsonstring);
                let meinerezpteliste = await meinerezepteauslesen(meinerezepte);
                _response.write(JSON.stringify(meinerezpteliste));
            }
            else if (url.pathname == "/loeschenausdatenbank") {
                let loeschenausfav = JSON.parse(jsonstring);
                let antwortdatenbank = await datenbankloeschen(loeschenausfav);
                _response.write(antwortdatenbank);
            }
        }
        _response.end(); // Antowrt ist fertig und wird losgeschickt
    }
    async function datenbankloeschen(_loeschenausfav) {
        rezepte.deleteOne(_loeschenausfav);
        let antwort = "gelöscht!";
        return antwort; //Antowrt geben
    }
    async function meinerezepteauslesen(_aktiveruser) {
        let aktivernutzer = _aktiveruser.aktiveruser;
        let cursor = rezepte.find({ aktiveruser: aktivernutzer });
        let antwort = await cursor.toArray();
        return antwort;
    }
    //Favoriten löschen
    async function favsLoeschen(_loeschenausfav) {
        fav.deleteOne(_loeschenausfav);
        let antwort = "gelöscht!";
        return antwort;
    }
    // Favoriten auslesen
    async function favsauslesen(_aktiveruser) {
        let aktivernutzer = _aktiveruser.aktiveruser;
        let cursor = fav.find({ aktiveruser: aktivernutzer });
        let antwort = await cursor.toArray();
        return antwort;
    }
    // Favorisieren
    async function favorisieren(_rezeptfav) {
        fav.insertOne(_rezeptfav);
        let antwort = "hinzugefügt!";
        return antwort;
    }
    // Rezept erstellen
    async function rezepterstellen(_rezept) {
        rezepte.insertOne(_rezept);
        let antwort = "Rezept wurde angelegt";
        return antwort;
    }
    // Rezepteauslesen
    async function rezepteauslesen() {
        let cursor = rezepte.find();
        let antwort = await cursor.toArray();
        return antwort;
    }
    // Daten in die Datenbank schreiben
    async function registrierung(_user) {
        if (_user.nutzername && _user.passwort != "") {
            let cursor = user.find();
            let alleuser = await cursor.toArray();
            let ueberpruefen = await ueberpruefenUserDatenbanknurName(alleuser, _user);
            if (ueberpruefen == "User wurde gefunden") {
                let antwort = "Der Name existiert schon!";
                return antwort;
            }
            user.insertOne(_user);
            return ueberpruefen;
        }
        let antwort = "Füllen Sie bitte alle Felder aus!";
        return antwort;
    }
    async function login(_user) {
        if (_user.nutzername && _user.passwort != "") {
            let cursor = user.find();
            let alleuser = await cursor.toArray();
            let ueberpruefen = await ueberpruefenUserDatenbank(alleuser, _user);
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
    async function ueberpruefenUserDatenbank(_userarray, _user) {
        for (let i = 0; i < _userarray.length; i++) {
            if (_userarray[i].nutzername == _user.nutzername && _userarray[i].passwort == _user.passwort) {
                let antwort = _user.nutzername;
                return antwort;
            }
        }
        let antwort = "User wurde nicht gefunden.";
        return antwort;
    }
    async function ueberpruefenUserDatenbanknurName(_userarray, _user) {
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