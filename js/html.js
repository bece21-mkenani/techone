const popup = document.getElementById("popup");
const navMobile = document.getElementById("navbar");
const opacity = document.getElementById("opacity");



popup.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    popup.classList.toggle("active")
    opacity.classList.toggle("active")
});

opacity.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    popup.classList.toggle("active")
    opacity.classList.toggle("active")
});