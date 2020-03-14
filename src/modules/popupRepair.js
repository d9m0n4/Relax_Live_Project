const popup = () => {
    const popupRepair = document.querySelector('.popup-repair-types');
    const popupPrivacy = document.querySelector('.popup-privacy');

    const popups = (popupType, target) => {
        if (target.matches('.full-list')) {
            popupRepair.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
        }
        if (target.matches('.link-privacy')) {
            popupPrivacy.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
        }
        if (target.matches('.close') || target.matches('.popup')) {
            popupType.style.visibility = 'hidden';
            popupType.removeAttribute('style');
            document.body.style.overflow = '';
            document.body.removeAttribute('style');

            const menu = document.querySelectorAll('.popup-repair-types-nav__item');
            menu.forEach(item => {
                item.remove();
            });

        }
    };
    document.body.addEventListener('click', e => {
        const target = e.target;
        popups(popupPrivacy, target);
        popups(popupRepair, target);
    });
};
export default popup;
