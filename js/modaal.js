// open
document.querySelectorAll('.works-item').forEach(card => {
    card.addEventListener('click', () => {
        const modal = document.getElementById(card.dataset.modal);
        modal.classList.add('show');
        document.body.classList.add('modal-bg');
    });
});

// close
document.querySelectorAll('.modal-container').forEach(bg => {
    bg.addEventListener('click', () => {
        bg.classList.remove('show');
        document.body.classList.remove('modal-bg');
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
