// const array = [
//     [2, 4, 5],
//     {},
//     { name: 'Alex' },
//     0,
//     'AA'
// ]
// console.log(array[1])
// console.log(array.length)
// console.log(array.length - 1)

// array.push(3)
// array.shift()
// array.pop()

// const user = {
//     name: 'Alex',
//     'anun-azganun': 'Alex Simonyan',
//     age: 12
// }

// console.log(user.name)
// console.log(user['name'])
// delete user.age

// console.log(user)
// let user = { anun: 'Gago' }


// barevel()

// function barevel() {
//     console.log('barev dzez')
// }

// barevel()

// var barevel = function () {
//     console.log('barev dzez')
// }

// barevel()


// const gumarel = function (tiv1, tiv2 = 1) {
//     return tiv1 + tiv2;
// }

// console.log(gumarel(5))


// const tver = [2, 5, 10, 3]

// let sum = 0; // 2, 7, 

// for (let i = 0; i < tver.length; i = i + 1) {
//     sum = sum + tver[i];
// }

// console.log(sum)

// const ashxatavardzer = {
//     samvel: 100000,
//     karen: 1000000,
//     srbuhi: 40000,
//     komitas: 20000,
// }

// let sum = 0;
// const tver = [2, 5, 10, 3]
// for (let key in tver) {
    // console.log(tver[key])
    // sum = sum + ashxatavardzer[key];
// }

// console.log(sum)


// const a = 9;
// const b = 7;

// const chorsyPoqraYotic = a < b ? 'ayo' : 'voch'
// const InyMetsZroic = a > b ? 'ayo' : 'voch'

// console.log(InyMetsZroic)


// const tariq = 14;

// // classic if operator
// function sovorkanIf() {
//     if (tariq < 18) {
//         console.log('Gna stuc')
//     } else {
//         console.log('Bari galust')
//     }
// }

// sovorkanIf()

// ternary operator
// function ternar() {
//     return tariq < 18
//         ? console.log('gna stuc')
//         : console.log('Bari galust')
// }

// ternar()

// const tver = [1, 2, 3, 4, 5, 6, 7, 8]

// const filtracTver = tver.map(function (item) {
//     // return item % 2 ? null : item;
//     if (item % 2 === 0) {
//         return item;
//     } else {
//         return null
//     }
// })

// const mihatovMec = tver.map(function (item) { 
//     return item + 1
// })

// console.log(mihatovMec);

// const zuygTver = [];
// const filter = tver.map(function (item) {
//     if (item % 2 === 0) {
//         zuygTver.push(item)
//     }
// })

// console.log(zuygTver)

// function filter(array) {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             result.push(array[i])
//         }
//     }

//     return result; 
// }

// console.log(filter(tver))

// function mihatovMets(array, tiv = 1) {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] + tiv)
//     }

//     return result;
// }

// console.log(mihatovMets(tver, 3))
// console.log(mihatovMets([1, 3, 4], 3))


// const tver = [1, 2, 3, 4, 5, 6, 7, 8]


// tver.forEach(function (item) {
//     console.log(item)
// })