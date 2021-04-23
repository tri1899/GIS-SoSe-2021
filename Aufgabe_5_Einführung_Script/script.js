"use strict";
// Aufgabe 1
/*function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Alles");
    func2();
    console.log("Alles");
    func3();
}

a1();

function func1(): void {
    console.log("Gute!");
}

function func2(): void {
    console.log("klar?");
}

function func3(): void {
    console.log("Logo!");
}


//Aufgabe 2

function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();


//Aufgabe 3

function a3(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}


//Aufgabe 4

let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}*/
//Aufgabe 5
//a)
let x = 5;
let y = 2;
multiply(x, y);
console.log(x);
function multiply(_a, _b) {
    x = (_a * _b);
    return (x);
}
//b)
let maxi;
max(12, 11);
console.log(maxi);
function max(_c, _d) {
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
function zusammen() {
    let alleszusammen = 0;
    let k = 1;
    do {
        alleszusammen = alleszusammen + k;
        k++;
    } while (k < 101);
    console.log(alleszusammen);
}
zusammen();
//d)
/*
function random (_minimum: number, _maximum: number):  void {
    for (let o: number = 0; o < 10; o++) {
        console.log(Math.random() * _maximum);
    }
}
random(0, 100);
*/
//e)
/*
function factorial(_number: number): void {
    if (_number >= 1) {
        for (let s: number = _number; s > 0; s++)
        console.log("hallo");
    } else {
        console.log(1);
    }
}
let reingeben: number = 0;
factorial(reingeben);
console.log(reingeben);
*/
//f)
/*
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
*/
//Aufgabe 6
//a)
function gibhashtags() {
    let hashtag = "#";
    for (let l = 0; l < 7; l++) {
        console.log(hashtag);
        hashtag += "#";
    }
}
gibhashtags();
//b)
function teilbar() {
    for (let w = 0; w < 101; w++) {
        if (w % 3 == 0) {
            console.log("Fizz");
        }
        else if (w % 5 == 0 && w % 3 != 0) {
            console.log("Buzz");
        }
        else {
            console.log(w);
        }
    }
}
teilbar();
//# sourceMappingURL=script.js.map