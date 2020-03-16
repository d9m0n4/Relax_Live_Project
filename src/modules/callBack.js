const callBack = () => {
    const consultPopup = document.querySelector('.popup-consultation');

    document.body.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.button_wide')) {
            consultPopup.style.visibility = 'visible';
        }
        if (target.closest('.close')) {
            consultPopup.removeAttribute('style');
        }
    });
};

export default callBack;
