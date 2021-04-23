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
}


//Aufgabe 5
//a)
let x: number = 5;
let y: number = 2;
multiply(x, y);
console.log(x);

function multiply(_a: number, _b: number): number {
    x = (_a * _b);
    return (x);
}

//b)
let maxi: number;
max(12, 11);
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
factorial(12);
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
    for (let w: number = 0; w < 101; w++) {
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
*/
/*
let schachiausgabe: String = "";

for (let y: number = 0; y <= 8; y++) {
    for ( let x: number = 0; x <= 8; x++) {
        if ((y + x) % 2 != 0 ) {
            schachiausgabe += "#";
        } else {
            schachiausgabe += "";
        }
    }
    schachiausgabe = "/n";
}

console.log(schachiausgabe);
*/

let schachi: String = "";
for (let y: number = 0; y < 8; y++ ) {
    for ( let x: number = 0; x < 4; x++ ) {
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
     


