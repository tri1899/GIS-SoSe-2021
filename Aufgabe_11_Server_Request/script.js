"use strict";
var P_3_2;
(function (P_3_2) {
    let button = document.getElementById("buttonhtml");
    button.addEventListener("click", HTMLdatensenden); //Button um Funktion aufzurufen
    let rueckgabe = document.getElementById("serverausgabe"); //Auf meiner HTML Seite anzeigen lassen
    async function HTMLdatensenden() {
        let formData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet
        let _url = "https://tri1899gissose2021.herokuapp.com/html";
        let query = new URLSearchParams(formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        _url = _url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL
        let response = await fetch(_url); // URL warten und abschicken
        let antwort = await response.text(); //auf die Antwort warten
        rueckgabe.innerText = antwort;
    }
    let buttonJSON = document.getElementById("buttonjson");
    buttonJSON.addEventListener("click", JSONdatensenden); //Button um Funktion aufzurufen
    async function JSONdatensenden() {
        let formData = new FormData(document.forms[0]); //das erste Formular des Dokuments wird ausgewertet
        let _url = "https://tri1899gissose2021.herokuapp.com/json";
        let query = new URLSearchParams(formData); //Daten liegen vor (von dem Formular) ich kann den String nun aus einem Form Data Objekt generieren
        _url = _url + "?" + query.toString(); //ich wandele meine formDaten in ein String und hänge diese an die URL
        let response = await fetch(_url); // URL warten und abschicken
        let antwort = await response.json(); //auf die Antwort warten
        console.log(antwort);
    }
})(P_3_2 || (P_3_2 = {}));
//# sourceMappingURL=script.js.map