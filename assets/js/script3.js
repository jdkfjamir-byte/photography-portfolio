 // GALLERY & LIGHTBOX
    document.addEventListener('DOMContentLoaded', function() {
      const galleryItems = document.querySelectorAll('.gallery-item');
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightboxImg');
      const lightboxClose = document.getElementById('lightboxClose');
      const lightboxPrev = document.getElementById('lightboxPrev');
      const lightboxNext = document.getElementById('lightboxNext');
      const lightboxCounter = document.getElementById('lightboxCounter');
      const body = document.body;
      
      let currentIndex = 0;
      let images = [];

      // جمع‌آوری تمام تصاویر
      function updateImagesList() {
        const visibleItems = Array.from(document.querySelectorAll('.gallery-item[style*="display: block"], .gallery-item:not([style*="display: none"])'));
        images = visibleItems.map(item => {
          const img = item.querySelector('img');
          return {
            src: img.src,
            alt: img.alt
          };
        });
      }

      // باز کردن لایت‌باکس
      function openLightbox(index) {
        updateImagesList();
        if (images.length === 0) return;
        
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
        lightbox.classList.add('active');
        body.classList.add('no-scroll');
        updateCounter();
      }

      // بستن لایت‌باکس
      function closeLightbox() {
        lightbox.classList.remove('active');
        body.classList.remove('no-scroll');
        lightboxImg.src = '';
      }

      // نمایش تصویر بعدی
      function showNext() {
        if (images.length === 0) return;
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
        updateCounter();
      }

      // نمایش تصویر قبلی
      function showPrev() {
        if (images.length === 0) return;
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
        updateCounter();
      }

      // به‌روزرسانی شمارنده
      function updateCounter() {
        lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
      }

      // افزودن رویداد کلیک به آیتم‌های گالری
      function addClickListeners() {
        document.querySelectorAll('.gallery-item').forEach((item, index) => {
          item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // پیدا کردن ایندکس واقعی در بین آیتم‌های قابل مشاهده
            const visibleItems = Array.from(document.querySelectorAll('.gallery-item[style*="display: block"], .gallery-item:not([style*="display: none"])'));
            const actualIndex = visibleItems.indexOf(this);
            
            if (actualIndex !== -1) {
              openLightbox(actualIndex);
            }
          });
        });
      }

      // فراخوانی اولیه
      addClickListeners();

      // بستن با دکمه close
      lightboxClose.addEventListener('click', function(e) {
        e.stopPropagation();
        closeLightbox();
      });

      // بستن با کلیک روی پس‌زمینه
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });

      // دکمه بعدی
      lightboxNext.addEventListener('click', function(e) {
        e.stopPropagation();
        showNext();
      });

      // دکمه قبلی
      lightboxPrev.addEventListener('click', function(e) {
        e.stopPropagation();
        showPrev();
      });

      // کیبورد
      document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          showNext();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          showPrev();
        }
      });

      // جلوگیری از اسکرول صفحه وقتی لایت‌باکس باز است
      lightbox.addEventListener('wheel', function(e) {
        e.preventDefault();
      }, { passive: false });

      // FILTER FUNCTIONALITY
      const filterBtns = document.querySelectorAll('.filter-btn');
      const galleryItemsAll = document.querySelectorAll('.gallery-item');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');
          
          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          galleryItemsAll.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              }, 10);
            } else {
              item.style.opacity = '0';
              item.style.transform = 'scale(0.8)';
              setTimeout(() => {
                item.style.display = 'none';
              }, 300);
            }
          });
          
          // بستن لایت‌باکس در صورت باز بودن
          if (lightbox.classList.contains('active')) {
            closeLightbox();
          }
        });
      });

      // TRANSLATIONS
      const translations = {
        fa: {
          home: 'خانه',
          about: 'درباره',
          works: 'نمونه‌کارها',
          contact: 'ارتباط',
          subtitle: 'مجموعه‌ای از لحظات جاودانه شده، داستان‌های گفته شده با نور',
          filterAll: 'همه',
          filterPortrait: 'پرتره',
          filterFashion: 'مد و فشن',
          filterEditorial: 'ادیتوریال',
          work1Title: 'پرتره احساسی',
          work1Cat: 'پرتره',
          work2Title: 'سشن مد',
          work2Cat: 'مد و فشن',
          work3Title: 'ادیتوریال هنری',
          work3Cat: 'ادیتوریال',
          work4Title: 'چهره‌های واقعی',
          work4Cat: 'پرتره',
          work5Title: 'کمپین برند',
          work5Cat: 'مد و فشن',
          work6Title: 'روایت نگاه',
          work6Cat: 'پرتره',
          work7Title: 'مجله هنری',
          work7Cat: 'ادیتوریال',
          work8Title: 'استایل مدرن',
          work8Cat: 'مد و فشن',
          work9Title: 'سایه و نور',
          work9Cat: 'پرتره',
          work10Title: 'داستان بصری',
          work10Cat: 'ادیتوریال',
          work11Title: 'لحظه خاص',
          work11Cat: 'پرتره',
          work12Title: 'کلکسیون جدید',
          work12Cat: 'مد و فشن'
        },
        en: {
          home: 'Home',
          about: 'About',
          works: 'Works',
          contact: 'Contact',
          subtitle: 'A collection of eternal moments, stories told with light',
          filterAll: 'All',
          filterPortrait: 'Portrait',
          filterFashion: 'Fashion',
          filterEditorial: 'Editorial',
          work1Title: 'Emotional Portrait',
          work1Cat: 'Portrait',
          work2Title: 'Fashion Session',
          work2Cat: 'Fashion',
          work3Title: 'Artistic Editorial',
          work3Cat: 'Editorial',
          work4Title: 'Real Faces',
          work4Cat: 'Portrait',
          work5Title: 'Brand Campaign',
          work5Cat: 'Fashion',
          work6Title: 'Gaze Narrative',
          work6Cat: 'Portrait',
          work7Title: 'Art Magazine',
          work7Cat: 'Editorial',
          work8Title: 'Modern Style',
          work8Cat: 'Fashion',
          work9Title: 'Light & Shadow',
          work9Cat: 'Portrait',
          work10Title: 'Visual Story',
          work10Cat: 'Editorial',
          work11Title: 'Special Moment',
          work11Cat: 'Portrait',
          work12Title: 'New Collection',
          work12Cat: 'Fashion'
        }
      };

      // LANGUAGE SWITCHER
      let langTimeout;

      function setLanguage(lang) {
        if (langTimeout) clearTimeout(langTimeout);
        document.body.classList.remove('lang-animate');
        
        void document.body.offsetWidth;
        
        document.body.classList.add('lang-animate');
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
          }
        });
        
        const heroTitle = document.getElementById('hero-title');
        const logo = document.getElementById('logo');
        
        if (lang === 'fa') {
          heroTitle.textContent = 'نمونه کارها';
          logo.textContent = 'محمد رضا نصیری';
          document.documentElement.lang = 'fa';
          document.documentElement.dir = 'rtl';
        } else {
          heroTitle.textContent = 'Portfolio';
          logo.textContent = 'Mohammad Reza Nasiri';
          document.documentElement.lang = 'en';
          document.documentElement.dir = 'ltr';
        }
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        langTimeout = setTimeout(() => {
          document.body.classList.remove('lang-animate');
        }, 550);
      }

      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const lang = e.target.dataset.lang;
          setLanguage(lang);
        });
      });

      setLanguage('fa');
    });