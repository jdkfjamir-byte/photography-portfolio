// لایت‌باکس عکس‌ها
const photos = document.querySelectorAll('.photo img');
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

// ترجمه‌های دو زبانه
const translations = {
  fa: {
    home: 'خانه',
    about: 'درباره',
    works: 'نمونه‌کارها',
    contact: 'ارتباط',
    worksBtn: 'نمونه کارها',
    aboutBtn: 'درباره من',
    contactBtn: 'ارتباط با من',
    aboutTitle: 'درباره من',
    aboutDesc: 'محمد رضا نصیری عکاس حرفه‌ای با بیش از ۸ سال تجربه در عکاسی پرتره، ادیت و تولید محتوا. کارهای او با ظرافت، عمق احساسی و زبان تصویری بی‌زمان تعریف می‌شوند.'
  },
  en: {
    home: 'Home',
    about: 'About',
    works: 'Works',
    contact: 'Contact',
    worksBtn: 'Portfolio',
    aboutBtn: 'About me',
    contactBtn: 'Contact me',
    aboutTitle: 'About Me',
    aboutDesc: 'Mohammad Reza Nasiri is a professional photographer with over 8 years of experience in portrait photography, editing and production. His work is defined by elegance, emotional depth and a timeless visual language.'
  }
};

// مدیریت انیمیشن زیبا هنگام تغییر زبان
let langTimeout;

function setLanguage(lang) {
  // حذف انیمیشن قبلی و ریست
  if (langTimeout) clearTimeout(langTimeout);
  document.body.classList.remove('lang-animate');
  
  // نیروی ریفلوی کوچک برای اطمینان از اجرای دوباره انیمیشن
  void document.body.offsetWidth;
  
  // اعمال انیمیشن
  document.body.classList.add('lang-animate');
  
  // اعمال تغییرات متنی
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // آپدیت عنوان اصلی و لوگو
  const heroTitle = document.getElementById('hero-title');
  const logo = document.getElementById('logo');
  
  if (lang === 'fa') {
    heroTitle.textContent = 'محمد رضا نصیری';
    logo.textContent = 'محمد رضا نصیری';
    document.documentElement.lang = 'fa';
    document.documentElement.dir = 'rtl';
    document.body.style.fontFamily = "'Vazirmatn', 'Inter', sans-serif";
  } else {
    heroTitle.textContent = 'Mohammad Reza Nasiri';
    logo.textContent = 'Mohammad Reza Nasiri';
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.body.style.fontFamily = "'Inter', sans-serif";
  }
  
  // آپدیت دکمه‌های زبان
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // حذف کلاس انیمیشن بعد از اتمام (500ms)
  langTimeout = setTimeout(() => {
    document.body.classList.remove('lang-animate');
  }, 550); // کمی بیشتر از طول انیمیشن
}

// اضافه کردن event listener به دکمه‌های زبان
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const lang = e.target.dataset.lang;
    setLanguage(lang);
  });
});

// زبان پیش‌فرض: فارسی
setLanguage('fa');