const sliderPortfolio = () => {
    const portfolioSlider = document.querySelector('.portfolio-slider');
    const sliderSlide = document.querySelectorAll('.portfolio-slider__slide');
    const sliderSlides = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame');
    const portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile');
    const sliderSlidesMobile = portfolioSliderMobile.querySelectorAll('.portfolio-slider__slide-frame');
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
    const portfolio = document.getElementById('portfolio');
    const arrowLeftMobile = document.getElementById('portfolio-arrow-mobile_left');
    const arrowRightMobile = document.getElementById('portfolio-arrow-mobile_right');
    const mobileCounter = portfolio.querySelector('.slider-counter-content__current');
    const mobileTotal = portfolio.querySelector('.slider-counter-content__total');
    let count = 0;

    const hideArrow = () => {
        if (document.documentElement.clientWidth < 768) {
            arrowRight.style.display = 'none';
            arrowLeft.style.display = 'none';
        }
    };
    const showArrows = () => {
        if (document.documentElement.clientWidth > 425) {
            arrowRight.style.display = 'flex';
            arrowRightMobile.style.display = 'none';
            arrowLeftMobile.style.display = 'none';
        } else if (document.documentElement.clientWidth < 768) {
            arrowRight.style.display = 'none';
            arrowLeft.style.display = 'none';
            arrowRightMobile.style.display = 'block';
        }
    }
    window.addEventListener('resize', showArrows);

    const slidesArrow = (index, elem, rightArrow, leftArrow) => {
        if (index === elem.length - 1) {
            rightArrow.style.display = 'none';
        } else {
            rightArrow.style.display = 'block';
        }
        if (index === 0 || elem[index] === 1) {
            leftArrow.style.display = 'none';
        } else {
            leftArrow.style.display = 'block';
        }
    };
    document.body.addEventListener('click', e => {
        const target = e.target;
        sliderSlide.forEach(item => {
            item.style.transition = 'transform 0.5s';
        });
        let slidesCount = 0;
        if (window.screen.width > 1024) {
            slidesCount = 3;
        } else if (window.screen.width > 901) {
            slidesCount = 2;
        } else if (window.screen.width < 901) {
            slidesCount = 1;
        }

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
        if (count === (sliderSlide.length - slidesCount)) {
            arrowRight.style.display = 'none';
        } else {
            arrowRight.style.display = 'flex';
        }
    });

    const slides = (slide, target) => {
        slide.forEach((item, i) => {
            if (target === item) {
                portfolioPopup.style.visibility = 'visible';
                for (let a = 0; a < popupText.length; a++) {
                    popupText[a].style.display = 'none';
                    if (a === i) {
                        text(i);
                    }
                }
                total.textContent = portfolioPopupSlide.length;
                current.textContent = i + 1;
                slidesArrow(i, portfolioPopupSlide, popupArrowRight, popupArrowLeft);
                portfolioPopupSlide.forEach((img, k) => {
                    img.style.display = 'none';
                    if (i === k) {
                        img.style.display = 'flex';
                    }
                    return step = i;
                });
            }
        });
    };

    arrowLeftMobile.style.zIndex = 30;
    arrowRightMobile.style.zIndex = 30;
    let mobileIndex = 0;
    let step = 0;

    const text = i => {
        if (document.documentElement.offsetWidth < 1025) {
            popupText[i].style.display = 'flex';
            popupText[i].style.justifyContent = 'space-around';
            popupText[i].style.flexDirection = 'row';
            popupText[i].style.flexWrap = 'wrap';
        } else {
            popupText[i].style.display = 'flex';
            popupText[i].style.justifyContent = '';
            popupText[i].style.flexDirection = '';
            popupText[i].style.flexWrap = '';
        }
    };
    arrowLeftMobile.style.display = 'none';
    arrowRight.style.display = 'flex';
    mobileTotal.textContent = sliderSlidesMobile.length;

    document.body.addEventListener('click', e => {
        const target = e.target;
        hideArrow();
        slides(sliderSlides, target);
        if (target.matches('.portfolio-slider__slide-frame')) {
            slides(sliderSlidesMobile, target);
        }
        if (target.closest('#popup_portfolio_right')) {
            portfolioPopupSlide[step].style.display = 'none';
            popupText[step].style.display = 'none';
            step++;
            portfolioPopupSlide[step].style.display = 'flex';
            current.textContent = step + 1;
            text(step);
            hideArrow();
            slidesArrow(step, portfolioPopupSlide, popupArrowRight, popupArrowLeft);
        }
        if (target.closest('#popup_portfolio_left')) {
            portfolioPopupSlide[step].style.display = 'none';
            popupText[step].style.display = 'none';
            step--;
            portfolioPopupSlide[step].style.display = 'flex';
            current.textContent = step + 1;
            text(step);
            hideArrow();
            slidesArrow(step, portfolioPopupSlide, popupArrowRight, popupArrowLeft);
        }

        if (target.closest('.close') || target.matches('.popup-portfolio')) {
            portfolioPopup.removeAttribute('style');
            hideArrow();
        }
        if (target.closest('#portfolio-arrow-mobile_left')) {
            arrowRight.style.display = 'none';
            arrowLeft.style.display = 'none';
            mobileIndex--;
            slidesArrow(mobileIndex, sliderSlidesMobile, arrowRightMobile, arrowLeftMobile);
            for (let i = 0; i < sliderSlidesMobile.length; i++) {
                sliderSlidesMobile[i].style.transform = `translateY(-${sliderSlidesMobile[0].clientHeight * mobileIndex}px)`;
                sliderSlidesMobile[i].style.transition = 'transform 0.5s ease 0s';
            }
        }
        if (target.closest('#portfolio-arrow-mobile_right')) {
            arrowRight.style.display = 'none';
            arrowLeft.style.display = 'none';
            mobileIndex++;
            slidesArrow(mobileIndex, sliderSlidesMobile, arrowRightMobile, arrowLeftMobile);
            for (let i = 0; i < sliderSlidesMobile.length; i++) {
                sliderSlidesMobile[i].style.transform = `translateY(-${sliderSlidesMobile[0].clientHeight * mobileIndex}px)`;
                sliderSlidesMobile[i].style.transition = 'transform 0.5s ease 0s';
            }
        }
        mobileCounter.textContent = mobileIndex + 1;
    });
};

export default sliderPortfolio;
