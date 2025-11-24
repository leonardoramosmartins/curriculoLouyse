// Animation and Interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const skillLevel = skillBar.getAttribute('data-skill');
                skillBar.style.width = skillLevel + '%';
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Animate statistics counters
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statElement = entry.target;
                const targetNumber = parseInt(statElement.getAttribute('data-count'));
                animateCounter(statElement, targetNumber);
                statsObserver.unobserve(statElement);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Counter animation function
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const duration = 2000; // 2 seconds
        const stepTime = duration / 100;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, stepTime);
    }

    // Smooth scrolling for anchor links
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

    // Add scroll animations to sections
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll', 'animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        sectionObserver.observe(section);
    });

    // Add typing effect to the main title
    const mainTitle = document.querySelector('.profile-info h1');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                mainTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add hover effects to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click to copy functionality for contact info
    const emailElement = document.querySelector('.contact-item:has(.fa-envelope) span');
    const phoneElement = document.querySelector('.contact-item:has(.fa-phone) span');
    const addressElement = document.querySelector('.contact-item:has(.fa-map-marker-alt) span');
    const birthElement = document.querySelector('.contact-item:has(.fa-calendar-alt) span');

    if (emailElement) {
        emailElement.style.cursor = 'pointer';
        emailElement.title = 'Clique para copiar o email';
        emailElement.addEventListener('click', function() {
            copyToClipboard(this.textContent, 'Email copiado!');
        });
    }

    if (phoneElement) {
        phoneElement.style.cursor = 'pointer';
        phoneElement.title = 'Clique para copiar o telefone';
        phoneElement.addEventListener('click', function() {
            copyToClipboard(this.textContent, 'Telefone copiado!');
        });
    }

    if (addressElement) {
        addressElement.style.cursor = 'pointer';
        addressElement.title = 'Clique para copiar o endereço';
        addressElement.addEventListener('click', function() {
            copyToClipboard(this.textContent, 'Endereço copiado!');
        });
    }

    if (birthElement) {
        birthElement.style.cursor = 'pointer';
        birthElement.title = 'Clique para copiar a data de nascimento';
        birthElement.addEventListener('click', function() {
            copyToClipboard(this.textContent, 'Data de nascimento copiada!');
        });
    }

    // Copy to clipboard function
    function copyToClipboard(text, message) {
        navigator.clipboard.writeText(text).then(function() {
            showToast(message);
        }).catch(function(err) {
            console.error('Erro ao copiar: ', err);
        });
    }

    // Toast notification function
    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #3498db;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1000;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
            transform: translateY(100px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateY(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Progress bar for page scroll
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, rgba(255, 152, 255, 1), #ff8bdcff);
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Add theme toggle functionality (optional)
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #f300e7ff;
        color: white;
        font-size: 18px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(219, 52, 219, 0.3);
        transition: all 0.3s ease;
    `;
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        this.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
    
    document.body.appendChild(themeToggle);

    // Print functionality
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i>';
    printButton.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #27ae60;
        color: white;
        font-size: 18px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3);
        transition: all 0.3s ease;
    `;
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    document.body.appendChild(printButton);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(function() {
    // Scroll-related code here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);
