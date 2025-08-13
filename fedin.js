// Wait for the DOM to fully load
window.addEventListener('load', function() {
    // Get the section that needs the fade-in effect
    var section = document.querySelector('.fade-in');
    
    // Add the 'loaded' class to trigger the fade-in effect
    section.classList.add('loaded');
  });
  