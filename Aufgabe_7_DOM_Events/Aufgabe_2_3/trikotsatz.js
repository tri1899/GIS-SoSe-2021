"use strict";
// Aufgabe 2
//Gedanke: Nutzer können ihr Fußball Trikotsatz nach Ihrer Wahl zusammenstellen. 3 große Kategorien: Trikot, Hose, Stutzen mit jeweils Auswahlmöglichkeiten
var Aufgabe2;
(function (Aufgabe2) {
    let behaelter = document.getElementById("behaelter");
    function Trikotwahl(_trikot) {
        let div = document.createElement("div");
        div.style.textAlign = "center";
        //button für Auswahl
        let button = document.createElement("button");
        button.addEventListener("click", aufrufenDaten);
        button.dataset.marke = _trikot.marke;
        button.innerText = "bestätigen";
        button.style.float = "right";
        button.classList.add("buttontrikot");
        div.appendChild(button);
        //bilder von den Trikots
        let bild = document.createElement("img");
        bild.src = _trikot.bild;
        bild.classList.add("bildertrikot");
        div.appendChild(bild);
        let hr = document.createElement("hr");
        div.appendChild(hr);
        return div;
    }
    //Aufrufen der Funktion && hinzufuegen 
    for (let i = 0; i < Aufgabe2.trikotwahl.length; i++) {
        let x = Trikotwahl(Aufgabe2.trikotwahl[i]);
        behaelter.appendChild(x);
    }
    // Obejekt in der Console anzeigen
    function aufrufenDaten(_event) {
        let target = _event.target;
        for (let i = 0; i < Aufgabe2.trikotwahl.length; i++) {
            if (Aufgabe2.trikotwahl[i].marke == target.dataset.marke) {
                console.log(Aufgabe2.trikotwahl[i]);
            }
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=trikotsatz.js.map