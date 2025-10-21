// ===================================
// Initialize GSAP and ScrollTrigger
// ===================================
gsap.registerPlugin(ScrollTrigger);

// ===================================
// Navigation Scroll Effect
// ===================================
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===================================
// Smooth Scroll for Navigation
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('.content-section');

ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    onEnter: () => updateActiveLink(null),
    onEnterBack: () => updateActiveLink(null)
});

sections.forEach((section, index) => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => updateActiveLink(index),
        onEnterBack: () => updateActiveLink(index)
    });
});

function updateActiveLink(index) {
    navLinks.forEach(link => link.classList.remove('active'));
    if (index !== null && navLinks[index]) {
        navLinks[index].classList.add('active');
    }
}

// ===================================
// Hero Section Animations
// ===================================
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTimeline
    .from('.hero-title-line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })
    .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, '-=0.4')
    .from('.hero-visual', {
        scale: 0.8,
        opacity: 0,
        duration: 1
    }, '-=0.6')
    .to('.triangle', {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut'
    }, '-=0.8')
    .from('.scroll-indicator', {
        y: -20,
        opacity: 0,
        duration: 0.8
    }, '-=0.5');

// ===================================
// Section Number Pin Effect
// ===================================
sections.forEach((section) => {
    const sectionNumber = section.querySelector('.section-number');

    gsap.to(sectionNumber, {
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            pin: false,
            scrub: 1
        },
        y: 100,
        opacity: 0.3
    });
});

// ===================================
// Section Title Animations
// ===================================
sections.forEach((section) => {
    const title = section.querySelector('.section-title');
    const subtitle = section.querySelector('.section-subtitle');

    gsap.from(title, {
        scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from(subtitle, {
        scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });
});

// ===================================
// Content Block Stagger Animations
// ===================================
sections.forEach((section) => {
    const contentBlocks = section.querySelectorAll('.content-block > p, .content-block > .lead-text');

    gsap.from(contentBlocks, {
        scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
    });
});

// ===================================
// Highlight Box Animations
// ===================================
const highlightBoxes = document.querySelectorAll('.highlight-box');

highlightBoxes.forEach((box) => {
    gsap.from(box, {
        scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// ===================================
// Pillar Animations (Section 2)
// ===================================
const pillars = document.querySelectorAll('.pillar');

pillars.forEach((pillar, index) => {
    const pillarTitle = pillar.querySelector('.pillar-title');
    const pillarContent = pillar.querySelectorAll('p');

    const pillarTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: pillar,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        }
    });

    pillarTimeline
        .from(pillarTitle, {
            x: -30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        })
        .from(pillarContent, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.4');
});

// ===================================
// Key Points Animations (Section 3)
// ===================================
const keyPoints = document.querySelectorAll('.key-point');

gsap.from(keyPoints, {
    scrollTrigger: {
        trigger: '.key-points',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
});

// ===================================
// Strategy Grid Animations (Section 4)
// ===================================
const strategyItems = document.querySelectorAll('.strategy-item');

gsap.from(strategyItems, {
    scrollTrigger: {
        trigger: '.strategy-grid',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out'
});

// ===================================
// Closing Text Animation (Section 5)
// ===================================
const closingText = document.querySelector('.closing-text');

if (closingText) {
    gsap.from(closingText, {
        scrollTrigger: {
            trigger: closingText,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
}

// ===================================
// Footer Animation
// ===================================
const footer = document.querySelector('.footer');

gsap.from('.footer-content', {
    scrollTrigger: {
        trigger: footer,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// ===================================
// Parallax Effect on Hero Visual
// ===================================
gsap.to('.hero-visual', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 200,
    opacity: 0,
    ease: 'none'
});

// ===================================
// SVG Triangle Rotation on Scroll
// ===================================
gsap.to('.triangle', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    rotation: 120,
    transformOrigin: 'center center',
    ease: 'none'
});

// ===================================
// Console Log for Debugging
// ===================================
console.log('🚀 GSAP ScrollTrigger initialized');
console.log('📊 Project Management Guide loaded successfully');

// ===================================
// Performance Optimization
// ===================================
ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 150
});

// Refresh ScrollTrigger on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ===================================
// Page Load Complete
// ===================================
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
    console.log('✅ Page fully loaded and ScrollTrigger refreshed');
});
