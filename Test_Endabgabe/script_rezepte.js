"use strict";
var Endabgabe;
(function (Endabgabe) {
    let behaelter = document.getElementById("behaelter");
    if (document.querySelector("title").getAttribute("id") == "allerezepte") {
        window.onload = async function datenAnzeigen() {
            let url = "https://tri1899gissose2021.herokuapp.com/datenauslesen";
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
                async function Favorisieren() {
                    let aktiveruser = localStorage.getItem("aktiveruser");
                    console.log("favorisieren");
                    let url = "https://tri1899gissose2021.herokuapp.com/favorisieren";
                    url += "?aktiveruser=" + aktiveruser + "&titel=" + rezeptenliste[i].titel + "&arbeitszeit=" + rezeptenliste[i].arbeitszeit + "&zutat=" + rezeptenliste[i].zutat + "&zubereitungsanweisung=" + rezeptenliste[i].zubereitungsanweisung;
                    let antwort = await fetch(url);
                    let ausgabe = await antwort.text();
                }
            }
        };
    }
    if (document.querySelector("title").getAttribute("id") == "meinefavoriten") {
        window.onload = async function datenAnzeigen() {
            let aktiveruser = localStorage.getItem("aktiveruser");
            let url = "https://tri1899gissose2021.herokuapp.com/favsauslesen";
            url += "?aktiveruser=" + aktiveruser;
            let antwort = await fetch(url);
            let ausgabe = await antwort.text();
            let favliste = JSON.parse(ausgabe);
            for (let i = 0; i < favliste.length; i++) {
                let divallefavs = document.createElement("div");
                let ptitel = document.createElement("p");
                let parbeitszeit = document.createElement("p");
                let pzutat = document.createElement("p");
                let panweisung = document.createElement("p");
                ptitel.innerHTML = favliste[i].titel;
                parbeitszeit.innerHTML = favliste[i].arbeitszeit;
                pzutat.innerHTML = favliste[i].zutat;
                panweisung.innerHTML = favliste[i].zubereitungsanweisung;
                divallefavs.appendChild(ptitel);
                divallefavs.appendChild(parbeitszeit);
                divallefavs.appendChild(pzutat);
                divallefavs.appendChild(panweisung);
                divallefavs.classList.add("diveinzelnrezept");
                behaelter.appendChild(divallefavs);
                behaelter.classList.add("rezepte");
                let br = document.createElement("br");
                behaelter.appendChild(br);
                let loeschen = document.createElement("button");
                loeschen.innerHTML = "löschen";
                divallefavs.appendChild(loeschen);
                loeschen.addEventListener("click", Loeschen);
                async function Loeschen() {
                    console.log("loeschen");
                    let url = "https://tri1899gissose2021.herokuapp.com/loeschen";
                    url += "?aktiveruser=" + favliste[i].aktiveruser + "&titel=" + favliste[i].titel + "&arbeitszeit=" + favliste[i].arbeitszeit + "&zutat=" + favliste[i].zutat + "&zubereitungsanweisung=" + favliste[i].zubereitungsanweisung;
                    let antwort = await fetch(url);
                    let ausgabe = await antwort.text();
                    window.location.reload();
                }
            }
        };
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