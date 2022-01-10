
namespace MilkaApple {

    let seitenaufbau: HTMLDivElement = <HTMLDivElement>document.getElementById("seitenaufbau");
    let dasmachtmilkaaus: HTMLDivElement = document.createElement("div");
    dasmachtmilkaaus.id = "dasmachtmilkaaus";
    let dasmachtmilkaausdiv: HTMLDivElement = document.createElement("div");
    dasmachtmilkaausdiv.id = "dasmachtmilkaausdiv";

    let pgeschmack: HTMLParagraphElement = document.createElement("p");
    pgeschmack.classList.add("parani");
    let pzutaten: HTMLParagraphElement = document.createElement("p");
    pzutaten.classList.add("parani");
    let palpenmilch: HTMLParagraphElement = document.createElement("p");
    palpenmilch.classList.add("parani");
    let phochtaelern: HTMLParagraphElement = document.createElement("p");
    phochtaelern.classList.add("parani");
    let pauszutaten: HTMLParagraphElement = document.createElement("p");
    pauszutaten.classList.add("parani");
    let prezeptur: HTMLParagraphElement = document.createElement("p");
    prezeptur.classList.add("parani");
    let pdrinist: HTMLParagraphElement = document.createElement("p");
    pdrinist.classList.add("parani");
    let pmilka: HTMLParagraphElement = document.createElement("p");
    pmilka.classList.add("parani");



    pgeschmack.innerHTML = "Unverwechselbar zarter Geschmack.";
    pzutaten.innerHTML = "Hochwertige Zutaten.";
    palpenmilch.innerHTML = "100% Alpenmilch aus Tälern und";
    phochtaelern.innerHTML = "Hochtälern der Alpen.";
    pauszutaten.innerHTML = "Ausgewählte Zutaten in jeder Tafel Schokolade.";
    prezeptur.innerHTML = "Einheitliche Rezeptur.";
    pdrinist.innerHTML = "Drin ist, was draufsteht.";
    pmilka.innerHTML = "Das ist Milka.";

    dasmachtmilkaausdiv.appendChild(pgeschmack);
    dasmachtmilkaausdiv.appendChild(pzutaten);
    dasmachtmilkaausdiv.appendChild(palpenmilch);
    dasmachtmilkaausdiv.appendChild(phochtaelern);
    dasmachtmilkaausdiv.appendChild(phochtaelern);
    dasmachtmilkaausdiv.appendChild(pauszutaten);
    dasmachtmilkaausdiv.appendChild(pdrinist);
    dasmachtmilkaausdiv.appendChild(pmilka);
    dasmachtmilkaaus.appendChild(dasmachtmilkaausdiv);
    seitenaufbau.appendChild(dasmachtmilkaaus);



    let genaudierichtigegroeße: HTMLDivElement = document.createElement("div");
    genaudierichtigegroeße.id = "genaudierichtigegroeße";

}
