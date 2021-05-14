namespace Aufgabe2_4 {
    let auswahlmöglichkeiten: Auswahlmöglichkeiten = konvertieren(); //Ich bekomme Daten im JSON-Format und muss diese in ein TS-Objekt konvertieren
    let behaelter: HTMLElement = document.getElementById("behaelter");

    function Trikotsatz(_trikotsatz: Trikotsatzpart): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.textAlign = "center";
        //button für Auswahl
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", aufrufenDaten);
        button.dataset.marke = _trikotsatz.marke;
        button.innerText = "bestätigen";
        button.style.float = "right";
        button.classList.add("buttontrikot");
        div.appendChild(button);
        //bilder von den Trikots
        let bild: HTMLImageElement = document.createElement("img");
        bild.src = _trikotsatz.bild;
        bild.classList.add("bildertrikot");
        div.appendChild(bild);
        let hr: HTMLHRElement = document.createElement("hr");
        div.appendChild(hr);
        return div;

        //Obejekt in der Console anzeigen
        function aufrufenDaten(_event: MouseEvent): void {
            sessionStorage.setItem("bild", _trikotsatz.bild); //Bild wird gespeichert
            if (document.querySelector("title").getAttribute("id") == "Schritt1") {
                location.href = "hosenwahl.html"; //weiterleitung auf Hosenwahl
            } else if (document.querySelector("title").getAttribute("id") == "Schritt2") {
                location.href = "stutzenwahl.html";
            } else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
                location.href = "endseite.html";
            }
        }
    }

    function anzeigen(_auswahl: Auswahlmöglichkeiten): void {
        if (document.querySelector("title").getAttribute("id") == "Schritt1") {
            for (let i: number = 0; i < _auswahl.trikots.length; i++) {
                let x: HTMLElement = Trikotsatz(_auswahl.trikots[i]);
                behaelter.appendChild(x);
            }
        } else if (document.querySelector("title").getAttribute("id") == "Schritt2") {
            for (let i: number = 0; i < _auswahl.hosen.length; i++) {
                let x: HTMLElement = Trikotsatz(_auswahl.hosen[i]);
                behaelter.appendChild(x);
            }
        } else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
            for (let i: number = 0; i < _auswahl.stutzen.length; i++) {
                let x: HTMLElement = Trikotsatz(_auswahl.stutzen[i]);
                behaelter.appendChild(x);
            }
        }
    }

    function konvertieren(): Auswahlmöglichkeiten {
        return JSON.parse(trikotsatzJSON);
    }

    anzeigen(auswahlmöglichkeiten);


}



