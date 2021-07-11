"use strict";
var Endabgabe;
(function (Endabgabe) {
    //login
    if (document.querySelector("title").getAttribute("id") == "login") {
        let rueckgabelogin = document.getElementById("serverantwortlogin");
        let loginbutton = document.getElementById("loginbutton");
        loginbutton.addEventListener("click", login);
        let zurregis = document.getElementById("weiterleitung");
        zurregis.addEventListener("click", weiterleitung);
        async function login() {
            let formData = new FormData(document.forms[0]);
            let url = "https://tri1899gissose2021.herokuapp.com/login";
            let query = new URLSearchParams(formData);
            url = url + "?" + query.toString();
            let antwort = await fetch(url);
            let ausgabe = await antwort.text();
            if (ausgabe == "User wurde nicht gefunden.") {
                rueckgabelogin.innerHTML = ausgabe;
            }
            else if (ausgabe == "Füllen Sie bitte alle Felder aus!") {
                rueckgabelogin.innerHTML = ausgabe;
            }
            else {
                localStorage.setItem("aktiveruser", ausgabe);
                console.log(ausgabe);
                location.href = "alle_rezepte.html";
            }
        }
        function weiterleitung() {
            location.href = "registrierung.html";
        }
    }
    //registrierung
    if (document.querySelector("title").getAttribute("id") == "registrierung") {
        let registrierungbutton = document.getElementById("buttonregistrierung");
        registrierungbutton.addEventListener("click", registrierung);
        let rueckgabe = document.getElementById("serverantwortregis"); //anheften an die Seite
        let loginregis = document.getElementById("registration");
        let zurregis = document.getElementById("weiterleitung");
        zurregis.addEventListener("click", weiterleitung);
        async function registrierung() {
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
        function weiterleitung() {
            location.href = "login.html";
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map