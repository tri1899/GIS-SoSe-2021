"use strict";
var Endabgabe;
(function (Endabgabe) {
    let test = document.getElementById("test");
    test.addEventListener("click", ZeigealleRezepte);
    let allerezepte = document.getElementById("behaelter");
    async function ZeigealleRezepte() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tri1899gissose2021.herokuapp.com/zeigrezepte";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        allerezepte.innerHTML = ausgabe;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script_rezepte.js.map