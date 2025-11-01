// Contact form submission handler

// Wait for page to load
window.onload = function () {

  // Get the contact form
  var form = document.querySelector('.contact-form-new');

  // Check if form exists on this page
  if (form) {
    // Add submit event listener
    form.onsubmit = function (e) {
      // Prevent the form from actually submitting
      e.preventDefault();

      // Show success popup
      showSuccessPopup();

      // Clear the form fields
      form.reset();
    };
  }

};

// Function to show success popup
function showSuccessPopup() {
  // Create popup overlay
  var overlay = document.createElement('div');
  overlay.className = 'popup-overlay';

  // Create popup box
  var popup = document.createElement('div');
  popup.className = 'popup-box';

  // Add content to popup
  popup.innerHTML = '<h3>Success!</h3>' +
    '<p>Thank you for your message! I will get back to you within 1 business day.</p>' +
    '<button class="popup-close-btn" onclick="closeSuccessPopup()">OK</button>';

  // Add popup to overlay
  overlay.appendChild(popup);

  // Add overlay to page
  document.body.appendChild(overlay);
}

// Function to close success popup
function closeSuccessPopup() {
  // Find and remove the popup overlay
  var overlay = document.querySelector('.popup-overlay');
  if (overlay) {
    document.body.removeChild(overlay);
  }
}