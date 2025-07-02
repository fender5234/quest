//Функция проверки наличия полей со счетчиками шагов в LocalStorage

export function checkLocalStorage() {
    if (localStorage.getItem('currentStep') && localStorage.getItem('answerStep')) {
        return true;
    } else {
        return false;
    }
};
