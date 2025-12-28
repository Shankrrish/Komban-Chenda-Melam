/* ===================================
   PREMIUM KOMBAN CHENDA MELAM
   Enhanced JavaScript Features
   =================================== */

// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);

    // Add ripple effect
    createRipple(themeToggle);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

function createRipple(element) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    ripple.style.background = 'rgba(255, 215, 0, 0.6)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// ========== MOBILE NAVIGATION ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    body.classList.toggle('menu-open');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
            body.classList.remove('menu-open');
        }
    });
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== SCROLL REVEAL ANIMATIONS ==========
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: stop observing after reveal
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ========== STICKY NAVBAR ENHANCEMENT ==========
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for enhanced shadow
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========== PARTICLE SYSTEM (Hero Section) ==========
const particlesContainer = document.getElementById('particles');
const particleCount = window.innerWidth > 768 ? 30 : 15;

function createParticles() {
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 2-8px
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random animation delay and duration
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;

        particlesContainer.appendChild(particle);
    }
}

// Create particles on load
if (particlesContainer) {
    createParticles();
}

// ========== LIGHTBOX GALLERY ==========
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const galleryImages = document.querySelectorAll('.gallery-img');

// Open lightbox on image click
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        body.style.overflow = 'hidden';
    });
});

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    body.style.overflow = 'auto';
}

lightboxClose.addEventListener('click', closeLightbox);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// ========== DYNAMIC CURSOR EFFECT (Desktop only) ==========
if (window.innerWidth > 1024) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Create custom cursor followers (optional enhancement)
    // This can be expanded for more premium feel
}

// ========== SCROLL PROGRESS INDICATOR (Optional) ==========
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Can be used to create a progress bar at top
    // For now, storing for potential use
    document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
}

window.addEventListener('scroll', updateScrollProgress);

// ========== ENHANCED BUTTON INTERACTIONS ==========
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function (e) {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });

    button.addEventListener('mouseleave', function (e) {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========== PERFORMANCE OPTIMIZATION ==========
// Lazy load images (if more images are added in future)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========== WHATSAPP BUTTON PULSE EFFECT ==========
const whatsappBtn = document.querySelector('.whatsapp-btn');

if (whatsappBtn) {
    setInterval(() => {
        whatsappBtn.style.animation = 'none';
        setTimeout(() => {
            whatsappBtn.style.animation = '';
        }, 10);
    }, 5000);
}

// ========== SMOOTH PAGE LOAD ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ========== CONSOLE EASTER EGG ==========
console.log('%c🥁 Komban Chenda Melam 🥁', 'color: #FFD700; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cExperience the rhythm of Kerala!', 'color: #D32F2F; font-size: 16px;');
console.log('%cContact: +91 9092 792 792', 'color: #555; font-size: 14px;');

// ========== GALLERY NAVIGATION ==========
const gallery = document.querySelector('.image-gallery');
const prevBtn = document.querySelector('.gallery-nav.prev');
const nextBtn = document.querySelector('.gallery-nav.next');

if (gallery && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        gallery.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        gallery.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
}

