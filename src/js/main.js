(() => {
    const button = document.querySelector('.content__btn');
    const overlay = document.querySelector('.module__overlay');
    const alert = document.querySelector('.alert');
    const closeAlertIcon = document.querySelector('.alert__close');
    const elementsChaningDisplay = [overlay, alert];
    button.addEventListener('click', () => {
        elementsChaningDisplay.forEach(element => element.classList.add('active'));
    })
}) ()