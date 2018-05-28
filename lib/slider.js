'use strict';

(function () {
    var sliderContainer = document.querySelector('.slider-container');
    var firstSlide = sliderContainer.querySelector('.slides div:nth-child(1)');
    var secondSlide = sliderContainer.querySelector('.slides div:nth-child(2)');
    var thirdSlide = sliderContainer.querySelector('.slides div:nth-child(3)');

    var firstSlideBtn = sliderContainer.querySelector('#first-slide');
    var secondSlideBtn = sliderContainer.querySelector('#second-slide');
    var thirdSlideBtn = sliderContainer.querySelector('#third-slide');

    firstSlideBtn.onclick = function () {
        firstSlide.hidden = false;
        secondSlide.hidden = true;
        thirdSlide.hidden = true;
    };

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