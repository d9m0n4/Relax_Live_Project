const popup = () => {
    const popupRepair = document.querySelector('.popup-repair-types');
    const popupPrivacy = document.querySelector('.popup-privacy');
    const menu = document.querySelector('.nav-list-popup-repair');
    const itemNav = menu.querySelectorAll('button_o', 'popup-repair-types-nav__item'),
        tableItem = document.querySelectorAll('.popup-repair-types-content-table__list'),
        navBlock = document.querySelector('.nav-list-popup-repair'),
        btnclass = document.querySelectorAll('.button_o');

    const popups = (popupType, target) => {
        if (target.matches('.full-list')) {
            const menu = document.querySelector('.nav-list-popup-repair');
            const itemNav = menu.querySelectorAll('.popup-repair-types-nav__item'),
                tableItem = document.querySelectorAll('.popup-repair-types-content-table__list'),
                btnclass = menu.querySelectorAll('.button_o');

            const clearRepairs = () => {
                for (let i = 0; i < itemNav.length; i++) {
                    itemNav[i].remove();
                    tableItem[i].remove();
                    btnclass[i].remove();
                }
            };
            clearRepairs();
            popupRepair.style.visibility = 'initial';
            menu.removeAttribute('style');
            document.body.style.overflow = 'hidden';
        }
        if (target.matches('.link-privacy')) {
            const menu = document.querySelector('.nav-list-popup-repair');
            const itemNav = menu.querySelectorAll('.popup-repair-types-nav__item'),
                tableItem = document.querySelectorAll('.popup-repair-types-content-table__list'),
                btnclass = menu.querySelectorAll('.button_o');

            const clearRepairs = () => {
                for (let i = 0; i < itemNav.length; i++) {
                    itemNav[i].remove();
                    tableItem[i].remove();
                    btnclass[i].remove();
                }
            };
            clearRepairs();
            popupPrivacy.style.visibility = 'initial';
            document.body.style.overflow = 'hidden';
            for (let i = 0; i < itemNav.length; i++) {
                itemNav[i].remove();
                tableItem[i].remove();
            }
        }
        if (target.matches('.close') || target.matches('.popup')) {
            const menu = document.querySelector('.nav-list-popup-repair');
            const itemNav = menu.querySelectorAll('.popup-repair-types-nav__item'),
                tableItem = document.querySelectorAll('.popup-repair-types-content-table__list'),
                btnclass = menu.querySelectorAll('.button_o');

            const clearRepairs = () => {
                for (let i = 0; i < itemNav.length; i++) {
                    itemNav[i].remove();
                    tableItem[i].remove();
                    btnclass[i].remove();
                }
            };
            clearRepairs();
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
