namespace P_3_1Server {
    //Teilaufgabe 2
    async function sendData(): Promise<void> { //async Funktion
        let formData: FormData = new FormData (document.forms[0]);
        console.log(":" + formData.get ("name")); //Konsolenausgabe
        for (let entry of formData) {
            console.log("name: " + entry[0]); ///Konsolenausgabe Eingang Stelle 0
            console.log("value: " + entry[1]); //Konsolenausgabe
        }
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        let _url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/"; //Verknüpfung mit der herokuapp
        _url = _url + "?" + query.toString(); //Url in String umwandeln
        console.log(_url); //Konsolenausgabe
        let response: Response = await fetch (_url); // auf url warten
        let antwort: string = await response.text(); //Auf die antwort warten
        console.log (antwort); 
        let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
        rueckgabe.innerText = antwort; 
    }
    let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button"); 
    button.addEventListener("click", sendData); //Button um Funktion aufzurufen
  
}//Ende namespace