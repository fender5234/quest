import { checkLocalStorage } from './utils/checkLocalStorage.js'
import { checkBeforeStarting } from './utils/checkBeforeStarting.js';
import submitForm from '../src/sumbitForm.js';
import { showHelp } from './utils/showHelp.js';
import { checkSucces } from './utils/checkSucces.js';
import { audioHidden } from './utils/audioHidden.js';
import { hiddenNextLocation } from './utils/hiddenNextLocation.js';



window.addEventListener("load", function () {
    if (!checkLocalStorage()) {
        localStorage.setItem('currentStep', '0'); // Первый элемент массива загадок
        localStorage.setItem('answerStep', '0'); //Текущий этап загадки
        localStorage.setItem('answerPass', '0'); // Кол-во неправильного ввода пароля
    }
    checkBeforeStarting();
    checkSucces();
    audioHidden();
    hiddenNextLocation();
    showHelp();
    submitForm();
   
});