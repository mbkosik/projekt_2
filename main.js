
const toggleBars = document.querySelector("div.toggle");
const mainNav = document.querySelector("ul.nav-list");
const dropdownElement = document.querySelectorAll(".dropdown-element")
const navSubList = document.querySelectorAll("ul.nav-sublist")

toggleBars.addEventListener("click", () => {
    mainNav.classList.toggle("active"); 
})

if(window.innerWidth <= 500) {
    dropdownElement[0].addEventListener("click", () => {            navSubList[0].classList.toggle("active"); 
    console.log(navSubList[0]);
    })

    dropdownElement[1].addEventListener("click", () => {
    navSubList[1].classList.toggle("active"); 
    console.log(navSubList[1]);
    })
}




