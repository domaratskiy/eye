const menu = document.getElementById("nav");

const burger = document.querySelector(".menuBtn");

const socialBtn = document.querySelector(".socialBtn");
const socialList = document.querySelector(".socialUl");

const menuToggle = () => {
  menu.classList.toggle("open");
};
const socialToggle = () => {
  socialList.classList.toggle("openSocial");
};
burger.addEventListener("click", menuToggle);
socialBtn.addEventListener("click", socialToggle);
