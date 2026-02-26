import { getTeachersStore } from '../store/teachersStore.js';
import { modalTrial } from '@/components/Modal-Trial/modalTrial.js';
import Toastify from 'toastify-js';

document.addEventListener('click', e => {
  const openTrigger = e.target.closest('[data-modal]');
  if (openTrigger) {
    const modalName = openTrigger.dataset.modal;

    if (modalName !== 'trial') {
      const modal = document.querySelector(`[data-modal-name="${modalName}"]`);
      if (!modal) return;
      openModal(modal);
      return;
    }

    const card = openTrigger.closest('.Teachers__item');
    if (!card) return;

    const id = card.dataset.id;
    if (!id) return;

    const teachers = getTeachersStore();
    const teacher = teachers.find(t => t.id === id);
    if (!teacher) return;

    document
      .querySelector('[data-modal-name="trial"]')
      ?.closest('.overlay')
      ?.remove();

    document.body.insertAdjacentHTML('beforeend', modalTrial(teacher));

    const modal = document.querySelector('[data-modal-name="trial"]');
    if (!modal) return;
    openModal(modal);
    return;
  }

  const closeBtn = e.target.closest('.modal__close');
  if (closeBtn) {
    const modalClose = closeBtn.closest('.modal');
    if (!modalClose) return;
    closeModal(modalClose);
  }

  if (e.target.classList.contains('overlay')) {
    const modalClose = e.target.querySelector('.modal');
    if (!modalClose) return;
    closeModal(modalClose);
  }
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const openedModal = document.querySelector('.modal:not(.visually-hidden)');
  if (!openedModal) return;
  closeModal(openedModal);
});

export function openModal(modal) {
  const overlay = modal.closest('.overlay');

  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  document.body.style.overflow = 'hidden';

  if (overlay) overlay.classList.remove('visually-hidden');
  modal.classList.remove('visually-hidden');
}

export function closeModal(modal) {
  const overlay = modal.closest('.overlay');

  modal.classList.add('visually-hidden');
  if (overlay) overlay.classList.add('visually-hidden');

  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

document.addEventListener('click', e => {
  const passwordToggle = e.target.closest('.password-toggle');
  if (!passwordToggle) return;

  const field = passwordToggle.closest('.password-field');
  const passwordInput = field.querySelector('input');
  const iconUse = passwordToggle.querySelector('use');

  const isHidden = passwordInput.type === 'password';

  passwordInput.type = isHidden ? 'text' : 'password';

  iconUse.setAttribute(
    'href',
    isHidden ? '/sprite.svg#icon-eye' : '/sprite.svg#icon-eye-off'
  );
});

document.addEventListener('submit', e => {
  if (!e.target.matches('#trial-form')) return;
  e.preventDefault();

  const modal = e.target.closest('.modal');
  if (modal) closeModal(modal);

  Toastify({
    text: 'We have received your message and will get in touch with you shortly.',
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    className: 'custom-toast',
  }).showToast();
});
