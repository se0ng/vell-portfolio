const html = document.documentElement;
const body = document.body;

// open
document.querySelectorAll('.works-item').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        const modal = document.getElementById(modalId);

        if (modal) {
            modal.classList.add('show');
            html.style.overflow = 'hidden';
            body.style.overflow = 'hidden';
        }
    });
});

// close
document.querySelectorAll('.modal-container').forEach(bg => {
    bg.addEventListener('click', e => {
        if (e.target === bg) {
            bg.classList.remove('show');
            html.style.overflow = '';
            body.style.overflow = '';
        }
    });
});

// key Esc
window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-container.show');
        if (activeModal) {
            activeModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }
});
