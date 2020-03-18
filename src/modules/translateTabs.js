const translateTabs = (wrap, nav, count, lArr, rArr, tCount) => {
    let translateNum = 0;
    wrap.addEventListener('click', e => {
        const target = e.target;
        if ((document.documentElement.offsetWidth - nav.getBoundingClientRect().right) < count) {
            if (target.closest(rArr)) {
                translateNum -= tCount;
                nav.style.transform = `translateX(${translateNum}%)`;
            }
        }
        if (target.closest(lArr)) {
            translateNum += tCount;
            if (translateNum > 0) {
                translateNum = 0;
            }
            nav.style.transform = `translateX(${translateNum}%)`;
        }
    });
};

export default translateTabs;
