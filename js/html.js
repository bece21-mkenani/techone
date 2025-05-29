const popup = document.getElementById("popup");
const navMobile = document.getElementById("navbar");
const opacity = document.getElementById("opacity");



popup.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    popup.classList.toggle("active")
    opacity.classList.toggle("active")
});

opacity.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    popup.classList.toggle("active")
    opacity.classList.toggle("active")
});

function toggleOverlay(event, card) {
    const overlay = card.querySelector('.overlay');
    const label = card.querySelector('.click-label');
    const isActive = overlay.classList.contains('active');

    // Close all overlays first
    document.querySelectorAll('.overlay.active').forEach(o => {
        o.classList.remove('active');
        o.classList.add('fade-out');
        setTimeout(() => o.classList.remove('fade-out'), 800);
    });

    document.querySelectorAll('.service-card').forEach(c => {
        c.classList.remove('blurred');
        c.querySelector('.click-label').style.display = 'block';
    });

    // Toggle current card if it wasn’t already active
    if (!isActive) {
        overlay.classList.remove('fade-out');
        overlay.classList.add('active');
        card.classList.add('blurred');
        label.style.display = 'none';
    }

    event.stopPropagation();
}

// Close on outside click
document.addEventListener('click', e => {
    if (!e.target.closest('.service-card')) {
        document.querySelectorAll('.overlay.active').forEach(o => {
            o.classList.remove('active');
            o.classList.add('fade-out');
            setTimeout(() => o.classList.remove('fade-out'), 800);
        });

        document.querySelectorAll('.service-card').forEach(c => {
            c.classList.remove('blurred');
            c.querySelector('.click-label').style.display = 'block';
        });
    }
});