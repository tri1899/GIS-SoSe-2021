namespace Endabgabe {
    let allerezepte: HTMLDivElement = <HTMLDivElement>document.getElementById("behaelter");

    window.onload = async function datenAnzeigen(): Promise <void> {

        let formData: FormData = new FormData (document.forms[0]);

        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/datenauslesen"; 

        let  query: URLSearchParams = new URLSearchParams(<any> formData);

        url = url + "?" + query.toString();

        let antwort: Response = await fetch (url);

        let ausgabe: string = await antwort.text();

        allerezepte.innerHTML = ausgabe;
    };
}

