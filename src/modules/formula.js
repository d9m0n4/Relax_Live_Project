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
                formulaPopup[i].style.visibility = 'initial';
                formulaPopup[i].style.opacity = 1;
                formulaItem[i].style.zIndex = 1;
                itemIcon[i].style.opacity = 1;
            } else if (!target.closest('.formula-item__icon')) {
                formulaPopup[i].removeAttribute('style');
                itemIcon[i].removeAttribute('style');
                formulaItem[i].style.zIndex = 0;
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

    formula.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('#formula-arrow_right')) {
            const slide = document.querySelectorAll('.formula-slider__slide');
            for (let i = 0; i < slide.length; i++) {
                if (document.documentElement.clientWidth < 769) {
                    slide[i].classList.remove('active-item');
                    slide[i].classList.add('active-item');
                } else if (document.documentElement.clientWidth < 1025) {
                    slide[i].classList.remove('active-item');
                    slide[i].classList.add('active-item');
                }
            }
        }
        if (target.closest('#formula-arrow_left')) {
            const slide = document.querySelectorAll('.formula-slider__slide');
            for (let i = 0; i < slide.length; i++) {
                if (document.documentElement.clientWidth < 769) {
                    slide[i].classList.remove('active-item');
                    slide[i].classList.add('active-item');
                } else if (document.documentElement.clientWidth < 1025) {
                    slide[i].classList.remove('active-item');
                    slide[i].classList.add('active-item');
                }
            }
        }
    });

    for (let i = 0; i < slides.length; i++) {
        if (document.documentElement.clientWidth < 769) {
            for (let i = 0; i < slides.length; i++) {
                slides[1].classList.remove('active-item');
                slides[0].classList.add('active-item');
            }
        } else if (document.documentElement.clientWidth < 1025) {
            for (let i = 0; i < slides.length; i++) {
                slides[0].classList.remove('active-item');
                slides[1].classList.add('active-item');
            }
        }
    }
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 769) {
            for (let i = 0; i < slides.length; i++) {
                slides[1].classList.remove('active-item');
                slides[0].classList.add('active-item');
            }
        } else if (document.documentElement.clientWidth < 1025) {
            for (let i = 0; i < slides.length; i++) {
                slides[0].classList.remove('active-item');
                slides[1].classList.add('active-item');
            }
        }
    });
};
export default formulaShow;
