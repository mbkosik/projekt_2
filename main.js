
const toggleBars = document.querySelector("div.toggle");
const mainNav = document.querySelector("ul.nav-list");
const dropdownElement = document.querySelectorAll(".dropdown-element")
const navSubList = document.querySelectorAll("ul.nav-sublist")

toggleBars.addEventListener("click", () => {
    mainNav.classList.toggle("active"); 
})

if(window.innerWidth <= 500) {
    for (let i=0; i<=dropdownElement.length;i++) {
        dropdownElement[i].addEventListener("click", () => {
            navSubList[i].classList.toggle("active"); 
        })
    }
}




