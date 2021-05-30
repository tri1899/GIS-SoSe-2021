"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    //Teilaufgabe 2
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("name")); //Konsolenausgabe
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]); ///Konsolenausgabe Eingang Stelle 0
            console.log("name: " + entry[1]); //Konsolenausgabe
        }
        let query = new URLSearchParams(formData);
        let _url = "https://tri1899gissose2021.herokuapp.com/"; //Verknüpfung mit der herokuapp
        _url = _url + "?" + query.toString(); //Url in String umwandeln
        console.log(_url); //Konsolenausgabe
        let response = await fetch(_url); // auf url warten
        let antwort = await response.text(); //Auf die antwort warten
        console.log(antwort);
        let rueckgabe = document.getElementById("serverausgabe"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
        rueckgabe.innerText = antwort;
    }
    let button = document.getElementById("button");
    button.addEventListener("click", sendData); //Button um Funktion aufzurufen
})(P_3_1Server || (P_3_1Server = {})); //Ende namespace
//# sourceMappingURL=script.js.map