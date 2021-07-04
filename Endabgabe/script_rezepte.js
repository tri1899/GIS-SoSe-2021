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
            let divallerezepte = document.createElement("div");
            let ptitel = document.createElement("p");
            let parbeitszeit = document.createElement("p");
            let pzutatnr1 = document.createElement("p");
            let pzutatnr2 = document.createElement("p");
            let pzutatnr3 = document.createElement("p");
            let pzutatnr4 = document.createElement("p");
            let pzutatnr5 = document.createElement("p");
            let pzutatnr6 = document.createElement("p");
            ptitel.innerHTML = rezeptenliste[i].titel;
            parbeitszeit.innerHTML = rezeptenliste[i].arbeitszeit;
            pzutatnr1.innerHTML = rezeptenliste[i].zutatnr1;
            pzutatnr2.innerHTML = rezeptenliste[i].zutatnr2;
            pzutatnr3.innerHTML = rezeptenliste[i].zuztatnr3;
            pzutatnr4.innerHTML = rezeptenliste[i].zutatnr4;
            pzutatnr5.innerHTML = rezeptenliste[i].zutatnr5;
            pzutatnr6.innerHTML = rezeptenliste[i].zutatnr6;
            divallerezepte.appendChild(ptitel);
            divallerezepte.appendChild(parbeitszeit);
            divallerezepte.appendChild(pzutatnr1);
            divallerezepte.appendChild(pzutatnr2);
            divallerezepte.appendChild(pzutatnr3);
            divallerezepte.appendChild(pzutatnr4);
            divallerezepte.appendChild(pzutatnr5);
            divallerezepte.appendChild(pzutatnr6);
            allerezepte.appendChild(divallerezepte);
            allerezepte.classList.add("rezepte");
            let br = document.createElement("br");
            allerezepte.appendChild(br);
        }
    };
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_rezepte.js.map