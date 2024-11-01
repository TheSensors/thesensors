document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const cross = document.getElementById("cross");
  const navLinks = document.querySelector(".nav-links");

  // Function to toggle the menu visibility
  function toggleMenu() {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      hamburger.style.display = "none";
      cross.style.display = "block";
    } else {
      hamburger.style.display = "block";
      cross.style.display = "none";
    }
  }

  // Function to handle menu visibility based on screen size
  function updateMenuVisibility() {
    if (window.innerWidth <= 767) {
      // Add click event listeners for small screens
      hamburger.addEventListener("click", toggleMenu);
      cross.addEventListener("click", toggleMenu);
    } else {
      // Remove event listeners on larger screens
      hamburger.removeEventListener("click", toggleMenu);
      cross.removeEventListener("click", toggleMenu);

      // Ensure menu is hidden on larger screens
      navLinks.classList.remove("active");
      hamburger.style.display = "none";
      cross.style.display = "none";
    }
  }

  // Initialize menu visibility
  updateMenuVisibility();

  // Update menu visibility on resize
  window.addEventListener("resize", updateMenuVisibility);
});
