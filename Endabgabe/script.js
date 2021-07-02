"use strict";
var Endabgabe;
(function (Endabgabe) {
    let buttonspeichern = document.getElementById("buttonabschicken");
    buttonspeichern.addEventListener("click", datenspeichern);
    async function datenspeichern() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tri1899gissose2021.herokuapp.com/datenspeichern";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        console.log(ausgabe);
    }
    let buttonausgeben = document.getElementById("buttonanzeigen");
    buttonausgeben.addEventListener("click", datenAnzeigen);
    let rueckgabe = document.getElementById("serverantwort"); //anheften an die Seite
    async function datenAnzeigen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tri1899gissose2021.herokuapp.com/datenauslesen";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        rueckgabe.innerHTML = ausgabe;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map