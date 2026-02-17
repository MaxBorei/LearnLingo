import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  reload,
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { auth } from './firebase.js';

document.addEventListener('submit', async e => {
  const form = e.target.closest('.modal__form');
  if (!form) return;

  // только регистрация
  if (!form.closest('[data-modal-name="register"]')) return;

  e.preventDefault();
  clearFormError(form);

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value; // пароль лучше не trim
  const name = form.elements.name?.value?.trim() ?? '';

  try {
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
  } catch (err) {
    console.error(err.code, err.message);
  }
});

const loginForm = document.querySelector(
  '[data-modal-name="login"] .modal__form'
);

loginForm?.addEventListener('submit', async e => {
  e.preventDefault();
  clearFormError(loginForm);

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginForm.reset();
    closeCurrentModalByForm(loginForm);
  } catch (err) {
    console.error(err);
  }
});

function clearFormError(form) {
  const errorElement = form.querySelector('.modal__error');
  if (errorElement) {
    errorElement.remove();
  }
}

function closeCurrentModalByForm(form) {
  const modal = form.closest('.modal');
  if (!modal) return;
  closeModal(modal);
}
