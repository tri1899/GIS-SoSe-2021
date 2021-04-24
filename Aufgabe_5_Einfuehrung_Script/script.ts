// Aufgabe 1
//a) Ausgabe: Alles klar? Logo!
//Alle Variablennamen sind zulässig, (müssen aber Strings sein) int geht logischerweise nicht.
//b) Funktion wird aufgerufen, String x wird angelegt und danach ausgegeben ("Alles"), anschließend wird die function 1 aufgerufen und deren Wert ausgegeben ("Klar?"), danach springt das Programm wieder hoch und gibt "Logo" aus.
//c)
function a1(): void {
    let x: string = "Alles";
    console.log(x);
    function1();
    console.log(x);
    function2();
    console.log(x);
    function3();
}

a1();

function function1(): void {
    console.log("Gute!");
}

function function2(): void {
    console.log("klar?");
}

function function3(): void {
    console.log("Logo!");
}


//Aufgabe 2
//Was wird ausgegeben?
//9 8 7 6 5 4 3 2 1
//durch do wird die 9 zuerst ausgegeben, danach zieht es von i immer 1 ab und solang die while schleife true ist wird die Zahl ausgegeben.

function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();

/*
//Aufgabe 3 
//Fehler einbauen
function a3(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i + 1;
    } while ( i > 0);
}
a3();
*/

//Aufgabe 4
//Ausgabe: Hallo Bla Hallo Blubb Test
//Annhame bestätigt
//Hallo wird ausgegeben, Bla ist eine lokale Variable wird ausgegeben stribt dann aber danach, s bleibt immer noch Hallo,
//Unterschied zwischen lokale und globale Variablen: Globale Variable: wird im Hauptprogramm eingeführt, lokale: wird nur innenhalb einer Funktionsdefinition benutzt. (stribt nach ende der Funktion)
//Übergabeparameter: man kann einen Wert an eine Funktion oder Methode übergeben und Änderungen, die die Methode an diesem Wert vornimmt weiterverarbeiten
//Variablen sind einfache Container für digitale Daten. Sie speichern Daten von Programmen in der Programmiereung.
//Funktionen geben deinem Programm Übersicht. Sie können überall aufgerufen werden.
let s: string = "Hallo";
console.log(s);
func1(s);
console.log(s);
func2();
func3();
console.log(s);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    s = "Test";
}


//Aufgabe 5
//a)
let x: number = 6;
let y: number = 2;
multiply(x, y);
console.log(x);

function multiply(_a: number, _b: number): number {
    x = (_a * _b);
    return (x);
}

//b)
let maxi: number;
max(18, 20);
console.log(maxi);


function max(_c: number, _d: number): number {
    if (_c > _d) {
        maxi = _c;
        return (maxi);
    }
    else {
        maxi = _d;
        return (maxi);
    }
}

//c)

function zusammen(): void {
    let alleszusammen: number = 0;
    let k: number = 1;
    do {
        alleszusammen = alleszusammen + k;
        k++;
    } while (k < 101);
    console.log(alleszusammen);
}
zusammen();

//d)

function random (_minimum: number, _maximum: number):  void {
    for (let o: number = 0; o < 10; o++) {
        console.log(Math.random() * _maximum); 
    }
}
random(0, 100);

//e)

let together: number = 1;
factorial(5);
console.log(together);
function factorial(_number: number): number {
    let b: number = 1;
    do {
        together = together * b;
        b++;
    } while (b <= _number);
    return(together);
}


//f)

function lapyears(): void {
    for (let v: number = 1900; v < 2021; v++) {
        if (v % 4 == 0 && v % 100 != 0) {
            console.log(v + " ist ein Schaltjahr.");
        } else if (v % 400 == 0) {
            console.log(v + " ist ein Schaltjahr.");
        }
    }
}
lapyears();


//Aufgabe 6
//a)

function gibhashtags(): void {
    let hashtag: string = "#";
    for (let l: number = 0; l < 7; l++) {
        console.log(hashtag);
        hashtag += "#";
    }
}
gibhashtags();


//b) c)

function teilbar(): void {
    for (let w: number = 1; w < 101; w++) {
        if (w % 3 == 0 && w % 5 == 0) {
            console.log("FizzBuzz");
        } else if (w % 3 == 0) {
            console.log("Fizz");
        } else if (w % 5 == 0 && w % 3 != 0) {
            console.log("Buzz");
        } else {
            console.log(w);
        }
    }
}

teilbar();

//d)


let schachi: String = "";
for (let y: number = 0; y < 8; y++ ) { //Höhe
    for ( let x: number = 0; x < 4; x++ ) { //Breite
        if (y % 2 == 0) schachi += " #";
        else schachi += "# ";

    }
    schachi += "\n";
}
console.log(schachi);

//e)

function schachbrett(_groesse: number): String {
let _schachi: String = "";
for (let y: number = 0; y < _groesse; y++ ) { //Höhe
    for ( let x: number = 0; x < (_groesse / 2); x++ ) {//Breite
        if (y % 2 == 0) _schachi += " #";
        else _schachi += "# ";

    }
    _schachi += "\n";
}
return(_schachi);

}

console.log(schachbrett(10));  
