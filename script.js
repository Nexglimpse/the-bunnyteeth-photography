// Auto BG Start
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
let autoBgCurrentIndex = 0;

function changeBackgroundImage() {
  // Select the bg container element by ID
  const homeBg = document.getElementById('home-bg');

  // Update the background image based on windo size
  if (window.innerWidth < 768 && homeBg) {
    homeBg.style.backgroundImage = mobileImages[autoBgCurrentIndex];
  } else if (homeBg) {
    homeBg.style.backgroundImage = desktopImages[autoBgCurrentIndex];
  }

  // Move to the next image, looping back to the start if needed
  autoBgCurrentIndex = (autoBgCurrentIndex + 1) % desktopImages.length;
}

// Set interval to change the background image
setInterval(changeBackgroundImage, 3000);

// Set the first image immediately
changeBackgroundImage();

// Auto BG Ends

// Counter js

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter'); // Select all counter elements
  const counterSection = document.querySelector('#counter'); // Section containing the counters

  const counterOptions = {
    root: null,
    threshold: 0.5, // Start animation when 50% of the section is visible
  };

  const startCounters = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => {
          const target = +counter.getAttribute('data-target'); // The target number
          const suffix = counter.getAttribute('data-suffix') || ''; // The suffix (+ or %, default is "")
          const increment = Math.ceil(target / 100); // Increment for smooth counting
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + suffix; // Final value with suffix
              clearInterval(interval);
            } else {
              counter.textContent = current + suffix; // Update value with suffix
            }
          };

          const interval = setInterval(updateCounter, 20); // Update every 20ms
        });

        // Disconnect the observer after animation starts to prevent re-triggering
        observer.disconnect();
      }
    });
  };

  const observer = new IntersectionObserver(startCounters, counterOptions);
  observer.observe(counterSection);
});

//   Counter ends

// Carousal for testimonials starts

// Testimonial data (text only)
const testimonials = [
  '“ Look no further for capturing your baby’s precious moments. The dynamic duo - Sameed and Aishwarya - ensured to provide us with the best service. Irrespective of having done a full-fledged shoot before ours, they were patient and understanding in dealing with our child and also with all our requests. They give the highest priority to the baby and his/her needs. The theme setup and quality of photos were both amazing. A fabulous experience overall. Thanks for the amazing work you guys do!! Keep it up!! ”',
  "“ We are so thrilled with the pictures of our baby's first birthday shoot. Sameed and Aishwarya were so professional and creative in setting up unique themes. They made the entire process so smooth and fun. The photos turned out stunning, capturing priceless moments perfectly. Thank you for making our day so special! ”",
  '“ The best photographers we’ve worked with! They captured our family photoshoot beautifully and went above and beyond to make our toddler comfortable. The results were beyond our expectations. Highly recommend their services to anyone looking for timeless memories! ”',
];

let currentIndex = 0;

// DOM element for the testimonial content
const testimonialContent = document.getElementById('testimonial-content');

// Functions to update testimonial text
function updateTestimonial(index) {
  testimonialContent.textContent = testimonials[index];
}

// Event listeners for buttons
document.getElementById('prev-btn').addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

document.getElementById('next-btn').addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

// Carousal for testimonials ends
