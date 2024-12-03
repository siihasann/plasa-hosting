// START NAVBAR

const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector("#hamburger");
document.querySelector("#hamburger").onclick = () => {
  navLinks.classList.toggle("active");

  const logo = document.querySelector(".logo");
  const navbar = document.querySelector(".navbar");

  logo.classList.toggle("active");
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// END NAVBAR

// START MAIN
  // Text to type
  const text = "“ Tanpa anda, Plasahosting tidak ada apa-apanya. ”";

  // DOM Elements
  const quoteElement = document.getElementById("quote");
  const typingText = document.getElementById("typing-text");

  // Typing Animation
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingText.textContent += text[index]; // Append one character
      index++;
      setTimeout(typeEffect, 100); // Adjust typing speed (in milliseconds)
    }
  }

  // Scroll Trigger Logic
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animation when element is visible
          quoteElement.classList.add("visible");
          typeEffect();
          observer.disconnect(); // Stop observing after animation starts
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  observer.observe(quoteElement);
// END MAIN

