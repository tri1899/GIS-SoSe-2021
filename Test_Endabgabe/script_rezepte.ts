namespace Endabgabe {

    interface Rezeptdaten {
        titel: string;
        arbeitszeit: string;
        zutat: string;
        zubereitungsanweisung: string;
    }

    /*interface Favliste {
        aktiveruser: string;
        titel: string;
        arbeitszeit: string;
        zutat: string;
        zubereitungsanweisung: string;
    }*/

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


                async function Favorisieren(): Promise<void> {

                    let aktiveruser: string = localStorage.getItem("aktiveruser");

                    console.log("favorisieren");
                    

                    let url: string = "https://tri1899gissose2021.herokuapp.com/favorisieren";
                    url += "?aktiveruser=" + aktiveruser + "&titel=" + rezeptenliste[i].titel + "&arbeitszeit=" + rezeptenliste[i].arbeitszeit + "&zutat=" + rezeptenliste[i].zutat + "&zubereitungsanweisung=" + rezeptenliste[i].zubereitungsanweisung; 

                    let antwort: Response = await fetch (url);

                    let ausgabe: string = await antwort.text();

                }
            }
        };
    }

    if (document.querySelector("title").getAttribute("id") == "meinefavoriten") {

        window.onload = async function datenAnzeigen(): Promise<void> {
            let aktiveruser: string = localStorage.getItem("aktiveruser");

            let formData: FormData = new FormData(document.forms[0]);

            let url: string = "https://tri1899gissose2021.herokuapp.com/favsauslesen";

            url += "?aktiveruser=" + aktiveruser;

            let query: URLSearchParams = new URLSearchParams(<any>formData);

            url = url + "?" + query.toString();

            let antwort: Response = await fetch(url);

            let ausgabe: string = await antwort.text();

            console.log(aktiveruser);
            
            behaelter.innerHTML = ausgabe;
            
        };
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

