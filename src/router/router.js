import { Hero } from '@/components/Hero/hero.js';
import { Teachers, initTeachers } from '@/pages/Teachers/teachers.js';
import { notFound } from '@/pages/Not-found/not-found.js';
import { setActiveNav } from '../controllers/headerController.js';

export function createRouter(renderView) {
  async function router() {
    const path = window.location.pathname;

    if (path === '/') {
      document.body.className = 'page-home';
      renderView(Hero());
      setActiveNav();
      return;
    } else if (path === '/teachers') {
      document.body.className = 'page-teachers';
      renderView(Teachers());
      await initTeachers();
      setActiveNav();
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
