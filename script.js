const images = document.querySelectorAll('.image-container');
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  // Show the current image
  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });

    // Toggle button visibility
    prevButton.classList.toggle('hidden', index === 0);
    nextButton.classList.toggle('hidden', index === images.length - 1);
  }

  // Button Event Listeners
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      showImage(currentIndex);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      showImage(currentIndex);
    }
  });

  // Initialize the carousel
  showImage(currentIndex);
});
