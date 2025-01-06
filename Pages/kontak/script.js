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

// start main
const contentHero = document.querySelectorAll(".content-hero");
const googleMaps = document.querySelectorAll(".google-maps");
const titleQuestion = document.querySelectorAll(".title-question");
const formQuestion = document.querySelectorAll(".form");
const email = document.querySelectorAll(".email");
const telepon = document.querySelectorAll(".telepon");
const lokasi = document.querySelectorAll(".lokasi");
const responTitle =document.querySelectorAll(".title");

const observerOptions = {
    threshold: 0.1,
  };

const contentHeroAnimation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("bottom-in");
      }
    });
  }, observerOptions);
  
  contentHero.forEach((question) => {
    question.classList.add("bottom-init");
    contentHeroAnimation.observe(question);
  });

const googleMapsAnimation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("bottom-in");
      }
    });
  }, observerOptions);
  
  googleMaps.forEach((question) => {
    question.classList.add("bottom-init");
    googleMapsAnimation.observe(question);
  });

const questiontitle = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("bottom-in");
      }
    });
  }, observerOptions);
  
  titleQuestion.forEach((question) => {
    question.classList.add("bottom-init");
    questiontitle.observe(question);
  });
  
  const form = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("bottom-in");
      }
    });
  }, observerOptions);
  
  formQuestion.forEach((formpertanyaan) => {
    formpertanyaan.classList.add("bottom-init");
    form.observe(formpertanyaan);
  });

  const emailAnimation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("top-in");
      }
    });
  }, observerOptions);
  
  email.forEach((question) => {
    question.classList.add("top-init");
    emailAnimation.observe(question);
  });

  const teleponAnimation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("top-in");
      }
    });
  }, observerOptions);
  
  telepon.forEach((question) => {
    question.classList.add("top-init");
    teleponAnimation.observe(question);
  });

  const lokasiAnimation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("bottom-in");
      }
    });
  }, observerOptions);
  
  lokasi.forEach((question) => {
    question.classList.add("bottom-init");
    lokasiAnimation.observe(question);
  });

  const responTitleAnimation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("right-in");
      }
    });
  }, observerOptions);
  
  responTitle.forEach((question) => {
    question.classList.add("right-init");
    responTitleAnimation.observe(question);
  });

// end main