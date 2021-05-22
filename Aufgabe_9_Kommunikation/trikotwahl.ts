namespace Aufgabe2_5 {
    let behaelter: HTMLElement = document.getElementById("behaelter");

    async function datenuebertragen(_url: RequestInfo): Promise<void> {
        let antwort: Response = await fetch(_url);
        console.log("Antwort", antwort);
        let jsondaten: Auswahlmöglichkeiten = await antwort.json();
        anzeigen(jsondaten);
    }

    datenuebertragen("data.json");

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
                sessionStorage.setItem("trikotmarke", _trikotsatz.marke);
                sessionStorage.setItem("trikotfarbe", _trikotsatz.farbe);
                sessionStorage.setItem("bildtrikot", _trikotsatz.bild); //Bild wird gespeichert
                location.href = "hosenwahl.html"; //weiterleitung auf Hosenwahl


            } else if (document.querySelector("title").getAttribute("id") == "Schritt2") {
                sessionStorage.setItem("hosenmarke", _trikotsatz.marke);
                sessionStorage.setItem("hosenfarbe", _trikotsatz.farbe);
                sessionStorage.setItem("bildhose", _trikotsatz.bild);
                location.href = "stutzenwahl.html";


            } else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
                sessionStorage.setItem("stutzenmarke", _trikotsatz.marke);
                sessionStorage.setItem("stutzenfarbe", _trikotsatz.farbe);
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

    let bisherigeauswahl: HTMLElement = document.getElementById("bisherigeauswahl");
    let endauswahl: HTMLElement = document.getElementById("endauswahl");

    if (document.querySelector("title").getAttribute("id") == "Schritt2") {
        //Bildtrikot
        let divtrikot: HTMLDivElement = document.createElement("div");
        divtrikot.style.textAlign = "center";
        let bildtrikot: HTMLImageElement = document.createElement("img");

        console.log("Deine Auswahl:");
        console.log("Trikot: " + "Marke: " + sessionStorage.getItem("trikotmarke") + " & " + "Farbe: " + sessionStorage.getItem("trikotfarbe"));

        bildtrikot.src = sessionStorage.getItem("bildtrikot");
        bildtrikot.classList.add("auswahl");
        divtrikot.appendChild(bildtrikot);
        bisherigeauswahl.appendChild(divtrikot);

    } else if (document.querySelector("title").getAttribute("id") == "Schritt3") {
        //Bildtrikot
        let divtrikothose: HTMLDivElement = document.createElement("div");
        divtrikothose.style.textAlign = "center";
        let bildtrikot2: HTMLImageElement = document.createElement("img");

        console.log("Deine Auswahl:");
        console.log("Trikot: " + "Marke: " + sessionStorage.getItem("trikotmarke") + " & " + "Farbe: " + sessionStorage.getItem("trikotfarbe"));

        bildtrikot2.src = sessionStorage.getItem("bildtrikot");
        bildtrikot2.classList.add("auswahl");
        //Bildhose
        let bildhose: HTMLImageElement = document.createElement("img");

        console.log("Hose: " + "Marke: " + sessionStorage.getItem("hosenmarke") + " & " + "Farbe: " + sessionStorage.getItem("hosenfarbe"));

        bildhose.src = sessionStorage.getItem("bildhose");
        bildhose.classList.add("auswahl");
        divtrikothose.appendChild(bildtrikot2);
        divtrikothose.appendChild(bildhose);
        bisherigeauswahl.appendChild(divtrikothose);

    } else if (document.querySelector("title").getAttribute("id") == "Praesentation") {
        //Bildtrikot
        let divtrikothosestutzen: HTMLDivElement = document.createElement("div");
        divtrikothosestutzen.style.textAlign = "center";
        let bildtrikot3: HTMLImageElement = document.createElement("img");

        console.log("Deine Auswahl:");
        console.log("Trikot: " + "Marke: " + sessionStorage.getItem("trikotmarke") + " & " + "Farbe: " + sessionStorage.getItem("trikotfarbe"));

        bildtrikot3.src = sessionStorage.getItem("bildtrikot");
        bildtrikot3.classList.add("praesentation");
        //Bildhose
        let bildhose2: HTMLImageElement = document.createElement("img");

        console.log("Hose: " + "Marke: " + sessionStorage.getItem("hosenmarke") + " & " + "Farbe: " + sessionStorage.getItem("hosenfarbe"));

        bildhose2.src = sessionStorage.getItem("bildhose");
        bildhose2.classList.add("praesentation");
        //Bildhose
        let stutzen: HTMLImageElement = document.createElement("img");

        console.log("Stutzen: " + "Marke: " + sessionStorage.getItem("stutzenmarke") + " & " + "Farbe: " + sessionStorage.getItem("stutzenfarbe"));

        stutzen.src = sessionStorage.getItem("bildstutzen");
        stutzen.classList.add("praesentation");

        divtrikothosestutzen.appendChild(bildtrikot3);
        divtrikothosestutzen.appendChild(bildhose2);
        divtrikothosestutzen.appendChild(stutzen);
        endauswahl.appendChild(divtrikothosestutzen);
    }
}







