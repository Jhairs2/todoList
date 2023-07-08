const menuButton = document.getElementById("menu-icon")
const menu = document.querySelector(".side-menu")
const mainContent = document.querySelector(".main-content")

menuButton.addEventListener("click", ()=> {
    if(menu.classList.contains("hide")) {
        menu.classList.remove("hide");
        mainContent.classList.remove("full");

    } else {
        menu.classList.add("hide");
        mainContent.classList.add("full");
    }
})
