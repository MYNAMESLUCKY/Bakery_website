document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.getElementById("stars-container");
  
    // Function to create a floating star
    function createFloatingStar() {
      const star = document.createElement("div");
      star.classList.add("floating-star");
      
      // Randomize the horizontal position and animation duration
      star.style.left = Math.random() * 100 + "%"; // Random horizontal position (0% to 100%)
      star.style.animationDuration = (Math.random() * 5 + 5) + "s"; // Random animation duration between 5s to 10s
      star.style.animationDelay = Math.random() * 5 + "s"; // Random delay to make animation staggered
      
      // Append the star to the container
      starsContainer.appendChild(star);
  
      // Remove the star after its animation duration
      setTimeout(() => {
        star.remove();
      }, parseFloat(star.style.animationDuration) * 1000); // Remove the star after its animation duration
    }
  
    // Create stars every 300ms (interval) to make the effect continuous
    setInterval(createFloatingStar, 300);
  });
  