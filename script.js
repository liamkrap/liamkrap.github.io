// Wait for the page to load before running the script
document.addEventListener('DOMContentLoaded', function () {

  // Get the sidebar element from the page
  const sidebar = document.querySelector('.sidebar');

  // Get the main content area
  const mainContent = document.querySelector('.main-content');

  // Get the toggle button (hamburger menu)
  const toggleButton = document.querySelector('.menu-toggle');

  // Add a click event to the toggle button
  toggleButton.addEventListener('click', function () {

    // Toggle the 'collapsed' class on the sidebar
    // This will hide or show the sidebar
    sidebar.classList.toggle('collapsed');

    // Toggle the 'expanded' class on main content
    // This will make the content area expand when sidebar is hidden
    mainContent.classList.toggle('expanded');

    // Toggle a class on the button itself to control its position
    toggleButton.classList.toggle('collapsed');

    // Change the button icon depending on sidebar state
    if (sidebar.classList.contains('collapsed')) {
      // When collapsed, show the "open" icon (three horizontal lines)
      toggleButton.innerHTML = '&#9776;';
    } else {
      // When open, show the "close" icon (X)
      toggleButton.innerHTML = '&times;';
    }
  });

  // Add a click event to the main content area
  // When clicked, it will collapse the sidebar if it's currently open
  mainContent.addEventListener('click', function () {
    // Check if sidebar is NOT collapsed (meaning it's open)
    if (!sidebar.classList.contains('collapsed')) {
      // Collapse the sidebar
      sidebar.classList.add('collapsed');
      // Expand the main content
      mainContent.classList.add('expanded');
      // Move the button to the left edge
      toggleButton.classList.add('collapsed');
      // Change button icon to hamburger (open icon)
      toggleButton.innerHTML = '&#9776;';
    }
  });

});