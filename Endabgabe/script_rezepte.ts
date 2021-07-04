namespace Endabgabe {
    let test: HTMLButtonElement = <HTMLButtonElement>document.getElementById("test");
    test.addEventListener("click", ZeigealleRezepte);

    let allerezepte: HTMLDivElement = <HTMLDivElement>document.getElementById("behaelter");

    async function ZeigealleRezepte(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/zeigrezepte";

        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);

        let ausgabe: string = await antwort.text();

        allerezepte.innerHTML = ausgabe;

    }

}