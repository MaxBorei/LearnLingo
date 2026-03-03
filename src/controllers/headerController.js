import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { auth } from '@/lib/firebase.js';
import { Header } from '@/components/Header/header.js';

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
    setActiveNav();
  });
}

export function setActiveNav() {
  const path = window.location.pathname;

  const teachersLink = document.querySelector('.onPage_Teachers');
  const favoritesLink = document.querySelector('.onPage_Favorites');
  if (teachersLink) {
    if (teachersLink.classList.contains('active')) {
      teachersLink.classList.remove('active');
    }
  }
  if (favoritesLink) {
    if (favoritesLink.classList.contains('active')) {
      favoritesLink.classList.remove('active');
    }
  }

  if (path === '/teachers') {
    if (teachersLink) {
      teachersLink.classList.add('active');
    }
  }
  if (path === '/favorites') {
    if (favoritesLink) {
      favoritesLink.classList.add('active');
    }
  }
  return;
}
