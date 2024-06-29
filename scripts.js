const wheel = document.getElementById('fancyz-wheel');
const button = document.getElementById('fancyz-spin-button');

button.addEventListener('click', () => {
    const deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = 'all 5s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;

    wheel.addEventListener('transitionend', () => {
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
});
