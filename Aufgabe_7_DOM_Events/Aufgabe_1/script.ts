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
    

}





