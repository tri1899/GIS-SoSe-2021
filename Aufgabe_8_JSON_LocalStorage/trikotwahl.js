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
                location.href = "stutzenwahl.html";
            }
            else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
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
    let hose = document.getElementById("hose");
    //let stutzen: HTMLElement = document.getElementById("stutzen");
    if (document.querySelector("title").getAttribute("id") == "Praesentation") {
        //Trikot
        let divtrikot = document.createElement("div");
        divtrikot.style.textAlign = "center";
        let bildtrikot = document.createElement("img");
        bildtrikot.src = sessionStorage.getItem("bildtrikot");
        bildtrikot.classList.add("bilder");
        divtrikot.appendChild(bildtrikot);
        behaelter.appendChild(divtrikot);
        //Hose
        let divhose = document.createElement("div");
        divhose.style.textAlign = "center";
        let bildhose = document.createElement("img");
        bildtrikot.src = sessionStorage.getItem("bildhose");
        bildtrikot.classList.add("bilder");
        divtrikot.appendChild(bildhose);
        hose.appendChild(divhose);
        //Stutzen
        /*
        let divstutzen: HTMLDivElement = document.createElement("div");
        divtrikot.style.textAlign = "center";
        let bildstutzen: HTMLImageElement = document.createElement("img");
        bildtrikot.src = sessionStorage.getItem("bildstutzen");
        bildtrikot.classList.add("bilder");
        divtrikot.appendChild(bildstutzen);
        stutzen.appendChild(divstutzen);*/
    }
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=trikotwahl.js.map