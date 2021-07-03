"use strict";
var Endabgabe;
(function (Endabgabe) {
    //login
    let login = document.getElementById("login");
    login.addEventListener("click", Login);
    let rueckgabelogin = document.getElementById("serverantwortlogin");
    async function Login() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tri1899gissose2021.herokuapp.com/login";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        if (ausgabe == "User wurde gefunden") {
            rueckgabelogin.innerHTML = ausgabe;
            //location.href = "alle_rezepte.html";
        }
        else {
            rueckgabelogin.innerHTML = ausgabe;
        }
    }
    //registrierung
    let registrierung = document.getElementById("registrierung");
    registrierung.addEventListener("click", Registrierung);
    let rueckgabe = document.getElementById("serverantwortregis"); //anheften an die Seite
    async function Registrierung() {
        let formData = new FormData(document.forms[1]);
        let url = "https://tri1899gissose2021.herokuapp.com/regestrieren";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        if (ausgabe == "User wurde gespeichert") {
            //location.href = "alle_rezepte.html";
            rueckgabe.innerHTML = "angelegt.";
        }
        else {
            rueckgabe.innerHTML = "Bitte füllen Sie die Felder aus.";
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map