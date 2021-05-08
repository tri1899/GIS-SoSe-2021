// Aufgabe 2
//Gedanke: Nutzer können ihr Fußball Trikotsatz nach Ihrer Wahl zusammenstellen. 3 große Kategorien: Trikot, Hose, Stutzen mit jeweils Auswahlmöglichkeiten

namespace Aufgabe2 {

    export interface Trikot {
        marke: string;
        farbe: string;
        bild: string;
    }
    
    export interface Hose {
        marke: string;
        farbe: string;
        bild: string;
    }

    export interface Stutzen {
        marke: string;
        farbe: string;
        bild: string;
    }

    export interface Trikotsatz {
        trikot: Trikot;
        hose: Hose;
        stutzen: Stutzen;
    } 
}


