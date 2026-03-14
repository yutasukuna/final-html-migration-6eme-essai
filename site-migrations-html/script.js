// ===== Navigation Active Link ===== 
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== Smooth Scroll ===== 
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

// ===== Card Hover Effects ===== 
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== Intersection Observer for Animations ===== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ===== Cheat Code System ===== 
let cheatCodeBuffer = '';
const cheatCodes = {
    'MIGRATIONS2024': function() {
        alert('🎮 Code activé! Quiz Expert et Migration Tycoon déverrouillés!');
        localStorage.setItem('cheatCode_MIGRATIONS2024', 'true');
    },
    'YLANE5': function() {
        alert('🐹 Notre Cobaye est maintenant visible!');
        localStorage.setItem('cheatCode_YLANE5', 'true');
        location.reload();
    },
    'VIERGE': function() {
        alert('🔒 Tous les codes sont réinitialisés');
        localStorage.clear();
        location.reload();
    }
};

document.addEventListener('keydown', function(event) {
    // Ignore if user is typing in an input field
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
    }
    
    cheatCodeBuffer += event.key.toUpperCase();
    
    // Check for cheat codes
    for (const code in cheatCodes) {
        if (cheatCodeBuffer.includes(code)) {
            cheatCodes[code]();
            cheatCodeBuffer = '';
            return;
        }
    }
    
    // Keep buffer size manageable
    if (cheatCodeBuffer.length > 20) {
        cheatCodeBuffer = cheatCodeBuffer.slice(-10);
    }
});

// ===== Mobile Menu Toggle (if needed) ===== 
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Close menu on mobile if it exists
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// ===== Scroll to Top Button ===== 
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '↑';
scrollTopButton.className = 'scroll-to-top';
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary);
    color: var(--primary-foreground);
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 999;
    display: none;
`;

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'block';
        scrollTopButton.style.opacity = '1';
    } else {
        scrollTopButton.style.opacity = '0';
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

console.log('Site loaded successfully! 🌍');
