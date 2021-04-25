
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

// FORMULARZ

const btnSubmit = document.querySelector("button");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const phoneNumber = document.getElementById("phone-number");
    const email = document.getElementById("email");

    alert(`${name.value}, ${phoneNumber.value}, ${email.value}`); 
})

$(document).on("scroll", () => {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    const $btnSubmit = $('button');

    const $btnFromTop = $btnSubmit.offset().top;
    const $btnHeight = $btnSubmit.height();

    if (scrollValue > $btnFromTop + $btnHeight - windowHeight) {
        $btnSubmit.addClass('active');
    }
})



