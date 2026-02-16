import "./style.css";
import "./lib/firebase.js";
import "./components/Modal/modal.js";

import { Header } from "./components/Header/header.js";
import { Home } from "./components/Home/home.js";
import { Container } from "./components/Container/container.js";
import { Modal } from "./components/Modal/modal.js";

const app = document.querySelector("#app");
app.insertAdjacentHTML("afterbegin", Header());
app.insertAdjacentHTML("beforeend", Home());
app.insertAdjacentHTML("afterbegin", Container());
app.insertAdjacentHTML("afterbegin", Modal());
