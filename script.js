const containerSlider = document.querySelector(".container-slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const arrowDown = document.querySelector(".arrowDown");
const arrowUp = document.querySelector(".arrowUp");
const slidesLength = slideRight.querySelectorAll("div").length;
const body = document.querySelector("body");

let numberActiveSlide = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Key scroll
body.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    changeSlide("up");
  } else if (e.key === "ArrowDown") {
    changeSlide("down");
  }
});

// Mouse scroll
body.addEventListener("wheel", (e) => {
  if (e.deltaY === -100) {
    changeSlide("up");
  } else if (e.deltaY === 100) {
    changeSlide("down");
  }
});

arrowUp.addEventListener("click", (e) => {
  changeSlide("up");
});

arrowDown.addEventListener("click", () => {
  changeSlide("down");
});

let changeSlide = (direction) => {
  const sliderHeight = containerSlider.clientHeight;

  if (direction == "up") {
    numberActiveSlide++;
    if (numberActiveSlide > slidesLength - 1) {
      numberActiveSlide = 0;
    }
  } else {
    numberActiveSlide--;
    if (numberActiveSlide < 0) {
      numberActiveSlide = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    numberActiveSlide * sliderHeight
  }px)`;

  slideLeft.style.transform = `translateY(${
    numberActiveSlide * sliderHeight
  }px)`;
};
