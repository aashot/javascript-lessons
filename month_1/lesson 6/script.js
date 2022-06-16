// Vercnel id ov
// const logo = document.getElementById('logo')

// vercnel bolore class i anunov
// const paragraphs = document.getElementsByClassName('paragraph')

// vercnel bolore tag i anunov
// const list = document.getElementsByTagName('ul')

// vercenel css selector ov
// const uniqueSpan = document.querySelector('.container .some-text .unique-span')

// vercenel bolore css selector ov
// const uniqueSpans = document.querySelectorAll('.container .some-text .unique-span')

// function btnClick() { 
//     console.log('helovu!');
// }

const btn = document.getElementsByTagName('button')[0];

btn.onclick = function () {
    if (btn.className === 'fancy-btn') {
        btn.classList.remove('fancy-btn')
    } else {
        btn.classList.add('fancy-btn')
    }
}