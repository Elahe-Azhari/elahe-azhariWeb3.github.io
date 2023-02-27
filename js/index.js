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

