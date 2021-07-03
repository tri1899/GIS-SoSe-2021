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

    //registrierung

    let registrierung: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registrierung");
    registrierung.addEventListener("click", Registrierung);
    let rueckgabe: HTMLDivElement = <HTMLDivElement>document.getElementById("serverantwortregis"); //anheften an die Seite


    async function Registrierung(): Promise<void> {
        let formData: FormData = new FormData(document.forms[1]);

        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/regestrieren";

        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);

        let ausgabe: string = await antwort.text();

        if (ausgabe == "User wurde gespeichert") {
            //location.href = "alle_rezepte.html";
            rueckgabe.innerHTML = "angelegt.";
        } else {
            rueckgabe.innerHTML = "Bitte füllen Sie die Felder aus.";
        }
    }
}
