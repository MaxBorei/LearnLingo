import "./style.css";
import "./lib/firebase.js";
import "./components/Modal-Сontroler/modalController.js";

import { Header } from "./components/Header/header.js";
import { Home } from "./components/Home/home.js";
import { Container } from "./components/Container/container.js";
import { modalRegister } from "./components/Modal-Register/modalRegister.js";
import { modalLogin } from "./components/Modal-Login/modalLogin.js";

const app = document.querySelector("#app");
app.insertAdjacentHTML("afterbegin", Header());
app.insertAdjacentHTML("beforeend", Home());
app.insertAdjacentHTML("afterbegin", Container());
app.insertAdjacentHTML("beforeend", modalRegister());
app.insertAdjacentHTML("beforeend", modalLogin());
