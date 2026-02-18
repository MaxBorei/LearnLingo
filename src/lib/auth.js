import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  reload,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

import { auth } from './firebase.js';

import { closeModal } from '../components/Modal-Сontroler/modalController.js';
import { log } from 'firebase/firestore/pipelines';

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

function getAuthErrorMessage(err) {
  console.log(err);

  switch (err.code) {
    case 'auth/email-already-in-use':
      return 'This email is already in use. Please use a different email.';
    case 'auth/invalid-email':
      return 'The email address is not valid. Please enter a valid email.';
    case 'auth/operation-not-allowed':
      return 'Email/password accounts are not enabled. Please contact support.';
    case 'auth/weak-password':
      return 'The password is too weak. Please use a stronger password.';
    case 'auth/user-disabled':
      return 'This user account has been disabled. Please contact support.';
    case 'auth/user-not-found':
      return 'No user found with this email. Please check your email or register for a new account.';
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'The email or password is incorrect.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    default:
      return 'An unknown authentication error occurred.';
  }
}

onAuthStateChanged(auth, user => {
  console.log(user ? `✅ logged in: ${user.email}` : '❌ logged out');
});

document.addEventListener('click', async e => {
  const btn = e.target.closest('[data-action="logout-button"]');
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
