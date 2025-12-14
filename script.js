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