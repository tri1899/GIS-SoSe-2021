namespace Endabgabe {

    let buttonspeichern: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonabschicken"); 
    buttonspeichern.addEventListener("click", datenspeichern); 

    
    async function datenspeichern(): Promise<void> { 
        let formData: FormData = new FormData (document.forms[0]);
        
        let url: RequestInfo = "https://tri1899gissose2021.herokuapp.com/datenspeichern";

        let  query: URLSearchParams = new URLSearchParams(<any> formData);

        url = url + "?" + query.toString(); 

        let antwort: Response = await fetch (url);

        let ausgabe: string = await antwort.text();

        console.log(ausgabe);
        
        //location.href = "alle_rezepte.html";
          
    }
}