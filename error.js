const errorContainer = document.getElementById('errorContainer');

      // Function to show the custom error page when offline
      function showErrorPage() {
        errorContainer.style.display = 'block';  // Show the error page
      }

      // Function to reload the page when the connection is back
      function reloadPage() {
        location.reload();  // Reload the page
      }

      // Detect when the user is offline
      window.addEventListener('offline', () => {
        showErrorPage();  // Show error page when offline
      });

      // Detect when the user is online
      window.addEventListener('online', () => {
        errorContainer.style.display = 'none';  // Hide error page when back online
        location.reload();  // Reload the page when internet is restored
      });

      // Check the initial connection status
      if (!navigator.onLine) {
        showErrorPage();  // Show error page if already offline when the page loads
      }