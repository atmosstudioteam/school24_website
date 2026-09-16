const pages = [...document.querySelectorAll('[data-page]')];
const routeLinks = [...document.querySelectorAll('[data-route]')];
const primaryLinks = [...document.querySelectorAll('.primary-nav [data-route]')];
const siteHeader = document.querySelector('#site-header');
const mobileMenu = document.querySelector('#mobile-menu');
const menuButton = document.querySelector('#menu-open');
const searchDialog = document.querySelector('#search-dialog');
const searchInput = document.querySelector('#search-input');

const knownRoutes = new Set(pages.map((page) => page.dataset.page));

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
  document.title = `${document.querySelector(`[data-page="${route}"] h1`)?.textContent || 'Школа №24'} — Школа №24`;
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
