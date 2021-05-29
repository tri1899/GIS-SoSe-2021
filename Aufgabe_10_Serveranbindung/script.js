"use strict";
var Praktikumsaufgabe_P3_1;
(function (Praktikumsaufgabe_P3_1) {
    async function formData(_pURL) {
        let response = await fetch(_pURL);
        console.log("Response", response);
        let formData = await response.formData();
        console.log(formData.get("fname"));
        console.log(formData.get("femail"));
        console.log(formData.get("fbetreff"));
        console.log(formData.get("fdatum"));
        console.log(formData.get("ftextfeld"));
        console.log(formData.get("fdokument"));
    }
    formData("https://tri1899gissose2021.herokuapp.com/"); //Link App und Github
})(Praktikumsaufgabe_P3_1 || (Praktikumsaufgabe_P3_1 = {}));
//# sourceMappingURL=script.js.map