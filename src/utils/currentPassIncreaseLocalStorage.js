//Это текущийввод пароля!

export function currentPassIncreaseLocalStorage() {
    let updateCurrentPass = Number(localStorage.getItem('answerPass')) + 1;
    localStorage.setItem('answerPass', String(updateCurrentPass));
};