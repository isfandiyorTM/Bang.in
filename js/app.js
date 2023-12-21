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

// nav
const nav = document.querySelector("header nav");
const nav_container = document.querySelector("header nav .container");
const navigation = document.querySelector("header nav .container .navigation");

window.addEventListener("scroll", () => {
    menu.classList.remove("show");

    if (window.scrollY > 40) {
        nav.classList.add("sticky");
        nav_container.classList.add("sticky");
        navigation.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
        nav_container.classList.remove("sticky");
        navigation.classList.remove("sticky");
    }
});