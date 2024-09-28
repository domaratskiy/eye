document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  const sliderTrack = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;
  let slidesToShow = 4; // По умолчанию 4 слайда
  const totalSlides = Math.ceil(slides.length / slidesToShow) - 1; // Количество "страниц" слайдов

  function updateSlider() {
    const offset = -currentIndex * (100 / slidesToShow); // Рассчитываем смещение
    sliderTrack.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? totalSlides : currentIndex - 1;
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex === totalSlides ? 0 : currentIndex + 1;
    updateSlider();
  });

  function setSlidesToShow() {
    if (window.matchMedia("(max-width: 600px)").matches) {
      slidesToShow = 2; // Устанавливаем 2 карточки на экране 600px и меньше
    } else {
      slidesToShow = 4; // Устанавливаем 4 карточки по умолчанию
    }
    updateSlider(); // Обновляем слайдер
  }

  // Устанавливаем количество слайдов в начале
  setSlidesToShow();

  // Добавляем обработчик события изменения размера окна
  window.addEventListener("resize", setSlidesToShow);

  // Запускаем слайдер автоматически через каждые 3 секунды (если нужно)
  setInterval(() => {
    currentIndex = currentIndex + 1 > totalSlides ? 0 : currentIndex + 1; // Переход к следующему слайду
    updateSlider();
  }, 3000); // Интервал в 3000 мс (3 секунды)
});
