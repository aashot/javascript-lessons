// const array = [3, 0, 45, 25, 33, 55]

// array.push(77);
// array.pop();
// array.unshift(-1);
// array.splice(0, 1)
// array.sort()
// array.reverse()

// console.log(array.indexOf(33));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function (item) {
//     if (item % 2 === 0) {
//         console.log(item)
//     }
// })

// const newNumber = numbers.map(function (item) {
//     return item * 2
// })

// const filterNumbers = numbers.filter(function (item ) {
//     return item % 2 === 0
// })

// const names = ['John', 'Anna', 'Alex', 'Vzgo', 'Alexander'];


// console.log(names.every(function (name) {
//     return name.length === 4;
// }))

const btns = document.querySelectorAll('button')
const btns2 = document.querySelectorAll('button')[0]

console.log('btns', btns)
console.log('btns2', btns2)


console.log(Array.from(btns).every(function(btn) {
    return btn.classList.contains('btn')
}))