'use strict';

(function () {
    var sliderContainer = document.querySelector('.slider-container');
    var firstSlide = sliderContainer.querySelector('#first-slide');
    var secondSlide = sliderContainer.querySelector('#second-slide');
    var thirdSlide = sliderContainer.querySelector('#third-slide');

    var firstSlideBtn = sliderContainer.querySelector('#first-slide-btn');
    var secondSlideBtn = sliderContainer.querySelector('#second-slide-btn');
    var thirdSlideBtn = sliderContainer.querySelector('#third-slide-btn');

    firstSlideBtn.onclick = showCurrentSlide;

    secondSlideBtn.onclick = showCurrentSlide;

    thirdSlideBtn.onclick = showCurrentSlide;

    function showCurrentSlide() {
        firstSlide.hidden = true;
        secondSlide.hidden = true;
        thirdSlide.hidden = true;

        var slideId = this.dataset.id;
        var slide = sliderContainer.querySelector('#' + slideId);
        slide.hidden = false;
    }
})();

(function () {
    var sliderContainer = document.querySelector('.slider-container');
    var arrowLeft = sliderContainer.querySelector('.left-arrow');
    var arrowRight = sliderContainer.querySelector('.right-arrow');
    var slides = sliderContainer.querySelectorAll('.slides div');

    arrowLeft.onclick = changeSlide(-1);
    arrowRight.onclick = changeSlide(1);

    var slideIndex = 1;

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
})();