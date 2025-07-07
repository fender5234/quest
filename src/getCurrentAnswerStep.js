// Функция возвращает количество неверных ответов.
export function getCurrentAnswerStep() {
    return (
        Number(localStorage.getItem('answerStep'))
    )
};