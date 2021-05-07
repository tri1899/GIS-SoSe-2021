"use strict";
var Aufgabe3;
(function (Aufgabe3) {
    //Aufgabe 1
    let rechteckebehaelter = document.querySelector(".rechteckebehaelter");
    let rechteckdazugeben = document.getElementById("neuesrechteck");
    let seitezuruecksetzen = document.getElementById("refresh");
    class Rechteck {
        constructor() {
            this.breite = Math.floor(Math.random() * 100);
            this.hoehe = Math.floor(Math.random() * 100);
        }
        zeichneRechteck(_rechteck) {
            let x = Math.floor(Math.random() * 2000);
            let y = Math.floor(Math.random() * 500 + 100);
            let div = document.createElement("div");
            div.style.height = _rechteck.breite + "px";
            div.style.width = _rechteck.hoehe + "px";
            div.style.top = y + "px";
            div.style.left = x + "px";
            div.style.position = "absolute";
            div.style.backgroundColor = "red";
            rechteckebehaelter.appendChild(div);
        }
    }
    function rechteckhinzufuegen() {
        let rechteck = new Rechteck();
        rechteck.zeichneRechteck(rechteck);
    }
    function seiterefreshen() {
        rechteckebehaelter.innerHTML = "";
    }
    rechteckdazugeben.addEventListener("click", rechteckhinzufuegen);
    seitezuruecksetzen.addEventListener("click", seiterefreshen);
    // Aufgabe 2
    //Gedanke: Nutzer können ihr Fußballspieler nach Ihrer Wahl zusammenstellen. 4 große Kategorien: Trikot, Hose, Stutzen, Fußballschuhe, mit jeweils Auswahlmöglichkeiten
    class Fußballspieler {
        constructor(_trikot, _hose, _stutzen, _fußballschuhe) {
            this.trikot = _trikot;
            this.hose = _hose;
            this.stutzen = _stutzen;
            this.fußballschuhe = _fußballschuhe;
        }
    }
    let basi = new Fußballspieler("blau", "rot", "gelb", "adidas");
    console.log(basi);
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=script.js.map