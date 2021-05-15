"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let auswahlmöglichkeiten = konvertieren(); //Ich bekomme Daten im JSON-Format und muss diese in ein TS-Objekt konvertieren
    let behaelter = document.getElementById("behaelter");
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
                sessionStorage.setItem("bildtrikot", _trikotsatz.bild); //Bild wird gespeichert
                location.href = "hosenwahl.html"; //weiterleitung auf Hosenwahl
            }
            else if (document.querySelector("title").getAttribute("id") == "Schritt2") {
                sessionStorage.setItem("bildhose", _trikotsatz.bild);
                location.href = "stutzenwahl.html";
            }
            else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
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
    function konvertieren() {
        return JSON.parse(Aufgabe2_4.trikotsatzJSON);
    }
    anzeigen(auswahlmöglichkeiten);
    let bisherigeauswahl = document.getElementById("bisherigeauswahl");
    if (document.querySelector("title").getAttribute("id") == "Schritt2") {
        let divtrikot = document.createElement("div");
        divtrikot.style.textAlign = "center";
        let bildtrikot = document.createElement("img");
        bildtrikot.src = sessionStorage.getItem("bildtrikot");
        bildtrikot.classList.add("auswahl");
        divtrikot.appendChild(bildtrikot);
        bisherigeauswahl.appendChild(divtrikot);
    }
    else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
        let divtrikothose = document.createElement("div");
        divtrikothose.style.textAlign = "center";
        let bildtrikot2 = document.createElement("img");
        bildtrikot2.src = sessionStorage.getItem("bildtrikot");
        bildtrikot2.classList.add("auswahl");
        let bildhose = document.createElement("img");
        bildhose.src = sessionStorage.getItem("bildhose");
        bildhose.classList.add("auswahl");
        divtrikothose.appendChild(bildtrikot2);
        divtrikothose.appendChild(bildhose);
        bisherigeauswahl.appendChild(divtrikothose);
    }
    else if (document.querySelector("title").getAttribute("id") == "Praesentation") {
        let divtrikothosestutzen = document.createElement("div");
        divtrikothosestutzen.style.textAlign = "center";
        let bildtrikot3 = document.createElement("img");
        bildtrikot3.src = sessionStorage.getItem("bildtrikot");
        bildtrikot3.classList.add("bilder");
        let bildhose2 = document.createElement("img");
        bildhose2.src = sessionStorage.getItem("bildhose");
        bildhose2.classList.add("bilder");
        let stutzen = document.createElement("img");
        stutzen.src = sessionStorage.getItem("bildstutzen");
        stutzen.classList.add("bilder");
        divtrikothosestutzen.appendChild(bildtrikot3);
        divtrikothosestutzen.appendChild(bildhose2);
        divtrikothosestutzen.appendChild(stutzen);
        behaelter.appendChild(divtrikothosestutzen);
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=trikotwahl.js.map