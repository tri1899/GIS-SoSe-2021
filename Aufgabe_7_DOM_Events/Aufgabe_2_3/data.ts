namespace Aufgabe2 {
// Trikotwahl
    export let trikotwahl: Trikot [];
    
    let erstestrikot: Trikot = {marke: "nike", farbe: "schwarz", bild: trikotbilder[0]};
    
    let zweitestrikot: Trikot = {marke: "adidas", farbe: "blau", bild: trikotbilder[1]};
    
    let drittestrikot: Trikot = {marke: "puma", farbe: "weiss", bild: trikotbilder[2]};
    
    trikotwahl = [erstestrikot, zweitestrikot, drittestrikot];


    export let hosenwahl: Hose [] = [];

    let erstehose: Hose = {marke: "nike", farbe: "weiss", bild: ""};
    
    
    let zweitehose: Hose = {marke: "adidas", farbe: "schwarz", bild: ""};
    

    let drittehose: Hose = {marke: "punma", farbe: "blau", bild: ""};

    hosenwahl = [erstehose, zweitehose, drittehose];


    export let stutzenwahl: Stutzen [] = [];

    let ersterstutzen: Stutzen = {marke: "nike", farbe: "rot", bild: ""};
    

    let zweiterstutzen: Stutzen = {marke: "adidas", farbe: "gruen", bild: ""};
    

    let dritterstutzen: Stutzen = {marke: "punma", farbe: "weiß", bild: ""};
    
    stutzenwahl = [ersterstutzen, zweiterstutzen, dritterstutzen];

    console.log(trikotwahl[2]);
    
    
}
