import { secrets } from "./secrets";

// Проверка правильности пароля!
export function enterPassword() {
    const textAreaPass = document.getElementById('text-area-pass');
    if (secrets[localStorage.getItem('currentStep')].pass === textAreaPass.value.trim().toLowerCase()) {
        return true;
    } else {
        return false;
    }
};