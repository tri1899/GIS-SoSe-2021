"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT); //Hafen/Ladeklappe, Güter werden empfangen und gesendet
    if (!port)
        port = 8100;
    let server = Http.createServer(); //erschaffen eine HTTP Server
    server.addListener("request", handleRequest); //Anfragen
    server.addListener("listening", handleListen); // zuhören
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Wer alles die antwort bekommen darf
        _response.write(_request.url); //URL von Anfrage
        _response.end(); //Antwort geschrieben & schick es weg!
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=test.js.map