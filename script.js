const images = document.querySelectorAll('.image-container');
let currentIndex = 0;

// Function to show the current image and hide others
function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'flex' : 'none';
  });

  // Update the swipe text based on the image position
  const swipeText = document.querySelector('.swipe-text');
  if (index === 0) {
    swipeText.textContent = 'Swipe ➡️';
  } else if (index === images.length - 1) {
    swipeText.textContent = '⬅️ Swipe';
  } else {
    swipeText.textContent = '⬅️ Swipe ➡️';
  }
}

// Handle swiping (key press for simplicity)
function handleSwipe(event) {
  if (event.key === 'ArrowRight' && currentIndex < images.length - 1) {
    currentIndex++;
    showImage(currentIndex);
  } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
  }
}

// Initialize the carousel
document.addEventListener('keydown', handleSwipe);
showImage(currentIndex);
