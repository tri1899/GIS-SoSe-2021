"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let buttonVerschicken = document.getElementById("buttonabschicken");
    buttonVerschicken.addEventListener("click", datenspeichern);
    async function datenspeichern() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tri1899gissose2021.herokuapp.com/datenspeichern";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        console.log(ausgabe);
    }
    let buttonAusgabe = document.getElementById("buttonanzeigen");
    buttonAusgabe.addEventListener("click", datenAnzeigen);
    let rueckgabe = document.getElementById("serverantwort"); //anheften an die Seite
    //Funktion um Daten auf der Seite anzuzeigen
    async function datenAnzeigen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tri1899gissose2021.herokuapp.com/datenauslesen";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        rueckgabe.innerHTML = ausgabe; //Ausgabe auf der HTML Seite 
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map