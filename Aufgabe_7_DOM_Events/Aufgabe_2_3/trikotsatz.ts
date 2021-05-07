// Aufgabe 2
//Gedanke: Nutzer können ihr Fußball Trikotsatz nach Ihrer Wahl zusammenstellen. 3 große Kategorien: Trikot, Hose, Stutzen mit jeweils Auswahlmöglichkeiten

namespace Aufgabe2 {

    let behaelter: HTMLElement = document.getElementById("behaelter");

    export interface Trikotsatz {
        trikot: Trikot;
        hose: Hose;
        stutzen: Stutzen;
    }

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

    export let trikotbilder: string[] = ["bilder/trikot_nike_black_webp", "trikot_adidas_blau.webp", "trikot_puma_weiss.webp"];
    for (let i: number = 0; i < trikotbilder.length; i++) {
        let bild: HTMLImageElement = document.createElement("img");
        bild.src = trikotbilder[i];
        behaelter.appendChild(bild);
    }  
}


