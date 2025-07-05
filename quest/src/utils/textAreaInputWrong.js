export function textAreaInputWrong(textArea) {
    textArea.value = "";
    textArea.classList.add('wrong');
    textArea.placeholder = ('Не верно  попробуй еще раз😔');
};