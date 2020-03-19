const sendFrom = () => {
    const feedbacks = document.querySelectorAll('form[id*="feedback"]'),
        popupThank = document.querySelector('.popup-thank'),
        popupConsult = document.querySelector('.popup-consultation');
    document.body.addEventListener('click', e => {
        const target = e.target;
        console.log(target);
        if (target.closest('.close-thank') || target.matches('.popup-thank')) {
            popupThank.removeAttribute('style');
        }
    });
    const emptyCheck = form => {
        const inputsEmpty = [],
            inputs = form.querySelectorAll('input[type="text"]');
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                inputsEmpty.push(input.name);
            }
        });
        return inputsEmpty;
    };

    const postData = formData => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    feedbacks.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const target = e.target,
                textInputs = target.querySelectorAll('input[type="text"]'),
                checkbox = target.querySelector('input[type="checkbox"]'),
                formData = new FormData(target),
                body = {};
            checkbox.removeAttribute('required')
            textInputs.forEach(item => {
                item.removeAttribute('style');
            });

            const empts = emptyCheck(target);

            if (empts.length !== 0) {
                empts.forEach(input => {
                    target.querySelector(`input[name="${input}"]`).style.border = '1px solid red';
                });
            } else if (!checkbox.checked) {
                alert('Необходимо подтвердить согласие с политикой конфиденциальности');
            } else {
                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body)
                    .then(resonse => {
                        if (resonse.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        popupThank.style.visibility = 'visible';
                        popupConsult.removeAttribute('style');
                        setTimeout(() => {
                            popupThank.style.visibility = 'none';
                        }, 5000);
                        target.reset();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
    });

};

export default sendFrom;
