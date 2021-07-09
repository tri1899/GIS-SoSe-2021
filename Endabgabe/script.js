"use strict";
var Endabgabe;
(function (Endabgabe) {
    //login
    if (document.querySelector("title").getAttribute("id") == "login") {
        let login = document.getElementById("login");
        login.addEventListener("click", Login);
        let rueckgabelogin = document.getElementById("serverantwortlogin");
        let loginentleeren = document.getElementById("Login");
        let zurregis = document.getElementById("weiterleitung");
        zurregis.addEventListener("click", Weiterleitung);
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
            else if (ausgabe == "Füllen Sie bitte alle Felder aus!") {
                rueckgabelogin.innerHTML = ausgabe;
                loginentleeren.reset();
            }
            else {
                localStorage.setItem("aktiveruser", ausgabe);
                console.log(ausgabe);
                location.href = "alle_rezepte.html";
            }
        }
        function Weiterleitung() {
            location.href = "registrierung.html";
        }
    }
    //registrierung
    if (document.querySelector("title").getAttribute("id") == "registrierung") {
        let registrierung = document.getElementById("registrierung");
        registrierung.addEventListener("click", Registrierung);
        let rueckgabe = document.getElementById("serverantwortregis"); //anheften an die Seite
        let loginregis = document.getElementById("Registration");
        let zurregis = document.getElementById("weiterleitung");
        zurregis.addEventListener("click", Weiterleitung);
        async function Registrierung() {
            let formData = new FormData(document.forms[0]);
            let url = "https://tri1899gissose2021.herokuapp.com/regestrieren";
            let query = new URLSearchParams(formData);
            url = url + "?" + query.toString();
            let antwort = await fetch(url);
            let ausgabe = await antwort.text();
            if (ausgabe == "Der Name existiert schon!") {
                rueckgabe.innerHTML = ausgabe;
                loginregis.reset();
            }
            else if (ausgabe == "Füllen Sie bitte alle Felder aus!") {
                rueckgabe.innerHTML = ausgabe;
                loginregis.reset();
            }
            else {
                localStorage.setItem("aktiveruser", ausgabe);
                console.log(ausgabe);
                location.href = "alle_rezepte.html";
            }
        }
        function Weiterleitung() {
            location.href = "login.html";
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map