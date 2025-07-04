import { secrets } from './secrets.js';
import { currentStepIncreaseLocalStorage } from './utils/currentStepIncreaseLocalStorage.js';
import { answerStepIncreaseLocalStorage } from './utils/answerStepIncreaseLocalStorage.js'

function submitForm() {
    console.log('Наша хуета!');
    const form = document.getElementById('form');
    const textArea = document.getElementById('text-area');
    const text = document.getElementById('text');
    const hiddenText = document.getElementById('hidden-text');
    const hiddenSubText = document.getElementById('hidden-sub-text');

    let currentStep = localStorage.getItem('currentStep');

    text.textContent = secrets[localStorage.getItem('currentStep')].text;
    let key = secrets[currentStep].key;
    let answer1 = secrets[currentStep].answer;
    let response = '';
    let answerCount = 0;



    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // currentStepIncreaseLocalStorage();
        // answerStepIncreaseLocalStorage();

        response = textArea.value.trim().toLowerCase();

        secrets[localStorage.getItem('currentStep')].answer.forEach(element => {
            if (response === element) {
                currentStepIncreaseLocalStorage();
                textArea.placeholder = 'Писать ответ тут ✏️';
                textArea.style.cssText = 'border-color: unset;'
                textArea.value = '';
            } else {
                console.log('НУ че то и неверное!');
                textArea.value = '';
                textArea.style.cssText = 'border-color: red;'
                textArea.placeholder = 'Не верно  попробуй еще раз😔';
            }
        });
        text.textContent = secrets[localStorage.getItem('currentStep')].text;
        textArea.placeholder = 'Писать ответ тут ✏️';
        // if (answerCount >= 3) {
        //     hiddenText.classList.remove('hidden');
        //     hiddenSubText.textContent = secrets[currentStep].key;
        // }

        // if (answer1 === response) {
        //     textArea.value = '';
        //     text.textContent = 'Делаем дальнейшие действия!'
        //     hiddenText.classList.add('hidden');
        // } else {
        //     textArea.value = '';
        //     answerCount++;
        //     textArea.style.cssText = 'border-color: red;'
        //     textArea.placeholder = 'Не верно  попробуй еще раз😔';
        // }

    })
};

export default submitForm;
