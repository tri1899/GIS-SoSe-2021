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
        bild.classList.add("bilder");
        div.appendChild(bild);
        let hr: HTMLHRElement = document.createElement("hr");
        div.appendChild(hr);
        return div;

        //Obejekt in der Console anzeigen
        function aufrufenDaten(_event: MouseEvent): void {
            if (document.querySelector("title").getAttribute("id") == "Schritt1") {
                sessionStorage.setItem("bildtrikot", _trikotsatz.bild); //Bild wird gespeichert
                location.href = "hosenwahl.html"; //weiterleitung auf Hosenwahl
            } else if (document.querySelector("title").getAttribute("id") == "Schritt2") {
                sessionStorage.setItem("bildhose", _trikotsatz.bild);
                location.href = "stutzenwahl.html";
            } else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
                sessionStorage.setItem("bildstutzen", _trikotsatz.bild);
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

    let bisherigeauswahl: HTMLElement = document.getElementById("bisherigeauswahl");

    if (document.querySelector("title").getAttribute("id") == "Schritt2") {
        let divtrikot: HTMLDivElement = document.createElement("div");
        divtrikot.style.textAlign = "center";
        let bildtrikot: HTMLImageElement = document.createElement("img");
        bildtrikot.src = sessionStorage.getItem("bildtrikot");
        bildtrikot.classList.add("auswahl");
        divtrikot.appendChild(bildtrikot);
        bisherigeauswahl.appendChild(divtrikot);
    } else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
        let divtrikothose: HTMLDivElement = document.createElement("div");
        divtrikothose.style.textAlign = "center";
        let bildtrikot2: HTMLImageElement = document.createElement("img");
        bildtrikot2.src = sessionStorage.getItem("bildtrikot");
        bildtrikot2.classList.add("auswahl");
        let bildhose: HTMLImageElement = document.createElement("img");
        bildhose.src = sessionStorage.getItem("bildhose");
        bildhose.classList.add("auswahl");
        divtrikothose.appendChild(bildtrikot2);
        divtrikothose.appendChild(bildhose);
        bisherigeauswahl.appendChild(divtrikothose);
    } else if (document.querySelector("title").getAttribute("id") == "Praesentation") {
        let divtrikothosestutzen: HTMLDivElement = document.createElement("div");
        divtrikothosestutzen.style.textAlign = "center";
        let bildtrikot3: HTMLImageElement = document.createElement("img");
        bildtrikot3.src = sessionStorage.getItem("bildtrikot");
        bildtrikot3.classList.add("bilder");
        let bildhose2: HTMLImageElement = document.createElement("img");
        bildhose2.src = sessionStorage.getItem("bildhose");
        bildhose2.classList.add("bilder");
        let stutzen: HTMLImageElement = document.createElement("img");
        stutzen.src = sessionStorage.getItem("bildstutzen");
        stutzen.classList.add("bilder");
        divtrikothosestutzen.appendChild(bildtrikot3);
        divtrikothosestutzen.appendChild(bildhose2);
        divtrikothosestutzen.appendChild(stutzen);
        behaelter.appendChild(divtrikothosestutzen);
    }

}




