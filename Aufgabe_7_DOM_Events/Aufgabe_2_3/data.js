"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    let erstestrikot = { marke: "nike", farbe: "schwarz", bild: Aufgabe2.trikotbilder[0] };
    let zweitestrikot = { marke: "adidas", farbe: "blau", bild: Aufgabe2.trikotbilder[1] };
    let drittestrikot = { marke: "puma", farbe: "weiss", bild: Aufgabe2.trikotbilder[2] };
    Aufgabe2.trikotwahl = [erstestrikot, zweitestrikot, drittestrikot];
    Aufgabe2.hosenwahl = [];
    let erstehose = { marke: "nike", farbe: "weiss", bild: "" };
    let zweitehose = { marke: "adidas", farbe: "schwarz", bild: "" };
    let drittehose = { marke: "punma", farbe: "blau", bild: "" };
    Aufgabe2.hosenwahl = [erstehose, zweitehose, drittehose];
    Aufgabe2.stutzenwahl = [];
    let ersterstutzen = { marke: "nike", farbe: "rot", bild: "" };
    let zweiterstutzen = { marke: "adidas", farbe: "gruen", bild: "" };
    let dritterstutzen = { marke: "punma", farbe: "weiß", bild: "" };
    Aufgabe2.stutzenwahl = [ersterstutzen, zweiterstutzen, dritterstutzen];
    console.log(Aufgabe2.trikotwahl[2]);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=data.js.map