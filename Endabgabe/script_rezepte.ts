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

            let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/datenauslesen";

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
            }
        };
    }

    /*if (document.querySelector("title").getAttribute("id") == "meinerezepte") {


    }*/

    
}

