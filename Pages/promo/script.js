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
const cardPromo = document.querySelectorAll(".card-promo");
const titlePromo = document.querySelectorAll(".title-promo")
const observerOptions = {
  threshold: 0.1,
};

const cardMainAnimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scale-in");
    }
  });
}, observerOptions);

cardPromo.forEach((card) => {
  card.classList.add("scale-init");
  cardMainAnimation.observe(card);
});

const titlePromoAnimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bottom-in");
    }
  });
}, observerOptions);

titlePromo.forEach((title) => {
  title.classList.add("bottom-init");
  titlePromoAnimation.observe(title);

});

// HANDLE CLIK SALIN CARD PROMO


const copyButtons = document.querySelectorAll('.button-salin-kode');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const promoCode = button.closest('.salin-kode').querySelector('.promoCode');

      
        navigator.clipboard.writeText(promoCode.textContent)
            .then(() => {
                alert('Kode Promo Berhasil Disalin !!! '); 
            })
            .catch(err => {
                console.error('Gagal menyalin Kode Promo: ', err);
            });
    });
});



// HANDLE CLIK SALIN CARD PROMO
// END MAIN
