// const $foodtopia = $('.foodtopia');
// const $icecream = $('.icecream');
var slides = document.getElementsByClassName('my-work');

function currentSlide(num) {

}

function nextSlide(num) {
    console.log(slides.length)

    var currSlide = slides[num];
    var next;

    if(num === slides.length - 1) {
        next = slides[0];
    } else {
        next = slides[num + 1];
    }

    currSlide.style.display = "none";
    next.style.display = "grid";

}

function prevSlide(num) {
    var currSlide = slides[num];
    var prev;

    if(num === 0) {
        prev = slides[slides.length - 1];
    } else {
        prev = slides[num - 1];
    }

    currSlide.style.display = "none";
    prev.style.display = "grid";

}
