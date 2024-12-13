const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');

// Open Modal
openModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

// Close Modal
closeModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Close Modal by Clicking Outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

// Close Modal on Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalOverlay.style.display = 'none';
    }
});