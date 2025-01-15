// Array of background image URLs
const desktopImages = [
  'url("./Images/home_bg_1.jpg")',
  'url("./Images/home_bg_2.jpg")',
  'url("./Images/home_bg_3.jpg")',
  'url("./Images/home_bg_4.jpg")',
];

const mobileImages = [
  'url("./Images/home_bg_1_mobile.jpg")',
  'url("./Images/home_bg_2_mobile.jpg")',
  'url("./Images/home_bg_3_mobile.jpg")',
  'url("./Images/home_bg_4_mobile.jpg")',
];

// Index to keep track of the current image
let currentIndex = 0;

function changeBackgroundImage() {
  // Select the bg container element by ID
  const homeBg = document.getElementById('home-bg');

  // Update the background image based on windo size
  if (window.innerWidth < 768 && homeBg) {
    homeBg.style.backgroundImage = mobileImages[currentIndex];
  } else if (homeBg) {
    homeBg.style.backgroundImage = desktopImages[currentIndex];
  }

  // Move to the next image, looping back to the start if needed
  currentIndex = (currentIndex + 1) % desktopImages.length;
}

// Set interval to change the background image
setInterval(changeBackgroundImage, 3000);

// Set the first image immediately
changeBackgroundImage();
