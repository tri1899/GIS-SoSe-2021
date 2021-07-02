"use strict";
var Endabgabe;
(function (Endabgabe) {
    let buttonspeichern = document.getElementById("buttonabschicken");
    buttonspeichern.addEventListener("click", datenspeichern);
    async function datenspeichern() {
        let formData = new FormData(document.forms[0]);
        let url = "https://tri1899gissose2021.herokuapp.com/datenspeichern";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let ausgabe = await antwort.text();
        console.log(ausgabe);
        //location.href = "alle_rezepte.html";
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map