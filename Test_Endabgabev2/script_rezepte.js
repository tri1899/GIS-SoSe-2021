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
                let favbutton = document.createElement("button");
                favbutton.innerHTML = "favorisieren";
                divallerezepte.appendChild(favbutton);
                favbutton.addEventListener("click", Favorisieren);
                function Favorisieren() {
                    document.cookie = "titel=";
                    localStorage.setItem("titel", rezeptenliste[i].titel);
                    localStorage.setItem("arbeitszeit", rezeptenliste[i].arbeitszeit);
                    localStorage.setItem("zutat", rezeptenliste[i].zutat);
                    localStorage.setItem("zubereitungsanweisung", rezeptenliste[i].zubereitungsanweisung);
                }
            }
        };
    }
    if (document.querySelector("title").getAttribute("id") == "meinefavoriten") {
        let meinefavs = document.createElement("div");
        let ptitel = document.createElement("p");
        ptitel.innerHTML = localStorage.getItem("titel");
        let parbeitszeit = document.createElement("p");
        parbeitszeit.innerHTML = localStorage.getItem("arbeitszeit");
        let pzutat = document.createElement("p");
        pzutat.innerHTML = localStorage.getItem("zutat");
        let pzubereitungsanweisung = document.createElement("p");
        pzubereitungsanweisung.innerHTML = localStorage.getItem("zubereitungsanweisung");
        meinefavs.appendChild(ptitel);
        meinefavs.appendChild(parbeitszeit);
        meinefavs.appendChild(pzutat);
        meinefavs.appendChild(pzubereitungsanweisung);
        meinefavs.classList.add("meinefavs");
        behaelter.appendChild(meinefavs);
    }
    if (document.querySelector("title").getAttribute("id") == "meinerezepte") {
        let buttonspeichern = document.getElementById("rezepterstellen");
        buttonspeichern.addEventListener("click", Rezepterstellen);
        async function Rezepterstellen() {
            let formData = new FormData(document.forms[0]);
            let url = "https://tri1899gissose2021.herokuapp.com/rezepterstellen";
            let query = new URLSearchParams(formData);
            url = url + "?" + query.toString();
            let antwort = await fetch(url);
            let ausgabe = await antwort.text();
            behaelter.innerHTML = ausgabe;
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_rezepte.js.map