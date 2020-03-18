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
                portfolioPopup.style.visibility = 'initial';
                for (let a = 0; a < popupText.length; a++) {
                    popupText[a].style.display = 'none';
                    if (a === i) {
                        text(i);
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
    };

    if (document.documentElement.clientWidth < 768) {
        arrowRight.style.display = 'none';
        arrowLeft.style.display = 'none';
    }

    arrowLeftMobile.style.zIndex = 30;
    arrowRightMobile.style.zIndex = 30;
    let mobileIndex = 0;
    let step = 0;

    const text = i => {
        popupText[i].style.display = 'flex';
        popupText[i].style.justifyContent = 'space-around';
        popupText[i].style.flexDirection = 'row';
        popupText[i].style.flexWrap = 'wrap';
    };

    mobileTotal.textContent = sliderSlidesMobile.length;
    document.body.addEventListener('click', e => {
        const target = e.target;
        console.log(target);
        slides(sliderSlides, target);
        if (target.matches('.portfolio-slider__slide-frame')) {
            slides(sliderSlidesMobile, target);
        }

        if (target.closest('#popup_portfolio_right')) {
            portfolioPopupSlide[step].style.display = 'none';
            popupText[step].style.display = 'none';
            step++;
            portfolioPopupSlide[step].style.display = 'flex';
            text(step);
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
            text(step);
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
        if (target.closest('#portfolio-arrow-mobile_left')) {
            mobileIndex--;
            if (mobileIndex < 0) {
                mobileIndex = sliderSlidesMobile.length - 1;
            }
            for (let i = 0; i < sliderSlidesMobile.length; i++) {
                sliderSlidesMobile[i].style.transform = `translateY(-${sliderSlidesMobile[0].clientHeight * mobileIndex}px)`;
            }
        }
        if (target.closest('#portfolio-arrow-mobile_right')) {
            mobileIndex++;
            if (mobileIndex > sliderSlidesMobile.length - 1) {
                mobileIndex = 0;
            }
            for (let i = 0; i < sliderSlidesMobile.length; i++) {
                sliderSlidesMobile[i].style.transform = `translateY(-${sliderSlidesMobile[0].clientHeight * mobileIndex}px)`;
            }
        }
        mobileCounter.textContent = mobileIndex + 1;
    });

};

export default sliderPortfolio;
