namespace Aufgabe2_4 {

    export interface Trikotsatzpart {
        marke: string;
        farbe: string;
        bild: string;
    }

    //Auswahlmöglichkeiten 
    export interface Auswahlmöglichkeiten {
        trikots: Trikotsatzpart[];
        hosen: Trikotsatzpart[];
        stutzen: Trikotsatzpart[];
    }

    export interface Trikotsatz {
        trikot: Trikotsatzpart;
        hose: Trikotsatzpart;
        stutzen: Trikotsatzpart;
    }
}


