

const popup = document.getElementById("popup");
const navMobile = document.getElementById("navbar");
const opacity = document.getElementById("opacity");
const underc = document.getElementById("underc");
const underc1 = document.getElementById("underc1");
const underc2 = document.getElementById("underc2");


popup.addEventListener("click",()=>{
navMobile.classList.toggle("active");
popup.classList.toggle("active")
opacity.classList.toggle("active")
});

opacity.addEventListener("click",()=>{
navMobile.classList.toggle("active");
popup.classList.toggle("active")
opacity.classList.toggle("active")
});

underc.addEventListener("click",()=>{
alert("page-under-construction!!");
});
underc1.addEventListener("click",()=>{
    alert("page-under-construction!!");
 });
 underc2.addEventListener("click",()=>{
    alert("page-under-construction!!");
});

