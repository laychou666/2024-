const images = document.querySelectorAll('.slide');
const totalImages = images.length;
let currentIndex = 0;
let autoSlideInterval;

/**
 * Update the slider position based on the currentIndex
 */
function updateSlider() {
  const slides = document.querySelector('.slides');
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  updatePagination();
}

/**
 * Go to the next image in the slider
 */
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
}

/**
 * Go to the previous image in the slider
 */
function previousImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
}

/**
 * Automatically slide to the next image every 10 seconds
 */
function autoSlide() {
  autoSlideInterval = setInterval(nextImage, 10000);
}

/**
 * Create pagination buttons
 */
function createPagination() {
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = ''; // Clear previous buttons
  for (let i = 0; i < totalImages; i++) {
    const button = document.createElement('button');
    button.onclick = function () {
      currentIndex = i;
      updateSlider();
      resetAutoSlide(); // Reset the auto-slide timer when manually clicked
    };
    pagination.appendChild(button);
  }
  updatePagination();
}

/**
 * Update pagination to reflect the current slide
 */
function updatePagination() {
  const buttons = document.querySelectorAll('.pagination button');
  buttons.forEach((button, index) => {
    button.classList.toggle('active', index === currentIndex);
  });
}

/**
 * Reset auto slide interval
 */
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlide();
}

document.addEventListener('DOMContentLoaded', function () {
  createPagination();
  updateSlider();
  autoSlide();
});
