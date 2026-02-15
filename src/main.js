import "./style.css";
import { Header } from "./components/Header/header.js";
import { Home } from "./components/Home/home.js";

const app = document.querySelector("#app");
app.insertAdjacentHTML("afterbegin", Header());
app.insertAdjacentHTML("beforeend", Home());
