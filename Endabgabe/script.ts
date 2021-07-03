namespace Endabgabe {

    //login
    let login: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    login.addEventListener("click", Login);
    let rueckgabelogin: HTMLDivElement = <HTMLDivElement>document.getElementById("serverantwortlogin");

    async function Login(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/login";

        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);

        let ausgabe: string = await antwort.text();

        if (ausgabe == "User wurde gefunden") {
            rueckgabelogin.innerHTML = ausgabe;
            //location.href = "alle_rezepte.html";
        } else {
            rueckgabelogin.innerHTML = ausgabe;
        }

    }

    let zurregis: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zurregis");
    zurregis.addEventListener("click", Zurregis);

    function Zurregis(): void {
        location.href = "registrierung.html";
    }

    //registrierung
    let registrierung: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonabschicken");
    registrierung.addEventListener("click", Registrierung);
    let rueckgabe: HTMLDivElement = <HTMLDivElement>document.getElementById("serverantwort"); //anheften an die Seite


    async function Registrierung(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/datenspeichern";

        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);

        let ausgabe: string = await antwort.text();

        if (ausgabe == "User wurde gespeichert") {
            location.href = "alle_rezepte.html";
        } else {
            rueckgabe.innerHTML = "Bitte füllen Sie die Felder aus.";
        }
    }
}