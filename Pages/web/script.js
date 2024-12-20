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




// START SERVICES WEB
// Add hover effect animation
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add click animation for buttons
document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
        }, 100);

        // Temukan tipe layanan berdasarkan elemen induknya
        const serviceType = e.target.closest('.service-card').querySelector('.service-type').innerText;

        // Tentukan URL berdasarkan tipe layanan
        let url = '';
        if (serviceType === 'Paket Basic') {
            url = 'https://siihasann.github.io/';
        } else if (serviceType === 'Paket Bisnis') {
            url = 'https://example.com/billing/business';
        } else {
            console.error('Tipe layanan tidak dikenali!');
            return;
        }

        // Arahkan ke URL
        window.location.href = url;
    });
});
// END SERVICES WEB



// START PESAN WEB SEKARANG
document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.querySelector(".buy-web-button");
  
    buyButton.addEventListener("click", () => {
      // Tambahkan efek visual saat tombol diklik
      buyButton.classList.add("clicked");
      setTimeout(() => {
        buyButton.classList.remove("clicked");
      }, 300);
  
      // Arahkan ke URL tertentu
      window.location.href = "https://siihasann.github.io/"; // Ganti dengan URL tujuan Anda
    });
  });
// END PESAN WEB SEKARANG


// Start FAQ
const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const body = accordion.querySelector('.accordion-body');

    header.addEventListener('click', () => {
        body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
});

// START FAQ
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active');
    
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('active');
            });
    
            // Toggle clicked answer
            if (!isActive) {
                answer.classList.add('active');
            }
    
            // Rotate arrow icon
            question.querySelector('svg').style.transform = 
                isActive ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });
    
    // Animate sections on scroll
    const observerfax = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    ['.faq-section', '.footer'].forEach(selector => {
        const element = document.querySelector(selector);
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        observerfax.observe(element);
    });