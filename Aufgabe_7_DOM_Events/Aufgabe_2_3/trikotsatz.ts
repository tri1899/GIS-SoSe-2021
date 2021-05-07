// Aufgabe 2
//Gedanke: Nutzer können ihr Fußball Trikotsatz nach Ihrer Wahl zusammenstellen. 3 große Kategorien: Trikot, Hose, Stutzen mit jeweils Auswahlmöglichkeiten

namespace Aufgabe2 {

    export class Klamotten {
        marke: string;
        farbe: string;

        constructor(_marke: string, _farbe: string) {
            this.marke = _marke;
            this.farbe = _farbe;
        }
    }

    export class Trikot extends Klamotten {
        bildtrikot: string;
        
        constructor(_marke: string, _farbe: string, _bildtrikot: string) {
            super(_marke, _farbe);
            this.bildtrikot = _bildtrikot;
        }
    }

    export class Hose extends Klamotten {
        bildhose: string;

        constructor(_marke: string, _farbe: string, _bildhose: string) {
            super(_marke, _farbe);
            this.bildhose = _bildhose;
        }
    }

    export class Stutzen extends Klamotten {
        bildstutzen: string;

        constructor(_marke: string, _farbe: string, _bildstutzen: string) {
            super(_marke, _farbe);
            this.bildstutzen = _bildstutzen;
        }

    }


    export let trikotwahl: Trikot [] = [];
    export let hosenwahl: Hose [] = [];
    export let stutzenwahl: Stutzen [] = [];

}


