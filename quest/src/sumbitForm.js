import { secrets } from './secrets.js';
import { currentStepIncreaseLocalStorage } from './utils/currentStepIncreaseLocalStorage.js';
import { answerStepIncreaseLocalStorage } from './utils/answerStepIncreaseLocalStorage.js'
import { getCurrentAnswerStep } from './getCurrentAnswerStep.js';
import { checkingAnswer } from './chekingAnswer.js'
import { textAreaInputCorrectly } from './utils/textAreaInputCorrectly.js';
import { textAreaInputWrong } from './utils/textAreaInputWrong.js';
import { showHelp } from './utils/showHelp.js';
import { resetAnswerStepLocalStorage } from './utils/resetAnswerStepLocalStorage.js';
import { enterPassword } from './enterPassword.js';
import { headerState } from './headerState.js';


function submitForm() {


    const form = document.getElementById('form');
    const textArea = document.getElementById('text-area');
    const text = document.getElementById('text');
    const hiddenText = document.getElementById('hidden-text');
    const hiddenSubText = document.getElementById('hidden-sub-text');
    const header = document.getElementById('header');

    const passForm = document.getElementById('form-pass');
    const textAreaPass = document.getElementById('text-area-pass')

    function handlePassSubmit(event) {
        event.preventDefault();

        if (enterPassword()) {
            passForm.classList.add('hidden');
            form.classList.remove('hidden');
            textAreaInputCorrectly(textAreaPass);
            currentStepIncreaseLocalStorage();
            text.textContent = secrets[localStorage.getItem('currentStep')].text;
            header.textContent = headerState.question;
            resetAnswerStepLocalStorage();
        } else {
            textAreaInputWrong(textAreaPass);
        }
    }






    function handleSubmit(event) {
        event.preventDefault();
        if (Number(localStorage.getItem('currentStep')) <= secrets.length - 1) {

            if (checkingAnswer(textArea, secrets)) {
                header.textContent = headerState.questionPass;       //ответ верный
                passForm.classList.remove('hidden');
                form.classList.add('hidden');
                textAreaInputCorrectly(textArea);
                text.innerHTML = secrets[localStorage.getItem('currentStep')].nextLocation;
                resetAnswerStepLocalStorage();
                showHelp();

            } else {                                        //ответ не верный
                textAreaInputWrong(textArea);
                answerStepIncreaseLocalStorage();
                showHelp();
            }
        } else {
            text.textContent = 'Все получилось 🥳🥳🥳🥳';
            textAreaInputCorrectly(textArea);
        }
    }


    form.addEventListener('submit', handleSubmit)
    passForm.addEventListener('submit', handlePassSubmit)
};

export default submitForm;
