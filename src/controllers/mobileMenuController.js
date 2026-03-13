export function mobileMenuController() {
  const burgerBtn = document.querySelector('.burger-button-btn');
  if (!burgerBtn) return;
  const mobileOverlay = document.querySelector('.mobile-overlay');
  if (!mobileOverlay) return;
  const iconMenu = burgerBtn.querySelector('use');
  if (!iconMenu) return;
  if (!burgerBtn.dataset.listener) {
    burgerBtn.dataset.listener = 'true';
    burgerBtn.addEventListener('click', e => {
      mobileOverlay.classList.toggle('open');
      if (mobileOverlay.classList.contains('open')) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });
  }
  if (!mobileOverlay.dataset.listener) {
    mobileOverlay.dataset.listener = 'true';
    mobileOverlay.addEventListener('click', el => {
      if (el.target === mobileOverlay) {
        closeMobileMenu();
      }
    });
  }
  if (!document.isOpenMobileMenu) {
    document.isOpenMobileMenu = true;
    document.addEventListener('keydown', el => {
      const mobileOverlay = document.querySelector('.mobile-overlay');
      const burgerBtn = document.querySelector('.burger-button-btn');
      if (!burgerBtn) return;
      const iconMenu = burgerBtn.querySelector('use');
      if (
        iconMenu &&
        mobileOverlay &&
        el.key === 'Escape' &&
        mobileOverlay.classList.contains('open')
      ) {
        mobileOverlay.classList.remove('open');
        iconMenu.setAttribute('href', '/sprite.svg#icon-menu');
        document.body.style.overflow = '';
      }
    });
  }
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu) return;
  if (!mobileMenu.dataset.listener) {
    mobileMenu.dataset.listener = 'true';
    mobileMenu.addEventListener('click', e => {
      if (e.target.closest('.nav__link')) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    iconMenu.setAttribute('href', '/sprite.svg#icon-close');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileOverlay.classList.remove('open');
    iconMenu.setAttribute('href', '/sprite.svg#icon-menu');
    document.body.style.overflow = '';
  }
}
