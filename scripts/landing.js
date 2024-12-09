const images=["assets/landing/developer.png","assets/landing/landingpage2.png"];
let index = 0;
function animateImages(){
 const img = document.getElementById("image");
 img.style.opacity = 0;
 setTimeout (() => {
  index = (index + 1) % images.length;
  img.src = images[index];
  img.style.opacity = 1;
 }, 500);
}
setInterval(animateImages, 3000);

// Function to switch forms with animation
function switchForm(targetClass) {
    const currentForm = document.querySelector('.form-container.active');
  
    // Add exiting animation to the current form
    if (currentForm) {
      currentForm.classList.remove('active');
      currentForm.classList.add('exiting');
  
      // Wait for the animation to complete before hiding it
      setTimeout(() => {
        currentForm.classList.remove('exiting');
      }, 500);
    }
  
    // Show the target form with an entrance animation
    const targetForm = document.querySelector(`.${targetClass}`);
    if (targetForm) {
      setTimeout(() => {
        targetForm.classList.add('active');
      }, 500);
    }
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
  