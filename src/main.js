import "./style.css";
import { Header } from "./components/Header/header.js";
import { Home } from "./components/Home/home.js";
import { Container } from "./components/Container/container.js";

const app = document.querySelector("#app");
app.insertAdjacentHTML("afterbegin", Header());
app.insertAdjacentHTML("beforeend", Home());
app.insertAdjacentHTML("afterbegin", Container());
