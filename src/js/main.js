// show mobile nav

const showMblNav = document.querySelector(".bars");
const closeMblNav = document.querySelector(".btn-close");
const nav = document.querySelector(".nav-container");
// const navLink = document.querySelectorAll(".mobile-nav__link");

const showNav = function () {
  nav.classList.toggle("show-nav");
};
const closeNav = function () {
  nav.classList.remove("show-nav");
};

showMblNav.addEventListener("click", showNav);
closeMblNav.addEventListener("click", closeNav);

// navLink.forEach((e) => {
//   e.addEventListener("click", closeMblNav);
// });

// after before slider

const slider1 = document.querySelector(".input-1");
const img2 = document.querySelector(".experience__img--2");
const dragLine1 = document.querySelector(".drag-line-1");

const slider2 = document.querySelector(".input-2");
const img4 = document.querySelector(".experience__img--4");
const dragLine2 = document.querySelector(".drag-line-2");

slider1.oninput = () => {
  let sliderVal = slider1.value;
  dragLine1.style.left = `${sliderVal}%`;
  img2.style.width = sliderVal + "%";
};

slider2.oninput = () => {
  let sliderVal = slider2.value;
  dragLine2.style.left = `${sliderVal}%`;
  img4.style.width = sliderVal + "%";
};

// owl carousel

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 1;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(1);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  // dotContainer.addEventListener("click", function (e) {
  //   if (e.target.classList.contains("dots__dot")) {
  //     const { slide } = e.target.dataset;
  //     goToSlide(slide);
  //     activateDot(slide);
  //   }
  // });
};
slider();
