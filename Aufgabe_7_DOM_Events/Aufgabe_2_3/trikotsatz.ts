// Aufgabe 2
//Gedanke: Nutzer können ihr Fußball Trikotsatz nach Ihrer Wahl zusammenstellen. 3 große Kategorien: Trikot, Hose, Stutzen mit jeweils Auswahlmöglichkeiten

namespace Aufgabe2 {
    let behaelter: HTMLElement = document.getElementById("behaelter");

    function Trikotwahl(_trikot: Trikot): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.textAlign = "center";
        //button für Auswahl
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", aufrufenDaten);
        button.dataset.marke = _trikot.marke.toString();
        button.innerText = "Marke: " + _trikot.marke;
        button.style.float = "right";
        
        div.appendChild(button);
        //bilder von den Trikots
        let bild: HTMLImageElement = document.createElement("img");
        bild.src = _trikot.bild;
        bild.classList.add("bildertrikot");
        div.appendChild(bild);
        let hr: HTMLHRElement = document.createElement("hr");
        div.appendChild(hr);
        return div;

    }

    //Aufrufen der Funktion && hinzufuegen 
    for (let i: number = 0; i < trikotwahl.length; i++) {
        let x: HTMLElement = Trikotwahl(trikotwahl[i]);
        behaelter.appendChild(x);
    }

    // Obejkt in der Console anzeigen
    function aufrufenDaten(_event: MouseEvent): void {
        let ziel: HTMLElement = <HTMLElement>_event.target;
        for (let i: number = 0; i < trikotwahl.length; i++) {
            if (trikotwahl[i].marke.toString() == ziel.dataset.marke) {
            console.log(trikotwahl[i]);
            }
            
        }
    }
}



