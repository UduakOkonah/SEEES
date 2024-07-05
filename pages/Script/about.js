document.addEventListener('DOMContentLoaded', function () {
    const adminCards = document.querySelectorAll('.admin-card');

    adminCards.forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('expanded');
        });
    });
});


