import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT); //Hafen/Ladeklappe, Güter werden empfangen und gesendet
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer(); //erschaffen eine HTTP Server
    server.addListener("request", handleRequest); //Anfragen
    server.addListener("listening", handleListen); // zuhören
    server.listen(port);

    function handleListen(): void { //Listening
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Um Anfragen kümmern
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Wer alles die antwort bekommen darf
        _response.write(_request.url); //URL von Anfrage
        _response.end(); //Antwort geschrieben & schick es weg!
    }
}
