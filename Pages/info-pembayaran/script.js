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