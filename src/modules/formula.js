const formulaShow = () => {
    const formulaIcon = document.querySelectorAll('.formula-item__icon');

    formulaIcon.forEach(item => {
        item.addEventListener('mouseover', () => {
            console.log(item.children);
        });
    });
};

export default formulaShow;
