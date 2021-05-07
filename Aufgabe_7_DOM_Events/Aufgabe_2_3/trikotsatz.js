"use strict";
// Aufgabe 2
//Gedanke: Nutzer können ihr Fußball Trikotsatz nach Ihrer Wahl zusammenstellen. 3 große Kategorien: Trikot, Hose, Stutzen mit jeweils Auswahlmöglichkeiten
var Aufgabe2;
(function (Aufgabe2) {
    class Klamotten {
        constructor(_marke, _farbe) {
            this.marke = _marke;
            this.farbe = _farbe;
        }
    }
    Aufgabe2.Klamotten = Klamotten;
    class Trikot extends Klamotten {
        constructor(_marke, _farbe, _bildtrikot) {
            super(_marke, _farbe);
            this.bildtrikot = _bildtrikot;
        }
    }
    Aufgabe2.Trikot = Trikot;
    class Hose extends Klamotten {
        constructor(_marke, _farbe, _bildhose) {
            super(_marke, _farbe);
            this.bildhose = _bildhose;
        }
    }
    Aufgabe2.Hose = Hose;
    class Stutzen extends Klamotten {
        constructor(_marke, _farbe, _bildstutzen) {
            super(_marke, _farbe);
            this.bildstutzen = _bildstutzen;
        }
    }
    Aufgabe2.Stutzen = Stutzen;
    Aufgabe2.trikotwahl = [];
    Aufgabe2.hosenwahl = [];
    Aufgabe2.stutzenwahl = [];
    console.log(Aufgabe2.trikotwahl);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=trikotsatz.js.map