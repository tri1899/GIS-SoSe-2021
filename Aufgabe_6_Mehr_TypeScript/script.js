"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    // a)
    /*

    function min(...nums: number[]): void {
        let safemin: number = nums[0];
        for (let i: number = 0; i < nums.length; i++) {
            if (nums[i] < safemin)
                safemin = nums[i];
        }

        console.log(safemin);
    }
    min(12, 22, 9, 87, 16, 63, 89, 7, 12);



    // b)

    function isEven(_eineZahl: number): boolean {
        let endlos: boolean = true;
        let safezahl: number = _eineZahl;
        while (endlos) {
            if (safezahl == 0) {
                console.log(0);
                return(true);
                break;
                
            } else if (safezahl == 1) {
                console.log(1);
                return (false);
                break;
                
            } else {
                safezahl = safezahl - 2;
            }
            
        }
        return(null);

    }

    console.log(isEven(50));
    //Bei 50: Ausgabe 0 und true, 50 ist eine gerade Zahl
    //bei 75: Ausgabe: 1 und false, 75 ist eine ungerade Zahl

    //Bei -1 würde ich mich in einer Endlosschleife befinden, die beiden If Statments werden nie true werden.
    // Wir bräuchten einen anderen Datentype, der auch negative Zahlen zurück geben könnte.
    


    

    // c)
    
    interface Student {
        vorname: string;
        nachname: string;
        alter: number;
        wohnort: string;
        martrikelnummer: number;

    }

    let thomas: Student = { vorname: "Thomas", nachname: "Müller", alter: 31, wohnort: "München", martrikelnummer: 187187 };
    let bastian: Student = { vorname: "Bastian", nachname: "Schweinsteiger", alter: 35, wohnort: "München", martrikelnummer: 361361 };
    let oliver: Student = { vorname: "Oliver", nachname: "Kahn", alter: 51, wohnort: "München", martrikelnummer: 111222 };
    let studentenverzeichnis: Student[] = [thomas, bastian, oliver];
    studentenverzeichnis.push({ vorname: "Mats", nachname: "Hummels", alter: 31, wohnort: "Dortmund", martrikelnummer: 787851 });

    function showInfo(_studentenregister: Student[]): void {
        for (let i: number = 0; i < _studentenregister.length; i++) {
            console.log(_studentenregister[i].vorname, _studentenregister[i].nachname, _studentenregister[i].alter);

        }
    }

    showInfo(studentenverzeichnis);

    

    class Student {
        
        vorname: string;
        nachname: string;
        alter: number;
        wohnort: string;
        martrikelnummer: number;
 
        constructor(_vorname: string, _nachname: string, _alter: number, _wohnort: string, _martrikelnummer: number) {
            this.vorname = _vorname;
            this.nachname = _nachname;
            this.alter = _alter;
            this.wohnort = _wohnort;
            this.martrikelnummer = _martrikelnummer;
        }
 
        showInfo (): void {
            console.log("Name: " + this.vorname, this.nachname, ", Alter: " + this.alter);
        }
    }
    let thomas: Student = new Student ("Thomas", "Müller", 31, "München", 187187);
    let bastian: Student = new Student ("Bastian", "Schweinsteiger", 35, "München", 361361);
    let oliver: Student = new Student ("Oliver", "Kahn", 51, "München", 111222);
    thomas.showInfo();
    bastian.showInfo();
    oliver.showInfo();

    */
    //Nr 2 a)
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    //let arrBack: number[] = backwards(arr);
    function backwards(_arrayback) {
        for (let i = 0; i < _arrayback.length; i++) {
            console.log((_arrayback[_arrayback.length - i - 1]));
        }
        return (_arrayback);
    }
    backwards(arr);
    // b)
    function join(_erstesarray, _zweitesarray) {
        for (let i = 0; i < _zweitesarray.length; i++) {
            _erstesarray.push(_zweitesarray[i]);
        }
        return (_erstesarray);
    }
    console.log(join(arr, [15, 9001, -440]));
    //Bonus (geht nicht.)
    /*
    function join(_erstesarray: number[], ...nums: number[]): void {
        for (let i: number = 0; i < nums.length; i++) {
            _erstesarray.push(nums[i]);

        }
    }

    console.log(join([123, 666, -911], (12, 22, 9, 87, 16, 63, 89, 7, 12)));
    */
    //c)
    /*
    function split(array: number[], left: number, right: number): number[] {
        let copy: number[] = [];
        for (let i: number = left; i <= right; i++) {
            copy.push(array[i]);
        }
        console.log(copy);
        return copy;
    }
    
    split(arr, 0, 3);
    */
    // Aufgabe 3
    let ABC;
    (function (ABC) {
        let canvas = document.getElementById("myFirstCanvas");
        let context = canvas.getContext("2d");
        context.fillStyle = "green";
        context.fillRect(0, 0, 500, 400);
        context.fillStyle = "lightblue";
        context.fillRect(0, 0, 500, 220);
        context.beginPath(); //Sonne
        context.fillStyle = "yellow";
        context.arc(500, 10, 40, 0, Math.PI * 2);
        context.fill();
        context.beginPath(); //Wolke
        context.fillStyle = "white";
        context.arc(350, 75, 40, 0, Math.PI * 2);
        context.fill();
        context.beginPath(); //Wolke
        context.fillStyle = "white";
        context.arc(370, 30, 30, 0, Math.PI * 2);
        context.fill();
        context.beginPath(); //Wolke 
        context.fillStyle = "white";
        context.arc(400, 60, 40, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.fillStyle = "brown"; //Hausuntergeschoss
        context.fillRect(100, 140, 150, 110);
        context.beginPath();
        context.fillStyle = "black"; //Türe
        context.fillRect(140, 190, 40, 60);
        context.beginPath(); //Dach
        context.fillStyle = "black";
        context.moveTo(100, 140);
        context.lineTo(175, 70);
        context.lineTo(250, 140);
        context.closePath();
        context.fill();
        context.stroke();
        context.beginPath();
        context.fillStyle = "brown"; //Baumstamm
        context.fillRect(385, 200, 40, 120);
        context.beginPath(); //Blätter 
        context.fillStyle = "green";
        context.arc(410, 200, 30, 0, Math.PI * 2);
        context.fill();
        context.beginPath(); //Blätter 
        context.fillStyle = "green";
        context.arc(370, 200, 20, 0, Math.PI * 2);
        context.fill();
        context.beginPath(); //Blätter 
        context.fillStyle = "green";
        context.arc(380, 170, 20, 0, Math.PI * 2);
        context.fill();
        context.beginPath(); //Blätter 
        context.fillStyle = "green";
        context.arc(400, 165, 20, 0, Math.PI * 2);
        context.fill();
        context.beginPath(); //Blätter 
        context.fillStyle = "green";
        context.arc(425, 170, 20, 0, Math.PI * 2);
        context.fill();
        context.beginPath(); //Blätter 
        context.fillStyle = "green";
        context.arc(435, 200, 20, 0, Math.PI * 2);
        context.fill();
    })(ABC || (ABC = {}));
    let canvas = document.getElementById("zweiteCanvas");
    let context = canvas.getContext("2d");
    // Aufgabe 3 b)
    class Rechteck {
        constructor() {
            this.breite = Math.floor(Math.random() * 100);
            this.hoehe = Math.floor(Math.random() * 100);
        }
        erstelleRechteck(erstenummer, zweitenummer) {
            context.beginPath();
            context.fillStyle = "red";
            context.fillRect(erstenummer, zweitenummer, this.breite, this.hoehe);
        }
        drawRandom() {
            let x = Math.floor(Math.random() * 500);
            let y = Math.floor(Math.random() * 400);
            context.beginPath();
            context.rect(x, y, this.breite, this.hoehe);
            context.fillStyle = "red";
            context.fill();
            context.stroke();
        }
    }
    let erstesRechteck = new Rechteck();
    erstesRechteck.erstelleRechteck(300, 200);
    let zweitesRechteck = new Rechteck();
    zweitesRechteck.erstelleRechteck(100, 500);
    const r4 = new Rechteck();
    r4.erstelleRechteck(120, 50);
    const r5 = new Rechteck();
    r5.erstelleRechteck(100, 250);
    const r6 = new Rechteck();
    r6.erstelleRechteck(180, 390);
    let rectangles = new Array();
    rectangles = [r4, r5, r6];
    rectangles.forEach(rec => rec.drawRandom());
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=script.js.map