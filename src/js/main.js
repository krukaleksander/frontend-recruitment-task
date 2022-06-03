(() => {
    const button = document.querySelector('.content__btn');
    const overlay = document.querySelector('.module__overlay');
    const alert = document.querySelector('.alert');
    const closeAlertIcon = document.querySelector('.alert__close');
    const elementsChangingDisplay = [overlay, alert];
    const elementsClosingAlert = [closeAlertIcon, overlay]

    button.addEventListener('click', () => {
        elementsChangingDisplay.forEach(element => element.classList.add('active'));
    })

    elementsClosingAlert.forEach(elementClosing => elementClosing.addEventListener('click', () => elementsChangingDisplay.forEach(elementChanging => elementChanging.classList.remove('active'))))

}) ()