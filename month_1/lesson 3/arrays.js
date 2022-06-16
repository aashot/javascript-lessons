// var object = {}
// var array = []

// Array, zangvac, masiv
// const cars = ['audi', 'bmw', 'jaguar', 'ferrari', 'mers', 'honda']
// console.log(cars)
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[cars.length - 1])

// const cities = [
//     'Yerevan',
//     'Artashat',
//     'Gyumri',
//     'Yeghegnadzor',
//     'Vanadzor'
// ]

// cities.push(1)
// cities.push('Vaiq', 2) // avelacnel
// cities.pop() // jnjel verjic
// cities.shift() // jnjel demic
// cities.unshift('2') // avelacnel demic

// console.log(cities)

// const cars = ['audi', 'bmw', 'jaguar', 'ferrari', 'mers', 'honda']

// for, while, do while

// for (var item = 0; item < cars.length; item++) {
//     var car = cars[item]
    // if (car === 'audi') {
    //     console.log('ara es inch lav avto a')
    // } else if (car === 'bmw') {
    //     console.log('et el vate chi')
    // } else if (car === 'mers') {
    //     console.log('mers chem sirum')
    // }
// }

// let i = 0;

// while (i < cars.length) {
//     console.log(i);
//     console.log(cars[i]);
//     i++;
// }

const fruits = ['apple', 'banana', 'cherry', 'apricot', 'watermelon', 'orange']
let i = 0;

do {
    let fruit = fruits[i];

    // if (fruit === 'banana') {
    //     console.log('ari bananov fresh xmenq')
    // } else if (fruit === 'orange') {
    //     console.log('ari sok xmenq')
    // }

    switch (fruit) {
        case 'banana':
            console.log('ari bananov fresh xmenq')
            break;
        case 'orange':
            console.log('ari sok xmenq')
            break;
        case 'apricot':
            console.log('ari cirani chir utenq')
            break;
    }

    i++;
} while (i <= fruits.length);
