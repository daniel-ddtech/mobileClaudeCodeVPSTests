// Custom cursor
const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor animation
function animateCursor() {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    requestAnimationFrame(animateCursor);
}

// Start cursor animation only on desktop
if (window.innerWidth > 768) {
    animateCursor();
}

// Cursor hover effects
const hoverTargets = document.querySelectorAll('a, button, .project');
hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.borderColor = '#8b5cf6';
    });
    
    target.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = '#6366f1';
    });
});

// Smooth scrolling for navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations for projects and other elements
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project, .tech, .section-title');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// Dynamic text animation for tagline
const tagline = document.querySelector('.tagline');
const highlights = ['cool stuff', 'amazing apps', 'web magic', 'digital dreams'];
let currentIndex = 0;

function rotateHighlight() {
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        highlight.style.opacity = '0';
        highlight.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % highlights.length;
            highlight.textContent = highlights[currentIndex];
            highlight.style.opacity = '1';
            highlight.style.transform = 'translateY(0)';
        }, 300);
    }
}

// Start text rotation after initial load
setTimeout(() => {
    setInterval(rotateHighlight, 3000);
}, 2000);

// Add interactive hover effects to tech stack
const techElements = document.querySelectorAll('.tech');
techElements.forEach(tech => {
    tech.addEventListener('mouseenter', () => {
        tech.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    tech.addEventListener('mouseleave', () => {
        tech.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Projects hover effect with cursor
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth page reveal
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Add stagger animation to hero elements
    const heroElements = ['.hello', '.name', '.tagline', '.cta-btn'];
    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.animationDelay = `${0.2 + (index * 0.2)}s`;
        }
    });
});

// Easter egg: konami code
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated!
            document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd)';
            document.body.style.backgroundSize = '400% 400%';
            document.body.style.animation = 'gradient 3s ease infinite';
            
            setTimeout(() => {
                location.reload();
            }, 5000);
            
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});