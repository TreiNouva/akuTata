
      document.addEventListener("DOMContentLoaded", function () {
        let currentSlide = 0;
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".slider-dot");

        function showSlide(index) {
          slides.forEach((slide) => slide.classList.remove("active"));
          dots.forEach((dot) => dot.classList.remove("active"));

          slides[index].classList.add("active");
          dots[index].classList.add("active");
        }

        dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
          });
        });

        setInterval(() => {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        }, 5000);

        const menuBtn = document.querySelector(".mobile-menu-btn");
        const nav = document.querySelector("nav");

        if (menuBtn) {
          menuBtn.addEventListener("click", () => {
            nav.classList.toggle("open");
          });
        }
      });
    