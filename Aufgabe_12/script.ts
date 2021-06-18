namespace Aufgabe3_4 {

    let buttonabschicken: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonabschicken");
    buttonabschicken.addEventListener("click", Datenabschicken); //Button um Funktion aufzurufen

    let buttonanzeigen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonanzeigen");
    buttonanzeigen.addEventListener("click", Studentenanzeigen); //Button um Funktion aufzurufen

    let serverausgabe: HTMLDivElement = <HTMLDivElement>document.getElementById("serverantwort");
    
    interface Studenten {
        vorname: string;
        nachname: string;
        adresse: string;
        matrikelnummer: number;
    }

    async function Studentenanzeigen (): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet
        let url: string = "https://tri1899gissose2021.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        url = url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL
        await fetch(url);
        
    }


    async function Datenabschicken(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet

        let url: string = "https://tri1899gissose2021.herokuapp.com";

        let query: URLSearchParams = new URLSearchParams(<any>formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        url = url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL

        let response: Response = await fetch(url); // URL warten und abschicken
        let antwort: Studenten = await response.json(); //auf die Antwort warten
        serverausgabe.innerHTML = JSON.stringify(antwort);

    }
}