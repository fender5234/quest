
// Функция которая обнуляет счетчик неверных ответов

export function resetAnswerStepLocalStorage() {
    console.log('Дошло до сюдА!');
    localStorage.setItem('answerStep', '0');
};