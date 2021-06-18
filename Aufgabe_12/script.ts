namespace Aufgabe3_4 {

    let buttonVerschicken: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonabschicken"); 
    buttonVerschicken.addEventListener("click", datenAbschicken); 

    //Daten abschicken um in MongoDB zu speichern
    async function datenAbschicken(): Promise<void> { //async Funktion um Daten anzuschicken
        let formData: FormData = new FormData (document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com";
        url += "/datenVerschicken"; // Anhängen mit einem / daher oben keiner notwenig

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let antwort: Response = await fetch (url);
        let ausgabe: string = await antwort.text();
        console.log(ausgabe); //string in Konsole ausgeben
          
    }

    let buttonAusgabe: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonanzeigen"); 
    buttonAusgabe.addEventListener("click", datenAnzeigen);

    let rueckgabe: HTMLDivElement = <HTMLDivElement> document.getElementById("serverantwort"); //anheften an die Seite

    //Funktion um Daten auf der Seite anzuzeigen
    async function datenAnzeigen(): Promise <void> { 
        let formData: FormData = new FormData (document.forms[0]);
        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com"; 

        url += "/datenAusgabe"; 

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let antwort: Response = await fetch (url);
        let ausgabe: string = await antwort.text();
        rueckgabe.innerHTML = ausgabe;  //Ausgabe auf der HTML Seite 
    }
}






