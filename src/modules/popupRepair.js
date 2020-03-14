const popup = () => {
    const popupBlock = document.querySelector('.popup-repair-types');
    document.body.addEventListener('click', e => {
        const target = e.target;
        if (target.matches('.full-list')) {
            popupBlock.style.visibility = 'visible';
        }
        if (target.matches('.close')) {
            popupBlock.style.visibility = 'hidden';
        }
    });
};
export default popup;
