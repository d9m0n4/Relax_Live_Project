const reviewsSlider = () => {
    const reviewsSlides = document.querySelectorAll('.reviews-slider__slide');
    const reviews = document.getElementById('reviews');
    let current = 0;

    reviews.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('#reviews-arrow_right')) {
            current++;
        }
        if (target.closest('#reviews-arrow_left')) {
            current--;
        }
        if (current > (reviewsSlides.length - 1)) {
            current = 0;
        }
        if (current < 0) {
            current = (reviewsSlides.length - 1);
        }

        reviewsSlides.forEach((item, i) => {
            if (i === current) {
                item.removeAttribute('style');
            } else {
                item.style.display = 'none';
            }
        });
    });
};
export default reviewsSlider;
