const pages = [...document.querySelectorAll('[data-page]')];
const routeLinks = [...document.querySelectorAll('[data-route]')];
const primaryLinks = [...document.querySelectorAll('.primary-nav [data-route]')];
const siteHeader = document.querySelector('#site-header');
const mobileMenu = document.querySelector('#mobile-menu');
const menuButton = document.querySelector('#menu-open');
const searchDialog = document.querySelector('#search-dialog');
const searchInput = document.querySelector('#search-input');
const languageButton = document.querySelector('.language');

const knownRoutes = new Set(pages.map((page) => page.dataset.page));

const english = {
  'Перейти до вмісту': 'Skip to content',
  'Херсонська спеціалізована школа І–ІІІ ступенів №24': 'Kherson Specialized School No. 24',
  'Школа №24': 'School No. 24',
  'Херсон': 'Kherson',
  'Головна': 'Home',
  'Новини': 'News',
  'Про школу': 'About us',
  'Навчання': 'Learning',
  'Документи': 'Documents',
  'Контакти': 'Contacts',
  'Меню': 'Menu',
  'Навігація': 'Navigation',
  'Знання • розвиток • спільнота': 'Knowledge • growth • community',
  'Школа, де цікаво': 'A school where learning',
  'пізнавати світ': 'opens the world',
  'Поглиблене вивчення математики, фізики та англійської мови у дружньому освітньому середовищі.': 'Advanced study of mathematics, physics and English in a welcoming learning environment.',
  'Дізнатися про школу': 'Discover our school',
  'Зв’язатися з нами': 'Contact us',
  'школа з характером': 'a school with character',
  'у серці Херсона': 'in the heart of Kherson',
  'інформація для': 'information for',
  'Учнів': 'Students',
  'Батьків': 'Parents',
  'Учителів': 'Teachers',
  'Будьте в курсі': 'Stay informed',
  'Останні оголошення': 'Latest announcements',
  'Усі новини': 'All news',
  'листопада': 'November',
  'Важливо': 'Important',
  'Прийом документів до першого класу': 'First-grade admissions',
  'Коротка інформація про запис і перелік необхідних документів. Повний текст винесено на окрему сторінку.': 'A concise guide to registration and the required documents. Full details are available on a separate page.',
  'Читати оголошення': 'Read announcement',
  'Шкільне життя': 'School life',
  '18 жовтня 2021': '18 October 2021',
  'Осінній тиждень науки': 'Autumn Science Week',
  'Події, досліди та відкриття учнів нашої школи.': 'Events, experiments and discoveries by our students.',
  'Докладніше': 'Learn more',
  'Досягнення': 'Achievements',
  '27 вересня 2021': '27 September 2021',
  'Наші перемоги та здобутки': 'Our successes and achievements',
  'Вітаємо учнів і вчителів з новими результатами.': 'Celebrating new accomplishments by our students and teachers.',
  'Коротко про нас': 'At a glance',
  'Школа сьогодні': 'Our school today',
  'профільні напрями': 'specialized subjects',
  'класи навчання': 'grade levels',
  'років традицій': 'years of tradition',
  'можливостей зростати': 'opportunities to grow',
  'Корисні розділи': 'Useful sections',
  'Швидкий доступ': 'Quick access',
  'Освітній процес': 'Learning process',
  'Правила прийому': 'Admissions',
  'Фінансові звіти': 'Financial reports',
  'Гуртки та секції': 'Clubs and activities',
  'Соціально-психологічна служба': 'Student support service',
  'Інші розділи': 'More sections',
  'Історія школи': 'School history',
  'Шкільний парламент': 'Student council',
  'Харчування': 'School meals',
  'Наші партнери': 'Our partners',
  'Публікації за датою': 'Posts by date',
  'Архів': 'Archive',
  '2 місяці': '2 months',
  'Лютий': 'February',
  'Січень': 'January',
  '11 місяців': '11 months',
  'Грудень': 'December',
  'Листопад': 'November',
  'Жовтень': 'October',
  'Вересень': 'September',
  '10 місяців': '10 months',
  'Серпень': 'August',
  'старіші записи': 'older posts',
  'Переглянути весь архів': 'View full archive',
  'Події та оголошення': 'Events and announcements',
  'Шкільні новини': 'School news',
  'Усе важливе — коротко, зрозуміло і в одному місці.': 'Everything important, presented clearly in one place.',
  'Усі': 'All',
  'Оголошення': 'Announcements',
  'Події': 'Events',
  'Рік': 'Year',
  '2022 рік': 'Year 2022',
  '2021 рік': 'Year 2021',
  '2020 рік': 'Year 2020',
  'лют': 'Feb',
  'Організація освітнього процесу': 'Organizing the learning process',
  'Короткий анонс матеріалу замість повного документа на головній сторінці.': 'A short summary instead of placing the full document on the homepage.',
  'Відкрити публікацію': 'Open post',
  'Інформація для батьків та учнів': 'Information for parents and students',
  'Необхідні оновлення та посилання на повні матеріали.': 'Essential updates and links to full materials.',
  'січ': 'Jan',
  'Наші події у фотографіях': 'Our events in photos',
  'Добірка моментів зі шкільного життя та навчальних проєктів.': 'Highlights from school life and educational projects.',
  'Публікації': 'Posts',
  'Архів новин': 'News archive',
  '10 записів': '10 posts',
  '42 записи': '42 posts',
  '38 записів': '38 posts',
  'Переглянути': 'View',
  'Знайомство зі школою': 'Meet our school',
  'Історія, люди та цінності, які формують нашу спільноту.': 'The history, people and values that shape our community.',
  'Наша візитівка': 'Who we are',
  'Місце для знань і розвитку': 'A place to learn and grow',
  'Школа спеціалізується на поглибленому вивченні математики, фізики та англійської мови. Замість довгого переліку в боковій панелі інформацію згруповано за зрозумілими темами.': 'Our school offers advanced study of mathematics, physics and English. Information is grouped into clear topics instead of a long, crowded sidebar.',
  'Як усе починалося': 'How it all began',
  'Наша команда': 'Our team',
  'Адміністрація та вчителі': 'Administration and teachers',
  'Традиції': 'Traditions',
  'Цінності шкільної спільноти': 'Values of our school community',
  'Партнери': 'Partners',
  'Спільні освітні проєкти': 'Collaborative learning projects',
  'Навчаємося разом': 'Learning together',
  'Розклад, правила й корисні ресурси без інформаційного перевантаження.': 'Schedules, policies and useful resources without information overload.',
  'Структура навчального року': 'Academic year structure',
  'Семестри, канікули та основні дати.': 'Terms, holidays and key dates.',
  'Розклад занять': 'Class schedule',
  'Час уроків для різних вікових груп.': 'Lesson times for different age groups.',
  'Умови зарахування та необхідні документи.': 'Admission requirements and necessary documents.',
  'Гуртки й секції': 'Clubs and activities',
  'Позашкільні заняття та можливості.': 'Extracurricular activities and opportunities.',
  'Моніторинг якості': 'Quality monitoring',
  'Результати й навчальні досягнення.': 'Results and academic achievements.',
  'Допомога й підтримка': 'Help and support',
  'Контакти відповідальних спеціалістів.': 'Contact details for support staff.',
  'Відкрита інформація': 'Public information',
  'Положення, звіти та офіційні матеріали за категоріями.': 'Policies, reports and official materials organized by category.',
  'Усі документи': 'All documents',
  'Нормативні акти': 'Policies and regulations',
  'Правила прийому • 2021': 'Admissions • 2021',
  'Інформація про зарахування до 1-го класу': 'First-grade admission information',
  '2 сторінки · 640 КБ': '2 pages · 640 KB',
  'Фінансові звіти • 2021': 'Financial reports • 2021',
  'Звіт про використання бюджетних коштів': 'Report on the use of public funds',
  '4 сторінки · 1,2 МБ': '4 pages · 1.2 MB',
  'Освітній процес • 2021': 'Learning process • 2021',
  'Структура 2021–2022 навчального року': 'Structure of the 2021–2022 academic year',
  '3 сторінки · 420 КБ': '3 pages · 420 KB',
  'Ми на зв’язку': 'Get in touch',
  'Усі способи зв’язку та адреса на одній сторінці.': 'Every way to contact us, all on one page.',
  'Звертайтеся': 'Contact us',
  'Будемо раді допомогти': 'We are happy to help',
  'Оберіть зручний спосіб зв’язку. Години прийому та відповідальні особи можуть бути розміщені тут без пошуку в довгому меню.': 'Choose the most convenient way to reach us. Office hours and responsible staff are easy to find here without searching through a long menu.',
  'Телефон': 'Phone',
  'Електронна пошта': 'Email',
  'Адреса': 'Address',
  'м. Херсон, Україна': 'Kherson, Ukraine',
  'До всіх новин': 'Back to all news',
  '10 листопада 2021': '10 November 2021',
  'З 10 листопада розпочинається прийом документів на зарахування до 1-го класу на 2022–2023 навчальний рік.': 'First-grade applications for the 2022–2023 academic year open on 10 November.',
  'Попередній запис за телефоном': 'Register in advance by phone',
  'Необхідні документи': 'Required documents',
  'Паспорт одного з батьків або законного представника.': 'Passport of a parent or legal guardian.',
  'Свідоцтво про народження дитини.': 'The child’s birth certificate.',
  'Заява встановленого зразка.': 'A completed application form.',
  'Повна юридична інформація та територія обслуговування розміщуються у прикріпленому документі, а не перевантажують головну сторінку.': 'Full legal information and the school catchment area are provided in an attached document instead of overloading the homepage.',
  'Спеціалізована школа з поглибленим вивченням математики, фізики та англійської мови.': 'A specialized school offering advanced study of mathematics, physics and English.',
  'Корисне': 'Useful links',
  'Психологічна служба': 'Student support',
  'Мапа сайту': 'Sitemap',
  'Херсон, Україна': 'Kherson, Ukraine',
  '© 2022 Херсонська спеціалізована школа №24': '© 2022 Kherson Specialized School No. 24',
  'Навчальний прототип інтерфейсу': 'Educational interface prototype',
  'Пошук на сайті': 'Site search',
  'Що ви шукаєте?': 'What are you looking for?',
  'Популярні розділи:': 'Popular sections:',
  'Розклад': 'Schedule'
};

const attributeEnglish = {
  'Мова сайту': 'Site language',
  'Школа №24, головна': 'School No. 24, home',
  'Емблема школи №24': 'School No. 24 emblem',
  'Основна навігація': 'Primary navigation',
  'Відкрити пошук': 'Open search',
  'Закрити меню': 'Close menu',
  'Мобільна навігація': 'Mobile navigation',
  'Коротка інформація': 'Quick facts',
  'Докладніше про тиждень науки': 'Learn more about Science Week',
  'Докладніше про досягнення': 'Learn more about achievements',
  'Додаткова навігація': 'Secondary navigation',
  'Будівля школи': 'School building',
  'Категорії документів': 'Document categories',
  'Відкрити документ': 'Open document',
  'Закрити пошук': 'Close search',
  'Наприклад, правила прийому': 'For example, admissions'
};

const textBindings = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const key = node.nodeValue.replace(/\s+/g, ' ').trim();
    if (!key || !english[key] || node.parentElement?.closest('.language')) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }
});

while (walker.nextNode()) {
  const node = walker.currentNode;
  const original = node.nodeValue;
  textBindings.push({
    node,
    key: original.replace(/\s+/g, ' ').trim(),
    leading: original.match(/^\s*/)?.[0] || '',
    trailing: original.match(/\s*$/)?.[0] || ''
  });
}

const attributeBindings = [];
document.querySelectorAll('[aria-label], [placeholder], [alt]').forEach((element) => {
  ['aria-label', 'placeholder', 'alt'].forEach((attribute) => {
    const value = element.getAttribute(attribute);
    if (value && attributeEnglish[value]) attributeBindings.push({ element, attribute, value });
  });
});

function applyLanguage(language, { persist = true } = {}) {
  const isEnglish = language === 'en';
  document.documentElement.lang = isEnglish ? 'en' : 'uk';

  textBindings.forEach(({ node, key, leading, trailing }) => {
    node.nodeValue = `${leading}${isEnglish ? english[key] : key}${trailing}`;
  });

  attributeBindings.forEach(({ element, attribute, value }) => {
    element.setAttribute(attribute, isEnglish ? attributeEnglish[value] : value);
  });

  const description = document.querySelector('meta[name="description"]');
  description.content = isEnglish
    ? 'A modern redesign concept for the Kherson Specialized School No. 24 website'
    : 'Концепт оновленого сайту Херсонської спеціалізованої школи №24';

  languageButton.textContent = isEnglish ? 'EN' : 'UA';
  languageButton.setAttribute('aria-label', isEnglish ? 'Switch to Ukrainian' : 'Перемкнути на англійську');
  languageButton.title = isEnglish ? 'Українська' : 'English';
  languageButton.dataset.language = isEnglish ? 'en' : 'uk';

  const heading = document.querySelector(`[data-page="${currentRoute()}"] h1`)?.textContent.replace(/\s+/g, ' ').trim();
  document.title = `${heading || (isEnglish ? 'School No. 24' : 'Школа №24')} — ${isEnglish ? 'School No. 24' : 'Школа №24'}`;

  if (persist) localStorage.setItem('school24-language', isEnglish ? 'en' : 'uk');
}

function currentRoute() {
  const route = window.location.hash.replace('#', '');
  return knownRoutes.has(route) ? route : 'home';
}

function renderRoute({ scroll = true } = {}) {
  const route = currentRoute();

  pages.forEach((page) => {
    const active = page.dataset.page === route;
    page.classList.toggle('is-active', active);
    page.setAttribute('aria-hidden', String(!active));
  });

  primaryLinks.forEach((link) => {
    const active = link.dataset.route === route || (route === 'article' && link.dataset.route === 'news');
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  closeMenu();
  if (searchDialog.open) searchDialog.close();
  const heading = document.querySelector(`[data-page="${route}"] h1`)?.textContent.replace(/\s+/g, ' ').trim();
  document.title = `${heading || 'Школа №24'} — ${document.documentElement.lang === 'en' ? 'School No. 24' : 'Школа №24'}`;
  if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openMenu() {
  mobileMenu.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  menuButton.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

routeLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.dataset.route;
    if (target && target === currentRoute()) renderRoute();
  });
});

menuButton.addEventListener('click', openMenu);
document.querySelectorAll('[data-close-menu]').forEach((button) => button.addEventListener('click', closeMenu));

document.querySelector('#search-open').addEventListener('click', () => {
  searchDialog.showModal();
  requestAnimationFrame(() => searchInput.focus());
});

document.querySelectorAll('[data-close-search]').forEach((button) => {
  button.addEventListener('click', () => searchDialog.close());
});

languageButton.addEventListener('click', () => {
  applyLanguage(languageButton.dataset.language === 'en' ? 'uk' : 'en');
});

searchDialog.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') searchDialog.close();
});

document.querySelectorAll('.filter-tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.querySelectorAll('button').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
  });
});

document.querySelectorAll('.category-list button').forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.querySelectorAll('button').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
  });
});

window.addEventListener('hashchange', () => renderRoute());
window.addEventListener('scroll', () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 20), { passive: true });

renderRoute({ scroll: false });
applyLanguage(localStorage.getItem('school24-language') === 'en' ? 'en' : 'uk', { persist: false });
