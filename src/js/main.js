(() => {
    const button = document.querySelector('.content__btn');
    const overlay = document.querySelector('.module__overlay');
    const alert = document.querySelector('.alert');
    const closeAlertIcon = document.querySelector('.alert__close');
    const elementsChangingDisplay = [overlay, alert];
    const elementsClosingAlert = [closeAlertIcon, overlay]

    class Counter {
    value = 0;
    container = document.querySelector('.alert__count');
    resetButton = document.querySelector('.alert__btn');
    localStorageActualValue = localStorage.getItem('taskStorage')

        init() {
            this.resetButton.addEventListener('click', () => this.resetValue())
            if(!this.localStorageActualValue) return this.setLocalStorageValue('0');
            this.value = localStorage.getItem('taskStorage')
        }
        click() {
            if(this.value >=4 && !this.resetButton.classList.contains('active')) this.displayResetButton()
            this.value++
            this.container.innerText = this.value
            this.setLocalStorageValue(this.value.toString())
        }
        displayResetButton() {
            this.resetButton.classList.add('active')
        }
        resetValue() {
            this.value = 0;
            this.container.innerText = this.value;
            this.resetButton.classList.remove('active');
        }
        setLocalStorageValue(value) {
            localStorage.setItem('taskStorage', value)
        }
    }

    const clickCounter = new Counter()
    clickCounter.init();

    button.addEventListener('click', () => {
        clickCounter.click()
        elementsChangingDisplay.forEach(element => element.classList.add('active'));
    })

    elementsClosingAlert.forEach(elementClosing => elementClosing.addEventListener('click', () => elementsChangingDisplay.forEach(elementChanging => elementChanging.classList.remove('active'))))

}) ()