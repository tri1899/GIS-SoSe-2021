namespace Endabgabe {

    interface Rezeptdaten {
        titel: string;
        arbeitszeit: string;
        zutat: string;
        zubereitungsanweisung: string;
    }

    let behaelter: HTMLDivElement = <HTMLDivElement>document.getElementById("behaelter");

    if (document.querySelector("title").getAttribute("id") == "allerezepte") {

        window.onload = async function datenAnzeigen(): Promise<void> {

            let formData: FormData = new FormData(document.forms[0]);

            let url: string = "https://tri1899gissose2021.herokuapp.com/datenauslesen";

            let query: URLSearchParams = new URLSearchParams(<any>formData);

            url = url + "?" + query.toString();

            let antwort: Response = await fetch(url);

            let ausgabe: string = await antwort.text();

            let rezeptenliste: Rezeptdaten[] = JSON.parse(ausgabe);

            for (let i: number = 0; i < rezeptenliste.length; i++) {

                let divallerezepte: HTMLDivElement = document.createElement("div");

                let ptitel: HTMLParagraphElement = document.createElement("p");
                let parbeitszeit: HTMLParagraphElement = document.createElement("p");
                let pzutat: HTMLParagraphElement = document.createElement("p");
                let panweisung: HTMLParagraphElement = document.createElement("p");

                ptitel.innerHTML = rezeptenliste[i].titel;
                
                parbeitszeit.innerHTML = rezeptenliste[i].arbeitszeit;
                
                pzutat.innerHTML = rezeptenliste[i].zutat;
                
                panweisung.innerHTML = rezeptenliste[i].zubereitungsanweisung;
                


                divallerezepte.appendChild(ptitel);
                divallerezepte.appendChild(parbeitszeit);
                divallerezepte.appendChild(pzutat);
                divallerezepte.appendChild(panweisung);
                divallerezepte.classList.add("diveinzelnrezept");
                behaelter.appendChild(divallerezepte);
                behaelter.classList.add("rezepte");
                let br: HTMLBRElement = document.createElement("br");
                behaelter.appendChild(br);


                let favbutton: HTMLButtonElement = document.createElement("button");
                favbutton.innerHTML = "favorisieren";
                divallerezepte.appendChild(favbutton);
                favbutton.addEventListener("click", Favorisieren);


                function Favorisieren(): void {
                    document.cookie = "titel="
                    localStorage.setItem("titel", rezeptenliste[i].titel);
                    localStorage.setItem("arbeitszeit", rezeptenliste[i].arbeitszeit);
                    localStorage.setItem("zutat", rezeptenliste[i].zutat);
                    localStorage.setItem("zubereitungsanweisung", rezeptenliste[i].zubereitungsanweisung);

                }
            }
        };
    }

    if (document.querySelector("title").getAttribute("id") == "meinefavoriten") {

        let meinefavs: HTMLDivElement = document.createElement("div");
        let ptitel: HTMLParagraphElement = document.createElement("p");

        ptitel.innerHTML = localStorage.getItem ("titel");
        let parbeitszeit: HTMLParagraphElement = document.createElement("p");
        parbeitszeit.innerHTML = localStorage.getItem("arbeitszeit");
        let pzutat: HTMLParagraphElement = document.createElement("p");
        pzutat.innerHTML = localStorage.getItem("zutat");
        let pzubereitungsanweisung: HTMLParagraphElement = document.createElement("p");
        pzubereitungsanweisung.innerHTML = localStorage.getItem("zubereitungsanweisung");
        meinefavs.appendChild(ptitel);
        meinefavs.appendChild(parbeitszeit);
        meinefavs.appendChild(pzutat);
        meinefavs.appendChild(pzubereitungsanweisung);
        meinefavs.classList.add("meinefavs");
        behaelter.appendChild(meinefavs);

    }



    if (document.querySelector("title").getAttribute("id") == "meinerezepte") {

        let buttonspeichern: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rezepterstellen");
        buttonspeichern.addEventListener("click", Rezepterstellen);

        async function Rezepterstellen(): Promise<void> {
            let formData: FormData = new FormData(document.forms[0]);

            let url: string = "https://tri1899gissose2021.herokuapp.com/rezepterstellen";

            let query: URLSearchParams = new URLSearchParams(<any>formData);

            url = url + "?" + query.toString();

            let antwort: Response = await fetch(url);

            let ausgabe: string = await antwort.text();

            behaelter.innerHTML = ausgabe;

        }
    }
}

