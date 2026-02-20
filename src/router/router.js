import { Hero } from '../components/Hero/hero.js';
import { Teachers } from '../components/Teachers/teachers.js';

const notFound = () => '<h1 style="padding:40px">404</h1>';

export function createRouter(renderView) {
  function router() {
    const path = window.location.pathname;

    if (path === '/') return renderView(Hero());
    if (path === '/teachers') return renderView(Teachers());

    return renderView(notFound());
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
