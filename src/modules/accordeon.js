const accordeon = () => {
    const faqBlock = document.getElementById('faq');
    const title = faqBlock.querySelectorAll('.title_block');

    faqBlock.addEventListener('click', event => {
        const target = event.target;
        title.forEach(item => {
            if (item.classList.contains('msg-active')) {
                item.classList.remove('msg-active');
            } else if (item === target) {
                item.classList.toggle('msg-active');
            }
        });
    });
    title.forEach(item => {
        item.classList.remove('msg-active');
    });
};

export default accordeon;
