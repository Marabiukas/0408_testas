const { addListener } = require("nodemon");

console.log('TESTAS')

//1 uzduotis
console.log('1 uzduotis');

const a = 3;
const b = 3;

if (a > b) {
    console.log(a)
} else
    if (b > a) {
        console.log(b)
    } else {console.log ('a = b')}

//2 uzduotis
console.log('2 uzduotis');

for (i=1; i<=10; i++) {
    console.log(i);
}

//3 uzduotis
console.log('3 uzduotis');

for (i=0; i<=10; i+=2) {
    console.log(i);
}

//4 uzduotis
console.log('4 uzduotis');

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


for (i=1; i<=5; i++) {
    atsskaicius = rand(0, 10);
    console.log(atsskaicius)
}

//-- 5 uzduotis --
console.log('5 uzduotis')

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

let randomnum = rand(0, 10);

while (randomnum !=5) {
    randomnum = rand(0, 10);
    console.log(randomnum)
    }

//-- 6 uzduotis --
console.log('6 uzduotis')

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

X = rand(20, 30);
let list = [];

for (let i=0; i<X; i++) {
    Y = rand(10, 30);
    list.push(Y);
}

let biggestNumber = list[0];

for (let i=1; i<X; i++) {
    if (list[i] > biggestNumber) {
    biggestNumber = list[i];
    }
}

console.log(list);
console.log(list.length);
console.log(biggestNumber);

//-- 7 uzduotis --
console.log('7 uzduotis')

function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

let masyvas = []
let Rmasyvas = ['A', 'B', 'C', 'D']
for (let i=1; i<=100; i++) {
    Z = rand(0, 3)
    masyvas.push(Rmasyvas[Z]) 
}

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i=0; i<100; i++) {
    if (masyvas[i] === 'A')
        countA++;
    if (masyvas[i] === 'B')
        countB++;
    if (masyvas[i] === 'C')
        countC++;
    if (masyvas[i] === 'D')
        countD++;
}

console.log(masyvas);
console.log(`A raidziu yra ${countA}`);
console.log(`B raidziu yra ${countB}`);
console.log(`C raidziu yra ${countC}`);
console.log(`D raidziu yra ${countD}`);


//-- 8 --
console.log('8 uzduotis')

function lygineSuma(x1, x2) {

    if (typeof x1 !== 'number' && typeof x1 !== 'object') {
        return `Abu kintamieji turi buti arba skaiciai, arba masyvai`;
    }

    if (typeof x2 !== 'number' && typeof x2 !== 'object') {
        return `Abu kintamieji turi buti arba skaiciai, arba masyvai`;
    }

    if (typeof x1 === 'number' && typeof x2 === 'object') {
        return 'Abu kintamieji turi buti arba skaiciai, arba masyvai'
    }
    
    if (typeof x1 === 'object' && typeof x2 === 'number') {
        return 'Abu kintamieji turi buti arba skaiciai, arba masyvai'
    }

    sumaM = x1.length + x2.length;

    if (typeof x1 === 'number' && (x1 + x2) % 2 !=0) {
        return `Skaiciu suma = ${x1 + x2} yra nelygine`;
    } else if (typeof x1 === 'object' && sumaM % 2 !=0) {
        return `Masyvu ilgiu suma = ${sumaM} yra nelygine`
    } else if (typeof x1 === 'number') {
        return `Skaiciu suma = ${x1 + x2}`
    } else {
        return `Masyvu ilgiu suma = ${sumaM}`
    }
}

console.log(lygineSuma([7, -Infinity], [7, 8]))

// -- 9 uzduotis --
console.log('9 uzduotis')

function pirminisSkaicius (skaicius) {
    if (typeof skaicius !== 'number' || !isFinite(skaicius)) {
        return ('Ivedete ne skaiciu');
    }

    if (skaicius <= 1) {
        return 'Iveskite skaiciu didesni uz 1';
    }

    let n = 0;

    for (let i=1; i<=skaicius; i++) {
        if (skaicius % i == 0) 
        n++;
    }
        if (n > 2) {
            return `${skaicius} nera pirminis skaicius`;
        } else {
            return `${skaicius} yra pirminis skaicius`;
    }
}

console.log(pirminisSkaicius(2))

//-- 10 uzduotis
console.log('10 uzduotis')

const telefonoNr = [3, 7, 0, 6, 7, 8, 2, 0, 3, 5]

function telefonoNumeris(telefonoNr) {
    return `(${telefonoNr[0]}${telefonoNr[1]}${telefonoNr[2]}) ${telefonoNr[3]}${telefonoNr[4]}${telefonoNr[5]}-${telefonoNr[6]}${telefonoNr[7]}${telefonoNr[8]}${telefonoNr[9]}`
}

console.log(telefonoNumeris(telefonoNr));
