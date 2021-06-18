"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let buttonabschicken = document.getElementById("buttonabschicken");
    buttonabschicken.addEventListener("click", Datenabschicken); //Button um Funktion aufzurufen
    let buttonanzeigen = document.getElementById("buttonanzeigen");
    buttonanzeigen.addEventListener("click", Studentenanzeigen); //Button um Funktion aufzurufen
    let serverausgabe = document.getElementById("serverantwort");
    async function Studentenanzeigen() {
        let formData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet
        let url = "https://tri1899gissose2021.herokuapp.com";
        let query = new URLSearchParams(formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        url = url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL
        await fetch(url);
    }
    async function Datenabschicken() {
        let formData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet
        let url = "https://tri1899gissose2021.herokuapp.com";
        let query = new URLSearchParams(formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        url = url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL
        let response = await fetch(url); // URL warten und abschicken
        let antwort = await response.json(); //auf die Antwort warten
        serverausgabe.innerHTML = JSON.stringify(antwort);
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map