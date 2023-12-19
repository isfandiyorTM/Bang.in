// Menu
const menu_btn = document.getElementById("menu");
const menu = document.querySelector("header nav .container .navigation");
const register_btn = document.querySelector(
    "header nav .container .register .register-btn"
);

menu_btn.addEventListener("click", () => {
    menu.classList.toggle("show");
    register_btn.classList.toggle("show");
});