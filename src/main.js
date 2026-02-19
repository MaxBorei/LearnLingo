import './style.css';

import './controllers/modalController.js';
import './controllers/authController.js';

import { Hero } from './components/Hero/hero.js';
import { Container } from './components/Container/container.js';
import { modalRegister } from './components/Modal-Register/modalRegister.js';
import { modalLogin } from './components/Modal-Login/modalLogin.js';
import { initHeader } from './controllers/headerController.js';

const app = document.querySelector('#app');

app.insertAdjacentHTML('beforeend', Container());
app.insertAdjacentHTML('beforeend', Hero());
app.insertAdjacentHTML('beforeend', modalRegister());
app.insertAdjacentHTML('beforeend', modalLogin());

initHeader();
