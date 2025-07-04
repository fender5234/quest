import { checkLocalStorage } from './utils/checkLocalStorage.js'
import submitForm from '../src/sumbitForm.js';

window.addEventListener("load", function () {
    console.log('страница готова 1');

    if (!checkLocalStorage()) {
        localStorage.setItem('currentStep', '0'); // Первый элемент массива загадок
        localStorage.setItem('answerStep', '0'); //Текущий этап загадки
    }

    console.log('страница готова 2');
    submitForm();
});