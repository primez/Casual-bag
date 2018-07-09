(function () {
    let sliderContainer = document.querySelector('.slider-container');
    let slides = sliderContainer.querySelectorAll('.slides > div');

    let firstSlideBtn = sliderContainer.querySelector('#first-slide-btn');
    let secondSlideBtn = sliderContainer.querySelector('#second-slide-btn');
    let thirdSlideBtn = sliderContainer.querySelector('#third-slide-btn');
    let buttons = [firstSlideBtn, secondSlideBtn, thirdSlideBtn];

    let arrowLeft = sliderContainer.querySelector('.left-arrow');
    let arrowRight = sliderContainer.querySelector('.right-arrow');

    let currentSlideIndex = 0;
    let timeoutId = 0;

    firstSlideBtn.onclick = changeSlideByButton;
    secondSlideBtn.onclick = changeSlideByButton;
    thirdSlideBtn.onclick = changeSlideByButton;

    arrowLeft.onclick = function () {
        changeSlideByArrow(--currentSlideIndex);
    };

    arrowRight.onclick = function () {
        changeSlideByArrow(++currentSlideIndex);
    };


    setSlideTimeout();

    function changeSlideByButton() {
        let slideId = this.dataset.id;
        let slideToDisplay = sliderContainer.querySelector('#' + slideId);

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

        let slideToDisplay = slides[currentSlideIndex];

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
        for (let i = 0; i < slides.length; i++) {
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
        slideToDisplay.style.opacity = "0";
        slideToDisplay.hidden = false;
    }

    function checkOneButton(buttonIndex) {
        buttons.forEach(function (button) {
            button.checked = false;
        });

        let buttonToCheck = buttons[buttonIndex];
        buttonToCheck.checked = true;
    }
})();