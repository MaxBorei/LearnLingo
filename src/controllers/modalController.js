import { getTeachers } from '../store/teachersStore.js';
import { modalTrial } from '@/components/Modal-Trial/modalTrial.js';

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

    const teachers = getTeachers();
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
  modal.classList.remove('visually-hidden');
  const overlay = modal.closest('.overlay');
  if (overlay) overlay.classList.remove('visually-hidden');
}

export function closeModal(modalClose) {
  modalClose.classList.add('visually-hidden');
  const overlay = modalClose.closest('.overlay');
  overlay.classList.add('visually-hidden');
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
