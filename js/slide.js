// const $foodtopia = $('.foodtopia');
// const $icecream = $('.icecream');
var slides = document.getElementsByClassName('my-work');


// function goToSlide(curr, dest) {
//     var currSlide = slides[curr];
//     var destSlide = slides[dest];
// }

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

//img slides
slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("naviguide-img");
    var dots = document.getElementsByClassName("img-dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
var naviguideImgSlides = document.getElementsByClassName();
