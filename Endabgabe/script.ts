namespace Endabgabe {

   //login

    let login: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    login.addEventListener("click", Login);
    let rueckgabelogin: HTMLDivElement = <HTMLDivElement>document.getElementById("serverantwortlogin");
    let loginentleeren: HTMLFormElement = <HTMLFormElement>document.getElementById("Login");

    async function Login(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);

        let url: string = "https://tri1899gissose2021.herokuapp.com/login";

        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);

        let ausgabe: string = await antwort.text();

        if (ausgabe == "User wurde gefunden") {
            location.href = "alle_rezepte.html";
        } else if (ausgabe == "User wurde nicht gefunden.") {
            rueckgabelogin.innerHTML = ausgabe;
            loginentleeren.reset();
        }
        rueckgabelogin.innerHTML = ausgabe;
        loginentleeren.reset();
    }

    //registrierung

    let registrierung: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registrierung");
    registrierung.addEventListener("click", Registrierung);
    let rueckgabe: HTMLDivElement = <HTMLDivElement>document.getElementById("serverantwortregis"); //anheften an die Seite
    let loginregis: HTMLFormElement = <HTMLFormElement>document.getElementById("Registration");



    async function Registrierung(): Promise<void> {
        let formData: FormData = new FormData(document.forms[1]);

        let url: string = "https://tri1899gissose2021.herokuapp.com/regestrieren";

        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);

        let ausgabe: string = await antwort.text();

        if (ausgabe == "User wurde gespeichert") {
            location.href = "alle_rezepte.html";
        } else if (ausgabe == "Der Name existiert schon!") {
            rueckgabe.innerHTML = ausgabe;
            loginregis.reset();
        }
        rueckgabe.innerHTML = ausgabe;
        loginregis.reset();
    }
}

