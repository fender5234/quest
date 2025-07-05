import { checkLocalStorage } from './utils/checkLocalStorage.js'
import { checkBeforeStarting } from './utils/checkBeforeStarting.js';
import submitForm from '../src/sumbitForm.js';


window.addEventListener("load", function () {
    if (!checkLocalStorage()) {
        localStorage.setItem('currentStep', '0'); // Первый элемент массива загадок
        localStorage.setItem('answerStep', '0'); //Текущий этап загадки
    }
    checkBeforeStarting();


    submitForm();
});