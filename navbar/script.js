function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const logo = document.querySelector('.logo');
  
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    logo.classList.toggle('active');
  }
  