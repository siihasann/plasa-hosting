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

// Active Route Highlighting
const Links = document.querySelectorAll(".nav-links a");
const currentPath = window.location.pathname;

Links.forEach((link) => {
    // Get the href attribute
    const href = link.getAttribute("href");
    
    // Check for home page (index.html)
    if (href) {
        // For home page, check if path is exactly "/" or ends with "index.html"
        if ((currentPath === "/" || currentPath.endsWith("index.html")) && 
            (href === "./index.html" || href === "index.html" || href === "/")) {
            link.classList.add("active");
        } 
        // For other pages, check if the current path includes the link's href
        else if (href !== "./index.html" && href !== "index.html" && currentPath.includes(href.replace("./", ""))) {
            link.classList.add("active");
        }
    }
});

// Start Hero Js
document.querySelector('.hero-button').addEventListener('click', () => {
    alert('Navigating to Get Started section!');
  });
  


  
// START FEATURE
// Add animation on scroll
const cards = document.querySelectorAll('.feature-card');
        
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
});

// END FEATURE

// START SEARCH DOMAIN HOME
document.getElementById('domainSearchForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Ambil nilai input nama domain dan ekstensi
    const domainInput = document.querySelector('.domain-input').value.trim();
    const domainExtension = document.querySelector('.domain-select').value;
  
    // Cek apakah input domain tidak kosong
    if (domainInput) {
      // Redirect ke halaman beli domain dengan query string
      window.location.href = `/pages/beli-domain/index.html?domain=${domainInput}${domainExtension}`;
    } else {
      alert('Masukkan nama domain terlebih dahulu.');
    }
  });

// Add animation on page load
document.addEventListener('DOMContentLoaded', function() {
  const section = document.querySelector('.domain-search-section');
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
      section.style.transition = 'all 0.6s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
  }, 100);
});
// END SEARCH DOMAIN HOME



// START SERVICES HOSTING HOME
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
    });
});
// END SERVICES HOSTING HOME


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

// END FAQ & FOOTER

// START APA YANG ANDA BUTUHKAN
const contentData = {
    'Jasa Website': {
        title: 'Jasa Pembuatan Website Professional',
        text: `Kami menyediakan <span class="highlight">layanan pembuatan website</span> yang profesional dan berkualitas tinggi. Tim ahli kami akan membantu Anda membuat website yang menarik, responsif, dan sesuai dengan kebutuhan bisnis Anda. Dengan pengalaman bertahun-tahun, kami menjamin hasil yang memuaskan dan support yang berkelanjutan.`
    },
    'Hosting Murah': {
        title: 'Hosting & Domain Murah',
        text: `Kami menyediakan <span class="highlight">layanan hosting</span> dengan performa tinggi dan harga terjangkau, cocok untuk kebutuhan website Anda, baik personal maupun bisnis. Dengan pilihan paket hosting yang fleksibel, Anda bisa menikmati kecepatan dan kestabilan server tanpa harus merogoh kocek terlalu dalam.`
    },
    'Hosting Skala Besar': {
        title: 'Solusi Hosting Enterprise',
        text: `Butuh hosting untuk proyek besar? Kami menyediakan <span class="highlight">layanan hosting skala enterprise</span> dengan spesifikasi tinggi dan performa maksimal. Cocok untuk website dengan traffic tinggi, aplikasi berat, atau kebutuhan bisnis enterprise. Dilengkapi dengan fitur keamanan premium dan dukungan teknis 24/7.`
    }
};

document.querySelectorAll('.needs-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.needs-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Update content
        const content = contentData[button.textContent];
        const container = document.querySelector('.content-container');
        
        container.style.opacity = '0';
        setTimeout(() => {
            container.innerHTML = `
                <h3 class="content-title">${content.title}</h3>
                <p class="content-text">${content.text}</p>
            `;
            container.style.opacity = '1';
        }, 300);
    });
});
// END APA YANG ANDA


