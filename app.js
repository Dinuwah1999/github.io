// Portfolio JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero buttons functionality
    const downloadBtn = document.querySelector('.hero-buttons .btn--primary');
    const contactBtn = document.querySelector('.hero-buttons .btn--outline');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Simulate CV download
            alert('CV download functionality would be implemented here. Please contact via email for CV.');
        });
    }
    
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -10px 0px'
    };

    // Skills progress bar animation with improved observer
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach((bar, index) => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, index * 100 + 200);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px'
    });

    // Observe each skill category individually for better animation
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        skillsObserver.observe(category);
    });

    // Fade-in animation observer
    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add fade-in class to sections and observe them
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeInObserver.observe(section);
    });

    // Enhanced scroll effects for timeline items
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        timelineObserver.observe(item);
    });

    // Enhanced scroll effects for education items
    const educationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, observerOptions);

    // Observe education items
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px) scale(0.95)';
        item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        educationObserver.observe(item);
    });

    // Enhanced scroll effects for about highlights
    const highlightsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, observerOptions);

    // Observe highlight items
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px) scale(0.9)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        highlightsObserver.observe(item);
    });

    // Contact form handling with proper validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const subjectField = document.getElementById('subject');
            const messageField = document.getElementById('message');
            
            const name = nameField ? nameField.value.trim() : '';
            const email = emailField ? emailField.value.trim() : '';
            const subject = subjectField ? subjectField.value.trim() : '';
            const message = messageField ? messageField.value.trim() : '';
            
            // Reset previous error states
            [nameField, emailField, subjectField, messageField].forEach(field => {
                if (field) {
                    field.style.borderColor = '';
                }
            });
            
            let hasError = false;
            
            // Validation
            if (!name) {
                if (nameField) nameField.style.borderColor = '#ff6b6b';
                hasError = true;
            }
            
            if (!email) {
                if (emailField) emailField.style.borderColor = '#ff6b6b';
                hasError = true;
            } else {
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    if (emailField) emailField.style.borderColor = '#ff6b6b';
                    alert('Please enter a valid email address.');
                    return;
                }
            }
            
            if (!subject) {
                if (subjectField) subjectField.style.borderColor = '#ff6b6b';
                hasError = true;
            }
            
            if (!message) {
                if (messageField) messageField.style.borderColor = '#ff6b6b';
                hasError = true;
            }
            
            if (hasError) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            setTimeout(() => {
                alert(`Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 2000);
        });
    }

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        // Hide/show navbar on scroll (only hide when scrolling down fast)
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add typing effect to hero subtitle with better timing
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        heroSubtitle.style.borderRight = '2px solid #00d4ff';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    heroSubtitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing effect after page load
        setTimeout(typeWriter, 1500);
    }

    // Add hover effects to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const progressBar = this.querySelector('.skill-progress');
            if (progressBar) {
                progressBar.style.background = 'linear-gradient(90deg, #ff6b6b, #4ecdc4)';
                progressBar.style.boxShadow = '0 0 10px rgba(255, 107, 107, 0.5)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const progressBar = this.querySelector('.skill-progress');
            if (progressBar) {
                progressBar.style.background = 'linear-gradient(90deg, #00d4ff, #4ecdc4)';
                progressBar.style.boxShadow = 'none';
            }
        });
    });

    // Add click handlers for contact details
    const contactDetails = document.querySelectorAll('.detail-item');
    contactDetails.forEach((detail, index) => {
        detail.style.cursor = 'pointer';
        
        detail.addEventListener('click', function() {
            if (index === 0) { // Phone
                window.open('tel:+94774135090', '_blank');
            } else if (index === 1) { // Email
                window.open('mailto:madushandinusha1@gmail.com?subject=Portfolio Inquiry', '_blank');
            }
        });
    });

    // Add particle effect to hero section (simplified for better performance)
    let particleCount = 0;
    const maxParticles = 15;
    
    function createParticle() {
        if (particleCount >= maxParticles) return;
        
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00d4ff;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.7;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 1;
        `;
        
        hero.appendChild(particle);
        particleCount++;
        
        // Animate particle
        const duration = Math.random() * 3000 + 2000;
        const animation = particle.animate([
            { opacity: 0.7, transform: 'translateY(0px)' },
            { opacity: 0, transform: `translateY(-${50 + Math.random() * 50}px)` }
        ], {
            duration: duration,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
            particleCount--;
        };
    }

    // Create particles periodically
    setInterval(createParticle, 800);

    // Initialize page with smooth entrance
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        
        // Trigger hero image animation
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage) {
            heroImage.style.transform = 'scale(1)';
            heroImage.style.opacity = '1';
        }
    });

    // Add active section highlighting in navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    console.log('Portfolio website loaded successfully!');
});