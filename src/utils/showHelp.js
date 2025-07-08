// выводит подсказку
import { getCurrentAnswerStep } from "../getCurrentAnswerStep";
import { answerStepIncreaseLocalStorage } from "./answerStepIncreaseLocalStorage";
import { secrets } from "../secrets";


export function showHelp() {
    const hiddenText = document.getElementById('hidden-text');
    const hiddenSubText = document.getElementById('hidden-sub-text');

  
    if (getCurrentAnswerStep() >= 4) {
        hiddenText.classList.remove('hidden');
        hiddenSubText.innerHTML = secrets[localStorage.getItem('currentStep')].key;
    } else {
        hiddenText.classList.add('hidden');
    }
};