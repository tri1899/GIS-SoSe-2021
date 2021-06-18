namespace Aufgabe3_4 {

    let buttonVerschicken: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonabschicken"); 
    buttonVerschicken.addEventListener("click", datenspeichern); 

    
    async function datenspeichern(): Promise<void> { 
        let formData: FormData = new FormData (document.forms[0]);

        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/datenspeichern";

        let  query: URLSearchParams = new URLSearchParams(<any> formData);

        url = url + "?" + query.toString(); 

        let antwort: Response = await fetch (url);

        let ausgabe: string = await antwort.text();

        console.log(ausgabe); 
          
    }

    let buttonAusgabe: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonanzeigen"); 
    buttonAusgabe.addEventListener("click", datenAnzeigen);

    let rueckgabe: HTMLDivElement = <HTMLDivElement> document.getElementById("serverantwort"); //anheften an die Seite

    //Funktion um Daten auf der Seite anzuzeigen
    async function datenAnzeigen(): Promise <void> { 
        let formData: FormData = new FormData (document.forms[0]);
        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/datenAusgabe"; 

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let antwort: Response = await fetch (url);
        let ausgabe: string = await antwort.text();
        rueckgabe.innerHTML = ausgabe;  //Ausgabe auf der HTML Seite 
    }
}






