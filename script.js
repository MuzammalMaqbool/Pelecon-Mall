// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 300);
    }
});

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation with Enhanced Feedback
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#e74c3c';
                input.style.animation = 'shake 0.5s';
            } else {
                input.style.borderColor = '#2ecc71';
                setTimeout(() => {
                    input.style.borderColor = '#e0e0e0';
                }, 2000);
            }
        });
        
        // Email validation
        const emailInputs = form.querySelectorAll('input[type="email"]');
        emailInputs.forEach(input => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (input.value && !emailRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = '#e74c3c';
                input.style.animation = 'shake 0.5s';
            }
        });
        
        if (isValid) {
            // Show success message with animation
            showNotification('Thank you for your interest! We will contact you soon.', 'success');
            form.reset();
        } else {
            showNotification('Please fill in all required fields correctly.', 'error');
        }
    });
});

// Notification System
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease, fadeOut 0.5s ease 2.5s;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all animatable elements
document.addEventListener('DOMContentLoaded', () => {
    // Section headers
    document.querySelectorAll('.section-header').forEach(el => {
        observer.observe(el);
    });
    
    // Project cards
    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // News cards
    document.querySelectorAll('.news-card').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Content sections
    document.querySelectorAll('.content-section').forEach(el => {
        observer.observe(el);
    });
    
    // About content and text
    document.querySelectorAll('.about-content, .about-text, .about-image').forEach(el => {
        observer.observe(el);
    });
    
    // Gallery items
    document.querySelectorAll('.gallery-item').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });
    
    // Amenity items
    document.querySelectorAll('.amenity-item').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });
    
    // Brand items
    document.querySelectorAll('.brand-item').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Update items
    document.querySelectorAll('.update-item').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Pillar cards
    document.querySelectorAll('.pillar-card').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Feature items
    document.querySelectorAll('.feature-item').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });
    
    // Plan cards
    document.querySelectorAll('.plan-card').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * 0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Particle Background Effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles on load
window.addEventListener('load', () => {
    createParticles();
});

// Counter Animation for Statistics (if needed)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Image Lazy Loading Enhancement
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.add('fade-in');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add fade-in class animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    img.fade-in {
        animation: fadeIn 0.5s ease;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(fadeInStyle);

// Typing Effect for Hero Title (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Cursor Trail Effect (Optional)
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Add smooth page transitions
document.querySelectorAll('a[href^=""]').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href && !this.href.includes('#')) {
            e.preventDefault();
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s';
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        }
    });
});

// Page fade in on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ROI Calculator
function calculateROI() {
    const propertyValue = parseFloat(document.getElementById('propertyValue').value) || 0;
    const downPayment = parseFloat(document.getElementById('downPayment').value) || 0;
    const appreciation = parseFloat(document.getElementById('appreciation').value) || 0;
    const period = parseFloat(document.getElementById('period').value) || 0;
    
    const downPaymentAmount = propertyValue * (downPayment / 100);
    const projectedValue = propertyValue * Math.pow(1 + (appreciation / 100), period);
    const totalReturn = projectedValue - propertyValue;
    const roi = ((totalReturn / downPaymentAmount) * 100).toFixed(2);
    
    document.getElementById('projectedValue').textContent = 'PKR ' + formatNumber(projectedValue.toFixed(0));
    document.getElementById('totalReturn').textContent = 'PKR ' + formatNumber(totalReturn.toFixed(0));
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// View Toggle Functionality
document.querySelectorAll('.view-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.view-toggle-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Property Action Buttons
document.querySelectorAll('.property-action-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (this.querySelector('.fa-heart')) {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.style.color = 'var(--accent-red)';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.style.color = '';
            }
        }
    });
});

// Virtual Tour Click
document.querySelectorAll('.virtual-tour').forEach(tour => {
    tour.addEventListener('click', function() {
        alert('Virtual tour feature coming soon!');
    });
});
