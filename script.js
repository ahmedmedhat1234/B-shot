// Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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
});

// Download Menu Function
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadMenuBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = 'menu.jpg';
            link.download = 'B_SHOT_Menu.jpg';
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show success message
            showDownloadMessage();
        });
    }
});

// Show download success message
function showDownloadMessage() {
    // Create message element
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        z-index: 10000;
        font-family: 'Cairo', sans-serif;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    message.innerHTML = '<i class="fas fa-check-circle" style="margin-left: 10px;"></i>تم تنزيل المنيو بنجاح!';
    
    document.body.appendChild(message);
    
    // Animate in
    setTimeout(() => {
        message.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        message.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// Coffee Cup Scroll Animation
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const mainCoffeeCup = document.getElementById('mainCoffeeCup');
    const heroSection = document.querySelector('.hero-section');
    
    if (mainCoffeeCup && heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollProgress = Math.min(scrolled / heroHeight, 1);
        
        // Move cup up and scale as user scrolls down
        const translateY = -scrollProgress * 100; // Move up 100px max
        const scale = 1 + scrollProgress * 0.3; // Scale up to 1.3x
        const rotate = scrollProgress * 180; // Half rotation
        
        mainCoffeeCup.style.transform = `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`;
        
        // Add glow effect when scrolling
        if (scrollProgress > 0.2) {
            mainCoffeeCup.style.filter = `drop-shadow(0 0 ${scrollProgress * 20}px rgba(255, 255, 255, 0.6))`;
        } else {
            mainCoffeeCup.style.filter = 'none';
        }
    }
});

// Contact Developer Function
function openDeveloperSite() {
    // Add click animation
    const btn = event.target;
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);
    
    // Open the developer website
    window.open('https://nxt-4.netlify.app/', '_blank');
}

function openFacebook() {
    window.open('https://www.facebook.com/share/1EjQzbeVrV/?mibextid=wwXIfr', '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com/b_shot_1?igsh=MWtyczZwM294dzZrZQ%3D%3D&utm_source=qr', '_blank');
}

function openWhatsApp() {
    window.open('https://wa.me/+201207357565', '_blank');
}

// Parallax Effect for Hero Background
window.addEventListener("scroll", function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector(".hero-background");
    
    if (heroBackground) {
        const rate = scrolled * -0.2;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// Scroll-triggered animations for menu items
let ticking = false;

function updateScrollAnimations() {
    const scrollTop = window.pageYOffset;
    
    // Menu items fade in
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !item.classList.contains("animated")) {
            item.classList.add("animated");
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
            item.style.animationDelay = `${index * 0.1}s`;
        }
    });
    
    // Category headers animation
    const categoryHeaders = document.querySelectorAll(".category-header");
    categoryHeaders.forEach((header, index) => {
        const rect = header.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !header.classList.contains("animated")) {
            header.classList.add("animated");
            header.style.opacity = "1";
            header.style.transform = "translateY(0)";
        }
    });
    
    ticking = false;
}

function requestScrollUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateScrollAnimations);
        ticking = true;
    }
}

window.addEventListener("scroll", requestScrollUpdate);

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
    // Set initial state for menu items
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all 0.6s ease";
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Set initial state for category headers
    const categoryHeaders = document.querySelectorAll(".category-header");
    categoryHeaders.forEach((header) => {
        header.style.opacity = "0";
        header.style.transform = "translateY(20px)";
        header.style.transition = "all 0.8s ease";
    });
    
    // Trigger initial scroll check
    setTimeout(requestScrollUpdate, 100);
    
    // Add scroll down click functionality
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', function() {
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// Enhanced button interactions
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.style.transform.includes('scale')) {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.style.transform.includes('scale(0.95)')) {
                this.style.transform = '';
            }
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });
});

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.download-btn, .contact-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for better performance
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    const animatableElements = document.querySelectorAll('.menu-category, .download-card, .location-card, .contact-card');
    animatableElements.forEach(el => observer.observe(el));
});

// Add CSS for intersection observer animations
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .animate-in {
        animation: slideInUp 0.8s ease-out forwards;
    }
`;
document.head.appendChild(animationStyle);

