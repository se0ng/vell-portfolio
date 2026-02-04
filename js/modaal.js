// modal open
document.querySelectorAll('.works-item').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal; // data-modal属性を取得
        const modal = document.getElementById(modalId);
        modal.classList.add('show'); // 直接 modal-container に show を付与
    });
});

// modal close
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal-container').classList.remove('show');
    });
});