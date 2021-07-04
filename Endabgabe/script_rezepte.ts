namespace Endabgabe {

    interface Rezeptdaten {
        titel: string;
        arbeitszeit: string;
        zutatnr1: string;
        zutatnr2: string;
        zuztatnr3: string;
        zutatnr4: string;
        zutatnr5: string;
    }

    let allerezepte: HTMLDivElement = <HTMLDivElement>document.getElementById("behaelter");

    window.onload = async function datenAnzeigen(): Promise <void> {

        let formData: FormData = new FormData (document.forms[0]);

        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/datenauslesen"; 

        let  query: URLSearchParams = new URLSearchParams(<any> formData);

        url = url + "?" + query.toString();

        let antwort: Response = await fetch (url);

        let ausgabe: string = await antwort.text();

        let rezeptenliste: Rezeptdaten[] = JSON.parse(ausgabe);

        for (let i: number = 0; i < rezeptenliste.length; i++) {


            let ptitel: HTMLParagraphElement = document.createElement("p");
            let parbeitszeit: HTMLParagraphElement = document.createElement("p");
            let pzutatnr1: HTMLParagraphElement = document.createElement("p");
            let pzutatnr2: HTMLParagraphElement = document.createElement("p");
            let pzutatnr3: HTMLParagraphElement = document.createElement("p");
            let pzutatnr4: HTMLParagraphElement = document.createElement("p");
            let pzutatnr5: HTMLParagraphElement = document.createElement("p");

            ptitel.innerHTML = rezeptenliste[i].titel;
            parbeitszeit.innerHTML = rezeptenliste[i].arbeitszeit;
            pzutatnr1.innerHTML = rezeptenliste[i].zutatnr1;
            pzutatnr2.innerHTML = rezeptenliste[i].zutatnr2;
            pzutatnr3.innerHTML = rezeptenliste[i].zuztatnr3;
            pzutatnr4.innerHTML = rezeptenliste[i].zutatnr4;
            pzutatnr5.innerHTML = rezeptenliste[i].zutatnr5;

            allerezepte.appendChild(ptitel);
            allerezepte.appendChild(parbeitszeit);
            allerezepte.appendChild(pzutatnr1);
            allerezepte.appendChild(pzutatnr2);
            allerezepte.appendChild(pzutatnr3);
            allerezepte.appendChild(pzutatnr4);
            allerezepte.appendChild(pzutatnr5);
        }
    };
}

