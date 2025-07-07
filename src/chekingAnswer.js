// функция проверяет совпадает ли введеный ответ с настоящим ответом на загадку

export function checkingAnswer(textArea,secrets) {
    return (
        secrets[localStorage.getItem('currentStep')].answer.some(secret => secret === textArea.value.trim().toLowerCase())
    )
}; 