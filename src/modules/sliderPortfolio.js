const sliderPortfolio = () => {
    const portfolioSlider = document.querySelector('.portfolio-slider');
    const sliderSlide = document.querySelectorAll('.portfolio-slider__slide');
    const sliderSlides = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame');
    const arrowLeft = document.getElementById('portfolio-arrow_left');
    const arrowRight = document.getElementById('portfolio-arrow_right');
    const portfolioPopup = document.querySelector('.popup-portfolio');
    const portfolioPopupSlide = document.querySelectorAll('.popup-portfolio-slider__slide');
    const popupText = portfolioPopup.querySelectorAll('.popup-portfolio-text');
    const portfolioSliderCounter = document.getElementById('popup-portfolio-counter');
    const current = portfolioSliderCounter.querySelector('.slider-counter-content__current');
    const total = portfolioSliderCounter.querySelector('.slider-counter-content__total');
    const popupArrowRight = document.getElementById('popup_portfolio_right');
    const popupArrowLeft = document.getElementById('popup_portfolio_left');
    let count = 0;


    document.body.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('#portfolio-arrow_right')) {
            count++;
            for (let i = 0; i < sliderSlide.length; i++) {
                sliderSlide[i].style.transform = `translateX(-${sliderSlide[0].clientWidth * count}px)`;
            }
        }
        if (target.closest('#portfolio-arrow_left')) {
            count--;
            for (let i = 0; i < sliderSlide.length; i++) {
                sliderSlide[i].style.transform = `translateX(-${sliderSlide[0].clientWidth * count}px)`;
            }
        }
        if (count !== 0) {
            arrowLeft.style.display = 'flex';
        } else {
            arrowLeft.style.display = 'none';
        }
        if (count === (sliderSlide.length - 3)) {
            arrowRight.style.display = 'none';
        } else {
            arrowRight.style.display = 'flex';
        }
    });


    let step = 0;
    document.body.addEventListener('click', e => {
        const target = e.target;
        sliderSlides.forEach((item, i) => {
            if (target === item) {
                portfolioPopup.style.visibility = 'initial';
                for (let a = 0; a < popupText.length; a++) {
                    popupText[a].style.display = 'none';
                    if (a === i) {
                        popupText[i].style.display = 'flex';
                    }
                }
                total.textContent = portfolioPopupSlide.length;
                current.textContent = i + 1;
                if (i === portfolioPopupSlide.length - 1) {
                    popupArrowRight.style.display = 'none';
                } else {
                    popupArrowRight.style.display = 'block';
                }
                if (i === 0) {
                    popupArrowLeft.style.display = 'none';
                } else {
                    popupArrowLeft.style.display = 'block';
                }
                portfolioPopupSlide.forEach((img, k) => {
                    img.style.display = 'none';
                    if (i === k) {
                        img.style.display = 'flex';
                    }
                    return step = i;
                });
            }
        });

        if (target.closest('#popup_portfolio_right')) {
            portfolioPopupSlide[step].style.display = 'none';
            popupText[step].style.display = 'none';
            step++;
            portfolioPopupSlide[step].style.display = 'flex';
            popupText[step].style.display = 'flex';
            current.textContent = step + 1;

            if (step === portfolioPopupSlide.length - 1) {
                popupArrowRight.style.display = 'none';
            } else {
                popupArrowRight.style.display = 'block';
            }
            if (step === 0) {
                popupArrowLeft.style.display = 'none';
            } else {
                popupArrowLeft.style.display = 'block';
            }
        }
        if (target.closest('#popup_portfolio_left')) {
            portfolioPopupSlide[step].style.display = 'none';
            popupText[step].style.display = 'none';
            step--;
            portfolioPopupSlide[step].style.display = 'flex';
            popupText[step].style.display = 'flex';
            current.textContent = step + 1;

            if (step === portfolioPopupSlide.length - 1) {
                popupArrowRight.style.display = 'none';
            } else {
                popupArrowRight.style.display = 'block';
            }
            if (step === 0) {
                popupArrowLeft.style.display = 'none';
            } else {
                popupArrowLeft.style.display = 'block';
            }
        }

        if (target.closest('.close') || target.matches('.popup-portfolio')) {
            portfolioPopup.removeAttribute('style');
        }
    });

};

export default sliderPortfolio;
