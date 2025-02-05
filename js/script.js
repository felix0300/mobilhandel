// Smooth scrolling for navigation links and scroll indicator
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Show navbar and scroll indicator after Spline animation
setTimeout(() => {
    const navbar = document.querySelector('nav');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    navbar.classList.add('visible');
    scrollIndicator.classList.add('visible');
}, 3000);

// Animate numbers when in view
const trustItems = document.querySelectorAll('.trust-item .number');
let animated = false;

function animateNumbers() {
    if (animated) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const value = parseFloat(target.innerText); // Henter måltallet
                let start = 0;
                const duration = 2000;
                const frameRate = 16; // Ca. 60FPS
                const increment = value / (duration / frameRate);
                
                function updateNumber() {
                    start += increment;
                    if (start < value) {
                        target.innerText = (start.toFixed(1)) + "/10"; // Viser formatet nr/10
                        requestAnimationFrame(updateNumber);
                    } else {
                        target.innerText = value.toFixed(1) + "/10"; // Sikrer riktig sluttverdi
                    }
                }
                
                updateNumber();
                animated = true;
                observer.unobserve(target);
            }
        });
    });

    trustItems.forEach(item => observer.observe(item));
}

// Initialize animations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
});


