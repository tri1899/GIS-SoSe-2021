namespace Endabgabe {

    //login
    if (document.querySelector("title").getAttribute("id") == "login") {

        let rueckgabelogin: HTMLDivElement = <HTMLDivElement>document.getElementById("serverantwortlogin");

        let loginbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loginbutton");
        loginbutton.addEventListener("click", login);
        
        let zurregis: HTMLButtonElement = <HTMLButtonElement>document.getElementById("weiterleitung");
        zurregis.addEventListener("click", weiterleitung);

        async function login(): Promise<void> {
            let formData: FormData = new FormData(document.forms[0]);

            let url: string = "https://tri1899gissose2021.herokuapp.com/login";

            let query: URLSearchParams = new URLSearchParams(<any>formData);

            url = url + "?" + query.toString();

            let antwort: Response = await fetch(url);

            let ausgabe: string = await antwort.text();

            if (ausgabe == "User wurde nicht gefunden.") {
                rueckgabelogin.innerHTML = ausgabe;
                
            } else if (ausgabe == "Füllen Sie bitte alle Felder aus!") {
                rueckgabelogin.innerHTML = ausgabe;
            } else {
                localStorage.setItem("aktiveruser", ausgabe);
                console.log(ausgabe);
                location.href = "alle_rezepte.html";
            }
        }

        function weiterleitung(): void {
            location.href = "registrierung.html";  
        }
    }

    //registrierung

    if (document.querySelector("title").getAttribute("id") == "registrierung") {

        let registrierungbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonregistrierung");
        registrierungbutton.addEventListener("click", registrierung);
        let rueckgabe: HTMLDivElement = <HTMLDivElement>document.getElementById("serverantwortregis"); //anheften an die Seite
        let loginregis: HTMLFormElement = <HTMLFormElement>document.getElementById("registration");
        let zurregis: HTMLButtonElement = <HTMLButtonElement>document.getElementById("weiterleitung");
        zurregis.addEventListener("click", weiterleitung);

        async function registrierung(): Promise<void> {
            let formData: FormData = new FormData(document.forms[0]);

            let url: string = "https://tri1899gissose2021.herokuapp.com/regestrieren";

            let query: URLSearchParams = new URLSearchParams(<any>formData);

            url = url + "?" + query.toString();

            let antwort: Response = await fetch(url);

            let ausgabe: string = await antwort.text();

            if (ausgabe == "Der Name existiert schon!") {
                rueckgabe.innerHTML = ausgabe;
                loginregis.reset();
            } else if (ausgabe == "Füllen Sie bitte alle Felder aus!") {
                rueckgabe.innerHTML = ausgabe;
                loginregis.reset();
            }
            else {
                localStorage.setItem("aktiveruser", ausgabe);
                console.log(ausgabe);
                location.href = "alle_rezepte.html";
            }
        }

        function weiterleitung(): void {
            location.href = "login.html";
        }
    }
}

