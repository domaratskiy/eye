const burger = document.querySelector(".menuBtn");
const socialBtn = document.querySelector(".socialBtn");
const closeBtn = document.querySelector(".closeBtn");

const menu = document.getElementById("nav");
const socialList = document.querySelector(".socialUl");

const menuToggle = () => {
  menu.classList.toggle("open");
};

const socialToggle = () => {
  socialList.classList.toggle("openSocial");
};

const closeMenuOnClickOutside = (event) => {
  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    menu.classList.remove("open");
  }
};

burger.addEventListener("click", menuToggle);
socialBtn.addEventListener("click", socialToggle);
closeBtn.addEventListener("click", menuToggle);
document.addEventListener("click", closeMenuOnClickOutside);
