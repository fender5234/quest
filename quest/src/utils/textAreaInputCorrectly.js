export function textAreaInputCorrectly(textArea) {
    textArea.value = "";
    textArea.classList.remove('wrong');
    textArea.placeholder = ('Писать ответ тут ✏️');
};