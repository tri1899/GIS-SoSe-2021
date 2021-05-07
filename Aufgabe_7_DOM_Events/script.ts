namespace Aufgabe3 {

    //Aufgabe 1

    let rechteckebehaelter: HTMLElement = document.querySelector(".rechteckebehaelter");
    let rechteckdazugeben: HTMLElement = document.getElementById("neuesrechteck");
    let seitezuruecksetzen: HTMLElement = document.getElementById("refresh");

    class Rechteck {
        breite: number;
        hoehe: number;

        constructor() {
            this.breite = Math.floor(Math.random() * 100);
            this.hoehe = Math.floor(Math.random() * 100);
        }

        zeichneRechteck (_rechteck: Rechteck): void {
            let x: number =  Math.floor(Math.random() * 2000);
            let y: number =  Math.floor(Math.random() * 500 + 100);
            let div: HTMLDivElement = document.createElement("div");
            div.style.height = _rechteck.breite + "px";
            div.style.width = _rechteck.hoehe + "px";
            div.style.top = y + "px";
            div.style.left = x + "px";
            div.style.position = "absolute";
            div.style.backgroundColor = "red";
            rechteckebehaelter.appendChild(div);

        }
    }

    function rechteckhinzufuegen(): void {
        let rechteck: Rechteck = new Rechteck();
        rechteck.zeichneRechteck(rechteck);

    }

    function seiterefreshen(): void {
        rechteckebehaelter.innerHTML = "";

    }

    rechteckdazugeben.addEventListener("click", rechteckhinzufuegen);
    seitezuruecksetzen.addEventListener("click", seiterefreshen);
    


// Aufgabe 2

//Gedanke: Nutzer können ihr Fußballspieler nach Ihrer Wahl zusammenstellen. 4 große Kategorien: Trikot, Hose, Stutzen, Fußballschuhe, mit jeweils Auswahlmöglichkeiten

    class Fußballspieler {
        trikot: string;
        hose: string;
        stutzen: string;
        fußballschuhe: string;

        constructor(_trikot: string, _hose: string, _stutzen: string, _fußballschuhe: string) {
            this.trikot = _trikot;
            this.hose = _hose;
            this.stutzen = _stutzen;
            this.fußballschuhe = _fußballschuhe;
        }
    }

    let basi: Fußballspieler = new Fußballspieler("blau", "rot", "gelb", "adidas");
    console.log(basi);
    
}
