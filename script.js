// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Glow Text Animation
  const glowText = document.querySelector('.glow-text');
  glowText.addEventListener('mouseover', () => {
    glowText.style.animation = 'glow 2s ease-in-out infinite alternate';
  });
  
  glowText.addEventListener('mouseout', () => {
    glowText.style.animation = '';
  });
  
  // Service Card Hover Effect
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
    });
  
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });
  

  // Redirection for "Food Delivery" card
const foodDeliveryCard = document.querySelector('.service-card:nth-child(1)'); // Selecting the first service card (Food Delivery)

foodDeliveryCard.addEventListener('click', () => {
  window.location.href = 'services.html'; // Replace 'food-delivery.html' with the actual page link
});


////////////////////////////////////////----------------location fetching code-----------------////////////////////////////////////////////////////////////////////////



// Show the location popup when the page loads
// Show the location popup when the page loads
window.onload = () => {
  const locationOverlay = document.querySelector('.location-overlay');
  const enableLocationButton = document.getElementById('enable-location');
  const declineLocationButton = document.getElementById('decline-location');
  const statusElement = document.getElementById('status');

  enableLocationButton.addEventListener('click', () => {
    // Request user's location using geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // If location is successfully retrieved
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          
          // Display the status with the location info
          statusElement.textContent = `Location enabled! Latitude: ${latitude}, Longitude: ${longitude}. Thank you for helping improve the quality.`;
          locationOverlay.style.display = 'none'; // Close popup after action
        },
        (error) => {
          // If location access is denied or an error occurs
          statusElement.textContent = 'Location access denied. You can still use our services.';
          locationOverlay.style.display = 'none'; // Close popup after action
        }
      );
    } else {
      statusElement.textContent = 'Geolocation is not supported by this browser.';
      locationOverlay.style.display = 'none'; // Close popup after action
    }
  });

  declineLocationButton.addEventListener('click', () => {
    // Handle declining location logic
    statusElement.textContent = 'Location declined. You can still use our services.';
    locationOverlay.style.display = 'none'; // Close popup after action
  });

  // Make the overlay visible after a slight delay (if needed)
  setTimeout(() => {
    locationOverlay.style.opacity = '1';
    locationOverlay.style.pointerEvents = 'auto';
  }, 500);
};


///////////////////////////////////////////////////////--------location fecthing code----------------------///////////////////////////////////////////////////////////////////