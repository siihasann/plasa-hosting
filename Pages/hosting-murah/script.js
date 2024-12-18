// START NAVBAR
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector("#hamburger");
const dropdowns = document.querySelectorAll('.dropdown');

document.querySelector("#hamburger").onclick = () => {
    navLinks.classList.toggle("active");

    const logo = document.querySelector(".logo");
    const navbar = document.querySelector(".navbar");

    logo.classList.toggle("active");
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");

    // Ensure active dropdown menus are visible
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            if (dropdown.querySelector("a.active")) {
                dropdown.classList.add("mobile-active");
            }
        });
    }
};

// Mobile Dropdown Interaction
dropdowns.forEach((dropdown) => {
    const dropdownToggle = dropdown.querySelector('a');
    
    dropdownToggle.addEventListener('click', function (e) {
        // Only activate for mobile view
        if (window.innerWidth <= 768) {
            e.preventDefault();
            
            // Toggle current dropdown
            dropdown.classList.toggle('mobile-active');
            
            // Close other open dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('mobile-active');
                }
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        
        // Reset all dropdowns
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('mobile-active');
        });
    }
});

// Active Route Highlighting
const navLinksArray = document.querySelectorAll(".nav-links a"); // Rename variable to avoid conflict
const currentRoutePath = window.location.pathname; // Rename variable to avoid conflict

navLinksArray.forEach((link) => {
    if (link.getAttribute("href") && link.getAttribute("href").includes(currentRoutePath)) {
        link.classList.add("active");

        // Ensure the parent dropdown is active for mobile
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown && window.innerWidth <= 768) {
            parentDropdown.classList.add("mobile-active");
        }
    }
});
// END NAVBAR



// start modal-fitur

document.querySelector(".button-fitur").onclick = () => {
  const modal = document.querySelector(".modal-fitur");

  const icon = document.querySelector("#icon-toggle");

  modal.classList.toggle("active");

  if (modal.classList.contains("active")) {
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
  } else {
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
  }
};
// end modal-fitur

// ANIMATION ON SCROL IN PACKAGES

const cards = document.querySelectorAll(".card-package");
const title = document.querySelectorAll(".main-title");

const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

cards.forEach((card) => {
  card.classList.add("animate-init");

  observer.observe(card);
});

title.forEach((judul) => {
  judul.classList.add("animate-init");

  observer.observe(judul);
});

// CODE KETIKA ROUTE ACTIVE

const Links = document.querySelectorAll(".nav-links a");

const currentPath = window.location.pathname;
console.log("ini apa", currentPath)

Links.forEach((link) => {
  console.log(link.getAttribute("href"))
  if (link.getAttribute("href").includes(currentPath)) {
    link.classList.add("active");
  }
});