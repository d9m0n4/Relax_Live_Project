const formulaShow = () => {
    const wrapper = document.querySelector('.wrapper_small');
    const formulaPopup = document.querySelectorAll('.formula-item-popup');
    const formulaItemIcon = document.querySelectorAll('.formula-item__icon');
    const itemIcon = document.querySelectorAll('.formula-item__icon-inner');
    const formulaItem = document.querySelectorAll('.formula-item');
    const itemText = document.querySelectorAll('.formula-item-popup > .p');
    const sliderFormulaWrapper = document.querySelector('.formula-slider-wrap');

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
    sliderFormulaWrapper.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.formula-slider__slide');
        formulaItem.forEach((item, i) => {
            item.classList.remove('active-item');
            const itemText = item.querySelector('p');
            formulaPopup[i].removeAttribute('style');
            itemText.removeAttribute('style');
            if (item === target) {
                item.classList.add('active-item');
                formulaPopup[i].style.visibility = 'initial';
                formulaPopup[i].style.opacity = 1;

                formulaPopup[i].style.top = '-220px';
                formulaPopup[i].style.bottom = '150px';

                itemText.style.transform = "rotate(180deg)";
                formulaPopup[i].style.transform = "rotate(180deg)";

                if (formulaPopup[i].clientHeight > item.getBoundingClientRect().top) {
                    formulaPopup[i].removeAttribute('style');
                    itemText.removeAttribute('style');
                    formulaPopup[i].style.visibility = 'initial';
                    formulaPopup[i].style.opacity = 1;
                    formulaItem[i].style.zIndex = 1;
                    formulaPopup[i].style.top = '80px';
                    sliderFormulaWrapper.style.paddingBottom = '50px';
                } else {
                    sliderFormulaWrapper.removeAttribute('style');
                    formulaItem[i].style.zIndex = 0;
                }

            }

        });
    });
};
export default formulaShow;
