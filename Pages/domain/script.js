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


// START HERO DOMAIN

document.addEventListener('DOMContentLoaded', () => {
  const domainForm = document.getElementById('domainForm');
  const domainInput = document.getElementById('domainInput');
  const domainExtension = document.getElementById('domainExtension');
  const loadingState = document.getElementById('loadingState');
  const resultState = document.getElementById('resultState');

  // Validate domain name format
  const isValidDomainName = (domain) => {
      const pattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]$/;
      return pattern.test(domain);
  };

  // Show loading state
  const showLoading = () => {
      loadingState.style.display = 'block';
      resultState.style.display = 'none';
  };

  // Hide loading state
  const hideLoading = () => {
      loadingState.style.display = 'none';
  };

  // Show result
  const showResult = (available, domain) => {
      const resultHTML = available ? 
          `
          <div class="domain-result domain-result--available">
              <div class="domain-result__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
              </div>
              <div class="domain-result__content">
                  <h3 class="domain-result__title">Domain tersedia!</h3>
                  <p class="domain-result__domain">${domain}</p>
              </div>
              <button class="domain-result__button">
                  Beli Sekarang
              </button>
          </div>
          ` : 
          `
          <div class="domain-result domain-result--unavailable">
              <div class="domain-result__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
              </div>
              <div class="domain-result__content">
                  <h3 class="domain-result__title">Domain tidak tersedia</h3>
                  <p class="domain-result__domain">${domain}</p>
              </div>
              <button class="domain-result__button domain-result__button--secondary">
                  Cari Domain Lain
              </button>
          </div>
          `;

      resultState.innerHTML = resultHTML;
      resultState.style.display = 'block';
  };

  // Simulate domain check (replace with actual API call)
  const checkDomain = async (domain) => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate random availability (replace with actual API check)
      return Math.random() > 0.5;
  };

  // Handle form submission
  domainForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const domain = domainInput.value.trim().toLowerCase();
      const extension = domainExtension.value;
      
      // Reset any previous error states
      domainInput.classList.remove('error');
      
      // Validate input
      if (!domain) {
          domainInput.classList.add('error');
          domainInput.style.animation = 'none';
          domainInput.offsetHeight; // Trigger reflow
          domainInput.style.animation = 'shake 0.5s ease';
          return;
      }

      if (!isValidDomainName(domain)) {
          domainInput.classList.add('error');
          // You could show a more specific error message here
          return;
      }

      const fullDomain = `${domain}${extension}`;

      // Show loading state
      showLoading();

      try {
          // Check domain availability
          const isAvailable = await checkDomain(fullDomain);
          
          // Hide loading and show result
          hideLoading();
          showResult(isAvailable, fullDomain);
          
      } catch (error) {
          hideLoading();
          // Handle error - show error message to user
          showResult(false, fullDomain);
          console.error('Error checking domain:', error);
      }
  });

  // Add CSS for domain results
  const style = document.createElement('style');
  style.textContent = `
      .domain-result {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: 12px;
          background: white;
      }

      .domain-result--available {
          border: 2px solid #00d668;
      }

      .domain-result--unavailable {
          border: 2px solid #ff4444;
      }

      .domain-result__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          flex-shrink: 0;
      }

      .domain-result--available .domain-result__icon {
          color: #00d668;
          background: rgba(0, 214, 104, 0.1);
      }

      .domain-result--unavailable .domain-result__icon {
          color: #ff4444;
          background: rgba(255, 68, 68, 0.1);
      }

      .domain-result__content {
          flex: 1;
      }

      .domain-result__title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
      }

      .domain-result__domain {
          color: #666;
          font-size: 1rem;
      }

      .domain-result__button {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
      }

      .domain-result--available .domain-result__button {
          background: #00d668;
          color: white;
      }

      .domain-result--unavailable .domain-result__button {
          background: #f3f4f6;
          color: #666;
      }

      .domain-result__button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      @media (max-width: 640px) {
          .domain-result {
              flex-direction: column;
              text-align: center;
              gap: 1rem;
              padding-bottom: 100px ;
          }

          .domain-result__button {
              width: 100%;
          }
      }
  `;
  document.head.appendChild(style);

  // Input focus effect
  domainInput.addEventListener('focus', () => {
      domainInput.parentElement.closest('.domain-search__form').classList.add('focused');
  });

  domainInput.addEventListener('blur', () => {
      domainInput.parentElement.closest('.domain-search__form').classList.remove('focused');
  });
});

// Doamin Esktension start
document.querySelectorAll('.register-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Domain berhasil ditambahkan ke keranjang!');
    });
});

// Transfer Domain
function handleTransferClick() {
    alert('Tombol Transfer Domain diklik! Anda akan diarahkan ke halaman transfer domain.');
    // Tambahkan logika pengalihan halaman jika diperlukan, seperti:
    // window.location.href = 'https://example.com/transfer-domain';
  }


// Start ajakan beli domain
document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".why-choose-us-section");
  
    // Tambahkan kelas animasi setelah halaman dimuat
    setTimeout(() => {
      section.classList.add("animate");
    }, 200); // Delay agar terlihat lebih halus
  });
  
// Start FAQ
const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const body = accordion.querySelector('.accordion-body');

    header.addEventListener('click', () => {
        body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
});