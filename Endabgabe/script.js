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
            location.href = "alle_rezepte.html";
        }
        else {
            rueckgabelogin.innerHTML = ausgabe;
        }
    }
    let zurregis = document.getElementById("zurregis");
    zurregis.addEventListener("click", Zurregis);
    function Zurregis() {
        location.href = "registrierung.html";
    }
    //registrierung
    let registrierung = document.getElementById("buttonabschicken");
    registrierung.addEventListener("click", Registrierung);
    let rueckgabe = document.getElementById("serverantwort"); //anheften an die Seite
    async function Registrierung() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tri1899gissose2021.herokuapp.com/datenspeichern";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        if (ausgabe == "User wurde gespeichert") {
            location.href = "alle_rezepte.html";
        }
        else {
            rueckgabe.innerHTML = "Bitte füllen Sie die Felder aus.";
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map