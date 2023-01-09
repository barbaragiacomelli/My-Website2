const navlist = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelectorAll(".nav-list ul li a")
const navContainer = document.querySelector(".nav-container");

const navhanderler = () => {
    navlist.classList.toggle("open");
    hamburger.classList.toggle("open");
}

hamburger.addEventListener("click", navhanderler)

navlink.forEach((navlinks,) => {
    navlinks.addEventListener('click', () => {
        navlist.classList.remove("open");
        hamburger.classList.remove("open");
    })
})


const scroll = document.querySelector(".scroll")
const togglescroll = () => {

   if (window.pageYOffset > 100) {
        scroll.style.display = "flex"
        navContainer.style.position = "sticky"
        navContainer.style.padding = "20px 50px"
        navContainer.style.background = "#f3d8e2c6"
    } else {
        scroll.style.display = "none"
        navContainer.style.position = "relative"
        navContainer.style.background = ""
    } 
}

window.addEventListener("scroll", togglescroll);

