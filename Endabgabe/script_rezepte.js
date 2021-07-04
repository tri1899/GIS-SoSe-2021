"use strict";
var Endabgabe;
(function (Endabgabe) {
    let allerezepte = document.getElementById("behaelter");
    window.onload = async function datenAnzeigen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tri1899gissose2021.herokuapp.com/datenauslesen";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        let rezeptenliste = JSON.parse(ausgabe);
        for (let i = 0; i < rezeptenliste.length; i++) {
            let ptitel = document.createElement("p");
            let parbeitszeit = document.createElement("p");
            let pzutatnr1 = document.createElement("p");
            let pzutatnr2 = document.createElement("p");
            let pzutatnr3 = document.createElement("p");
            let pzutatnr4 = document.createElement("p");
            let pzutatnr5 = document.createElement("p");
            ptitel.innerHTML = rezeptenliste[i].titel;
            parbeitszeit.innerHTML = rezeptenliste[i].arbeitszeit;
            pzutatnr1.innerHTML = rezeptenliste[i].zutatnr1;
            pzutatnr2.innerHTML = rezeptenliste[i].zutatnr2;
            pzutatnr3.innerHTML = rezeptenliste[i].zuztatnr3;
            pzutatnr4.innerHTML = rezeptenliste[i].zutatnr4;
            pzutatnr5.innerHTML = rezeptenliste[i].zutatnr5;
            allerezepte.appendChild(ptitel);
            allerezepte.appendChild(parbeitszeit);
            allerezepte.appendChild(pzutatnr1);
            allerezepte.appendChild(pzutatnr2);
            allerezepte.appendChild(pzutatnr3);
            allerezepte.appendChild(pzutatnr4);
            allerezepte.appendChild(pzutatnr5);
        }
    };
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_rezepte.js.map