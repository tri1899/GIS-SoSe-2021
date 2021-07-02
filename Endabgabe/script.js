"use strict";
var Endabgabe;
(function (Endabgabe) {
    let buttonspeichern = document.getElementById("buttonabschicken");
    buttonspeichern.addEventListener("click", datenspeichern);
    let rueckgabe = document.getElementById("serverantwort"); //anheften an die Seite
    async function datenspeichern() {
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