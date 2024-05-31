const textElement = document.getElementById('animated-text');
const cursorElement = document.getElementById('cursor');
const modeToggleButton = document.querySelector('.dark-mode-toggle');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeGradient() {
    const startColor = getRandomColor();
    const endColor = getRandomColor();
    textElement.style.background = `linear-gradient(90deg, ${startColor}, ${endColor})`;
    textElement.style.webkitBackgroundClip = 'text';
    textElement.style.webkitTextFillColor = 'transparent';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    updateCursorColor();
    grid.draw();
}

function updateCursorColor() {
    if (document.body.classList.contains('dark-mode')) {
        cursorElement.style.color = 'white';
    } else {
        cursorElement.style.color = 'black';
    }
}

function typeEffect() {
    const text = 'eyus00';
    let index = 0;
    let isDeleting = false;
    function type() {
        textElement.textContent = text.slice(0, index);
        if (!isDeleting && index < text.length) {
            index++;
            setTimeout(type, 400);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(type, 200);
        } else if (!isDeleting && index === text.length) {
            isDeleting = true;
            setTimeout(type, 3000);
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            changeGradient();
            setTimeout(type, 1000);
        }
    }
    type();
}

modeToggleButton.addEventListener('click', toggleDarkMode);
updateCursorColor();
typeEffect();
