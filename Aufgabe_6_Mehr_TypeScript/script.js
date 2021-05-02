"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    // a)
    function min(...nums) {
        let safemin = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < safemin)
                safemin = nums[i];
        }
        console.log(safemin);
    }
    min(12, 22, 9, 87, 16, 63, 89, 7, 12, 63, 2);
    // b)
    function isEven(_eineZahl) {
        let endlos = true;
        let safezahl = _eineZahl;
        while (endlos) {
            if (safezahl == 0) {
                console.log(0);
                return (true);
            }
            else if (safezahl == 1) {
                console.log(1);
                return (false);
            }
            else {
                safezahl = safezahl - 2;
            }
        }
        return (null);
    }
    console.log(isEven(75));
    //Bei 50: Ausgabe 0 und true, 50 ist eine gerade Zahl
    //bei 75: Ausgabe: 1 und false, 75 ist eine ungerade Zahl
    //Bei -1 würde ich mich in einer Endlosschleife befinden, die beiden If Statments werden nie true werden.
    // Wir bräuchten einen anderen Datentype, der auch negative Zahlen zurück geben könnte.
    // c)
    /*
    
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
    */
    class Student {
        constructor(_vorname, _nachname, _alter, _wohnort, _martrikelnummer) {
            this.vorname = _vorname;
            this.nachname = _nachname;
            this.alter = _alter;
            this.wohnort = _wohnort;
            this.martrikelnummer = _martrikelnummer;
        }
        showInfo2() {
            console.log("Name: " + this.vorname, this.nachname, ", Alter: " + this.alter);
        }
    }
    let thomasmue = new Student("Thomas", "Müller", 31, "München", 187187);
    let bastiansch = new Student("Bastian", "Schweinsteiger", 35, "München", 361361);
    let oliverkah = new Student("Oliver", "Kahn", 51, "München", 111222);
    let studentenregister = [thomasmue, bastiansch, oliverkah];
    studentenregister.push(new Student("Markus", "Schleicher", 19, "Donaueschingen", 78083));
    thomasmue.showInfo2();
    bastiansch.showInfo2();
    oliverkah.showInfo2();
    studentenregister[3].showInfo2();
    //Nr 2 a)
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    //let arrBack: number[] = backwards(arr);
    function backwards(_uebergabearray) {
        let arrayback = new Array;
        for (let y = _uebergabearray.length - 1; y >= 0; y--) {
            arrayback.push(_uebergabearray[y]);
        }
        return (arrayback);
    }
    console.log(backwards(arr));
    // b)
    function join(_erstesarray, _zweitesarray) {
        for (let i = 0; i < _zweitesarray.length; i++) {
            _erstesarray.push(_zweitesarray[i]);
        }
        return (_erstesarray);
    }
    let arr4 = [5, 7, 15, 12];
    console.log(join(arr4, [15, 9001, -440]));
    //Bonus
    function join2(_erstesarray, ...nums) {
        for (let x = 0; x < nums.length; x++) {
            let safenums = nums[x];
            for (let i = 0; i < safenums.length; i++) {
                _erstesarray.push(safenums[i]);
            }
        }
        console.log(_erstesarray);
    }
    let array9 = [2, 87, 96, 45];
    join2([5, 2, 1, 7], [2, 2, 187], [5, 12, 187, 99, 12], [12, 85, 96, 78], array9, [12, 0, 78, 79], [16, 87, 98, 15]);
    //c) mit Bonus
    function split(array, von, bis) {
        let hanspeter = [];
        if (von >= 0 && bis < array.length) {
            for (let i = von; i < bis; i++) {
                hanspeter.push(array[i]);
            }
            return hanspeter;
        }
        else {
            console.log("Ungültige Eingabe");
            return (array);
        }
    }
    let array2 = [0, 2, 8, 12, 6, 8, 7, 10, 12];
    console.log(split(array2, 1, 4));
    // Aufgabe 3
    let Landschaft;
    (function (Landschaft) {
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
    })(Landschaft || (Landschaft = {}));
    let canvas = document.getElementById("zweiteCanvas");
    let context = canvas.getContext("2d");
    // Aufgabe 3 b)
    class Rechteck {
        constructor() {
            this.breite = Math.floor(Math.random() * 100);
            this.hoehe = Math.floor(Math.random() * 100);
        }
        erstelleRechteck(_erstenummer, _zweitenummer) {
            let o = _erstenummer;
            let p = _zweitenummer;
            o = Math.floor(Math.random() * 500);
            p = Math.floor(Math.random() * 400);
            context.beginPath();
            context.fillStyle = "red";
            context.fillRect(o, p, this.breite, this.hoehe);
        }
    }
    let erstesRechteck = new Rechteck();
    let zweitesRechteck = new Rechteck();
    let drittesRechteck = new Rechteck();
    let viertesRechteck = new Rechteck();
    let fuenftesRechteck = new Rechteck();
    let sechstesRechteck = new Rechteck();
    let rechtecke = new Array();
    rechtecke = [erstesRechteck, zweitesRechteck, drittesRechteck, viertesRechteck, fuenftesRechteck, sechstesRechteck];
    rechtecke[0].erstelleRechteck(150, 250);
    rechtecke[1].erstelleRechteck(450, 100);
    rechtecke[2].erstelleRechteck(400, 50);
    rechtecke[3].erstelleRechteck(10, 20);
    rechtecke[4].erstelleRechteck(78, 99);
    rechtecke[1].erstelleRechteck(187, 361);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=script.js.map