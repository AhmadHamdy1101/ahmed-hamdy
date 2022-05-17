
/* show and hide menu */
let toggle = document.querySelector("#bar__menu");
let menu = document.querySelector(".menu-res");
toggle.addEventListener("click",function () {
    menu.classList.toggle("showmenu");
});

/*function make menu close when click on Escape puttom on keypord*/

document.onkeyup =function (e) {
    if (e.key === "Escape") {
        menu.classList.remove("showmenu");
    };
};


/*function make menu close when click on link*/
function hide() {
    menu.classList.remove("showmenu")
}






let links = document.querySelectorAll(".menu-res nav li a");

/*change menu color */
$(".menu-res nav li a").click(removeactive)
function removeactive() {
    links.forEach((li) => {
        li.classList.remove("active__menu")
        this.classList.add("active__menu")
    });
};

/*make animation wen scroll*/
AOS.init();

/*hide loader */
let loader =document.querySelector(".loader");
let loaders =document.querySelector(".loaders");
window.onload = () =>{
    setTimeout(function () {
        loader.style.opacity = "0";
        loader.style.display = "none";
        loaders.style.opacity = "0";
        loaders.style.display = "none";
    }, 1500)
}


