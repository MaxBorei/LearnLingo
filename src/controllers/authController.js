import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  reload,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

import { auth } from '@/lib/firebase.js';

import { closeModal } from './modalController.js';
import { getAuthErrorMessage } from '@/utilites/getAuthErrorMessage.js';

document.addEventListener('submit', async e => {
  if (!(e.target instanceof HTMLFormElement)) return;

  const form = e.target;
  if (!form.classList.contains('modal__form')) return;

  e.preventDefault();
  clearFormError(form);

  try {
    if (form.id === 'registration-form') {
      const email = form.elements.email.value.trim();
      const password = form.elements.password.value;
      const name = form.elements.name?.value?.trim() ?? '';

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (name) {
        await updateProfile(user, { displayName: name });
        await reload(user);
      }

      form.reset();
      closeCurrentModalByForm(form);
      return;
    }

    if (form.id === 'login-form') {
      const email = form.elements.email.value.trim();
      const password = form.elements.password.value.trim();

      await signInWithEmailAndPassword(auth, email, password);

      form.reset();
      const modal = form.closest('.modal');
      if (modal) closeModal(modal);
      return;
    }
  } catch (err) {
    console.error('AUTH ERROR:', err.code, err.message, err);

    const message = getAuthErrorMessage(err);
    showFormError(form, message);
  }
});

document.addEventListener('click', async e => {
  const btn = e.target.closest('[data-action="logout"]');
  if (!btn) return;

  try {
    await signOut(auth);
  } catch (err) {
    console.error('Logout error:', err);
  }
});

function clearFormError(form) {
  form.querySelector('.modal__error')?.remove();
}

function closeCurrentModalByForm(form) {
  const modal = form.closest('.modal');
  if (!modal) return;
  closeModal(modal);
}

function showFormError(form, message) {
  clearFormError(form);

  const errorElem = document.createElement('div');
  errorElem.className = 'modal__error';
  errorElem.textContent = message;
  form.appendChild(errorElem);
}
