(function () {
    let sliderContainer = document.querySelector('.slider-container');
    let firstSlide = sliderContainer.querySelector('#first-slide');
    let secondSlide = sliderContainer.querySelector('.slides div:nth-child(2)');
    let thirdSlide = sliderContainer.querySelector('.slides div:nth-child(3)');

    let firstSlideBtn = sliderContainer.querySelector('#first-slide');
    let secondSlideBtn = sliderContainer.querySelector('#second-slide');
    let thirdSlideBtn = sliderContainer.querySelector('#third-slide');

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





