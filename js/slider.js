(function () {
    let sliderContainer = document.querySelector('.slider-container');
    let firstSlide = sliderContainer.querySelector('.slides div:nth-child(1)');
    let secondSlide = sliderContainer.querySelector('.slides div:nth-child(2)');
    let thirdSlide = sliderContainer.querySelector('.slides div:nth-child(3)');

    let firstSlideBtn = sliderContainer.querySelector('#first-slide');
    let secondSlideBtn = sliderContainer.querySelector('#second-slide');
    let thirdSlideBtn = sliderContainer.querySelector('#third-slide');

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





