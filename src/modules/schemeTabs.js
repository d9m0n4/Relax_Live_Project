const schemeTabs = () => {
    const scheme = document.getElementById('scheme');
    const schemeList = document.getElementById('scheme-list');
    const schemeBtns = document.querySelectorAll('.scheme-nav__item');
    const descrBlock = document.querySelectorAll('.scheme-description-block');
    const schemeSlides = document.querySelectorAll('.scheme-slider__slide');

    let translateNum = 0;

    scheme.addEventListener('click', e => {
        const target = e.target;
        console.log(document.documentElement.offsetWidth);
        console.log(schemeList.getBoundingClientRect().right);
        console.log(document.documentElement.offsetWidth - schemeList.getBoundingClientRect().right);

        if (document.documentElement.offsetWidth < schemeList.getBoundingClientRect().right) {
            if (target.closest('#nav-arrow-scheme_right')) {
                translateNum -= 10;
                schemeList.style.transform = `translateX(${translateNum}%)`;
            }
        }
        if (target.closest('#nav-arrow-scheme_left')) {
            translateNum += 10;
            if (translateNum > 0) {
                translateNum = 0;
            }
            schemeList.style.transform = `translateX(${translateNum}%)`;
        }

        schemeBtns.forEach((item, i) => {
            schemeBtns[i].classList.remove('active');
            if (target.closest('.scheme-nav__item') === item) {
                schemeBtns[i].classList.add('active');

                for (let k = 0; k < schemeSlides.length; k++) {
                    if (k === i) {
                        schemeSlides[i].removeAttribute('style');
                    } else {
                        schemeSlides[k].style.display = 'none';
                    }
                }

                for (let k = 0; k < descrBlock.length; k++) {
                    if (k === i) {
                        descrBlock[k].classList.add('visible-content-block');
                    } else {
                        descrBlock[k].classList.remove('visible-content-block');
                    }


                }
            }
        });




    });
};

export default schemeTabs;
