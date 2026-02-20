import { Hero } from '@/components/Hero/hero.js';
import { Teachers, initTeachers } from '@/pages/Teachers/teachers.js';
import { notFound } from '@/pages/Not-found/not-found.js';

export function createRouter(renderView) {
  async function router() {
    const path = window.location.pathname;

    if (path === '/') {
      renderView(Hero());
      return;
    }

    if (path === '/teachers') {
      renderView(Teachers());
      await initTeachers();
      return;
    }

    renderView(notFound());
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
