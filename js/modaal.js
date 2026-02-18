// open
document.querySelectorAll('.works-item').forEach(card => {
    card.addEventListener('click', () => {
        const modal = document.getElementById(card.dataset.modal);
        modal.classList.add('show');
        document.body.classList.add('modal-bg');
    });
});

// close
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal-container').classList.remove('show');
        document.body.classList.remove('modal-bg');
    });
});

// fade
$(document).ready(function () {
    $('.works-item').modaal({
        type: 'inline',
        overlay_opacity: .7,
        animation: 'fade'
    });
});
