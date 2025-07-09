export function audioHidden() {
    const audio = document.getElementById('audio');
    if ((Number(localStorage.getItem('currentStep')) === 3 && Number(localStorage.getItem('answerPass')) === 0)) {
        audio.classList.remove('hidden');
    } else {
        audio.classList.add('hidden');
    }
};