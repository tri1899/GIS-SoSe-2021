"use strict";
var Endabgabev2;
(function (Endabgabev2) {
    console.log("HAllo ");
    //login
    let rueckgabelogin = document.getElementById("serverantwortlogin");
    let loginentleeren = document.getElementById("Login");
    if (document.querySelector("title").getAttribute("id") == "login") {
        let login = document.getElementById("login");
        login.addEventListener("click", Login);
        async function Login() {
            let formData = new FormData(document.forms[0]);
            let url = "https://tri1899gissose2021.herokuapp.com/login";
            let query = new URLSearchParams(formData);
            url = url + "?" + query.toString();
            let antwort = await fetch(url);
            let ausgabe = await antwort.text();
            if (ausgabe == "User wurde nicht gefunden.") {
                rueckgabelogin.innerHTML = ausgabe;
                loginentleeren.reset();
            }
            else {
                sessionStorage.setItem("aktiveruser", ausgabe);
                location.href = "meinefavs.html";
            }
        }
    }
    if (document.querySelector("title").getAttribute("id") == "meinefavs") {
        let favs = document.getElementById("favs");
        favs.addEventListener("click", Favoriten);
        async function Favoriten() {
            let rueckgabelogin = document.getElementById("divfavs");
            let aktiveruser = "Hans";
            let url = "https://tri1899gissose2021.herokuapp.com/favs";
            url += "?nutzername=" + aktiveruser;
            let antwort = await fetch(url);
            let ausgabe = await antwort.text();
            rueckgabelogin.innerHTML = ausgabe;
        }
    }
    //registrierung
    /*let registrierung: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registrierung");
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
    }*/
})(Endabgabev2 || (Endabgabev2 = {}));
//# sourceMappingURL=script.js.map