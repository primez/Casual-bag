(function () {
    let sliderContainer = document.querySelector('.slider-container');
    let firstSlide = sliderContainer.querySelector('#first-slide');
    let secondSlide = sliderContainer.querySelector('#second-slide');
    let thirdSlide = sliderContainer.querySelector('#third-slide');

    let firstSlideBtn = sliderContainer.querySelector('#first-slide-btn');
    let secondSlideBtn = sliderContainer.querySelector('#second-slide-btn');
    let thirdSlideBtn = sliderContainer.querySelector('#third-slide-btn');

    function showCurrentSlide() {
        firstSlide.hidden = true;
        secondSlide.hidden = true;
        thirdSlide.hidden = true;

        let slideId = this.dataset.id;
        let slide = sliderContainer.querySelector('#' + slideId);
        slide.hidden = false;
    }

    firstSlideBtn.onclick = showCurrentSlide;

    secondSlideBtn.onclick = showCurrentSlide;

    thirdSlideBtn.onclick = showCurrentSlide;
})();





