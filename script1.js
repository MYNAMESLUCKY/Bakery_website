// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Add Scroll Animations
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    
    // Animation on Scroll
    const handleScroll = () => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ensure elements are animated when first loaded

    // Smooth Scrolling for Internal Links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 100, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });
});

// Parallax Effect for Hero Section
document.addEventListener('scroll', function () {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    const parallaxSpeed = 0.5;
    
    hero.style.backgroundPosition = `center ${scrollPosition * parallaxSpeed}px`;
});

// Form Validation (Optional for Contact Form)
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');
    
    if (!name.value || !email.value || !message.value) {
        alert('Please fill out all fields.');
        return;
    }
    
    alert('Your message has been sent!');
    // Reset the form after submission
    name.value = '';
    email.value = '';
    message.value = '';
});

// Lightbox or Image Zoom (Optional for Menu Section)
document.querySelectorAll('.menu-item img').forEach(img => {
    img.addEventListener('click', function () {
        const src = this.src;
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="Menu Image">
                <button class="close-lightbox">Close</button>
            </div>
        `;
        document.body.appendChild(lightbox);

        // Close lightbox when clicked
        lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Animate Elements When They Are Visible (For Sections)
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-section').forEach(section => {
    sectionObserver.observe(section);
});

// Hover Effect for Cards (Optional)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
});

// Animated Glowing Text Effect
const glowText = document.querySelectorAll('.glow-text');
glowText.forEach(text => {
    let interval = setInterval(() => {
        text.classList.toggle('glow');
    }, 1000);
});

// Handle Window Resize for Responsiveness
window.addEventListener('resize', function () {
    // Example: Adjust layout based on screen size (if needed)
    if (window.innerWidth < 768) {
        document.querySelector('.navbar').classList.add('collapsed');
    } else {
        document.querySelector('.navbar').classList.remove('collapsed');
    }
});
