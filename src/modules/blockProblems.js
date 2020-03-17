const blockProblems = () => {
    const problems = document.getElementById('problems');
    const problemsIcon = document.querySelectorAll('.problems-item__icon');
    const porlemsPopup = document.querySelectorAll('.problems-item-popup');
    const problemsItemIcon = document.querySelectorAll('.problems-item__icon-inner');

    problems.addEventListener('mouseover', e => {
        const target = e.target;
        problemsIcon.forEach((item, i) => {
            if (target.closest('.problems-item__icon') === item) {
                if (i === 0) {
                    if (porlemsPopup[i].clientHeight >
                      (document.documentElement.clientHeight - item.getBoundingClientRect().bottom)) {
                        porlemsPopup[i].style.transform = 'rotate(180deg)';
                        porlemsPopup[i].style.top = '-350px';
                    }

                } else {
                    if (porlemsPopup[i].clientHeight > item.getBoundingClientRect().top) {
                        porlemsPopup[i].style.transform = 'rotate(180deg)';
                        porlemsPopup[i].style.top = '100px';
                    }
                }
                porlemsPopup[i].style.visibility = 'visible';
                porlemsPopup[i].style.opacity = 1;
                problemsItemIcon[i].style.opacity = 1;
            } else {
                porlemsPopup[i].removeAttribute('style');
                problemsItemIcon[i].removeAttribute('style');
            }
        });

    });

    const problemsSliderSlide = document.querySelectorAll('.problems-slider__slide');
    let slideIndex = 0;

    const hideSlideProblem = index => {

        for (let i = 0; i < problemsSliderSlide.length; i++) {
            problemsSliderSlide[i].style.display = 'none';
            problemsSliderSlide[i].classList.remove('active-item');
        }
        problemsSliderSlide[index].style.display = '';
        problemsSliderSlide[index].classList.add('active-item');
    };

    hideSlideProblem(0);
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 1025) {
            slideIndex = 0;
        }
    });

    problems.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('#problems-arrow_right')) {
            slideIndex++;
            if (slideIndex > (problemsSliderSlide.length - 1)) {
                slideIndex = 0;
            }
            hideSlideProblem(slideIndex);
        }
        if (target.closest('#problems-arrow_left')) {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = (problemsSliderSlide.length - 1);
            }
            hideSlideProblem(slideIndex);
        }
    });

};

export default blockProblems;
