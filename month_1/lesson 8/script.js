const images = document.querySelectorAll('img');
const slideNextBtn = document.querySelector('#slide-next');
let activeIndex = 0;

slideNextBtn.onclick = function () {
    images[activeIndex].classList.remove('slide-active');

    if (activeIndex + 1 === images.length) {
        activeIndex = 0;
    } else {
        activeIndex++;
    }

    images[activeIndex].classList.add('slide-active');
}

for (let img of images) {
    img.onmouseenter = function () {
        img.classList.add('zoom')
    }

    img.onmouseleave = function () {
        setTimeout(function () {
            img.classList.remove('zoom')
        }, 2000);
    }
}