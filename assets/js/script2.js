// LIGHTBOX
    const photos = document.querySelectorAll('.portfolio-item img');
    const lightbox = document.getElementById('lightbox');
    const lightImg = document.getElementById('lightbox-img');

    photos.forEach(img => {
      img.addEventListener('click', () => {
        lightImg.src = img.src;
        lightbox.classList.add('active');
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    // TRANSLATIONS
    const translations = {
      fa: {
        home: 'خانه',
        about: 'درباره',
        works: 'نمونه‌کارها',
        contact: 'ارتباط',
        subtitle: 'عکاسی که داستان‌ها را با نور می‌نویسد و لحظه‌ها را جاودانه می‌کند',
        storyTitle: 'داستان من',
        story1: 'از کودکی عاشق ثبت لحظه‌ها بودم. اولین دوربینم را ۱۲ سالگی گرفتم و از همان زمان فهمیدم که عکاسی فقط یک شغل نیست، بلکه راهی برای ارتباط با جهان است.',
        story2: '۸ سال تجربه در زمینه عکاسی پرتره، مد و فشن، و همکاری با برندهای مطرح ایرانی و خارجی. سبک من ترکیبی از کلاسیک و مدرن است با تمرکز بر احساسات و داستان‌پردازی بصری.',
        story3: 'هر پروژه برای من یک ماجراجویی جدید است. دوست دارم آدم‌ها را آنطور که واقعاً هستند نشان دهم، نه فقط یک قاب ساده.',
        expYears: 'سال تجربه',
        projects: 'پروژه موفق',
        clients: 'مشتری راضی',
        services: 'خدمات من',
        portrait: 'عکاسی پرتره',
        portraitDesc: 'پرتره‌های احساسی با نورپردازی حرفه‌ای و ترکیب‌بندی منحصربه‌فرد',
        editing: 'ادیت و رنگ',
        editingDesc: 'رنگ‌آمیزی حرفه‌ای و رتوش پیشرفته با حفظ اصالت تصویر',
        production: 'تولید محتوا',
        productionDesc: 'ایده‌پردازی و تولید محتوای بصری برای برندها و کسب‌وکارها',
        latestWorks: 'نمونه کارها'
      },
      en: {
        home: 'Home',
        about: 'About',
        works: 'Works',
        contact: 'Contact',
        subtitle: 'A photographer who writes stories with light and makes moments eternal',
        storyTitle: 'My Story',
        story1: 'I fell in love with capturing moments as a child. I got my first camera at 12 and realized photography is not just a job, but a way to connect with the world.',
        story2: '8 years of experience in portrait, fashion photography and collaboration with top Iranian and international brands. My style is a blend of classic and modern with focus on emotions and visual storytelling.',
        story3: 'Every project is a new adventure for me. I love to show people as they truly are, not just a simple frame.',
        expYears: 'Years Exp',
        projects: 'Projects',
        clients: 'Happy Clients',
        services: 'My Services',
        portrait: 'Portrait Photography',
        portraitDesc: 'Emotional portraits with professional lighting and unique composition',
        editing: 'Editing & Color',
        editingDesc: 'Professional color grading and advanced retouching preserving image authenticity',
        production: 'Content Production',
        productionDesc: 'Ideation and visual content production for brands and businesses',
        latestWorks: 'Portfolio'
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
        heroTitle.textContent = 'درباره من';
        logo.textContent = 'محمد رضا نصیری';
        document.documentElement.lang = 'fa';
        document.documentElement.dir = 'rtl';
      } else {
        heroTitle.textContent = 'About Me';
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