namespace Aufgabe3_2 {

    interface FormularDaten {
        vorname: string;
        nachname: string;
        adresse: string;
        nachricht: string;
    }

    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonhtml");
    button.addEventListener("click", HTMLdatensenden); //Button um Funktion aufzurufen
    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonjson");
    buttonJSON.addEventListener("click", JSONdatensenden); //Button um Funktion aufzurufen
    let serverausgabe: HTMLDivElement = <HTMLDivElement>document.getElementById("serverausgabe");

    async function HTMLdatensenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet

        let url: string = "https://tri1899gissose2021.herokuapp.com/html";

        let query: URLSearchParams = new URLSearchParams(<any>formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        url = url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL

        let response: Response = await fetch(url); // URL warten und abschicken
        let antwort: string = await response.text(); //auf die Antwort warten

        
        serverausgabe.innerHTML = antwort;
    }

    async function JSONdatensenden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet

        let url: string = "https://tri1899gissose2021.herokuapp.com/json";


        let query: URLSearchParams = new URLSearchParams(<any>formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        url = url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL

        let response: Response = await fetch(url); // URL warten und abschicken
        let antwort: FormularDaten = await response.json(); //auf die Antwort warten
        console.log(antwort);
        
    }   

}