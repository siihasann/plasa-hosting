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
const Links = document.querySelectorAll(".nav-links a");
const currentPath = window.location.pathname;

Links.forEach((link) => {
    if (link.getAttribute("href") && link.getAttribute("href").includes(currentPath)) {
        link.classList.add("active");
    }
});
// END NAVBAR

// HERO
// Reset scroll ke posisi atas saat halaman dimuat
window.onload = function () {
    window.scrollTo(0, 0);
};

// Scroll ke section konten setelah klik tombol Explore
const exploreBtn = document.getElementById("explore-btn");

exploreBtn.addEventListener("click", () => {
    const contentSection = document.getElementById("content");
    window.scrollTo({
        top: contentSection.offsetTop - 60, // Posisi tidak terlalu bawah
        behavior: "smooth"
    });
});
// HERO

// START SLA
const slaData = [
    {
        title: "SLA 1 - Ketersediaan Server",
        heading: "Ketersediaan Server 99.9%",
        description: "Kami menjamin ketersediaan server dengan uptime 99.9% untuk memastikan bisnis Anda tetap berjalan lancar.",
        features: [
            "Monitoring server 24/7",
            "Backup otomatis harian",
            "Pemulihan cepat dalam 15 menit",
            "Notifikasi status server real-time"
        ]
    },
    {
        title: "SLA 2 - Dukungan Pelanggan",
        heading: "Dukungan Teknis 24/7",
        description: "Tim support kami siap membantu Anda 24 jam sehari, 7 hari seminggu untuk menyelesaikan setiap masalah teknis.",
        features: [
            "Respon awal dalam 15 menit",
            "Penanganan prioritas untuk masalah kritis",
            "Dukungan multi-channel",
            "Tim teknisi berpengalaman"
        ]
    },
    {
        title: "SLA 3 - Keamanan Data",
        heading: "Keamanan Data Premium",
        description: "Sistem keamanan berlapis untuk melindungi data dan aplikasi Anda dari berbagai ancaman siber.",
        features: [
            "Enkripsi data standar industri",
            "Firewall canggih",
            "Scan malware otomatis",
            "SSL gratis untuk semua website"
        ]
    },
    {
        title: "SLA 4 - Performa Optimal",
        heading: "Performa Server Optimal",
        description: "Server dengan performa tinggi untuk memberikan pengalaman terbaik bagi pengunjung website Anda.",
        features: [
            "Hardware kelas enterprise",
            "Optimasi server otomatis",
            "Load balancing canggih",
            "Caching sistem terdistribusi"
        ]
    }
];

const slaListContainer = document.getElementById("sla-list");
const detailContent = document.getElementById("detail-content");

function renderSLAList() {
    slaData.forEach((sla, index) => {
        const slaItem = document.createElement("div");
        slaItem.classList.add("sla-item");
        slaItem.textContent = sla.title;

        slaItem.addEventListener("click", () => {
            // Update active state
            document.querySelectorAll(".sla-item").forEach(item => 
                item.classList.remove("active"));
            slaItem.classList.add("active");

            // Render detail content
            detailContent.innerHTML = `
                <div class="sla-detail-header">
                    <h2>${sla.heading}</h2>
                </div>
                <p class="sla-description">${sla.description}</p>
                <ul class="sla-features">
                    ${sla.features.map(feature => 
                        `<li>${feature}</li>`).join("")}
                </ul>
            `;
        });

        slaListContainer.appendChild(slaItem);
    });
}

// Initialize the SLA list
renderSLAList();
  
  

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