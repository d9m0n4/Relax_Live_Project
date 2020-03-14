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
        if (target.matches('.close')) {
            popupType.style.visibility = 'hidden';
            popupType.removeAttribute('style');
            document.body.style.overflow = '';
            document.body.removeAttribute('style')
        }
    };
    document.body.addEventListener('click', e => {
        const target = e.target;
        popups(popupPrivacy, target);
        popups(popupRepair, target);
    });
};
export default popup;
