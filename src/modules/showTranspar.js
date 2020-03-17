const showTransparency = () => {
    const transparency = document.getElementById('transparency'),
        popupTransparency = document.querySelector('.popup-transparency'),
        docItemImg = document.querySelectorAll('.transparency-item__img'),
        docSlide = document.querySelectorAll('.popup-transparency-slider__slide'),
        sliderCounterCurrent = popupTransparency.querySelector('.slider-counter-content__current'),
        sliderCounterTotal = popupTransparency.querySelector('.slider-counter-content__total'),
        docSlider = transparency.querySelector('.transparency-slider-wrap'),
        docItem = transparency.querySelectorAll('.transparency-item');

    let slideIndex = 0; // переменная для задания начального значения слайда
    sliderCounterTotal.textContent = docSlide.length; // клик на весь блок с доами
    transparency.addEventListener('click', e => {
        const target = e.target;
        let slideIndex = 0;

        for (let i = 0; i < docItemImg.length; i++) { // перебираем картинки, задаем индекс
            if (target === docItemImg[i]) {
                slideIndex = i;
            }
        }

        for (let i = 0; i < docSlide.length; i++) { // перебираем слайды для отображения
            if (i === slideIndex) {
                docSlide[slideIndex].removeAttribute('style');
            } else {
                docSlide[i].style.display = 'none';
            }
        }

        if (target.closest('.transparency-item__img')) { // показываем слайды
            popupTransparency.style.visibility = 'visible';
        }

        sliderCounterCurrent.textContent = slideIndex + 1; // номер слайда задается в соответствии с индексом(+1)
        popupTransparency.addEventListener('click', e => {
            const target = e.target;

            if (target.closest('#transparency_right')) {
                slideIndex++;
            }
            if (target.closest('#transparency_left')) {
                slideIndex--;
            }
            if (slideIndex < 0) {
                slideIndex = (docSlide.length - 1);
            }
            if (slideIndex > (docSlide.length - 1)) {
                slideIndex = 0;
            }
            for (let i = 0; i < docSlide.length; i++) {
                if (i === slideIndex) {
                    docSlide[slideIndex].removeAttribute('style');
                } else {
                    docSlide[i].style.display = 'none';
                }
            }
            if (document.documentElement.offsetWidth < 1091) {
                hideDocs(slideIndex);
            }
            if (target.closest('.close') || target.matches('.popup-transparency')) {
                popupTransparency.removeAttribute('style');
            }
            sliderCounterCurrent.textContent = slideIndex + 1;
        });
    });
    // скрытие слайдов
    const hideDocs = a => {
        for (let i = 0; i < docItem.length; i++) {
            docItem[i].style.display = 'none';
        }
        docItem[a].style.display = '';
    };
    if (document.documentElement.offsetWidth < 1091) {
        slideIndex = 0;
        hideDocs(slideIndex);
    }
    window.addEventListener('resize', () => {
        if (document.documentElement.offsetWidth > 1091) {
            docItem.forEach(item => {
                item.style.display = '';
            });
        } else {
            slideIndex = 0;
            hideDocs(slideIndex);
        }
    });
    //кнопки слайдера в мобилке
    docSlider.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('#transparency-arrow_right')) {
            slideIndex++;
            if (slideIndex > (docItem.length - 1)) {
                slideIndex = 0;
            }
            hideDocs(slideIndex);
        }
        if (target.closest('#transparency-arrow_left')) {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = (docItem.length - 1);
            }
            hideDocs(slideIndex);
        }
    });
};
export default showTransparency;
