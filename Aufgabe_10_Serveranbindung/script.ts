namespace Praktikumsaufgabe_P3_1 {

    async function formData(_pURL: RequestInfo): Promise<void> {
        let response: Response = await fetch(_pURL);
        console.log("Response", response);
        let formData: FormData = await response.formData();
        console.log(formData.get("fname"));
        console.log(formData.get("femail"));
        console.log(formData.get("fbetreff"));
        console.log(formData.get("fdatum"));
        console.log(formData.get("ftextfeld"));
        console.log(formData.get("fdokument"));

    }
    formData("https://tri1899gissose2021.herokuapp.com/"); //Link App und Github
}