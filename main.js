const burger = document.getElementById("burger");
const cross = document.getElementById("cross");
const navList = document.getElementById("nav-list");



burger.addEventListener("click", showNav);


function showNav() {
    navList.classList.toggle("block");
    cross.classList.toggle("block");
    burger.classList.toggle("none");
    cross.addEventListener("click", showNav);


}
