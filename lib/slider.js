'use strict';

(function () {
    var sliderContainer = document.querySelector('.slider-container');
    var firstSlide = sliderContainer.querySelector('#first-slide');
    var secondSlide = sliderContainer.querySelector('#second-slide');
    var thirdSlide = sliderContainer.querySelector('#third-slide');

    var firstSlideBtn = sliderContainer.querySelector('#first-slide-btn');
    var secondSlideBtn = sliderContainer.querySelector('#second-slide-btn');
    var thirdSlideBtn = sliderContainer.querySelector('#third-slide-btn');

    function showCurrentSlide() {
        firstSlide.hidden = true;
        secondSlide.hidden = true;
        thirdSlide.hidden = true;

        var slideId = this.dataset.id;
        var slide = sliderContainer.querySelector('#' + slideId);
        slide.hidden = false;
    }

    firstSlideBtn.onclick = showCurrentSlide;

    secondSlideBtn.onclick = showCurrentSlide;

    thirdSlideBtn.onclick = showCurrentSlide;
})();