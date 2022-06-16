const number1 = document.getElementById('number-1');
const number2 = document.getElementById('number-2');
const resultDiv = document.getElementById('result');
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')

function validation () {
    if (!number1.value || !number2.value) {
        alert('Lracreq tvere!')
    }
}

function hashvel(method) {
    const integer1 = parseInt(number1.value);
    const integer2 = parseInt(number2.value);
    let result;

    validation()

    if (method === 'plus') {
        result = integer1 + integer2;
    }

    if (method === 'minus') {
        result = integer1 - integer2;
    }

    if (isNaN(result)) {
        return
    }

    resultDiv.innerText = result;
    number1.value = ''
    number2.value = '' 
}

plusBtn.onclick = function () {
    hashvel('plus')
}

minusBtn.onclick = function () {
    hashvel('minus')
}

// plusBtn.onclick = function() {
//     validation()
//     const integer1 = parseInt(number1.value);
//     const integer2 = parseInt(number2.value);
//     const result = integer1 + integer2;

    // if (isNaN(result)) {
    //     return
    // }

//     resultDiv.innerText = result;
//     number1.value = ''
//     number2.value = ''
// }

// minusBtn.onclick = function() {
//     validation()
//     const integer1 = parseInt(number1.value);
//     const integer2 = parseInt(number2.value);
//     const result = integer1 - integer2;

//     if (isNaN(result)) {
//         return
//     }

//     resultDiv.innerText = result;
//     number1.value = ''
//     number2.value = ''   
// }