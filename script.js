const text = 'Eleve tu negocio digital a otro nivel <strong class="titulo-destaque">con un Front-end de calidad!</strong>';
const typingSpeed = 55; // Velocidad de escritura en milisegundos
const erasingSpeed = 30; // Velocidad de borrado en milisegundos
const pauseBetweenCycles = 1000; // Pausa entre ciclos

const textContainer = document.getElementById('text-container');
let currentIndex = 0;
let currentText = '';

function typeText() {
    if (currentIndex < text.length) {
        currentText += text[currentIndex];
        textContainer.innerHTML = currentText;
        currentIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, pauseBetweenCycles);
    }
}

function eraseText() {
    if (currentIndex > 0) {
        currentText = currentText.slice(0, -1);
        textContainer.innerHTML = currentText;
        currentIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        setTimeout(() => {
            // Reinicia el índice y el texto para repetir el ciclo
            currentIndex = 0;
            textContainer.innerHTML = '';
            typeText();
        }, pauseBetweenCycles);
    }
}

// Llamar a la función para comenzar el efecto de escritura
window.onload = function() {
    typeText();
};
