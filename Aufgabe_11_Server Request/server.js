"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2 = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2;
(function (P_3_2) {
    console.log("Starting server"); //Konsolenausgabe
    let port = Number(process.env.PORT); //Port Variable wird angelegt, Port = Hafen/Ladeklappe, Güter werden empfangen und gesendet
    if (!port) //Wenn Port noch keinen Wert hat
        port = 8100; //Wert 8100
    let server = Http.createServer(); //ein HTTP Server wird erschaffen und in eine Variable abgespeichert
    server.addListener("request", handleRequest); //Event wird angelegt Bei einer Anfrgae wird Funktion handleRequest() aufgerufen
    server.addListener("listening", handleListen); //Event wird angelegt: Warten auf ein Evemt --> Funktion handle listen() aufgerufen
    server.listen(port); //Server regiert und hört auf Port (er wird gestartet)
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Enthält HTML Elemente
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis
        _response.write(_request.url); //URl von der Anfrage, wird auf der Seite angezeigt
        if (_request.url) {
            let url = Url.parse(_request.url, true); //Die in der Request erhaltenen URL wird in einassoziatives Array geparsed/umformartiert.
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
            else if (url.pathname == "/json") {
                let jsonobjekt = JSON.stringify(url.query);
                console.log(jsonobjekt);
                _response.write(jsonobjekt);
            }
        }
        _response.end(); //Antwort geschrieben & schick es weg!
        console.log(_request.url); //Konsolenausgabe
    }
})(P_3_2 = exports.P_3_2 || (exports.P_3_2 = {}));
//# sourceMappingURL=server.js.map