 // ترجمه‌ها
    const translations = {
      fa: {
        home: 'خانه',
        about: 'درباره',
        works: 'نمونه‌کارها',
        contact: 'ارتباط',
        aboutBadge: '⚡ عکاس حرفه‌ای',
        aboutText: 'عکاس با بیش از ۸ سال تجربه در زمینه عکاسی پرتره، مد و فشن. عکاسی برای من فقط ثبت یک لحظه نیست، روایت یک داستان، احساس و خاطره‌ست که در قاب جاودانه می‌شه.',
        stat1: '+۸',
        stat1Label: 'سال تجربه',
        stat2: '+۱۵۰',
        stat2Label: 'پروژه موفق',
        stat3: '+۲۰۰',
        stat3Label: 'مشتری راضی',
        copyright: '© ۲۰۲۴ تمام حقوق محفوظ است | طراحی با ❤️ توسط محمد رضا نصیری'
      },
      en: {
        home: 'Home',
        about: 'About',
        works: 'Works',
        contact: 'Contact',
        aboutBadge: '⚡ Professional Photographer',
        aboutText: 'Photographer with over 8 years of experience in portrait, fashion and editorial photography. For me, photography is not just capturing a moment, but telling a story, feeling and memory that becomes eternal in the frame.',
        stat1: '+8',
        stat1Label: 'Years Exp',
        stat2: '+150',
        stat2Label: 'Projects',
        stat3: '+200',
        stat3Label: 'Happy Clients',
        copyright: '© 2024 All rights reserved | Designed with ❤️ by Mohammad Reza Nasiri'
      }
    };

    // تغییر زبان
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
        heroTitle.innerHTML = 'محمد رضا<br><span>نصیری</span>';
        logo.textContent = 'محمد رضا نصیری';
        document.documentElement.lang = 'fa';
        document.documentElement.dir = 'rtl';
      } else {
        heroTitle.innerHTML = 'Mohammad Reza<br><span>Nasiri</span>';
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