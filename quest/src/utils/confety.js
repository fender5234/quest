export function confety() {
    const container = document.getElementById('confetti-container');

    // массив цветов для конфетти
    const colors = ['#FFD700', '#DC143C', '#FFFFE0', '#00BFFF'];

    for (let i = 0; i < 100; i++) {
        createConfetti();
    }

    function createConfetti() {
        let item = document.createElement('div');
        item.classList.add('confetti-item');

        // Случайные координаты начала
        item.style.left = `${Math.random() * 100}%`;
        item.style.top = '-5%';

        // Генерируем случайный цвет
        item.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);

        // Расстояние падения и вращение
        item.style.setProperty('--distance', Math.random() * window.innerHeight + window.innerHeight * 0.5);
        item.style.setProperty('--rotation', Math.random() * 360);

        container.appendChild(item);
    }
}