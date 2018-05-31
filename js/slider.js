(function () {
    let sliderContainer = document.querySelector('.slider-container');
    let firstSlide = sliderContainer.querySelector('#first-slide');
    let secondSlide = sliderContainer.querySelector('#second-slide');
    let thirdSlide = sliderContainer.querySelector('#third-slide');

    let firstSlideBtn = sliderContainer.querySelector('#first-slide-btn');
    let secondSlideBtn = sliderContainer.querySelector('#second-slide-btn');
    let thirdSlideBtn = sliderContainer.querySelector('#third-slide-btn');

    firstSlideBtn.onclick = showCurrentSlide;

    secondSlideBtn.onclick = showCurrentSlide;

    thirdSlideBtn.onclick = showCurrentSlide;

    function showCurrentSlide() {
        firstSlide.hidden = true;
        secondSlide.hidden = true;
        thirdSlide.hidden = true;

        let slideId = this.dataset.id;
        let slide = sliderContainer.querySelector('#' + slideId);
        slide.hidden = false;
    } 
})();

(function () {
    let sliderContainer = document.querySelector('.slider-container');
    let arrowLeft = sliderContainer.querySelector('.left-arrow');
    let arrowRight = sliderContainer.querySelector('.right-arrow');
    let slides = sliderContainer.querySelectorAll('.slides div');

    arrowLeft.onclick = changeSlide(-1);
    arrowRight.onclick = changeSlide(1);

    let slideIndex = 1; 

    function changeSlide(n) {
        showSlides(slideIndex += n)
    }

    function showSlides(n) {
        
        if (n > slides.length) {slideIndex = 1;}
        if (n < 1) {slideIndex = slides.length;}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    } 
})();






