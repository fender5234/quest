export function textAreaInputCorrectly(textArea) {
    textArea.value = "";
    textArea.classList.remove('wrong');

    if (textArea.id === 'text-area-pass') {
        textArea.placeholder = ('Сюда вводить пароль 🤓');

    } else {
        textArea.placeholder = ('Писать ответ тут ✏️');
    }
};