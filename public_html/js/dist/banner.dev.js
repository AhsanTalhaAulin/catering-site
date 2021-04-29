"use strict";

var sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#left-arrow"),
    arrowRight = document.querySelector("#right-arrow"),
    current = 0; // Clear all images

function reset() {
  for (var i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
} // Init slider


function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
  console.log(current);
} // Show prev


function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block"; // console.log(current);

  current--; // console.log(current);
} // Show next


function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block"; // console.log(current);

  current++;
} // Left arrow click


arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }

  slideLeft();
  console.log(current);
}); // Right arrow click

arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }

  slideRight();
  console.log(current);
});
startSlide();