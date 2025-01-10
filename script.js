// Select elements
const images = document.querySelectorAll('.image-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

// Function to show the current image
function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });

  // Update button visibility
  prevButton.classList.toggle('hidden', index === 0);
  nextButton.classList.toggle('hidden', index === images.length - 1);
}

// Event listeners for buttons
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

// Show the first image initially
showImage(currentIndex);
