"use strict";
var Endabgabe;
(function (Endabgabe) {
    //login
    let login = document.getElementById("login");
    login.addEventListener("click", Login);
    let rueckgabelogin = document.getElementById("serverantwortlogin");
    let loginentleeren = document.getElementById("Login");
    async function Login() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tri1899gissose2021.herokuapp.com/login";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        if (ausgabe == "User wurde gefunden") {
            location.href = "alle_rezepte.html";
        }
        else if (ausgabe == "User wurde nicht gefunden.") {
            rueckgabelogin.innerHTML = ausgabe;
            loginentleeren.reset();
        }
        rueckgabelogin.innerHTML = ausgabe;
        loginentleeren.reset();
    }
    //registrierung
    let registrierung = document.getElementById("registrierung");
    registrierung.addEventListener("click", Registrierung);
    let rueckgabe = document.getElementById("serverantwortregis"); //anheften an die Seite
    let loginregis = document.getElementById("Registration");
    async function Registrierung() {
        let formData = new FormData(document.forms[1]);
        let url = "https://tri1899gissose2021.herokuapp.com/regestrieren";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        if (ausgabe == "User wurde gespeichert") {
            location.href = "alle_rezepte.html";
        }
        else if (ausgabe == "Der Name existiert schon!") {
            rueckgabe.innerHTML = ausgabe;
            loginregis.reset();
        }
        rueckgabe.innerHTML = ausgabe;
        loginregis.reset();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map