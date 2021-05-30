"use strict";
var P_3_1;
(function (P_3_1) {
    let button = document.getElementById("button");
    button.addEventListener("click", sendData); //Button um Funktion aufzurufen
    async function sendData() {
        let formData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet
        console.log(":" + formData.get("name")); //Eindeutiger und bekannter Name kann ich mit get() auslesen
        for (let entry of formData) {
            console.log("name: " + entry[0]); //mit Entries alle gefundene Schlüssel-Wert-Paare ausgeben
            console.log("value: " + entry[1]);
        }
        let query = new URLSearchParams(formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        let _url = "https://tri1899gissose2021.herokuapp.com/";
        _url = _url + "?" + query.toString(); //Url in String umwandeln
        console.log(_url); //Konsolenausgabe
        let response = await fetch(_url); // auf url warten
        let antwort = await response.text(); //Auf die antwort warten
        console.log(antwort);
        let rueckgabe = document.getElementById("serverausgabe"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
        rueckgabe.innerText = antwort;
    }
})(P_3_1 || (P_3_1 = {}));
//# sourceMappingURL=script.js.map