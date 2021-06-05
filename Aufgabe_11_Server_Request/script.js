"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let button = document.getElementById("buttonhtml");
    button.addEventListener("click", HTMLdatensenden); //Button um Funktion aufzurufen
    let buttonJSON = document.getElementById("buttonjson");
    buttonJSON.addEventListener("click", JSONdatensenden); //Button um Funktion aufzurufen
    let serverausgabe = document.getElementById("serverausgabe");
    async function HTMLdatensenden() {
        let formData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet
        let url = "https://tri1899gissose2021.herokuapp.com/html";
        let query = new URLSearchParams(formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        url = url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL
        let response = await fetch(url); // URL warten und abschicken
        let antwort = await response.text(); //auf die Antwort warten
        serverausgabe.innerHTML = antwort;
    }
    async function JSONdatensenden() {
        let formData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet
        let url = "https://tri1899gissose2021.herokuapp.com/json";
        let query = new URLSearchParams(formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        url = url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL
        let response = await fetch(url); // URL warten und abschicken
        let antwort = await response.json(); //auf die Antwort warten
        console.log(antwort);
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map