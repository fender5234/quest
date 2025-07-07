import { secrets } from "../secrets";
import { checkLocalStorage } from "./checkLocalStorage";

export function checkBeforeStarting() {
    if (checkLocalStorage()) {
        const text = document.getElementById('text');
        text.textContent = secrets[localStorage.getItem('currentStep')].text;
    }
};