import './style.css';

import './components/Modal-Сontroler/modalController.js';
import './lib/auth.js';

import { Home } from './components/Home/home.js';
import { Container } from './components/Container/container.js';
import { modalRegister } from './components/Modal-Register/modalRegister.js';
import { modalLogin } from './components/Modal-Login/modalLogin.js';
import { initHeader } from './components/HeaderController/headerController.js';

const app = document.querySelector('#app');

app.insertAdjacentHTML('beforeend', Container());
app.insertAdjacentHTML('beforeend', Home());
app.insertAdjacentHTML('beforeend', modalRegister());
app.insertAdjacentHTML('beforeend', modalLogin());

initHeader();
