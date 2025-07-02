import { checkLocalStorage } from './utils/checkLocalStorage.js'
import submitForm from '../src/sumbitForm.js';

window.addEventListener("load", function () {
    if (checkLocalStorage()) {
        return;
    } else {
        localStorage.setItem('currentStep', '0'); // Первый элемент массива загадок
        localStorage.setItem('answerStep', '0'); //Текущий этап загадки
    }
});


submitForm();