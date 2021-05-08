"use strict";
// Aufgabe 2
//Gedanke: Nutzer können ihr Fußball Trikotsatz nach Ihrer Wahl zusammenstellen. 3 große Kategorien: Trikot, Hose, Stutzen mit jeweils Auswahlmöglichkeiten
var Aufgabe2;
(function (Aufgabe2) {
    let behaelter = document.getElementById("behaelter");
    function Trikotwahl(_trikot) {
        let div = document.createElement("div");
        //button für Auswahl
        let button = document.createElement("button");
        button.addEventListener("click", aufrufenDaten);
        button.dataset.marke = _trikot.marke.toString();
        button.innerText = "Marke: " + _trikot.marke;
        div.appendChild(button);
        //bilder von den Trikots
        let bild = document.createElement("img");
        bild.src = _trikot.bild;
        bild.classList.add("bildertrikot");
        bild.style.width = 500 + "px";
        bild.style.top = 10 + "px";
        div.appendChild(bild);
        return div;
    }
    //Aufrufen der Funktion && hinzufuegen 
    for (let i = 0; i < Aufgabe2.trikotwahl.length; i++) {
        let x = Trikotwahl(Aufgabe2.trikotwahl[i]);
        behaelter.appendChild(x);
    }
    // Obejkt in der Console anzeigen
    function aufrufenDaten(_event) {
        let ziel = _event.target;
        console.log(ziel.dataset.marke);
        for (let i = 0; i < Aufgabe2.trikotwahl.length; i++) {
            if (Aufgabe2.trikotwahl[i].marke.toString() == ziel.dataset.marke) {
                console.log(Aufgabe2.trikotwahl[i]);
            }
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=trikotsatz.js.map