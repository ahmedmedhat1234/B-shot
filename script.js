// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

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


// Contact Developer Function
function openDeveloperSite() {
    // Add click animation
    const btn = event.target;
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'translateY(-3px)';
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


// Parallax Effect for Header
window.addEventListener("scroll", function() {
    const scrolled = window.pageYOffset;
    const headerBg = document.querySelector(".header-bg");
    
    if (headerBg) {
        const rate = scrolled * -0.5;
        headerBg.style.transform = `translateY(${rate}px)`;
    }
});

// Dynamic Background Animation (Floating elements in header)
function createFloatingElements() {
    const header = document.querySelector(".header");
    if (!header) return;
    
    setInterval(() => {
        const element = document.createElement("div");
        element.style.position = "absolute";
        element.style.width = Math.random() * 10 + 5 + "px";
        element.style.height = element.style.width;
        element.style.background = "rgba(255, 255, 255, 0.1)";
        element.style.borderRadius = "50%";
        element.style.left = Math.random() * 100 + "%";
        element.style.top = "100%";
        element.style.pointerEvents = "none";
        element.style.animation = "floatUp 8s linear forwards";
        
        header.appendChild(element);
        
        setTimeout(() => {
            element.remove();
        }, 8000);
    }, 2000);
}

// Initialize floating elements
document.addEventListener("DOMContentLoaded", createFloatingElements);

// Scroll-triggered animations for menu items
let ticking = false;

function updateScrollAnimations() {
    const scrollTop = window.pageYOffset;
    
    // Menu items fade in
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !item.classList.contains("animated")) {
            item.classList.add("animated");
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
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
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Trigger initial scroll check
    setTimeout(requestScrollUpdate, 100);
});


