// const images=["assets/landing/developer.png","assets/landing/landingpage2.png"];
// let index = 0;
// function animateImages(){
//  const img = document.getElementById("image");
//  img.style.opacity = 0;
//  setTimeout (() => {
//   index = (index + 1) % images.length;
//   img.src = images[index];
//   img.style.opacity = 1;
//  }, 500);
// }
// setInterval(animateImages, 3000);

// Track the current slide index
let currentSlide = 0; 
const slides = document.querySelectorAll('.faq-slide'); // Select all slides

// Function to display the correct slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Automatically transition to the next slide every 2 seconds
function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
    showSlide(currentSlide);
}

// Start auto-sliding
const slideInterval = setInterval(autoSlide, 2000);

// Swipe functionality for touch devices
let touchStartX = 0;
let touchEndX = 0;

const carousel = document.getElementById('faqCarousel');

// Record the starting X position when the user touches
carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
});

// Handle the swipe direction when the touch ends
carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
        // Swipe left: move to the next slide
        currentSlide = (currentSlide + 1) % slides.length;
    } else if (touchEndX - touchStartX > 50) {
        // Swipe right: move to the previous slide
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    showSlide(currentSlide);
    // Reset the interval to avoid skipping slides
    resetAutoSlide();
});

// Reset the auto-slide timer after manual interaction
function resetAutoSlide() {
    clearInterval(slideInterval); // Stop the current interval
    setInterval(autoSlide, 2000); // Restart the auto-slide timer with 2 seconds interval
}



  // Function to show a success notification
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification', 'show');
    notification.innerText = message;
    document.body.appendChild(notification);
  
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
  
  // Event listeners for navigation links
  document.getElementById('showSignUp').addEventListener('click', () => {
    switchForm('sign-up-container');
  });
  
  document.getElementById('showLogin').addEventListener('click', () => {
    switchForm('login-container');
  });
  
  document.getElementById('showForgotPassword').addEventListener('click', () => {
    switchForm('forgot-password-container');
  });
  
  document.getElementById('showLoginFromForgot').addEventListener('click', () => {
    switchForm('login-container');
  });
  
  // Handle form submissions
  document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      // Validate and clean the email input
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput) {
        emailInput.value = emailInput.value.replace(/'/g, '');
      }
  
      // Show success notification
      showNotification('Form submitted successfully!');
    });
  });
  