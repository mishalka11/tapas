document.addEventListener('DOMContentLoaded', function() {
    const coin = document.getElementById('coin');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    coin.addEventListener('click', function() {
        // Увеличение счетчика на 1
        score++;
        scoreDisplay.textContent = score;

        // Добавление анимации нажатия
        coin.classList.add('pressed');
        setTimeout(function() {
            coin.classList.remove('pressed');
        }, 200); // время в миллисекундах, в течение которого будет происходить анимация
    });
});
