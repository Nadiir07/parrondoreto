// script.js

// Scroll animations for menu cards
window.addEventListener('scroll', function () {
    const menuItems = document.querySelectorAll('.menu-card');
    const windowHeight = window.innerHeight;
    
    menuItems.forEach(item => {
      const position = item.getBoundingClientRect().top;
      
      if (position < windowHeight * 0.8) {
        item.classList.add('animate');
      }
    });
  });
  
  // CSS class to add animations when an element is in view
  document.querySelectorAll('.menu-card').forEach(item => {
    item.classList.add('hidden');
  });
  
  // Function to reveal menu items with animation
  document.querySelectorAll('.menu-card').forEach(item => {
    item.classList.remove('hidden');
  });
  