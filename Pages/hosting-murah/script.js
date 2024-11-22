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

// start modal-fitur

document.querySelector(".button-fitur").onclick = () => {
  const modal = document.querySelector(".modal-fitur");

  const icon = document.querySelector("#icon-toggle");

  modal.classList.toggle("active");
  if (modal.classList.contains("active")) {
    icon.src = "/image/icon-down.png";
  } else {
    icon.src = "/image/icon-up.png";
  }
};
// end modal-fitur
