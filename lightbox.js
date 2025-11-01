// Simple lightbox for project gallery

// Current project we're viewing
var currentProject = 0;

// Wait for page to load
window.onload = function () {

  // Get all the project images
  var projects = document.querySelectorAll('.project-item img');

  // Add click event to each project image
  for (var i = 0; i < projects.length; i++) {
    projects[i].parentElement.onclick = function () {
      var index = this.getAttribute('data-index');
      openLightbox(index);
    };
  }

  // Close button
  document.querySelector('.lightbox-close').onclick = function () {
    closeLightbox();
  };

  // Previous button
  document.querySelector('.lightbox-prev').onclick = function () {
    goToPrevious();
  };

  // Next button
  document.querySelector('.lightbox-next').onclick = function () {
    goToNext();
  };

  // Close when clicking the background
  document.getElementById('lightbox').onclick = function (e) {
    if (e.target.id === 'lightbox') {
      closeLightbox();
    }
  };

  // Keyboard controls
  document.onkeydown = function (e) {
    var lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'flex') {
      if (e.key === 'Escape') {
        closeLightbox();
      }
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
      if (e.key === 'ArrowRight') {
        goToNext();
      }
    }
  };

};

// Open the lightbox and show a project
function openLightbox(index) {
  currentProject = parseInt(index);

  // Show the lightbox
  document.getElementById('lightbox').style.display = 'flex';

  // Stop page from scrolling
  document.body.style.overflow = 'hidden';

  // Show the project
  showProject(currentProject);

  // Create thumbnails if they don't exist
  makeThumbnails();
}

// Close the lightbox
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Display a project in the lightbox
function showProject(index) {
  // Get all project images
  var projects = document.querySelectorAll('.project-item img');
  var img = projects[index];

  // Update the big image
  document.getElementById('lightbox-image').src = img.src;

  // Update the title
  document.getElementById('lightbox-title').textContent = img.getAttribute('data-title');

  // Update the description
  document.getElementById('lightbox-description').textContent = img.getAttribute('data-description');

  // Update the tools list
  var toolsList = document.getElementById('lightbox-tools');
  toolsList.innerHTML = '';
  var tools = img.getAttribute('data-tools').split(', ');
  for (var i = 0; i < tools.length; i++) {
    var li = document.createElement('li');
    li.textContent = tools[i];
    toolsList.appendChild(li);
  }

  // Update the counter (1/9, 2/9, etc)
  document.getElementById('current-index').textContent = index + 1;

  // Highlight the active thumbnail
  highlightThumbnail(index);
}

// Create thumbnail images at the bottom
function makeThumbnails() {
  var container = document.getElementById('lightbox-thumbnails');

  // Only make them once
  if (container.children.length > 0) {
    return;
  }

  var projects = document.querySelectorAll('.project-item img');

  for (var i = 0; i < projects.length; i++) {
    var thumb = document.createElement('img');
    thumb.src = projects[i].src;
    thumb.setAttribute('data-index', i);

    // Click thumbnail to go to that project
    thumb.onclick = function () {
      var index = parseInt(this.getAttribute('data-index'));
      currentProject = index;
      showProject(index);
    };

    container.appendChild(thumb);
  }
}

// Highlight the active thumbnail
function highlightThumbnail(index) {
  var thumbs = document.querySelectorAll('.lightbox-thumbnails img');

  for (var i = 0; i < thumbs.length; i++) {
    if (i === index) {
      thumbs[i].classList.add('active');
    } else {
      thumbs[i].classList.remove('active');
    }
  }
}

// Go to previous project
function goToPrevious() {
  currentProject--;

  // Go to last project if we're at the first
  if (currentProject < 0) {
    var projects = document.querySelectorAll('.project-item img');
    currentProject = projects.length - 1;
  }

  showProject(currentProject);
}

// Go to next project
function goToNext() {
  currentProject++;

  // Go back to first project if we're at the last
  var projects = document.querySelectorAll('.project-item img');
  if (currentProject >= projects.length) {
    currentProject = 0;
  }

  showProject(currentProject);
}