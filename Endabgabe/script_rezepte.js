"use strict";
var Endabgabe;
(function (Endabgabe) {
    let behaelter = document.getElementById("behaelter");
    if (document.querySelector("title").getAttribute("id") == "allerezepte") {
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
                let pzutat = document.createElement("p");
                let panweisung = document.createElement("p");
                ptitel.innerHTML = rezeptenliste[i].titel;
                parbeitszeit.innerHTML = rezeptenliste[i].arbeitszeit;
                pzutat.innerHTML = rezeptenliste[i].zutat;
                panweisung.innerHTML = rezeptenliste[i].zubereitungsanweisung;
                divallerezepte.appendChild(ptitel);
                divallerezepte.appendChild(parbeitszeit);
                divallerezepte.appendChild(pzutat);
                divallerezepte.appendChild(panweisung);
                divallerezepte.classList.add("diveinzelnrezept");
                behaelter.appendChild(divallerezepte);
                behaelter.classList.add("rezepte");
                let br = document.createElement("br");
                behaelter.appendChild(br);
            }
        };
    }
    /*if (document.querySelector("title").getAttribute("id") == "meinerezepte") {


    }*/
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_rezepte.js.map