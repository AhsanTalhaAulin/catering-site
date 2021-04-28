let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#left-arrow"),
    arrowRight = document.querySelector("#right-arrow"),
    current = 0;

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        const element = sliderImages[i];

        element.style.display = "none";

    }
}


// Init slider

function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}


// Show prev
function showPrev() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();