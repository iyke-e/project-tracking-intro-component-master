const menuBar = document.querySelector(".menu-icon");
const menuContent = document.querySelector("nav")


menuBar.addEventListener('click', () => {
    menuBar.classList.toggle("close-icon")
    menuContent.classList.toggle("show")
})