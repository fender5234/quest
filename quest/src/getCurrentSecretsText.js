// Функция получения текущего текста загадки
export function getCurrentSecretsText() {
    return (
        secrets[localStorage.getItem('currentStep')].text
    )
};