import '@/style.css';
import '@/controllers/modalController.js';
import '@/controllers/authController.js';

import { modalRegister } from './components/Modal-Register/modalRegister.js';
import { modalLogin } from './components/Modal-Login/modalLogin.js';
import { initHeader } from './controllers/headerController.js';

import { createRouter } from './router/router.js';

const app = document.querySelector('#app');

function Layout() {
  return `
    <main id="view"></main>
    ${modalRegister()}
    ${modalLogin()}
  `;
}

function renderView(html) {
  const view = document.querySelector('#view');
  if (!view) return;
  view.innerHTML = html;
}

app.innerHTML = Layout();
initHeader();

const { router, initLinkRouting, initPopstate } = createRouter(renderView);

initLinkRouting();
initPopstate();
router();
