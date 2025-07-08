import { secrets } from "../secrets";

export function checkSucces() {
    const passForm = document.getElementById('form-pass');
    const form = document.getElementById('form');
    const text = document.getElementById('text');

    if (Number(localStorage.getItem('currentStep')) === secrets.length - 1) {
        text.textContent = "Поздравляю🥳🥳🥳 ты прошла все этапы,Тебя уже заждались пойдем готовится к торжеству🌈";
        form.classList.add('hidden');
        passForm.classList.add('hidden');
    }
};