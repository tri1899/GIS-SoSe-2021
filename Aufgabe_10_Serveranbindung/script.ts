namespace P_3_1 {
    let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button"); 
    button.addEventListener("click", Datensenden); //Button um Funktion aufzurufen

    async function Datensenden(): Promise<void> { 
        let formData: FormData = new FormData (document.forms[0]); //das erste Formular des Dokuments wird ausgewertet

        console.log(":" + formData.get ("name")); //Eindeutiger und bekannter Name kann ich mit get() auslesen
        for (let entry of formData) {
            console.log("name: " + entry[0]); //mit Entries alle gefundene Schlüssel-Wert-Paare ausgeben
            console.log("value: " + entry[1]); 
        }
        let  query: URLSearchParams = new URLSearchParams(<any> formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        let _url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/"; 
        _url = _url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL
        console.log(_url); 
        let response: Response = await fetch (_url); // URL warten und abschicken
        let antwort: string = await response.text(); //auf die Antwort warten
        console.log (antwort); 
        let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe"); //Auf meiner HTML Seite anzeigen lassen
        rueckgabe.innerText = antwort; 
    }

}