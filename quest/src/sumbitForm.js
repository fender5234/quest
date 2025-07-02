function submitForm() {
    const form = document.getElementById('form');
    const textArea = document.getElementById('text-area');
    const text = document.getElementById('text');
    const hiddenText = document.getElementById('hidden-text');
    const hiddenSubText = document.getElementById('hidden-sub-text');


    const key1 = 'аэропорт!'
    const answer1 = 'самолет';
    let response = '';
    let answerCount = 0;



    form.addEventListener('submit', (event) => {
        event.preventDefault();
        response = textArea.value.trim().toLowerCase();
        if(answerCount >= 3) {
            hiddenText.classList.remove('hidden');
            hiddenSubText.textContent = key1;
        }

        if (answer1 === response) {
            textArea.value = '';
            text.textContent = 'Делаем дальнейшие действия!'
            hiddenText.classList.add('hidden');
        } else {
            textArea.value = '';
            answerCount++;
            textArea.style.cssText = 'border-color: red;'
            textArea.placeholder = 'Не верно  попробуй еще раз😔';
        }

    })
};

export default submitForm;
    