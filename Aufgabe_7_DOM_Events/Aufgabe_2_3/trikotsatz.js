"use strict";
// Aufgabe 2
//Gedanke: Nutzer können ihr Fußball Trikotsatz nach Ihrer Wahl zusammenstellen. 3 große Kategorien: Trikot, Hose, Stutzen mit jeweils Auswahlmöglichkeiten
var Aufgabe2;
(function (Aufgabe2) {
    let behaelter = document.getElementById("behaelter");
    Aufgabe2.trikotbilder = ["bilder/trikot_nike_black_webp", "trikot_adidas_blau.webp", "trikot_puma_weiss.webp"];
    for (let i = 0; i < Aufgabe2.trikotbilder.length; i++) {
        let bild = document.createElement("img");
        bild.src = Aufgabe2.trikotbilder[i];
        behaelter.appendChild(bild);
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=trikotsatz.js.map