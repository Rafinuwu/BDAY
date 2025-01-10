const images = document.querySelectorAll('.image-container');
let currentIndex = 0;

// Function to update which image is shown
function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'flex' : 'none'; // Show only the active image
  });

  // Update swipe instructions
  const swipeText = document.querySelector('.swipe-text');
  if (index === 0) {
    swipeText.textContent = 'Swipe ➡️'; // First image: Only right swipe works
  } else if (index === images.length - 1) {
    swipeText.textContent = '⬅️ Swipe'; // Last image: Only left swipe works
  } else {
    swipeText.textContent = '⬅️ Swipe ➡️'; // Middle images: Both directions work
  }
}

// Event listener for key presses
function handleSwipe(event) {
  if (event.key === 'ArrowRight' && currentIndex < images.length - 1) {
    currentIndex++; // Move to the next image
  } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
    currentIndex--; // Move to the previous image
  }
  showImage(currentIndex); // Update the carousel
}

// Initialize the carousel
document.addEventListener('keydown', handleSwipe);
showImage(currentIndex); // Show the first image on load
