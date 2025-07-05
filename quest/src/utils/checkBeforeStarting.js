import { secrets } from "../secrets";

export function checkBeforeStarting() {
    if (Number(localStorage.getItem('currentStep')) === 0) {
        const text = document.getElementById('text');
        text.textContent = secrets[localStorage.getItem('currentStep')].text;
    }
};