import { secrets } from './secrets.js';
import { checkLocalStorage } from './utils/checkLocalStorage.js'
import { currentStepIncreaseLocalStorage } from './utils/currentStepIncreaseLocalStorage.js';
import { answerStepIncreaseLocalStorage } from './utils/answerStepIncreaseLocalStorage.js'

function submitForm() {



        let currentStep = localStorage.getItem('currentStep');

        const form = document.getElementById('form');
        const textArea = document.getElementById('text-area');
        const text = document.getElementById('text');
        const hiddenText = document.getElementById('hidden-text');
        const hiddenSubText = document.getElementById('hidden-sub-text');


        text.textContent = secrets[currentStep].text;
        const key = secrets[currentStep].key;
        const answer1 = secrets[currentStep].answer;
        let response = '';
        let answerCount = 0;



        form.addEventListener('submit', (event) => {
            event.preventDefault();
            currentStepIncreaseLocalStorage();
            answerStepIncreaseLocalStorage();
            response = textArea.value.trim().toLowerCase();
            if (answerCount >= 3) {
                hiddenText.classList.remove('hidden');
                hiddenSubText.textContent = secrets[currentStep].key;
            }

            if (answer1 === response) {
                textArea.value = '';
                text.textContent = 'Делаем дальнейшие действия!'
                hiddenText.classList.add('hidden');
            } else {
                textArea.value = '';
                answerCount++;
                textArea.style.cssText = 'border-color: red;'
                textArea.placeholder = 'Не верно  попробуй еще раз😔';
            }

        })
    };

export default submitForm;
