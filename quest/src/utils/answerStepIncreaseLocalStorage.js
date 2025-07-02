//Это текущий этап решения загадки!

export function answerStepIncreaseLocalStorage() {
    let updateAnswerStep = Number(localStorage.getItem('answerStep')) + 1;
    localStorage.setItem('answerStep', String(updateAnswerStep));
};