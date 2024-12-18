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

// START ANIMATION ELEMENT IN MAIN
const judul = document.querySelectorAll(".judul");
const mediaPayment = document.querySelectorAll(".media-pembayaran");
const title = document.querySelectorAll(".title");
const content = document.querySelectorAll(".content");

const observerOptions = {
  threshold: 0.1,
};

const judulAnimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bottom-in");
    }
  });
}, observerOptions);


judul.forEach((title) => {
  title.classList.add("bottom-init");
  judulAnimation.observe(title);
});

const mediaPaymentAnimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("top-in");
    }
  });
}, observerOptions);


mediaPayment.forEach((payment) => {
  payment.classList.add("top-init");
  mediaPaymentAnimation.observe(payment);
});

const titlePayment = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("Left-in");
    }
  });
}, observerOptions);


title.forEach((payment) => {
  payment.classList.add("Left-init");
  titlePayment.observe(payment);
});

const contentStepPayment = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bottom-in");
    }
  });
}, observerOptions);


content.forEach((contentPayment) => {
  contentPayment.classList.add("bottom-init");
  contentStepPayment.observe(contentPayment);
});
// END ANIMATION ELEMENT IN MAIN