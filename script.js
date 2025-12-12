
// 1. التنقل السلس بين الأقسام
var navLinks = document.querySelectorAll('.main-nav a');

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        
        // لو الرابط بيبدأ بـ # يبقى في نفس الصفحة
        if (href && href.startsWith('#')) {
            e.preventDefault();
            var section = document.querySelector(href);
            
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            
            // إغلاق القائمة في الموبايل
            var navCheckbox = document.getElementById('nav-toggle');
            if (navCheckbox) {
                navCheckbox.checked = false;
            }
        }
    });
}

// 2. تحديث السنة في الفوتر تلقائياً
var yearElement = document.getElementById('year');
if (yearElement) {
    var currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// 3. التحقق من بيانات النموذج قبل الإرسال
var contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var messageInput = document.getElementById('message');
        
        // التحقق من أن الحقول ليست فارغة
        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            alert('من فضلك املأ جميع الحقول');
            return;
        }
        
        // رسالة نجاح
        alert('شكراً ' + nameInput.value + '! تم إرسال رسالتك بنجاح');
        contactForm.reset();
    });
}

// 4. زر الرجوع للأعلى
var backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = 'position:fixed;bottom:30px;left:30px;background:#1b8a5a;color:#fff;border:none;width:50px;height:50px;border-radius:50%;font-size:24px;cursor:pointer;display:none;z-index:999;box-shadow:0 4px 12px rgba(0,0,0,0.15);';

document.body.appendChild(backToTopButton);

// إظهار/إخفاء الزر حسب موضع الصفحة
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// الرجوع للأعلى عند الضغط على الزر
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 5. تكبير الصور عند الضغط عليها (Image Zoom) - صور المعرض
var galleryImages = document.querySelectorAll('.gallery-item img');

for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function() {
        // إنشاء overlay (طبقة سوداء شفافة)
        var overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;justify-content:center;align-items:center;cursor:pointer;';
        
        // إنشاء الصورة المكبرة
        var bigImage = document.createElement('img');
        bigImage.src = this.src;
        bigImage.style.cssText = 'max-width:90%;max-height:90%;border-radius:10px;box-shadow:0 0 30px rgba(255,255,255,0.3);';
        
        // إضافة الصورة للـ overlay
        overlay.appendChild(bigImage);
        document.body.appendChild(overlay);
        
        // إغلاق الصورة عند الضغط على الـ overlay
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    });
}

// 6. تمييز الرابط النشط في القائمة
var sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
    var currentSection = '';
    
    // البحث عن القسم الحالي
    for (var i = 0; i < sections.length; i++) {
        var sectionTop = sections[i].offsetTop;
        
        if (window.scrollY >= sectionTop - 200) {
            currentSection = sections[i].getAttribute('id');
        }
    }
    
    // تمييز الرابط النشط
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

// 7. تكبير صور صفحات التفاصيل عند الضغط عليها
var detailImages = document.querySelectorAll('.landmark-detail-img');

for (var k = 0; k < detailImages.length; k++) {
    detailImages[k].addEventListener('click', function() {
        // إنشاء overlay (طبقة سوداء شفافة)
        var overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;justify-content:center;align-items:center;cursor:pointer;';
        
        // إنشاء الصورة المكبرة
        var bigImage = document.createElement('img');
        bigImage.src = this.src;
        bigImage.style.cssText = 'max-width:90%;max-height:90%;border-radius:10px;box-shadow:0 0 30px rgba(255,255,255,0.3);';
        
        // إضافة الصورة للـ overlay
        overlay.appendChild(bigImage);
        document.body.appendChild(overlay);
        
        // إغلاق الصورة عند الضغط على الـ overlay
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    });
}

// 8. الدخول البطيء للعناصر (Scroll Animation)
// دي دالة بسيطة بتشوف لو العنصر ظهر على الشاشة
function isElementInView(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // لو العنصر ظاهر في الشاشة (مع مسافة 100px قبل ما يوصل)
    return rect.top <= windowHeight - 100;
}

// دالة تضيف class للعناصر اللي ظهرت
function animateOnScroll() {
    // المعالم السياحية
    var landmarks = document.querySelectorAll('.landmark-card:not(.animate-in)');
    for (var i = 0; i < landmarks.length; i++) {
        if (isElementInView(landmarks[i])) {
            // نضيف delay ديناميكي لكل عنصر
            setTimeout((function(el) {
                return function() {
                    el.classList.add('animate-in');
                };
            })(landmarks[i]), i * 150); // 150ms بين كل عنصر
        }
    }
    
    // صور المعرض
    var galleryItems = document.querySelectorAll('.gallery-item:not(.animate-in)');
    for (var j = 0; j < galleryItems.length; j++) {
        if (isElementInView(galleryItems[j])) {
            setTimeout((function(el) {
                return function() {
                    el.classList.add('animate-in');
                };
            })(galleryItems[j]), j * 150); // 150ms بين كل صورة
        }
    }
    
    // باقي العناصر (الأرقام، الخريطة، النموذج)
    var otherElements = document.querySelectorAll(
        '.stat-card:not(.animate-in), .map-wrapper:not(.animate-in), .contact-grid:not(.animate-in), .landmark-detail-section:not(.animate-in), .info-box:not(.animate-in)'
    );
    
    for (var k = 0; k < otherElements.length; k++) {
        if (isElementInView(otherElements[k])) {
            otherElements[k].classList.add('animate-in');
        }
    }
}

// تشغيل الدالة عند التمرير (مع throttle بسيط)
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

// تشغيل الدالة أول ما الصفحة تفتح (بعد تحميل كل حاجة)
window.addEventListener('load', function() {
    setTimeout(animateOnScroll, 100);
});

// رسالة ترحيبية في الـ Console
console.log('مرحباً بك في موقع معالم محافظة البحيرة!');
console.log('تم تصميم الموقع بواسطة: NOUR TEAM');