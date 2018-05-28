'use strict';

(function () {
    var sliderContainer = document.querySelector('.slider-container');
    var firstSlide = sliderContainer.querySelector('#first-slide');
    var secondSlide = sliderContainer.querySelector('.slides div:nth-child(2)');
    var thirdSlide = sliderContainer.querySelector('.slides div:nth-child(3)');

    var firstSlideBtn = sliderContainer.querySelector('#first-slide');
    var secondSlideBtn = sliderContainer.querySelector('#second-slide');
    var thirdSlideBtn = sliderContainer.querySelector('#third-slide');

    function showCurrentSlide() {
        firstSlide.hidden = true;
        secondSlide.hidden = true;
        thirdSlide.hidden = true;
        this.hidden = false;
    }

    firstSlideBtn.onclick = showCurrentSlide;

    secondSlideBtn.onclick = function () {
        firstSlide.hidden = true;
        secondSlide.hidden = false;
        thirdSlide.hidden = true;
    };

    thirdSlideBtn.onclick = function () {
        firstSlide.hidden = true;
        secondSlide.hidden = true;
        thirdSlide.hidden = false;
    };
})();