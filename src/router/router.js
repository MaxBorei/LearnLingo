import { Hero } from '@/components/Hero/hero.js';
import { Teachers, initTeachers } from '@/pages/Teachers/teachers.js';
import { notFound } from '@/pages/Not-found/not-found.js';
import { setActiveNav } from '../controllers/headerController.js';
import { Favorites } from '../pages/Favorites/Favorites.js';
import { authGuard } from '../controllers/authGuard.js';
import { openModal } from '../controllers/modalController.js';
import Toastify from 'toastify-js';
import { syncHearts } from '../controllers/teacherCardController.js';
import { auth } from '../lib/firebase.js';

export function createRouter(renderView) {
  async function router() {
    const path = window.location.pathname;
    const user = auth.currentUser;
    if (path === '/') {
      document.body.className = 'page-home';
      renderView(Hero());
      setActiveNav();
      return;
    } else if (path === '/teachers') {
      document.body.className = 'page-teachers';
      renderView(Teachers());
      await initTeachers();
      syncHearts(user);
      setActiveNav();
      return;
    } else if (path === '/favorites') {
      document.body.className = 'page-favorites';

      authGuard(
        user => {
          renderView(Favorites());
          setActiveNav();
        },
        () => {
          history.pushState(null, '', '/teachers');
          router();
          const modalElement = document.querySelector(
            '[data-modal-name="register"]'
          );
          Toastify({
            text: 'Please register or log in to view favorites.',
            duration: 3000,
            close: true,
            gravity: 'top',
            position: 'right',
            stopOnFocus: true,
            className: 'custom-toast',
          }).showToast();
          if (!modalElement) return;
          openModal(modalElement);
        }
      );

      return;
    } else {
      document.body.className = 'page-not-found';
      renderView(notFound());
    }
  }

  function initLinkRouting() {
    document.addEventListener('click', e => {
      const link = e.target.closest('a[data-link]');
      if (!link) return;

      e.preventDefault();
      history.pushState(null, '', link.getAttribute('href'));
      router();
    });
  }

  function initPopstate() {
    window.addEventListener('popstate', router);
  }

  return { router, initLinkRouting, initPopstate };
}
