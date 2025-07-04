//Функция проверки наличия полей со счетчиками шагов в LocalStorage

export function checkLocalStorage() {
    if (localStorage.getItem('currentStep')) {
        return true;
    } else {
        return false;
    }
};
