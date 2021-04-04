
const toggleBars = document.querySelector("div.toggle");
const mainNav = document.querySelector("ul.nav-list");

toggleBars.addEventListener("click", () => {
    mainNav.classList.toggle("active"); 
})