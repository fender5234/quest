import { secrets } from './secrets.js';
import { currentStepIncreaseLocalStorage } from './utils/currentStepIncreaseLocalStorage.js';
import { answerStepIncreaseLocalStorage } from './utils/answerStepIncreaseLocalStorage.js'
import { checkingAnswer } from './chekingAnswer.js'
import { textAreaInputCorrectly } from './utils/textAreaInputCorrectly.js';
import { textAreaInputWrong } from './utils/textAreaInputWrong.js';

function submitForm() {


    const form = document.getElementById('form');
    const textArea = document.getElementById('text-area');
    const text = document.getElementById('text');
    const hiddenText = document.getElementById('hidden-text');
    const hiddenSubText = document.getElementById('hidden-sub-text');


    function handleSubmit(event) {
        event.preventDefault();
        if (Number(localStorage.getItem('currentStep')) < secrets.length - 1) {
            if (checkingAnswer(textArea, secrets)) {
                currentStepIncreaseLocalStorage();
                text.textContent = secrets[localStorage.getItem('currentStep')].text;
                textAreaInputCorrectly(textArea);
            } else {
                textAreaInputWrong(textArea);
            }
        } else {
            text.textContent = 'Все получилось 🥳🥳🥳🥳';
            textAreaInputCorrectly(textArea);
        }
    }


    form.addEventListener('submit', handleSubmit)
};

export default submitForm;
