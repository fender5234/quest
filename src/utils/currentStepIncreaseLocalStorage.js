//Это текущий номер элемента в масиве загадок!

export function currentStepIncreaseLocalStorage() {
    let updateCurrentStep = Number(localStorage.getItem('currentStep')) + 1;
    localStorage.setItem('currentStep', String(updateCurrentStep));
};