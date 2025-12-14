// تحديد روابط القائمة للتحكم بها
var navLinks = document.querySelectorAll('.main-nav a');

// الدوران على الروابط لتفعيل خاصية التمرير الناعم
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        
        // التحقق من أن الرابط يشير إلى قسم داخلي
        if (href && href.startsWith('#')) {
            e.preventDefault(); // منع الانتقال الافتراضي للمتصفح
            var section = document.querySelector(href);
            
            // التمرير إلى القسم المطلوب بنعومة
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            
            // إغلاق القائمة في حالة الموبايل بعد النقر
            var navCheckbox = document.getElementById('nav-toggle');
            if (navCheckbox) {
                navCheckbox.checked = false;
            }
        }
    });
}

// تحديث سنة حقوق الملكية في الفوتر تلقائياً
var yearElement = document.getElementById('year');
if (yearElement) {
    var currentYear = new Date().getFullYear(); // الحصول على السنة الحالية
    yearElement.textContent = currentYear;
}

// التعامل مع إرسال نموذج التواصل
var contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var messageInput = document.getElementById('message');
        
        // التحقق من صحة المدخلات
        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            alert('من فضلك املأ جميع الحقول');
            return;
        }
        
        // إظهار رسالة تأكيد وإعادة تعيين النموذج
        alert('شكراً ' + nameInput.value + '! تم إرسال رسالتك بنجاح');
        contactForm.reset();
    });
}

// إنشاء زر العودة للأعلى (Back to Top) باستخدام الجافاسكريبت
var backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
// تعيين تنسيقات الزر
backToTopButton.style.cssText = 'position:fixed;bottom:30px;left:30px;background:#1b8a5a;color:#fff;border:none;width:50px;height:50px;border-radius:50%;font-size:24px;cursor:pointer;display:none;z-index:999;box-shadow:0 4px 12px rgba(0,0,0,0.15);';

document.body.appendChild(backToTopButton); // إضافة الزر للصفحة

// إظهار الزر عند التمرير لأسفل
window.addEventListener('scroll', function() {
    // التحقق من تجاوز مسافة 300 بكسل
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none'; // إخفاء الزر
    }
});

// تنفيذ العودة للأعلى عند النقر
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// تفعيل عرض الصور (Lightbox) للمعرض
var galleryImages = document.querySelectorAll('.gallery-item img');

for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function() {
        // إنشاء طبقة خلفية معتمة
        var overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;justify-content:center;align-items:center;cursor:pointer;';
        
        // إنشاء عنصر الصورة المكبرة
        var bigImage = document.createElement('img');
        bigImage.src = this.src;
        bigImage.style.cssText = 'max-width:90%;max-height:90%;border-radius:10px;box-shadow:0 0 30px rgba(255,255,255,0.3);';
        
        // إضافة العناصر للصفحة
        overlay.appendChild(bigImage);
        document.body.appendChild(overlay);
        
        // إغلاق العرض عند النقر
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    });
}

// تمييز رابط القسم النشط أثناء التمرير
var sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
    var currentSection = '';
    
    // تحديد القسم الحالي الظاهر في الشاشة
    for (var i = 0; i < sections.length; i++) {
        var sectionTop = sections[i].offsetTop;
        
        // تعديل هامش الرؤية ليكون 200 بكسل
        if (window.scrollY >= sectionTop - 200) {
            currentSection = sections[i].getAttribute('id');
        }
    }
    
    // تحديث تنسيقات الروابط في القائمة
    var allNavLinks = document.querySelectorAll('.main-nav a');
    for (var j = 0; j < allNavLinks.length; j++) {
        allNavLinks[j].style.backgroundColor = '';
        allNavLinks[j].style.color = '';
        
        var linkHref = allNavLinks[j].getAttribute('href');
        if (linkHref === '#' + currentSection) {
            allNavLinks[j].style.backgroundColor = '#1b8a5a';
            allNavLinks[j].style.color = '#fff';
            allNavLinks[j].style.borderRadius = '999px';
        }
    }
});

// تفعيل عرض الصور المكبرة لصفحات التفاصيل
var detailImages = document.querySelectorAll('.landmark-detail-img');

for (var k = 0; k < detailImages.length; k++) {
    detailImages[k].addEventListener('click', function() {
        var overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;justify-content:center;align-items:center;cursor:pointer;';
        
        var bigImage = document.createElement('img');
        bigImage.src = this.src;
        bigImage.style.cssText = 'max-width:90%;max-height:90%;border-radius:10px;box-shadow:0 0 30px rgba(255,255,255,0.3);';
        
        overlay.appendChild(bigImage);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    });
}

// دالة التحقق من ظهور العنصر داخل إطار العرض (Viewport)
function isElementInView(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // إرجاع صحيح إذا كان العنصر ظاهراً
    return rect.top <= windowHeight - 100;
}

// دالة تحريك العناصر عند ظهورها (Scroll Animation)
function animateOnScroll() {
    // تحريك كروت المعالم
    var landmarks = document.querySelectorAll('.landmark-card:not(.animate-in)');
    for (var i = 0; i < landmarks.length; i++) {
        if (isElementInView(landmarks[i])) {
            // إضافة تأخير زمني لكل عنصر لعمل تأثير متتابع
            setTimeout((function(el) {
                return function() {
                    el.classList.add('animate-in');
                };
            })(landmarks[i]), i * 150); 
        }
    }
    
    // تحريك عناصر المعرض
    var galleryItems = document.querySelectorAll('.gallery-item:not(.animate-in)');
    for (var j = 0; j < galleryItems.length; j++) {
        if (isElementInView(galleryItems[j])) {
            setTimeout((function(el) {
                return function() {
                    el.classList.add('animate-in');
                };
            })(galleryItems[j]), j * 150);
        }
    }
    
    // تحريك باقي العناصر كالإحصائيات والخريطة
    var otherElements = document.querySelectorAll(
        '.stat-card:not(.animate-in), .map-wrapper:not(.animate-in), .contact-grid:not(.animate-in), .landmark-detail-section:not(.animate-in), .info-box:not(.animate-in)'
    );
    
    for (var k = 0; k < otherElements.length; k++) {
        if (isElementInView(otherElements[k])) {
            otherElements[k].classList.add('animate-in');
        }
    }
}

// تحسين الأداء عند التمرير (Debounce)
var isScrolling = false;
window.addEventListener('scroll', function() {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(function() {
            animateOnScroll();
            isScrolling = false;
        }, 100);
    }
});

// تشغيل التحريك عند تحميل الصفحة
window.addEventListener('load', function() {
    setTimeout(animateOnScroll, 100);
});

// التحميل المسبق للصورة الرئيسية (Hero Image) للأداء
function preloadHeroImage() {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.loading = 'eager';
        heroImage.classList.add('priority-load');
    }
}

// تشغيل التحميل المسبق
window.addEventListener('DOMContentLoaded', preloadHeroImage);

// طباعة رسالة ترحيب في الكونسول
console.log('مرحباً بك في موقع معالم محافظة البحيرة!');
console.log('تم تصميم الموقع بواسطة: NOUR TEAM');

// جلب اللغة والوضع الليلي المحفوظ في التخزين المحلي
let currentLang = localStorage.getItem('language') || 'ar';
let darkMode = localStorage.getItem('darkMode') === 'true';

// عند تحميل الصفحة، يتم تطبيق اللغة والوضع الليلي
document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLang);
    applyDarkMode(darkMode);
    createControlButtons();
});

// دالة إنشاء أزرار التحكم (اللغة والوضع الليلي) وإضافتها للصفحة
function createControlButtons() {
    const navContainer = document.querySelector('.nav-container');
    if (!navContainer) return;
    
    // التحقق من عدم وجود الأزرار مسبقاً لمنع التكرار
    if (document.querySelector('.header-controls')) return;
    
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'header-controls';
    
    const langButton = document.createElement('button');
    langButton.className = 'control-btn lang-btn';
    langButton.setAttribute('data-translate', 'btn-language');
    langButton.innerHTML = currentLang === 'ar' ? 'English' : 'العربية';
    
    const darkModeButton = document.createElement('button');
    darkModeButton.className = 'control-btn dark-mode-btn';
    darkModeButton.innerHTML = darkMode ? '☀️' : '🌙';
    darkModeButton.setAttribute('title', currentLang === 'ar' ? 'تبديل الوضع الليلي' : 'Toggle Dark Mode');
    
    // إضافة تأثيرات عند مرور الماوس على الأزرار (Hover)
    langButton.addEventListener('mouseenter', function() {
        this.style.background = '#22b273';
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 12px rgba(27, 138, 90, 0.4)';
    });
    langButton.addEventListener('mouseleave', function() {
        this.style.background = '#1b8a5a';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
    
    darkModeButton.addEventListener('mouseenter', function() {
        this.style.background = '#22b273';
        this.style.transform = 'translateY(-2px) rotate(20deg)';
        this.style.boxShadow = '0 4px 12px rgba(27, 138, 90, 0.4)';
    });
    darkModeButton.addEventListener('mouseleave', function() {
        this.style.background = '#1b8a5a';
        this.style.transform = 'translateY(0) rotate(0deg)';
        this.style.boxShadow = 'none';
    });
    
    // إضافة أحداث النقر للأزرار
    langButton.addEventListener('click', toggleLanguage);
    darkModeButton.addEventListener('click', toggleDarkMode);
    
    controlsDiv.appendChild(langButton);
    controlsDiv.appendChild(darkModeButton);
    
    // تحديد مكان إضافة الأزرار داخل القائمة
    const navToggle = navContainer.querySelector('.nav-toggle');
    if (navToggle) {
        navContainer.insertBefore(controlsDiv, navToggle);
    } else {
        const mainNav = navContainer.querySelector('.main-nav');
        if (mainNav) {
            navContainer.insertBefore(controlsDiv, mainNav);
        } else {
            navContainer.appendChild(controlsDiv);
        }
    }
}

// دالة تبديل اللغة وحفظها في التخزين المحلي
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLang);
    applyLanguage(currentLang);
}

// دالة تطبيق اللغة المختارة وتغيير النصوص
function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                // معالجة خاصة للنقطتين في القوائم حسب اللغة
                if (element.tagName === 'STRONG' && 
                    element.closest('.info-box')) {
                    const colon = lang === 'ar' ? ':' : ':';
                    element.textContent = translations[lang][key] + colon;
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        }
    });
    
    // تحديث نص زر اللغة
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        langBtn.textContent = lang === 'ar' ? 'English' : 'العربية';
    }
    
    // تحديث تلميح زر الوضع الليلي
    const darkModeBtn = document.querySelector('.dark-mode-btn');
    if (darkModeBtn) {
        darkModeBtn.setAttribute('title', lang === 'ar' ? 'تبديل الوضع الليلي' : 'Toggle Dark Mode');
    }
    
    applyLanguageStyles(lang);
}

// دالة لتطبيق تنسيقات CSS ديناميكيًا حسب اللغة المختارة
function applyLanguageStyles(lang) {
    
    // 1. حذف أي تنسيقات سابقة لمنع تداخل الأنماط
    const existingStyle = document.getElementById('lang-styles');
    if (existingStyle) existingStyle.remove();
    
    // 2. إنشاء عنصر style جديد لإضافة أكواد CSS
    const styleTag = document.createElement('style');
    styleTag.id = 'lang-styles';
    
    // 3. حالة اللغة الإنجليزية (English)
    if (lang === 'en') {
        styleTag.textContent = `
            /* ضبط اتجاه النصوص من اليسار إلى اليمين */
            body { 
                direction: ltr; 
                text-align: left; 
                font-family: sans-serif; 
            }

            /* === تنسيق الشريط العلوي (Header) === */
            
            /* إجبار العناصر على الترتيب في صف واحد أفقي */
            .nav-container { 
                flex-direction: row !important; 
            }
            .logo { 
                flex-direction: row !important; 
            }

            /* دفع القائمة إلى أقصى اليمين */
            .main-nav ul {
                margin-left: auto !important; 
                margin-right: 0 !important;
            }
            
            /* ضبط المسافة بين الأزرار والشعار في وضع الكمبيوتر */
            .header-controls {
                margin-left: 7rem !important; /* مسافة كبيرة للفصل بينهما */
                margin-right: 0 !important;
            }

            /* === تحسينات العناصر الإضافية === */
            
            /* ضبط اتجاه شريط المسار (Breadcrumb) */
            .breadcrumb { direction: ltr; justify-content: flex-start; }
            .breadcrumb span:not(:last-child)::after { content: '›'; margin: 0 0.3rem; }
            
            /* ضبط اتجاه سهم رابط التفاصيل */
            .landmark-link::after { content: ' →'; }
            .landmark-link::before { content: none; }
            
            /* ضبط تخطيط الشبكة (Grid) للصفحات الداخلية */
            .landmark-detail-layout { grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); }
            .hero-content { grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); }
            .contact-grid { grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr); }
            .info-box ul li strong { float: left; margin-right: 0.5rem; }
            
            /* نقل زر "العودة للأعلى" لجهة اليمين */
            .back-to-top { left: auto !important; right: 30px !important; }

            /* === تنسيق الشاشات الصغيرة (الموبايل والتابلت) === */
            @media (max-width: 1024px) {
                /* عرض محتويات الصفحة بشكل عمودي (تحت بعضها) */
                .landmark-detail-layout, .hero-content, .contact-grid { 
                    grid-template-columns: 1fr; 
                }
                
                /* السماح بالتفاف عناصر الشريط العلوي عند ضيق المساحة */
                .nav-container { flex-wrap: wrap; }

                /* 1. الشعار: يظهر أولاً جهة اليسار */
                .logo {
                    order: 1;
                    margin-right: auto !important;
                    margin-left: 0 !important;
                }

                /* 2. أزرار التحكم: تظهر بمسافة صغيرة مناسبة للموبايل */
                .header-controls {
                    order: 2;
                    margin-left: 20px !important; 
                    margin-right: 10px !important;
                }

                /* 3. زر القائمة: يظهر أخيرًا جهة اليمين */
                .nav-toggle {
                    order: 3;
                }
            }
        `;
    } else {
        // 4. حالة اللغة العربية (الوضع الافتراضي)
        styleTag.textContent = `
            /* ضبط اتجاه النصوص من اليمين إلى اليسار */
            body { 
                direction: rtl; 
                text-align: right; 
                font-family: sans-serif; 
            }
            
            /* ضبط المسافة بين الأزرار والشعار في العربي */
            .header-controls { 
                margin-left: auto !important; 
                margin-right: 3.5rem !important; 
            }

            /* تنسيق فواصل شريط المسار */
            .breadcrumb span:not(:last-child)::after { content: '›'; margin: 0 0.3rem; }
            .landmark-link::before { content: '← '; }
            .landmark-link::after { content: none; }
        `;
    }
    
    // إضافة عنصر الـ style للصفحة لتفعيل التنسيقات
    document.head.appendChild(styleTag);
}
// دالة تبديل الوضع الليلي وحفظ الحالة
function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    applyDarkMode(darkMode);
}

// دالة تطبيق تنسيقات الوضع الليلي
function applyDarkMode(isDark) {
    const existingDarkStyle = document.getElementById('dark-mode-styles');
    if (existingDarkStyle) existingDarkStyle.remove();
    
    const darkModeBtn = document.querySelector('.dark-mode-btn');
    if (darkModeBtn) darkModeBtn.innerHTML = isDark ? '☀️' : '🌙';
    
    if (!isDark) return;
    
    const styleTag = document.createElement('style');
    styleTag.id = 'dark-mode-styles';
    styleTag.textContent = `
        body { background-color: #1a1a2e; color: #e5e5e5; }
        .main-header { background-color: rgba(22, 27, 34, 0.96); }
        .logo-title { color: #22b273; }
        .logo-subtitle { color: #c5c5c5; }
        .nav-toggle span { background-color: #ffffff !important; }
        .main-nav a { color: #e5e5e5; }
        .main-nav a:hover { background-color: #22b273; }
        
        .hero-text h1, .section-title, .landmark-content h3, .landmark-detail-header h1,
        .landmark-detail-section h2, .info-box h3, .contact-info h3 { color: #f0f0f0; }
        
        .hero-text p, .section-text, .section-description, .landmark-content p,
        .landmark-detail-section p, .info-box ul, .contact-list { color: #e0e0e0; }
        
        .stat-card, .landmark-card, .gallery-item, .landmark-detail-section,
        .info-box, .contact-info, .contact-form { background-color: #16213e; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); }
        .about-section, .landmarks-section, .landmarks, .map-section { background-color: #0f1419; }
        
        .stat-number { color: #22b273; }
        .stat-label { color: #c5c5c5; }
        .landmark-city { background-color: rgba(34, 178, 115, 0.2); color: #22b273; }
        .landmark-link { color: #22b273; }
        .landmark-link:hover { background-color: #22b273; color: #fff; }
        .breadcrumb { color: #c5c5c5; }
        .breadcrumb a { color: #22b273; }
        .breadcrumb a:hover { color: #2dd98b; }
        .landmark-detail-location { color: #c5c5c5; }
        input, textarea { background-color: #0f1419; border-color: #2a2a3e; color: #e5e5e5; }
        input:focus, textarea:focus { border-color: #22b273; box-shadow: 0 0 0 3px rgba(34, 178, 115, 0.3); }
        label { color: #e0e0e0; }
        .main-footer { background-color: #0a0e14; }
        .gallery, .contact { background-color: #0f1419; }
        
        .btn { background: linear-gradient(135deg, #1b8a5a, #22b273); }
        .btn:hover { box-shadow: 0 0 20px rgba(34, 178, 115, 0.8); }

        /* تنسيقات خاصة للأزرار المفرغة في الوضع الليلي */
        .btn-outline { 
            background: transparent !important;   
            border: 2px solid #1b8a5a !important; 
            color: #1b8a5a !important;            
            box-shadow: none !important;
            font-weight: bold !important;
        }
        
        /* تأثيرات مرور الماوس على الزر المفرغ */
        .btn-outline:hover { 
            background-color: #1b8a5a !important; 
            color: #ffffff !important;
            box-shadow: 0 0 15px rgba(27, 138, 90, 0.4) !important;
        }

        .control-btn { background-color: #22b273 !important; }
        .control-btn:hover { background-color: #2dd98b !important; }
        @media (max-width: 1024px) {
            .main-nav { background-color: #16213e; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); }
        }
    `;
    
    document.head.appendChild(styleTag);
}

// جعل المتغيرات والدوال متاحة على مستوى النافذة (Global Scope)
window.toggleLanguage = toggleLanguage;
window.toggleDarkMode = toggleDarkMode;
window.applyLanguage = applyLanguage;
window.applyDarkMode = applyDarkMode;
window.currentLang = currentLang;
window.darkMode = darkMode;

// دالة للتأكد من ظهور أزرار التحكم
function ensureControlsVisible() {
    const controls = document.querySelector('.header-controls');
    if (controls) {
        controls.style.display = 'flex';
        controls.style.visibility = 'visible';
        controls.style.opacity = '1';
    }
}

// تشغيل الدالة عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', ensureControlsVisible);
window.addEventListener('load', ensureControlsVisible);

// إعادة التشغيل عند تغيير حجم النافذة
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(ensureControlsVisible, 250);
});
