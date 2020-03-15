const popup = () => {
    const popupRepair = document.querySelector('.popup-repair-types');
    const popupPrivacy = document.querySelector('.popup-privacy');
    const menu = document.querySelector('.nav-list-popup-repair');

    const popups = (popupType, target) => {
        if (target.matches('.full-list')) {
            popupRepair.style.visibility = 'initial';
            menu.removeAttribute('style');
            document.body.style.overflow = 'hidden';
        }
        if (target.matches('.link-privacy')) {
            popupPrivacy.style.visibility = 'initial';
            document.body.style.overflow = 'hidden';
        }
        if (target.matches('.close') || target.matches('.popup')) {
            menu.style.transition = '0s';
            popupType.removeAttribute('style');
            document.body.style.overflow = '';
            document.body.removeAttribute('style');
        }
    };
    document.body.addEventListener('click', e => {
        const target = e.target;
        popups(popupPrivacy, target);
        popups(popupRepair, target);
    });
};
export default popup;
