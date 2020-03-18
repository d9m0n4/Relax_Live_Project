const showDesign = translateTabs => {
    const designs = document.getElementById('designs'),
        designItemNav = designs.querySelectorAll('.designs-nav__item'),
        previews = designs.querySelectorAll('.preview-block'),
        firstStyleSlider = designs.querySelector('.designs-slider__style1'),
        designsList = document.getElementById('designs-list'),
        designCounter = document.getElementById('designs-counter'),
        mobTotal = designCounter.querySelector('.slider-counter-content__total'),
        mobCurrent = designCounter.querySelector('.slider-counter-content__current'),
        designPopup = document.querySelector('.popup-design'),
        popupTotal = designPopup.querySelector('.slider-counter-content__total'),
        popupCurrent = designPopup.querySelector('.slider-counter-content__current'),
        popupNavItem = document.querySelectorAll('.designs-nav__item_popup'),
        popupDescr = document.querySelectorAll('.popup-design-text'),
        popupDesignSlider = document.querySelector('.popup-designs-slider__style1'),
        sliderWrap = document.querySelector('.popup-design-slider-wrap'),
        popupNavList = document.getElementById('nav-list-popup-designs');

    sliderWrap.style.overflow = 'hidden';
    translateTabs(designs, designsList, 70, '#nav-arrow-designs_left', '#nav-arrow-designs_right', 20);
    translateTabs(designPopup, popupNavList, 10, '#nav-arrow-popup-designs_left', '#nav-arrow-popup-designs_right', 20);
    const sliders = (slide, previews) => {
        let slideIdex = 0;

        const styleItem = slide.querySelectorAll('.designs-slider__style-slide'),
            previewItem = previews.querySelectorAll('.preview-block__item-inner');

        mobTotal.textContent = previewItem.length;
        slide.style.transition = 'transform 0.5s';
        for (let i = 0; i < previewItem.length; i++) {
            previewItem[i].classList.remove('preview_active');
            styleItem[slideIdex].style.display = '';
            previewItem[slideIdex].classList.add('preview_active');
        }
        previews.addEventListener('click', e => {
            const target = e.target;
            previewItem.forEach((item, index) => {
                if (target === item) {
                    item.classList.add('preview_active');
                    styleItem[index].style.display = '';
                    slideIdex = index;
                } else {
                    item.classList.remove('preview_active');
                    styleItem[index].style.display = 'none';
                }
            });

        });
        designs.addEventListener('click', event => {
            const target = event.target;
            if (target.closest('#design_right')) {
                slideIdex++;
                if (slideIdex > styleItem.length - 1) {
                    slideIdex = 0;
                }
                slide.style.transform = `translateY(-${styleItem[0].clientHeight * slideIdex}px)`;

            }
            if (target.closest('#design_left')) {
                slideIdex--;
                if (slideIdex < 0) {
                    slideIdex = styleItem.length - 1;
                }
                slide.style.transform = `translateY(-${styleItem[0].clientHeight * slideIdex}px)`;

            }
            mobCurrent.textContent = slideIdex + 1;
            if (target.closest('.designs-nav__item')) {
                slideIdex = 0;
                mobCurrent.textContent = 1;
                slide.style.transform = `translateY(-${styleItem[0].clientHeight * slideIdex}px)`;
            }
        });
    };

    sliders(firstStyleSlider, previews[0]);

    designs.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.designs-nav__item')) {
            designItemNav.forEach((item, i) => {
                if (target === item) {
                    const styleSlider = designs.querySelector('.designs-slider__style' + (i + 1));
                    styleSlider.style.display = '';
                    previews[i].classList.add('visible');
                    item.classList.add('active');
                    sliders(styleSlider, previews[i]);
                } else {
                    designs.querySelector('.designs-slider__style' + (i + 1)).style.display = 'none';
                    previews[i].classList.remove('visible');
                    item.classList.remove('active');
                }
            });
        }
        if (target.closest('.link-list-designs')) {
            designPopup.style.visibility = 'visible';
        }
    });

    const showDesignBlock = slider => {
        let index = 0;
        const popupStyleSlider = slider.querySelectorAll('.popup-design-slider__style-slide');
        slider.style.transition = 'transform 0.5s';
        popupTotal.textContent = popupStyleSlider.length;
        designPopup.addEventListener('click', event => {
            const target = event.target;

            if (target.closest('#popup_design_right')) {
                index++;
                if (index > popupStyleSlider.length - 1) {
                    index = 0;
                }
            }
            if (target.closest('#popup_design_left')) {
                index--;
                if (index < 0) {
                    index = popupStyleSlider.length - 1;
                }
            }
            popupCurrent.textContent = index + 1;
            slider.style.transform = `translateY(-${popupStyleSlider[0].clientHeight * index}px)`;
            if (target.closest('.designs-nav__item_popup')) {
                index = 0;
                slider.style.transform = `translateY(-${popupStyleSlider[0].clientHeight * index}px)`;
                popupCurrent.textContent = index + 1;
            }
        });

    };
    showDesignBlock(popupDesignSlider);

    designPopup.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.close') || target.matches('.popup-design')) {
            designPopup.removeAttribute('style');
        }
        if (target.closest('.designs-nav__item_popup')) {
            popupNavItem.forEach((item, index) => {
                if (target === item) {
                    const popupDesignSlider = document.querySelector('.popup-designs-slider__style' + (index + 1));
                    popupDesignSlider.style.display = '';
                    showDesignBlock(popupDesignSlider);
                    item.classList.add('active');
                    popupDescr[index].classList.add('visible-content-block');
                } else {
                    const popupDesignSlider = document.querySelector('.popup-designs-slider__style' + (index + 1));
                    popupDesignSlider.style.display = 'none';
                    item.classList.remove('active');
                    popupDescr[index].classList.remove('visible-content-block');
                }
            });
        }
    });

};

export default showDesign;
