// Object

// const person = {
//     name: 'Alex',
//     surname: 'Galoyan',
//     age: 54,
//     isTaxist: true,
//     isCooker: false
// };

// person.name = 'Sasha';
// person.age = 32;

// delete person.isTaxist;

// console.log(person.name);
// console.log(person.surname);
// console.log(person);

const car = {
    model: 'audi',
    color: 'green',
    wheels: 4,
    isNew: true,
    horsePowers: 400,
    doors: 2,
    isRastamoshka: false,
    vinNumber: 88923742343,
    isGerman: true
}

car.doors = 3

if (car.doors === 2) {
    console.log('cupe')
} else {
    console.log('sedan')
}


car.color = 'red'

if (car.color === 'green') {
    console.log('mer meqenan a')
} else {
    console.log('is inch avtoya ?')
}

console.log(car.isGerman)

if (car.isGerman) {
    console.log('Germanakan avtoya')
}

if (!car.isGerman) {
    console.log('Germanakan avto chi!')
}

if (!car.isRastamoshka) {
    console.log('hle che kara qshes')
}