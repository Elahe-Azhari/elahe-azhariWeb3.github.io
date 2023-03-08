const select = document.querySelector(".li2");
const country = document.querySelector(".ul2");

select.addEventListener("mouseenter", function () {
    country.classList.toggle("hidden");
});

select.addEventListener("mouseleave", function () {
    country.classList.remove("hidden");
});

const searchicon = document.querySelector(".icon-search");
const removeicon = document.querySelector(".searchform");
const btn = document.querySelector(".remove-search");

searchicon.addEventListener("click", function () {
    removeicon.classList.toggle("hidden-remove");
    searchicon.classList.add("icon-search2");
    btn.classList.remove("remove-search");
});
btn.addEventListener("click", function () {
    removeicon.classList.toggle("hidden-remove");
    searchicon.classList.remove("icon-search2");
    btn.classList.add("remove-search");
});

const select2= document.querySelector(".li4-2");
const box = document.querySelector(".ul4");

select2.addEventListener("mouseenter", function () {
    box.classList.toggle("ul4-show");
});

select2.addEventListener("mouseleave", function () {
    box.classList.remove("ul4-show");
});

const select3= document.querySelector(".li4-1");
const box1 = document.querySelector(".ul5");

select3.addEventListener("mouseenter", function () {
    box1.classList.toggle("ul5-show");
});

select3.addEventListener("mouseleave", function () {
    box1.classList.remove("ul5-show");
});
const select4= document.querySelector(".li5");
const box2= document.querySelector(".ul6");

select4.addEventListener("mouseenter", function () {
    box2.classList.toggle("ul6-show");
});

select4.addEventListener("mouseleave", function () {
    box2.classList.remove("ul6-show");
});

const iconLeft = document.querySelector(".left");
const iconRight = document.querySelector(".right");
const slider = document.querySelector(".slider");
const image = document.querySelectorAll(".s1")[0];
let activeImage = 0;

iconLeft.addEventListener("click", function () {
    activeImage--;
    if (activeImage == -1) {
        activeImage = 3;
    }
    let imageWidth = image.clientWidth;
    image.style.marginLeft = `-${activeImage * imageWidth}px`;
});

iconRight.addEventListener("click", function () {
    activeImage++;
    if (activeImage == 4) {
        activeImage = 0;
    }
    let imageWidth = image.clientWidth;
    image.style.marginLeft = `-${activeImage * imageWidth}px`;
});

const selectMenu = document.querySelector(".icon-list");
const greenMenu = document.querySelector(".sm-menu");
const boxremove = document.querySelector(".icon-delete");

selectMenu.addEventListener("click", function () {
    greenMenu.classList.add("show-m");
});

boxremove.addEventListener("click", function () {
    greenMenu.classList.remove("show-m");
});

const box3 = document.querySelector(".openmenu");
const box1011 = document.querySelector(".box1011");
const box4 = document.querySelector("#li100");
const box5 = document.querySelector("#li101");
const box6 = document.querySelector("#li102");
const box7 = document.querySelector("#li103");
const box8 = document.querySelector("#li104");
const box9 = document.querySelector("#li105");
const box10 = document.querySelector("#li106");
const back = document.querySelector(".link103");
const box12 = document.querySelector(".box101");

box3.addEventListener("click", function () {
    box1011.classList.toggle("box1012");
   box3.classList.add("link102");
   box5.classList.add("link102");
   box6.classList.add("link102");
   box7.classList.add("link102");
   box8.classList.add("link102");
   box9.classList.add("link102");
   box10.classList.add("link102");  
});


// const little = document.querySelector(".box1011");

back.addEventListener("click", function () {
    // box1011.classList.toggle("box1012");
    box3.classList.remove("link102");
    box5.classList.remove("link102");
    box6.classList.remove("link102");
    box7.classList.remove("link102");
    box8.classList.remove("link102");
    box9.classList.remove("link102");
    box10.classList.remove("link102");  
 
});