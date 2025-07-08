export function audioHidden() {
    const audio = document.getElementById('audio');
    if ((Number(localStorage.getItem('currentStep')) === 3
)) {
        audio.classList.remove('hidden');
    } else {
        audio.classList.add('hidden');
    }
};