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

//-- 7 uzduotis --
console.log('7 uzduotis')

//-- 8 --
console.log('8 uzduotis')

function lygineSuma (num1, num2) {
    if (typeof num1 == 'number' && num2 !== 'number') {
        return 'Abu kintamieji turi buti skaiciai'
    }

    suma = num1 + num2;
    return `Suma = ${suma}`;

    if (suma % 2 !=0) {
        return 'Suma yra nelygine'
    }

    if (typeof num1 == 'object' && num2 !== 'object') {
        return 'Abu kintamieji turi buti masyvai'
    }
}

console.log(lygineSuma(3,4))

// -- 9 uzduotis --
console.log('9 uzduotis')

function pirminisSkaicius (skaicius) {
    if (typeof skaicius !== 'number' || !isFinite(skaicius)) {
        return ('Ivedete ne skaiciu');
    }

    if (skaicius == 1) {
        return 'Iveskite skaiciu didesni uz 1';
    }

    if (skaicius == 2) {
        return '2 yra pirminis skaicius'
    }

    for (i=2; i<skaicius; i++) {
        if (skaicius % i !==0) {
            return `${skaicius} yra pirminis skaicius`
        } else {
            return `${skaicius} nera pirminis skaicius`
    }
}
}

console.log(pirminisSkaicius(11))

//-- 10 uzduotis
console.log('10 uzduotis')

const telefonoNr = [3, 7, 0, 6, 7, 8, 2, 0, 3, 5]

function telefonoNumeris(telefonoNr) {
    return `(${telefonoNr[0]}${telefonoNr[1]}${telefonoNr[2]}) ${telefonoNr[3]}${telefonoNr[4]}${telefonoNr[5]}-${telefonoNr[6]}${telefonoNr[7]}${telefonoNr[8]}${telefonoNr[9]}`
}

console.log(telefonoNumeris(telefonoNr));
