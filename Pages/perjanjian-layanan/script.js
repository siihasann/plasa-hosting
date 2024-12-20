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



// Data utama yang digunakan untuk AUP
const pLData = {
    title: "Perjanjian Layanan",
    description: "Ketentuan terkait perjanjian layanan",
    sections: [
        {
            title: "Penggunaan Layanan",
            description: "Ketentuan terkait penggunaan layanan kami.",
            list: [
                "Pengguna dilarang menggunakan layanan untuk aktivitas ilegal.",
                "Kami berhak menghentikan layanan jika terjadi pelanggaran kebijakan.",
                "Data pengguna akan diproses sesuai kebijakan privasi kami."
            ]
        },
        {
            title: "Hak dan Kewajiban",
            description: "Informasi tentang hak dan kewajiban pengguna serta penyedia layanan.",
            list: [
                "Penyedia layanan berkewajiban menjaga ketersediaan layanan.",
                "Pengguna bertanggung jawab atas keamanan akun mereka.",
                "Setiap sengketa akan diselesaikan secara musyawarah."
            ]
        },
        {
            title: "Pembayaran dan Refund",
            description: "Ketentuan mengenai pembayaran dan pengembalian dana.",
            list: [
                "Pembayaran dilakukan sesuai metode yang tersedia.",
                    "Pengembalian dana hanya berlaku untuk kondisi tertentu.",
                    "Tagihan yang melewati batas waktu akan dikenakan denda."
            ]
        },
    ],
    agreements: [
        { name: "Perjanjian Umum", link: "general-agreement.html", icon: "fa-solid fa-file" },
        { name: "Perjanjian Layanan Domain", link: "domain-agreement.html", icon: "fa-solid fa-globe" },
        { name: "Perjanjian Layanan Hosting", link: "hosting-agreement.html", icon: "fa-solid fa-server" }
    ],
    policies: [
        { name: "Kebijakan Penggunaan Layanan", link: "../../../plasa-hosting/Pages/perjanjian-layanan/index.html", icon: "fa-solid fa-wrench" },
        { name: "Kebijakan Privasi", link: "privacy-policy.html", icon: "fa-solid fa-circle-exclamation" },
        { name: "Acceptable Use Policy (AUP)", link: "../../../plasa-hosting/Pages/aup/index.html", icon: "fa-solid fa-check" }
    ]
};

// Fungsi untuk merender konten utama
function renderMainContent() {
    // Kosongkan konten terlebih dahulu
    const contentContainer = document.getElementById("policy-content");
    contentContainer.innerHTML = "";

    // Set judul utama
    document.getElementById("main-title").textContent = pLData.title;
    document.getElementById("main-description").textContent = pLData.description;

    // Render setiap section
    pLData.sections.forEach(section => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("box");

        const sectionTitle = document.createElement("h3");
        sectionTitle.textContent = section.title;

        const sectionDesc = document.createElement("p");
        sectionDesc.textContent = section.description;

        const list = document.createElement("ul");
        section.list.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            list.appendChild(listItem);
        });

        sectionDiv.appendChild(sectionTitle);
        sectionDiv.appendChild(sectionDesc);
        sectionDiv.appendChild(list);
        contentContainer.appendChild(sectionDiv);
    });
}

// Fungsi untuk merender sidebar
function renderSidebar() {
    const agreementsList = document.getElementById("agreements-list");
    const policiesList = document.getElementById("policies-list");
    const currentPath = window.location.pathname.split("/").pop(); // Halaman aktif

    // Kosongkan sidebar
    agreementsList.innerHTML = "";
    policiesList.innerHTML = "";

    // Render Agreements
    pLData.agreements.forEach(agreement => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = agreement.link;
        link.innerHTML = `<i class="${agreement.icon}"></i> ${agreement.name}`;

        if (agreement.link === currentPath) {
            link.classList.add("active");
        }

        listItem.appendChild(link);
        agreementsList.appendChild(listItem);
    });

    // Render Policies
    pLData.policies.forEach(policy => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = policy.link;
        link.innerHTML = `<i class="${policy.icon}"></i> ${policy.name}`;

        if (policy.link === currentPath) {
            link.classList.add("active");
        }

        listItem.appendChild(link);
        policiesList.appendChild(listItem);
    });
}

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderMainContent();
    renderSidebar();
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