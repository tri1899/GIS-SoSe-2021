"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    let behaelter = document.getElementById("behaelter");
    async function datenuebertragen(_url) {
        let antwort = await fetch(_url);
        console.log("Antwort", antwort);
        let jsondaten = await antwort.json();
        anzeigen(jsondaten);
    }
    datenuebertragen("https://tri1899.github.io/GIS-SoSe-2021/Aufgabe_9_Kommunikation/data.json");
    function Trikotsatz(_trikotsatz) {
        let div = document.createElement("div");
        div.style.textAlign = "center";
        //button für Auswahl
        let button = document.createElement("button");
        button.addEventListener("click", aufrufenDaten);
        button.dataset.marke = _trikotsatz.marke;
        button.innerText = "bestätigen";
        button.style.float = "right";
        button.classList.add("buttontrikot");
        div.appendChild(button);
        //bilder von den Trikots
        let bild = document.createElement("img");
        bild.src = _trikotsatz.bild;
        bild.classList.add("bilder");
        div.appendChild(bild);
        let hr = document.createElement("hr");
        div.appendChild(hr);
        return div;
        //Obejekt in der Console anzeigen
        function aufrufenDaten(_event) {
            if (document.querySelector("title").getAttribute("id") == "Schritt1") {
                sessionStorage.setItem("trikotmarke", _trikotsatz.marke);
                sessionStorage.setItem("trikotfarbe", _trikotsatz.farbe);
                sessionStorage.setItem("bildtrikot", _trikotsatz.bild); //Bild wird gespeichert
                location.href = "hosenwahl.html"; //weiterleitung auf Hosenwahl
            }
            else if (document.querySelector("title").getAttribute("id") == "Schritt2") {
                sessionStorage.setItem("hosenmarke", _trikotsatz.marke);
                sessionStorage.setItem("hosenfarbe", _trikotsatz.farbe);
                sessionStorage.setItem("bildhose", _trikotsatz.bild);
                location.href = "stutzenwahl.html";
            }
            else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
                sessionStorage.setItem("stutzenmarke", _trikotsatz.marke);
                sessionStorage.setItem("stutzenfarbe", _trikotsatz.farbe);
                sessionStorage.setItem("bildstutzen", _trikotsatz.bild);
                location.href = "endseite.html";
            }
        }
    }
    function anzeigen(_auswahl) {
        if (document.querySelector("title").getAttribute("id") == "Schritt1") {
            for (let i = 0; i < _auswahl.trikots.length; i++) {
                let x = Trikotsatz(_auswahl.trikots[i]);
                behaelter.appendChild(x);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Schritt2") {
            for (let i = 0; i < _auswahl.hosen.length; i++) {
                let x = Trikotsatz(_auswahl.hosen[i]);
                behaelter.appendChild(x);
            }
        }
        else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
            for (let i = 0; i < _auswahl.stutzen.length; i++) {
                let x = Trikotsatz(_auswahl.stutzen[i]);
                behaelter.appendChild(x);
            }
        }
    }
    let bisherigeauswahl = document.getElementById("bisherigeauswahl");
    let endauswahl = document.getElementById("endauswahl");
    if (document.querySelector("title").getAttribute("id") == "Schritt2") {
        //Bildtrikot
        let divtrikot = document.createElement("div");
        divtrikot.style.textAlign = "center";
        let bildtrikot = document.createElement("img");
        console.log("Deine Auswahl:");
        console.log("Trikot: " + "Marke: " + sessionStorage.getItem("trikotmarke") + " & " + "Farbe: " + sessionStorage.getItem("trikotfarbe"));
        bildtrikot.src = sessionStorage.getItem("bildtrikot");
        bildtrikot.classList.add("auswahl");
        divtrikot.appendChild(bildtrikot);
        bisherigeauswahl.appendChild(divtrikot);
    }
    else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
        //Bildtrikot
        let divtrikothose = document.createElement("div");
        divtrikothose.style.textAlign = "center";
        let bildtrikot2 = document.createElement("img");
        console.log("Deine Auswahl:");
        console.log("Trikot: " + "Marke: " + sessionStorage.getItem("trikotmarke") + " & " + "Farbe: " + sessionStorage.getItem("trikotfarbe"));
        bildtrikot2.src = sessionStorage.getItem("bildtrikot");
        bildtrikot2.classList.add("auswahl");
        //Bildhose
        let bildhose = document.createElement("img");
        console.log("Hose: " + "Marke: " + sessionStorage.getItem("hosenmarke") + " & " + "Farbe: " + sessionStorage.getItem("hosenfarbe"));
        bildhose.src = sessionStorage.getItem("bildhose");
        bildhose.classList.add("auswahl");
        divtrikothose.appendChild(bildtrikot2);
        divtrikothose.appendChild(bildhose);
        bisherigeauswahl.appendChild(divtrikothose);
    }
    else if (document.querySelector("title").getAttribute("id") == "Praesentation") {
        //Bildtrikot
        let divtrikothosestutzen = document.createElement("div");
        divtrikothosestutzen.style.textAlign = "center";
        let bildtrikot3 = document.createElement("img");
        console.log("Deine Auswahl:");
        console.log("Trikot: " + "Marke: " + sessionStorage.getItem("trikotmarke") + " & " + "Farbe: " + sessionStorage.getItem("trikotfarbe"));
        bildtrikot3.src = sessionStorage.getItem("bildtrikot");
        bildtrikot3.classList.add("praesentation");
        //Bildhose
        let bildhose2 = document.createElement("img");
        console.log("Hose: " + "Marke: " + sessionStorage.getItem("hosenmarke") + " & " + "Farbe: " + sessionStorage.getItem("hosenfarbe"));
        bildhose2.src = sessionStorage.getItem("bildhose");
        bildhose2.classList.add("praesentation");
        //Bildhose
        let stutzen = document.createElement("img");
        console.log("Stutzen: " + "Marke: " + sessionStorage.getItem("stutzenmarke") + " & " + "Farbe: " + sessionStorage.getItem("stutzenfarbe"));
        stutzen.src = sessionStorage.getItem("bildstutzen");
        stutzen.classList.add("praesentation");
        divtrikothosestutzen.appendChild(bildtrikot3);
        divtrikothosestutzen.appendChild(bildhose2);
        divtrikothosestutzen.appendChild(stutzen);
        endauswahl.appendChild(divtrikothosestutzen);
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=trikotwahl.js.map