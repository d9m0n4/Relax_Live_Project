const typesOfRepair = translateTabs => {
    const repairNav = document.querySelector('.nav-list');
    const repairTypes = document.getElementById('repair-types');
    const repairNavItems = document.querySelectorAll('.repair-types-nav__item');
    const popreptypes = document.querySelector('.popup-dialog-repair-types');
    const navpopup = document.querySelector('.nav-list-popup-repair')

    const sliders = item => {
        const repairSlide = item.querySelectorAll('.repair-types-slider__slide'),
            totalCount = document.querySelector('.slider-counter-content__total'),
            currentCount = document.querySelector('.slider-counter-content__current');

        totalCount.textContent = repairSlide.length;
        let slideIndex = 0;
        document.body.addEventListener('click', e => {
            const target = e.target;
            if (target.closest('#repair-types-arrow_right')) {
                slideIndex++;
            }
            if (target.closest('#repair-types-arrow_left')) {
                slideIndex--;
            }
            if (slideIndex < 0) {
                slideIndex = (repairSlide.length - 1);
            }
            if (slideIndex > (repairSlide.length - 1)) {
                slideIndex = 0;
            }
            currentCount.textContent = slideIndex + 1;
            repairSlide.forEach((item, index) => {
                if (index === slideIndex) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    };

    const firstSlider = document.querySelector('.types-repair1');
    sliders(firstSlider);

    repairNav.addEventListener('click', e => {
        const target = e.target;
        repairNavItems.forEach((item, i) => {
            item.classList.remove('active');
            const slider = document.querySelector('.types-repair' + (i + 1));
            if (target.closest('.repair-types-nav__item') === item) {
                sliders(slider);
                item.classList.add('active');
                slider.style.display = 'block';
            } else {
                slider.style.display = 'none';
            }
            if (!target.closest('.repair-types-nav__item')) {
                slider.style.display = 'block';
            }
        });
    });
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth > 1025) {
            repairNav.style.transform = '';
        }
    });
    translateTabs(repairTypes, repairNav, 50, '#nav-arrow-repair-left_base', '#nav-arrow-repair-right_base', 20);
    translateTabs(popreptypes, navpopup, 50, '#nav-arrow-popup-repair_left', '#nav-arrow-popup-repair_right', 20);
};
export default typesOfRepair;
