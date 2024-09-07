document.addEventListener("DOMContentLoaded", function () {
  //
  const menu = document.querySelector(".menu");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  const modalWindow = document.querySelector(".modal");
  const modalBtn = document.querySelector(".addTask");
  const modalBtnClose = document.querySelector(".modal form span");
  const modalForm = document.querySelector(".modal form");
  modalBtn.addEventListener("click", () => {
    modalWindow.style.display = "block";
  });
  modalBtnClose.addEventListener("click", () => {
    modalWindow.style.display = "none";
  });
  modalWindow.addEventListener("click", (event) => {
    if (!modalForm.contains(event.target)) {
      modalWindow.style.display = "none";
    }
  });
});
