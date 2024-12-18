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

// START SLA
// Data SLA dalam bentuk array of objects
const slaData = [
    {
        title: "SLA 1 - Ketersediaan Server",
        detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id delectus eos repellat omnis asperiores non natus unde similique porro! Et, voluptatibus. Dolore necessitatibus non suscipit minima quos facere in ab facilis praesentium provident minus perspiciatis, dolores voluptate tenetur nam officia numquam. Nihil nam amet quaerat nisi maiores similique doloremque beatae quam esse eveniet facilis odio labore ut eum, ratione cum voluptate harum dolorem. Non dolore numquam cum provident repudiandae dolorem placeat iste distinctio sequi dolores facilis esse nobis animi asperiores in ducimus ipsa dicta magnam, et saepe error tempora aspernatur. Soluta ullam voluptate culpa placeat eaque maiores provident quisquam eius quo cumque earum doloribus explicabo repellat vel numquam neque ut est rem deserunt ad harum nulla, accusamus voluptatibus omnis. Eum enim molestias quae labore ipsa accusamus accusantium modi laudantium? Odit expedita, dolorem dicta error possimus voluptatem, optio debitis suscipit autem iure eos officia voluptatibus doloremque, saepe delectus tempora nemo numquam fugiat! Quidem nisi nostrum cupiditate laborum praesentium soluta minus corrupti, temporibus iusto earum facere adipisci molestiae libero animi perspiciatis voluptas in neque illo itaque cum obcaecati? Aspernatur reprehenderit libero neque minima, earum excepturi quaerat ratione. Consequuntur nobis doloremque eligendi, corporis facere odio. Optio voluptatem libero vero quisquam nisi velit quod."
    },
    {
        title: "SLA 2 - Dukungan Pelanggan 24/7",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rem odio odit illo fugit quidem ea, cupiditate consequuntur soluta consectetur reprehenderit labore cum dolores veritatis harum eos sed suscipit facere mollitia pariatur dolore. Magnam excepturi quae illo fuga ea, nemo, aliquid nesciunt sequi omnis, sapiente eius maiores rerum laudantium totam."
    },
    {
        title: "SLA 3 - Keamanan Data",
        detail: "Penjabaran lengkap untuk SLA 3: Data Anda dilindungi dengan enkripsi tingkat tinggi dan backup harian."
    },
    {
        title: "SLA 4 - Performa Optimal",
        detail: "Penjabaran lengkap untuk SLA 4: Kami menjamin performa server yang cepat dengan teknologi terbaru."
    },
  ];
  
  // Ambil elemen container daftar SLA dan kotak detail
  const slaListContainer = document.getElementById("sla-list");
  const detailText = document.getElementById("detail-text");
  
  // Fungsi untuk membuat daftar SLA dari data
  function renderSLAList() {
    slaData.forEach((sla, index) => {
      // Buat elemen div untuk setiap SLA
      const slaItem = document.createElement("div");
      slaItem.classList.add("sla-item");
      slaItem.textContent = sla.title;
  
      // Tambahkan event listener klik untuk menampilkan detail
      slaItem.addEventListener("click", () => {
        detailText.textContent = sla.detail;
  
        // Tambahkan efek aktif
        document.querySelectorAll(".sla-item").forEach(item => item.classList.remove("active"));
        slaItem.classList.add("active");
      });
  
      // Tambahkan elemen ke dalam container
      slaListContainer.appendChild(slaItem);
    });
  }
  
  // Render daftar SLA saat halaman dimuat
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