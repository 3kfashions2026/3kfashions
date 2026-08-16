/* ==========================================================================
   3K FASHIONS - INTERACTIVE JAVASCRIPT
   Multi-page Navigation & Product Management
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ========== MOBILE MENU TOGGLE ==========
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  console.log('✓ 3K Fashions loaded successfully');

});
