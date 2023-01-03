const navlist = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelectorAll(".nav-list ul li a")

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
    } else {
        scroll.style.display = "none"
    }
}

window.addEventListener("scroll", togglescroll);

