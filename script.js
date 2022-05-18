const menu = document.getElementById("Menu");
const menubtn = document.getElementById("MenuBtn");
const icon = document.getElementById("Icon");

const toggleMenu = () => {
    menu.classList.toggle("show");
    icon.classList.toggle("bi-list");
    icon.classList.toggle("bi-x-circle");
};

menubtn.addEventListener("click", toggleMenu);