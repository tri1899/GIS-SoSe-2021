namespace Endabgabe {

    interface MeineRezepte {
        aktiveruser: string;
        titel: string;
        arbeitszeit: string;
        zutat1: string;
        zutat2: string;
        zutat3: string;
        zutat4: string;
        zutat5: string;
        zutat6: string;
        zutat7: string;
        zutat8: string;
        zutat9: string;
        zutat10: string;
        zubereitungsanweisung: string;
    }

    let behaelter: HTMLDivElement = <HTMLDivElement>document.getElementById("behaelter");
    let user: string = localStorage.getItem("aktiveruser");

    if (document.querySelector("title").getAttribute("id") == "allerezepte") {
        if (user != null) {



            window.onload = async function datenAnzeigen(): Promise<void> { //Code vgl Kapitel 3 Server und Daten
                let url: string = "https://tri1899gissose2021.herokuapp.com/datenauslesen";

                let antwort: Response = await fetch(url);

                let ausgabe: string = await antwort.text();

                let rezeptenliste: MeineRezepte[] = JSON.parse(ausgabe);

                for (let i: number = 0; i < rezeptenliste.length; i++) {

                    let divallerezepte: HTMLDivElement = document.createElement("div");

                    let titel: HTMLParagraphElement = document.createElement("p");
                    let arbeitszeit: HTMLParagraphElement = document.createElement("p");
                    let zutaten: HTMLParagraphElement = document.createElement("p");
                    let zubereitungsanweisung: HTMLParagraphElement = document.createElement("p");

                    let ptitel: HTMLParagraphElement = document.createElement("p");
                    let parbeitszeit: HTMLParagraphElement = document.createElement("p");
                    let pzutat1: HTMLParagraphElement = document.createElement("p");
                    let pzutat2: HTMLParagraphElement = document.createElement("p");
                    let pzutat3: HTMLParagraphElement = document.createElement("p");
                    let pzutat4: HTMLParagraphElement = document.createElement("p");
                    let pzutat5: HTMLParagraphElement = document.createElement("p");
                    let pzutat6: HTMLParagraphElement = document.createElement("p");
                    let pzutat7: HTMLParagraphElement = document.createElement("p");
                    let pzutat8: HTMLParagraphElement = document.createElement("p");
                    let pzutat9: HTMLParagraphElement = document.createElement("p");
                    let pzutat10: HTMLParagraphElement = document.createElement("p");
                    let panweisung: HTMLParagraphElement = document.createElement("p");

                    ptitel.innerHTML = rezeptenliste[i].titel;

                    parbeitszeit.innerHTML = rezeptenliste[i].arbeitszeit;
                    titel.innerHTML = "Titel:";
                    arbeitszeit.innerHTML = "Arbeitszeit:";
                    zutaten.innerHTML = "Zutaten:";
                    zubereitungsanweisung.innerHTML = "Zubereitungsanweisung:";
                    pzutat1.innerHTML = "- " + rezeptenliste[i].zutat1;
                    pzutat2.innerHTML = "- " + rezeptenliste[i].zutat2;
                    pzutat3.innerHTML = "- " + rezeptenliste[i].zutat3;
                    pzutat4.innerHTML = "- " + rezeptenliste[i].zutat4;
                    pzutat5.innerHTML = "- " + rezeptenliste[i].zutat5;
                    pzutat6.innerHTML = "- " + rezeptenliste[i].zutat6;
                    pzutat7.innerHTML = "- " + rezeptenliste[i].zutat7;
                    pzutat8.innerHTML = "- " + rezeptenliste[i].zutat8;
                    pzutat9.innerHTML = "- " + rezeptenliste[i].zutat9;
                    pzutat10.innerHTML = "- " + rezeptenliste[i].zutat10;

                    panweisung.innerHTML = rezeptenliste[i].zubereitungsanweisung;
                    divallerezepte.appendChild(titel);
                    divallerezepte.appendChild(ptitel);
                    divallerezepte.appendChild(arbeitszeit);
                    divallerezepte.appendChild(parbeitszeit);
                    divallerezepte.appendChild(zutaten);
                    divallerezepte.appendChild(pzutat1);
                    divallerezepte.appendChild(pzutat2);
                    divallerezepte.appendChild(pzutat3);
                    divallerezepte.appendChild(pzutat4);
                    divallerezepte.appendChild(pzutat5);
                    divallerezepte.appendChild(pzutat6);
                    divallerezepte.appendChild(pzutat7);
                    divallerezepte.appendChild(pzutat8);
                    divallerezepte.appendChild(pzutat9);
                    divallerezepte.appendChild(pzutat10);
                    divallerezepte.appendChild(zubereitungsanweisung);
                    divallerezepte.appendChild(panweisung);
                    divallerezepte.classList.add("diveinzelnrezept");
                    behaelter.appendChild(divallerezepte);
                    titel.classList.add("ueberschrift");
                    arbeitszeit.classList.add("ueberschrift");
                    zutaten.classList.add("ueberschrift");
                    zubereitungsanweisung.classList.add("ueberschrift");
                    behaelter.classList.add("rezepte");
                    let br: HTMLBRElement = document.createElement("br");
                    behaelter.appendChild(br);

                    let feedback: HTMLSpanElement = document.createElement("span");
                    divallerezepte.appendChild(feedback);
                    feedback.id = "feedback";
                    let favbutton: HTMLButtonElement = document.createElement("button");
                    favbutton.innerHTML = "favorisieren";
                    divallerezepte.appendChild(favbutton);
                    favbutton.addEventListener("click", Favorisieren);


                    async function Favorisieren(): Promise<void> {

                        let aktiveruser: string = localStorage.getItem("aktiveruser");

                        console.log("favorisieren");


                        let url: string = "https://tri1899gissose2021.herokuapp.com/favorisieren";
                        url += "?aktiveruser=" + aktiveruser + "&titel=" + rezeptenliste[i].titel + "&arbeitszeit=" + rezeptenliste[i].arbeitszeit + "&zutat1=" + rezeptenliste[i].zutat1 + "&zutat2=" + rezeptenliste[i].zutat2 + "&zutat3=" + rezeptenliste[i].zutat3 + "&zutat4=" + rezeptenliste[i].zutat4 + "&zutat5=" + rezeptenliste[i].zutat5 + "&zutat6=" + rezeptenliste[i].zutat6 + "&zutat7=" + rezeptenliste[i].zutat7 + "&zutat8=" + rezeptenliste[i].zutat8 + "&zutat9=" + rezeptenliste[i].zutat9 + "&zutat10=" + rezeptenliste[i].zutat10 + "&zubereitungsanweisung=" + rezeptenliste[i].zubereitungsanweisung;



                        let antwort: Response = await fetch(url);

                        let ausgabe: string = await antwort.text();
                        feedback.innerHTML = ausgabe;


                    }
                }
            };
        } else {
            behaelter.innerHTML = "melde dich bitte an!";
        }
    }


    if (document.querySelector("title").getAttribute("id") == "meinefavoriten") { //Code vgl Kapitel 3 Server und Daten
        if (user != null) {



            window.onload = async function datenAnzeigen(): Promise<void> {
                let aktiveruser: string = localStorage.getItem("aktiveruser");

                let url: string = "https://tri1899gissose2021.herokuapp.com/favsauslesen";

                url += "?aktiveruser=" + aktiveruser;

                let antwort: Response = await fetch(url);

                let ausgabe: string = await antwort.text();

                let favliste: MeineRezepte[] = JSON.parse(ausgabe);

                for (let i: number = 0; i < favliste.length; i++) {
                    let divallefavs: HTMLDivElement = document.createElement("div");

                    let titel: HTMLParagraphElement = document.createElement("p");
                    let arbeitszeit: HTMLParagraphElement = document.createElement("p");
                    let zutaten: HTMLParagraphElement = document.createElement("p");
                    let zubereitungsanweisung: HTMLParagraphElement = document.createElement("p");
                    let ptitel: HTMLParagraphElement = document.createElement("p");
                    let parbeitszeit: HTMLParagraphElement = document.createElement("p");
                    let pzutat1: HTMLParagraphElement = document.createElement("p");
                    let pzutat2: HTMLParagraphElement = document.createElement("p");
                    let pzutat3: HTMLParagraphElement = document.createElement("p");
                    let pzutat4: HTMLParagraphElement = document.createElement("p");
                    let pzutat5: HTMLParagraphElement = document.createElement("p");
                    let pzutat6: HTMLParagraphElement = document.createElement("p");
                    let pzutat7: HTMLParagraphElement = document.createElement("p");
                    let pzutat8: HTMLParagraphElement = document.createElement("p");
                    let pzutat9: HTMLParagraphElement = document.createElement("p");
                    let pzutat10: HTMLParagraphElement = document.createElement("p");
                    let panweisung: HTMLParagraphElement = document.createElement("p");

                    titel.innerHTML = "Titel:";
                    arbeitszeit.innerHTML = "Arbeitszeit:";
                    zutaten.innerHTML = "Zutaten:";
                    zubereitungsanweisung.innerHTML = "Zubereitungsanweisung:";

                    ptitel.innerHTML = favliste[i].titel;

                    parbeitszeit.innerHTML = favliste[i].arbeitszeit;

                    pzutat1.innerHTML = "- " + favliste[i].zutat1;
                    pzutat2.innerHTML = "- " + favliste[i].zutat2;
                    pzutat3.innerHTML = "- " + favliste[i].zutat3;
                    pzutat4.innerHTML = "- " + favliste[i].zutat4;
                    pzutat5.innerHTML = "- " + favliste[i].zutat5;
                    pzutat6.innerHTML = "- " + favliste[i].zutat6;
                    pzutat7.innerHTML = "- " + favliste[i].zutat7;
                    pzutat8.innerHTML = "- " + favliste[i].zutat8;
                    pzutat9.innerHTML = "- " + favliste[i].zutat9;
                    pzutat10.innerHTML = "- " + favliste[i].zutat10;

                    panweisung.innerHTML = favliste[i].zubereitungsanweisung;
                    divallefavs.appendChild(titel);
                    divallefavs.appendChild(ptitel);
                    divallefavs.appendChild(arbeitszeit);
                    divallefavs.appendChild(parbeitszeit);
                    divallefavs.appendChild(zutaten);
                    divallefavs.appendChild(pzutat1);
                    divallefavs.appendChild(pzutat2);
                    divallefavs.appendChild(pzutat3);
                    divallefavs.appendChild(pzutat4);
                    divallefavs.appendChild(pzutat5);
                    divallefavs.appendChild(pzutat6);
                    divallefavs.appendChild(pzutat7);
                    divallefavs.appendChild(pzutat8);
                    divallefavs.appendChild(pzutat9);
                    divallefavs.appendChild(pzutat10);
                    divallefavs.appendChild(zubereitungsanweisung);
                    divallefavs.appendChild(panweisung);
                    divallefavs.classList.add("diveinzelnrezept");
                    behaelter.appendChild(divallefavs);
                    behaelter.classList.add("rezepte");
                    titel.classList.add("ueberschrift");
                    arbeitszeit.classList.add("ueberschrift");
                    zutaten.classList.add("ueberschrift");
                    zubereitungsanweisung.classList.add("ueberschrift");
                    let br: HTMLBRElement = document.createElement("br");
                    behaelter.appendChild(br);

                    let loeschen: HTMLButtonElement = document.createElement("button");
                    loeschen.innerHTML = "löschen";
                    divallefavs.appendChild(loeschen);
                    loeschen.addEventListener("click", Loeschen);

                    async function Loeschen(): Promise<void> {
                        let url: string = "https://tri1899gissose2021.herokuapp.com/loeschen";
                        url += "?aktiveruser=" + favliste[i].aktiveruser + "&titel=" + favliste[i].titel + "&arbeitszeit=" + favliste[i].arbeitszeit + "&zutat1=" + favliste[i].zutat1 + "&zutat2=" + favliste[i].zutat2 + "&zutat3=" + favliste[i].zutat3 + "&zutat4=" + favliste[i].zutat4 + "&zutat5=" + favliste[i].zutat5 + "&zutat6=" + favliste[i].zutat6 + "&zutat7=" + favliste[i].zutat7 + "&zutat8=" + favliste[i].zutat8 + "&zutat9=" + favliste[i].zutat9 + "&zutat10=" + favliste[i].zutat10 + "&zubereitungsanweisung=" + favliste[i].zubereitungsanweisung;
                        let antwort: Response = await fetch(url);

                        let ausgabe: string = await antwort.text();
                        console.log(ausgabe);
                        window.location.reload();
                    }
                }
            };
        }
        else {
            behaelter.innerHTML = "melde dich an!";
        }
    }



    if (document.querySelector("title").getAttribute("id") == "meinerezepte") { //Code vgl Kapitel 3 Server und Daten
        if (user != null) {
            let listemeinerezepte: HTMLDivElement = <HTMLDivElement>document.getElementById("listemeinerezepte");


            let buttonspeichern: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rezepterstellen");
            buttonspeichern.addEventListener("click", Rezepterstellen);
            async function Rezepterstellen(): Promise<void> {
                let aktiveruser: string = localStorage.getItem("aktiveruser");

                let formData: FormData = new FormData(document.forms[0]);

                let url: string = "https://tri1899gissose2021.herokuapp.com/rezepterstellen";

                let query: URLSearchParams = new URLSearchParams(<any>formData);

                url += "?aktiveruser=" + aktiveruser;

                url = url + "&" + query.toString();

                let antwort: Response = await fetch(url);

                let ausgabe: string = await antwort.text();

                console.log(ausgabe);

                window.location.reload();
            }

            window.onload = async function datenAnzeigen(): Promise<void> {
                let aktiveruser: string = localStorage.getItem("aktiveruser");

                let url: string = "https://tri1899gissose2021.herokuapp.com/anzeigenmeineRezepte";

                url += "?aktiveruser=" + aktiveruser;

                let antwort: Response = await fetch(url);

                let ausgabe: string = await antwort.text();

                let meineRezepte: MeineRezepte[] = JSON.parse(ausgabe);

                for (let i: number = 0; i < meineRezepte.length; i++) {
                    let divmeinerezepte: HTMLDivElement = document.createElement("div");

                    let titel: HTMLParagraphElement = document.createElement("p");
                    let arbeitszeit: HTMLParagraphElement = document.createElement("p");
                    let zutaten: HTMLParagraphElement = document.createElement("p");
                    let zubereitungsanweisung: HTMLParagraphElement = document.createElement("p");

                    let ptitel: HTMLParagraphElement = document.createElement("p");
                    let parbeitszeit: HTMLParagraphElement = document.createElement("p");
                    let pzutat1: HTMLParagraphElement = document.createElement("p");
                    let pzutat2: HTMLParagraphElement = document.createElement("p");
                    let pzutat3: HTMLParagraphElement = document.createElement("p");
                    let pzutat4: HTMLParagraphElement = document.createElement("p");
                    let pzutat5: HTMLParagraphElement = document.createElement("p");
                    let pzutat6: HTMLParagraphElement = document.createElement("p");
                    let pzutat7: HTMLParagraphElement = document.createElement("p");
                    let pzutat8: HTMLParagraphElement = document.createElement("p");
                    let pzutat9: HTMLParagraphElement = document.createElement("p");
                    let pzutat10: HTMLParagraphElement = document.createElement("p");

                    let panweisung: HTMLParagraphElement = document.createElement("p");

                    ptitel.innerHTML = meineRezepte[i].titel;

                    parbeitszeit.innerHTML = meineRezepte[i].arbeitszeit;
                    titel.innerHTML = "Titel:";
                    arbeitszeit.innerHTML = "Arbeitszeit:";
                    zutaten.innerHTML = "Zutaten:";
                    zubereitungsanweisung.innerHTML = "Zubereitungsanweisung:";

                    pzutat1.innerHTML = "- " + meineRezepte[i].zutat1;
                    pzutat2.innerHTML = "- " + meineRezepte[i].zutat2;
                    pzutat3.innerHTML = "- " + meineRezepte[i].zutat3;
                    pzutat4.innerHTML = "- " + meineRezepte[i].zutat4;
                    pzutat5.innerHTML = "- " + meineRezepte[i].zutat5;
                    pzutat6.innerHTML = "- " + meineRezepte[i].zutat6;
                    pzutat7.innerHTML = "- " + meineRezepte[i].zutat7;
                    pzutat8.innerHTML = "- " + meineRezepte[i].zutat8;
                    pzutat9.innerHTML = "- " + meineRezepte[i].zutat9;
                    pzutat10.innerHTML = "- " + meineRezepte[i].zutat10;

                    panweisung.innerHTML = meineRezepte[i].zubereitungsanweisung;
                    divmeinerezepte.appendChild(titel);
                    divmeinerezepte.appendChild(ptitel);
                    divmeinerezepte.appendChild(arbeitszeit);
                    divmeinerezepte.appendChild(parbeitszeit);
                    divmeinerezepte.appendChild(zutaten);
                    divmeinerezepte.appendChild(pzutat1);
                    divmeinerezepte.appendChild(pzutat2);
                    divmeinerezepte.appendChild(pzutat3);
                    divmeinerezepte.appendChild(pzutat4);
                    divmeinerezepte.appendChild(pzutat5);
                    divmeinerezepte.appendChild(pzutat6);
                    divmeinerezepte.appendChild(pzutat7);
                    divmeinerezepte.appendChild(pzutat8);
                    divmeinerezepte.appendChild(pzutat9);
                    divmeinerezepte.appendChild(pzutat10);
                    divmeinerezepte.appendChild(zubereitungsanweisung);
                    divmeinerezepte.appendChild(panweisung);
                    divmeinerezepte.classList.add("diveinzelnrezept");
                    titel.classList.add("ueberschrift");
                    arbeitszeit.classList.add("ueberschrift");
                    zutaten.classList.add("ueberschrift");
                    zubereitungsanweisung.classList.add("ueberschrift");
                    listemeinerezepte.appendChild(divmeinerezepte);
                    listemeinerezepte.classList.add("rezepte");
                    let br: HTMLBRElement = document.createElement("br");
                    listemeinerezepte.appendChild(br);

                    let loeschen: HTMLButtonElement = document.createElement("button");
                    loeschen.innerHTML = "löschen";
                    divmeinerezepte.appendChild(loeschen);
                    divmeinerezepte.appendChild(br);
                    loeschen.addEventListener("click", Loeschen);


                    let updaten: HTMLButtonElement = document.createElement("button");
                    updaten.innerHTML = "updaten";
                    divmeinerezepte.appendChild(updaten);
                    updaten.addEventListener("click", Updaten);


                    async function Loeschen(): Promise<void> {

                        let url: string = "https://tri1899gissose2021.herokuapp.com/loeschenausdatenbank";
                        url += "?aktiveruser=" + meineRezepte[i].aktiveruser + "&titel=" + meineRezepte[i].titel + "&arbeitszeit=" + meineRezepte[i].arbeitszeit + "&zutat1=" + meineRezepte[i].zutat1 + "&zutat2=" + meineRezepte[i].zutat2 + "&zutat3=" + meineRezepte[i].zutat3 + "&zutat4=" + meineRezepte[i].zutat4 + "&zutat5=" + meineRezepte[i].zutat5 + "&zutat6=" + meineRezepte[i].zutat6 + "&zutat7=" + meineRezepte[i].zutat7 + "&zutat8=" + meineRezepte[i].zutat8 + "&zutat9=" + meineRezepte[i].zutat9 + "&zutat10=" + meineRezepte[i].zutat10 + "&zubereitungsanweisung=" + meineRezepte[i].zubereitungsanweisung;
                        let antwort: Response = await fetch(url);

                        let ausgabe: string = await antwort.text();
                        console.log(ausgabe);
                        window.location.reload();
                    }

                    async function Updaten(): Promise<void> {
                        sessionStorage.setItem("zutitel", meineRezepte[i].titel);
                        sessionStorage.setItem("zuzeit", meineRezepte[i].arbeitszeit);
                        sessionStorage.setItem("zutat1", meineRezepte[i].zutat1);
                        sessionStorage.setItem("zutat2", meineRezepte[i].zutat2);
                        sessionStorage.setItem("zutat3", meineRezepte[i].zutat3);
                        sessionStorage.setItem("zutat4", meineRezepte[i].zutat4);
                        sessionStorage.setItem("zutat5", meineRezepte[i].zutat5);
                        sessionStorage.setItem("zutat6", meineRezepte[i].zutat6);
                        sessionStorage.setItem("zutat7", meineRezepte[i].zutat7);
                        sessionStorage.setItem("zutat8", meineRezepte[i].zutat8);
                        sessionStorage.setItem("zutat9", meineRezepte[i].zutat9);
                        sessionStorage.setItem("zutat10", meineRezepte[i].zutat10);
                        sessionStorage.setItem("zubereitungsanweisung", meineRezepte[i].zubereitungsanweisung);
                        location.href = "updaten.html";
                    }
                }
            };
        } else {
            behaelter.innerHTML = "melde dich bitte an!";
        }
    }

    if (document.querySelector("title").getAttribute("id") == "updaten") { //Code vgl Kapitel 3 Server und Daten
        if (user != null) {
            let loeschenbuttonn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("update");
            loeschenbuttonn.addEventListener("click", Loeschen);

            let buttonupdate: HTMLButtonElement = <HTMLButtonElement>document.getElementById("update");
            buttonupdate.addEventListener("click", Erstellen);

            async function Erstellen(): Promise<void> {
                let aktiveruser: string = localStorage.getItem("aktiveruser");

                let formData: FormData = new FormData(document.forms[0]);

                let url: string = "https://tri1899gissose2021.herokuapp.com/rezepterstellen";

                let query: URLSearchParams = new URLSearchParams(<any>formData);

                url += "?aktiveruser=" + aktiveruser;

                url = url + "&" + query.toString();

                let antwort: Response = await fetch(url);

                let ausgabe: string = await antwort.text();

                console.log(ausgabe);

                location.href = "meine_rezepte.html";
            }

            async function Loeschen(): Promise<void> {
                let aktiveruser: string = localStorage.getItem("aktiveruser");
                let url: string = "https://tri1899gissose2021.herokuapp.com/loeschenausdatenbank";
                url += "?aktiveruser=" + aktiveruser + "&titel=" + sessionStorage.getItem("zutitel") + "&arbeitszeit=" + sessionStorage.getItem("zuzeit") + "&zutat1=" + sessionStorage.getItem("zutat1") + "&zutat2=" + sessionStorage.getItem("zutat2") + "&zutat3=" + sessionStorage.getItem("zutat3") + "&zutat4=" + sessionStorage.getItem("zutat4") + "&zutat5=" + sessionStorage.getItem("zutat5") + "&zutat6=" + sessionStorage.getItem("zutat6") + "&zutat7=" + sessionStorage.getItem("zutat7") + "&zutat8=" + sessionStorage.getItem("zutat8") + "&zutat9=" + sessionStorage.getItem("zutat9") + "&zutat10=" + sessionStorage.getItem("zutat10") + "&zubereitungsanweisung=" + sessionStorage.getItem("zubereitungsanweisung");
                let antwort: Response = await fetch(url);

                let ausgabe: string = await antwort.text();
                console.log(ausgabe);
                window.location.reload();
                location.href = "meine_rezepte.html";

            }
        } else {
            behaelter.innerHTML = "melde dich bitte an!";
        }
    }
}
//Meine Rezepte aus der Datenbank kommen von dieser Adresse https://kleinaberlecker.de/10-runde-zutaten/


