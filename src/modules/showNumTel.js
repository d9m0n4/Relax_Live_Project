const showNumTel = () => {
    const contactNum = document.querySelectorAll('.header-contacts__phone-number')[1];
    const contactArrow = document.querySelector('.header-contacts__arrow');

    contactArrow.addEventListener('click', () => {
        if (!contactNum.style.opacity) {
            console.log('asdfasd');
            contactNum.style.opacity = 1;
            contactNum.style.marginTop = '30px';
            contactArrow.style.transform = 'rotate(180deg)';
        } else {
            contactNum.style.opacity = 0;
            contactNum.style.marginTop = '0';
            contactNum.removeAttribute('style');
            contactArrow.style.transform = 'rotate(0)';
            contactArrow.removeAttribute('style');
        }
    });
};
export default showNumTel;
