'use strict';

(function () {
    var sliderContainer = document.querySelector('.slider-container');
    var slides = sliderContainer.querySelectorAll('.slides > div');

    var firstSlideBtn = sliderContainer.querySelector('#first-slide-btn');
    var secondSlideBtn = sliderContainer.querySelector('#second-slide-btn');
    var thirdSlideBtn = sliderContainer.querySelector('#third-slide-btn');
    var buttons = [firstSlideBtn, secondSlideBtn, thirdSlideBtn];

    var arrowLeft = sliderContainer.querySelector('.left-arrow');
    var arrowRight = sliderContainer.querySelector('.right-arrow');

    var currentSlideIndex = 0;
    var timeoutId = 0;

    firstSlideBtn.onclick = changeSlideByButton;
    secondSlideBtn.onclick = changeSlideByButton;
    thirdSlideBtn.onclick = changeSlideByButton;

    arrowLeft.onclick = function () {
        changeSlideByArrow(--currentSlideIndex);
    };

    arrowRight.onclick = function () {
        changeSlideByArrow(++currentSlideIndex);
    };

    function changeSlideByButton() {
        var slideId = this.dataset.id;
        var slideToDisplay = sliderContainer.querySelector('#' + slideId);

        displayOneSlide(slideToDisplay);
        updateCurrentIndex(slideToDisplay);

        setSlideTimeout();
    }

    function changeSlideByArrow(n) {
        if (n >= slides.length) {
            currentSlideIndex = 0;
        }

        if (n < 0) {
            currentSlideIndex = slides.length - 1;
        }

        var slideToDisplay = slides[currentSlideIndex];

        displayOneSlide(slideToDisplay);
        checkOneButton(currentSlideIndex);

        setSlideTimeout();
    }

    function setSlideTimeout() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            changeSlideByArrow(++currentSlideIndex);
        }, 10000);
    }

    function updateCurrentIndex(slideToDisplay) {
        for (var i = 0; i < slides.length; i++) {
            if (slides[i].id === slideToDisplay.id) {
                currentSlideIndex = i;
                return;
            }
        }
    }

    function displayOneSlide(slideToDisplay) {
        slides.forEach(function (slide) {
            slide.hidden = true;
        });

        slideToDisplay.hidden = false;
    }

    function checkOneButton(buttonIndex) {
        buttons.forEach(function (button) {
            button.checked = false;
        });

        var buttonToCheck = buttons[buttonIndex];
        buttonToCheck.checked = true;
    }
})();