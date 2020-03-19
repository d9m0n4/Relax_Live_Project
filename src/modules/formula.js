const formulaShow = () => {
    const wrapper = document.querySelector('.wrapper_small');
    const formulaPopup = document.querySelectorAll('.formula-item-popup');
    const formulaItemIcon = document.querySelectorAll('.formula-item__icon');
    const itemIcon = document.querySelectorAll('.formula-item__icon-inner');
    const formulaItem = document.querySelectorAll('.formula-item');
    const itemText = document.querySelectorAll('.formula-item-popup > .p');
    const formula = document.getElementById('formula');
    const slides = document.querySelectorAll('.formula-slider__slide');
    const slider = document.querySelector('.formula-slider');

    wrapper.addEventListener('mouseover', e => {
        const target = e.target;
        formulaItemIcon.forEach((item, i) => {
            if (target.closest('.formula-item__icon') === item) {
                formulaPopup[i].style.visibility = 'visible';
                formulaPopup[i].style.opacity = 1;
                formulaItem[i].style.zIndex = 1;
                itemIcon[i].style.opacity = 1;
            } else  {
                formulaPopup[i].removeAttribute('style');
                itemIcon[i].removeAttribute('style');
                formulaItem[i].removeAttribute('style');
                itemText[i].removeAttribute('style');
            }
            if (formulaPopup[i].clientHeight > item.getBoundingClientRect().top) {
                formulaPopup[i].style.transform = 'rotate(180deg)';
                formulaPopup[i].style.top = '100px';
                formulaItem[i].style.zIndex = 1;
                itemText[i].style.transform = 'rotate(180deg)';
            }
        });
    });

    for (let i = 0; i < slides.length; i++) {
        if (document.documentElement.clientWidth < 769) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.flex = '0 0 100%';
                slides[0].classList.add('active-item');
            }
        } else if (document.documentElement.clientWidth < 1025) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.flex = '0 0 35%';
                slides[1].classList.add('active-item');
            }
        }
    }

    slider.style.display = 'flex';
    slider.style.margin = '0 0 70px 0';
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 769) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.flex = '0 0 100%';
                slides[0].classList.add('active-item');
            }
        } else if (document.documentElement.clientWidth < 1025) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active-item');
                slides[i].style.flex = '0 0 35%';
                slides[1].classList.add('active-item');
            }
        }
    });
    formula.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('#formula-arrow_right')) {
            const slide = document.querySelectorAll('.formula-slider__slide');
            slider.insertBefore(slide[0], slide[slide.length]);
            for (let i = 0; i < slide.length; i++) {
                if (document.documentElement.clientWidth < 769) {
                    slides[i].classList.remove('active-item');
                    slide[i].classList.remove('active-item');
                    slide[1].classList.add('active-item');
                } else if (document.documentElement.clientWidth < 1025) {
                    slides[i].classList.remove('active-item');
                    slide[i].classList.remove('active-item');
                    slide[2].classList.add('active-item');
                }
            }
        }
        if (target.closest('#formula-arrow_left')) {
            const slide = document.querySelectorAll('.formula-slider__slide');
            slider.insertBefore(slide[slide.length - 1], slide[0]);
            for (let i = 0; i < slide.length; i++) {
                if (document.documentElement.clientWidth < 769) {
                    slides[i].classList.remove('active-item');
                    slide[i].classList.remove('active-item');
                    slide[5].classList.add('active-item');
                } else if (document.documentElement.clientWidth < 1025) {
                    slides[i].classList.remove('active-item');
                    slide[i].classList.remove('active-item');
                    slide[0].classList.add('active-item');
                }
            }
        }
    });
};
export default formulaShow;
