const images = document.querySelectorAll('.image-container');
const swipeText = document.querySelector('.swipe-text');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });

  if (index === 0) {
    swipeText.textContent = 'Swipe ➡️';
  } else if (index === images.length - 1) {
    swipeText.textContent = '⬅️ Swipe';
  } else {
    swipeText.textContent = '⬅️ Swipe ➡️';
  }
}

function handleSwipe(event) {
  if (event.key === 'ArrowRight' && currentIndex < images.length - 1) {
    currentIndex++;
    showImage(currentIndex);
  } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
  }
}

document.addEventListener('keydown', handleSwipe);
showImage(currentIndex);
