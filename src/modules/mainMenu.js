const mainMenu = () => {
    const menu = document.querySelector('.popup-dialog-menu');
    
    document.body.addEventListener('click', e => {
        let target = e.target;
        if (target.matches('.menu__icon')) {
            menu.style.transform = 'translate3d(0, 0, 0)';
        } else if (target.matches('.close-menu') || target.matches('.menu-link')) {
            menu.style.transform = 'translate3d(645px, 0, 0)';
            menu.removeAttribute('style');
        }  
    });
};
export default mainMenu;
