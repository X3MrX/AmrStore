// Translation data
const translations = {
    en: {
        home: "Home",
        categories: "Categories",
        about: "About Us",
        contact: "Contact Us",
        searchPlaceholder: "Search for apps, games, software...",
        categoriesTitle: "Download Categories",
        mobileApps: "Mobile Applications",
        mobileDesc: "Download premium Android & iOS apps for productivity, social media, utilities and more.",
        pcSoftware: "PC Software",
        pcDesc: "Essential software for Windows and macOS - utilities, security, office suites and more.",
        mobileGames: "Mobile Games",
        gamesDesc: "Top-rated games for Android and iOS - action, strategy, puzzles and more.",
        pcGames: "PC Games",
        pcGamesDesc: "The latest and greatest PC games - AAA titles, indie games, and classics.",
        adobe: "Adobe Software",
        adobeDesc: "Full suite of Adobe creative applications - Photoshop, Premiere, After Effects and more.",
        templates: "Templates",
        templatesDesc: "Professional templates for websites, presentations, documents and more.",
        browseBtn: "Browse Now",
        aboutTitle: "About Us",
        aboutText: "We offer a reliable platform for downloading mobile apps, PC software, Adobe programs, and various games. Our mission is to provide a fast, easy, and organized experience for all users, with multi-language support and a secure download system.",
        contactBtn: "Contact Us",
        contactTitle: "Contact Us",
        emailTitle: "Email",
        phoneTitle: "Phone",
        locationTitle: "Location",
        locationText: "Cairo, Egypt",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sendBtn: "Send Message",
        footerAbout: "About AmrStore",
        footerAboutText: "Your trusted source for premium apps, software, games, and templates. Fast downloads and secure platform.",
        quickLinks: "Quick Links",
        downloadCats: "Download Categories",
        rightsText: "All rights reserved."
    },
    ar: {
        home: "الرئيسية",
        categories: "الفئات",
        about: "من نحن",
        contact: "اتصل بنا",
        searchPlaceholder: "ابحث عن تطبيقات، ألعاب، برامج...",
        categoriesTitle: "فئات التنزيل",
        mobileApps: "تطبيقات الجوال",
        mobileDesc: "قم بتنزيل تطبيقات Android و iOS المميزة للإنتاجية ووسائل التواصل الاجتماعي والأدوات والمزيد.",
        pcSoftware: "برامج الكمبيوتر",
        pcDesc: "برامج أساسية لنظامي Windows و macOS - أدوات، أمان، حزم مكتبية والمزيد.",
        mobileGames: "ألعاب الجوال",
        gamesDesc: "أفضل الألعاب المصنفة لنظامي Android و iOS - أكشن، استراتيجية، ألغاز والمزيد.",
        pcGames: "ألعاب الكمبيوتر",
        pcGamesDesc: "أحدث وأروع ألعاب الكمبيوتر - العناوين الكبرى، الألعاب المستقلة، والكلاسيكيات.",
        adobe: "برامج أدوبي",
        adobeDesc: "مجموعة كاملة من تطبيقات أدوبي الإبداعية - فوتوشوب، بريمير، أفتر إفكتس والمزيد.",
        templates: "القوالب",
        templatesDesc: "قوالب احترافية للمواقع الإلكترونية والعروض التقديمية والمستندات والمزيد.",
        browseBtn: "تصفح الآن",
        aboutTitle: "من نحن",
        aboutText: "نوفر منصة موثوقة لتنزيل تطبيقات الجوال وبرامج الكمبيوتر وبرامج أدوبي وألعاب متنوعة. مهمتنا هي توفير تجربة سريعة وسهلة ومنظمة لجميع المستخدمين، مع دعم متعدد اللغات ونظام تنزيل آمن.",
        contactBtn: "اتصل بنا",
        contactTitle: "اتصل بنا",
        emailTitle: "البريد الإلكتروني",
        phoneTitle: "الهاتف",
        locationTitle: "الموقع",
        locationText: "القاهرة، مصر",
        namePlaceholder: "اسمك",
        emailPlaceholder: "بريدك الإلكتروني",
        messagePlaceholder: "رسالتك",
        sendBtn: "إرسال الرسالة",
        footerAbout: "عن AmrStore",
        footerAboutText: "مصدرك الموثوق للتطبيقات المميزة والبرامج والألعاب والقوالب. تنزيلات سريعة ومنصة آمنة.",
        quickLinks: "روابط سريعة",
        downloadCats: "فئات التنزيل",
        rightsText: "جميع الحقوق محفوظة."
    }
};

// DOM Elements
const langSwitch = document.getElementById('langSwitch');
const langText = langSwitch.querySelector('span');
const themeSwitch = document.getElementById('themeSwitch');
const themeText = themeSwitch.querySelector('span');
const themeIcon = themeSwitch.querySelector('i');
const body = document.body;
const html = document.documentElement;
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');

// Current language state
let currentLang = 'en';
const savedLang = localStorage.getItem('lang');
if (savedLang) {
    currentLang = savedLang;
}

// Current theme state
let isDarkMode = false;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    isDarkMode = true;
    body.classList.add('dark-mode');
    themeText.textContent = 'Light';
    themeIcon.className = 'fas fa-sun';
}

// Apply saved language on page load
applyLanguage(currentLang);

// Language switch functionality
langSwitch.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
});

// Theme switch functionality
themeSwitch.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode');
    
    if (isDarkMode) {
        localStorage.setItem('theme', 'dark');
        themeText.textContent = 'Light';
        themeIcon.className = 'fas fa-sun';
    } else {
        localStorage.setItem('theme', 'light');
        themeText.textContent = 'Dark';
        themeIcon.className = 'fas fa-moon';
    }
});

// Mobile menu toggle
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.querySelector('i').className = 
        navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').className = 'fas fa-bars';
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Apply language function
function applyLanguage(lang) {
    // Update UI language text
    langText.textContent = lang === 'en' ? 'AR' : 'EN';
    
    // Set direction
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.category-card, .section-title, .contact-item, .footer-column');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial animation states
document.querySelectorAll('.category-card, .section-title, .contact-item, .footer-column').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check on page load
animateOnScroll();