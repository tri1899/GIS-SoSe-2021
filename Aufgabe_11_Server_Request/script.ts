namespace P_3_2 {
    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonhtml");
    button.addEventListener("click", HTMLdatensenden); //Button um Funktion aufzurufen
    let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverausgabe"); //Auf meiner HTML Seite anzeigen lassen

    async function HTMLdatensenden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet

        let _url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/html";

        let query: URLSearchParams = new URLSearchParams(<any>formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        _url = _url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL

        let response: Response = await fetch(_url); // URL warten und abschicken
        let antwort: string = await response.text(); //auf die Antwort warten

        
        rueckgabe.innerText = antwort;
    }

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonjson");
    buttonJSON.addEventListener("click", JSONdatensenden); //Button um Funktion aufzurufen

    interface FormularDaten {
        vorname: string;
        nachname: string;
        adresse: string;
        nachricht: string;
    }

    async function JSONdatensenden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet

        let _url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/json";


        let query: URLSearchParams = new URLSearchParams(<any>formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        _url = _url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL

        let response: Response = await fetch(_url); // URL warten und abschicken
        let antwort: FormularDaten = await response.json(); //auf die Antwort warten
        console.log(antwort);
        
    }   

}