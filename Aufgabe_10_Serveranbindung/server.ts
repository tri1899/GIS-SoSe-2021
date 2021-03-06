import * as Http from "http";

export namespace P_3_1 {
    console.log("Starting server"); //Konsolenausgabe
    let port: number = Number(process.env.PORT);  //Port Variable wird angelegt, Port = Hafen/Ladeklappe, Güter werden empfangen und gesendet
    if (!port) //Wenn Port noch keinen Wert hat
        port = 8100; //Wert 8100

    let server: Http.Server = Http.createServer(); //ein HTTP Server wird erschaffen und in eine Variable abgespeichert
    server.addListener("request", handleRequest); //Event wird angelegt Bei einer Anfrgae wird Funktion handleRequest() aufgerufen
    server.addListener("listening", handleListen); //Event wird angelegt: Warten auf ein Evemt --> Funktion handle listen() aufgerufen
    server.listen(port); //Server regiert und hört auf Port (er wird gestartet)

    function handleListen(): void { //Funktion Listening + Konsolenausgabe
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Funktion Anfrage mit 2 Parametern 
        console.log("I hear voices!"); //Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Enthält HTML Elemente
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis
        _response.write(_request.url); //URl von der Anfrage, wird auf der Seite angezeigt
        _response.end(); //Antwort geschrieben & schick es weg!

        console.log(_request.url); //Konsolenausgabe
    }
}