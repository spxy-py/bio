document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 30px rgba(255, 51, 51, 0.4)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
        });
    });
    