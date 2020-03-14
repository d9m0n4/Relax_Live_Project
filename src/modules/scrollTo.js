const srcollFromMenu = () => {
    const scrolls = document.querySelectorAll('a[href*="#"]');

    scrolls.forEach(anchor => {
        if (!anchor.matches('.full-list')) {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                const blockID = anchor.getAttribute('href').substr(1);
                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    });
};

export default srcollFromMenu;
