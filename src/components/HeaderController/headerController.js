import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { auth } from '../../lib/firebase.js';
import { Header } from '../Header/header.js';

export function initHeader(rootSelector = '#app') {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  let headerRoot = root.querySelector('#header-root');
  if (!headerRoot) {
    headerRoot = document.createElement('div');
    headerRoot.id = 'header-root';
    root.prepend(headerRoot);
  }

  onAuthStateChanged(auth, user => {
    headerRoot.innerHTML = Header(user);
  });
}
