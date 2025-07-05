// ===== GLOBAL VARIABLES =====
let typingTimer;
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

// Text array for typing animation
const typingTexts = [
    'Software Engineer',
    'Full-Stack Developer',
    '.NET Developer',
    'ITI Graduate',
    'Problem Solver',
    'Competitive Programmer'
];

// Parallax elements
let parallaxElements = [];

// ===== DOCUMENT READY =====
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out-cubic',
        once: true,
        offset: 100,
        delay: 100
    });

    // Initialize all functionality
    initNavigation();
    initTypingAnimation();
    initSkillBars();
    initContactForm();
    initSmoothScrolling();
    initThemeToggle();
    initBackToTop();
    initScrollProgress();
    initParallax();

    // Add scroll event listeners
    window.addEventListener('scroll', debounce(handleScroll, 10));
    window.addEventListener('resize', debounce(handleResize, 250));
});

// ===== THEME TOGGLE FUNCTIONALITY =====
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const profileImage = document.getElementById('profileImage');

    // Set your image paths
    const lightThemeImage = 'assets/Yousry-light.JPG'; // replace with your actual path
    const darkThemeImage = 'assets/Yousry-iti.jpg';   // replace with your actual path

    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', function () {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Add transition class for smooth theme change
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Remove transition after animation completes
        setTimeout(() => {
            body.style.transition = '';
        }, 300);

        // Change profile image
        profileImage.src = newTheme === 'dark' ? darkThemeImage : lightThemeImage;

        // Add a subtle animation to the toggle button
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

// ===== SCROLL PROGRESS INDICATOR =====
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');

    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = scrollPercentage + '%';
    }

    window.addEventListener('scroll', debounce(updateScrollProgress, 10));
}

// ===== BACK TO TOP BUTTON =====
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    function toggleBackToTop() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    backToTopBtn.addEventListener('click', function () {
        // Add click animation
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', debounce(toggleBackToTop, 10));
}

// ===== PARALLAX EFFECTS =====
function initParallax() {
    parallaxElements = document.querySelectorAll('.parallax-layer');

    function updateParallax() {
        const scrollTop = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    window.addEventListener('scroll', debounce(updateParallax, 10));
}

// ===== ENHANCED SCROLL HANDLER =====
function handleScroll() {
    handleNavbarScroll();
    updateActiveNavLink();

    // Add scroll-based animations
    animateOnScroll();
}

// ===== SCROLL-BASED ANIMATIONS =====
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-card, .stat-card, .award-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }
    });
}

// ===== NAVIGATION FUNCTIONALITY =====
function initNavigation() {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Add active class to current section
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');

                // Smooth scroll to section with offset for fixed navbar
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Add ripple effect
                createRippleEffect(this, e);
            }
        });
    });
}

// ===== RIPPLE EFFECT =====
function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function handleNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const scrollPos = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== ENHANCED TYPING ANIMATION =====
function initTypingAnimation() {
    const typedElement = document.getElementById('typed-text');
    if (!typedElement) return;

    startTyping();
}

function startTyping() {
    const typedElement = document.getElementById('typed-text');
    const currentText = typingTexts[currentTextIndex];

    if (isDeleting) {
        // Remove characters with variable speed
        typedElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            typingTimer = setTimeout(startTyping, 500); // Pause before typing next text
        } else {
            typingTimer = setTimeout(startTyping, 30 + Math.random() * 20); // Variable deleting speed
        }
    } else {
        // Add characters with variable speed
        typedElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === currentText.length) {
            isDeleting = true;
            typingTimer = setTimeout(startTyping, 2000); // Pause before deleting
        } else {
            typingTimer = setTimeout(startTyping, 80 + Math.random() * 40); // Variable typing speed
        }
    }
}

// ===== ENHANCED SKILL BARS ANIMATION =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');

                // Animate the progress bar with easing
                setTimeout(() => {
                    progressBar.style.width = width + '%';

                    // Add counter animation
                    animateCounter(progressBar, width);
                }, 200);

                // Unobserve after animation
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5
    });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ===== COUNTER ANIMATION =====
function animateCounter(element, targetValue) {
    const skillItem = element.closest('.skill-item');
    const percentageElement = skillItem.querySelector('.skill-percentage');

    if (!percentageElement) return;

    let currentValue = 0;
    const increment = targetValue / 60; // 60 frames for smooth animation

    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        percentageElement.textContent = Math.round(currentValue) + '%';
    }, 16); // ~60fps
}

// ===== ENHANCED CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleFormSubmit);

    // Add real-time validation with enhanced feedback
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            clearFieldError(input);
            // Real-time validation for better UX
            if (input.value.trim()) {
                validateField(input);
            }
        });

        // Add focus animations
        input.addEventListener('focus', function () {
            this.parentElement.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function () {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
}

function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formObject = {};

    // Convert FormData to object
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Validate all fields
    if (validateForm(form)) {
        // Show loading state with enhanced animation
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        submitBtn.disabled = true;
        submitBtn.style.transform = 'scale(0.98)';

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message with animation
            showSuccessMessage();

            // Reset form with animation
            form.reset();

            // Reset button with animation
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.transform = 'scale(1)';

            // Add success animation to button
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            setTimeout(() => {
                submitBtn.style.background = '';
            }, 2000);
        }, 2000);
    }
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name') || field.id;
    let isValid = true;
    let errorMessage = '';

    // Check if field is empty
    if (!value) {
        errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
        isValid = false;
    } else {
        // Specific validation based on field type
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errorMessage = 'Please enter a valid email address';
                    isValid = false;
                }
                break;
            case 'text':
                if (fieldName === 'name' && value.length < 2) {
                    errorMessage = 'Name must be at least 2 characters long';
                    isValid = false;
                }
                if (fieldName === 'subject' && value.length < 3) {
                    errorMessage = 'Subject must be at least 3 characters long';
                    isValid = false;
                }
                break;
            default:
                if (field.tagName === 'TEXTAREA' && value.length < 10) {
                    errorMessage = 'Message must be at least 10 characters long';
                    isValid = false;
                }
        }
    }

    // Show/hide error with animation
    if (isValid) {
        clearFieldError(field);
    } else {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('is-invalid');
    field.style.borderColor = '#ef4444';

    const feedback = field.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
        feedback.style.opacity = '1';
        feedback.style.transform = 'translateY(0)';
    }
}

function clearFieldError(field) {
    field.classList.remove('is-invalid');
    field.style.borderColor = '';

    const feedback = field.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = '';
        feedback.style.opacity = '0';
        feedback.style.transform = 'translateY(-10px)';
    }
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'block';
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(-20px)';

        // Animate in
        setTimeout(() => {
            successMessage.style.opacity = '1';
            successMessage.style.transform = 'translateY(0)';
        }, 100);

        // Hide after 5 seconds with animation
        setTimeout(() => {
            successMessage.style.opacity = '0';
            successMessage.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 300);
        }, 5000);
    }
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    // Handle all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== INTERSECTION OBSERVER FOR ENHANCED ANIMATIONS =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');

                // Add stagger effect for grouped elements
                const siblings = entry.target.parentElement.querySelectorAll('[data-aos]');
                siblings.forEach((sibling, index) => {
                    if (sibling === entry.target) return;
                    setTimeout(() => {
                        sibling.classList.add('aos-animate');
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===== PROJECT CAROUSEL ENHANCEMENTS =====
function initProjectCarousel() {
    const carousel = document.getElementById('projectCarousel');
    if (!carousel) return;

    // Add keyboard navigation
    carousel.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            const prevBtn = carousel.querySelector('.carousel-control-prev');
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            const nextBtn = carousel.querySelector('.carousel-control-next');
            nextBtn.click();
        }
    });

    // Pause carousel on hover with smooth transition
    carousel.addEventListener('mouseenter', function () {
        const carouselInstance = bootstrap.Carousel.getInstance(carousel);
        if (carouselInstance) {
            carouselInstance.pause();
        }
    });

    carousel.addEventListener('mouseleave', function () {
        const carouselInstance = bootstrap.Carousel.getInstance(carousel);
        if (carouselInstance) {
            carouselInstance.cycle();
        }
    });

    // Add swipe support for mobile
    let startX = 0;
    let endX = 0;

    carousel.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next slide
                carousel.querySelector('.carousel-control-next').click();
            } else {
                // Swipe right - previous slide
                carousel.querySelector('.carousel-control-prev').click();
            }
        }
    }
}

// ===== RESIZE HANDLER =====
function handleResize() {
    // Recalculate parallax elements
    if (parallaxElements.length > 0) {
        initParallax();
    }

    // Refresh AOS on resize
    AOS.refresh();
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function initAccessibility() {
    // Add focus management for carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
        const focusableElements = item.querySelectorAll('button, a, input, textarea, select');
        focusableElements.forEach(element => {
            element.setAttribute('tabindex', item.classList.contains('active') ? '0' : '-1');
        });
    });

    // Update tabindex when carousel slides change
    const carousel = document.getElementById('projectCarousel');
    if (carousel) {
        carousel.addEventListener('slid.bs.carousel', function () {
            carouselItems.forEach(item => {
                const focusableElements = item.querySelectorAll('button, a, input, textarea, select');
                focusableElements.forEach(element => {
                    element.setAttribute('tabindex', item.classList.contains('active') ? '0' : '-1');
                });
            });
        });
    }

    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#about';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--accent-primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', function () {
        this.style.top = '6px';
    });

    skipLink.addEventListener('blur', function () {
        this.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ===== INITIALIZE ADDITIONAL FEATURES =====
document.addEventListener('DOMContentLoaded', function () {
    initProjectCarousel();
    initAccessibility();
    initScrollAnimations();

    // Add loading animation
    document.body.classList.add('loaded');

    // Preload critical images
    preloadImages();
});

// ===== IMAGE PRELOADING =====
function preloadImages() {
    const images = [
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function (e) {
    console.error('JavaScript Error:', e.error);
    // You can add error reporting here
});

// ===== BROWSER COMPATIBILITY =====
// Check for IntersectionObserver support
if (!window.IntersectionObserver) {
    // Fallback for older browsers
    console.warn('IntersectionObserver not supported. Some animations may not work.');

    // Simple fallback - show all elements
    document.querySelectorAll('[data-aos]').forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'none';
    });
}

// ===== UTILITY FUNCTIONS =====
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function getTheme() {
    return document.body.getAttribute('data-theme') || 'dark';
}

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// ===== EXPORT FUNCTIONS FOR GLOBAL ACCESS =====
window.scrollToTop = scrollToTop;
window.getTheme = getTheme;
window.setTheme = setTheme;

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', function () {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}