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
  // Text to type
  const text = "“ Tanpa anda, Plasahosting tidak ada apa-apanya. ”";

  // DOM Elements
  const quoteElement = document.getElementById("quote");
  const typingText = document.getElementById("typing-text");

  // Typing Animation
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingText.textContent += text[index]; // Append one character
      index++;
      setTimeout(typeEffect, 100); // Adjust typing speed (in milliseconds)
    }
  }

  // Scroll Trigger Logic
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animation when element is visible
          quoteElement.classList.add("visible");
          typeEffect();
          observer.disconnect(); // Stop observing after animation starts
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  observer.observe(quoteElement);
// END MAIN

// ANIMATION ON SCROL IN PACKAGES

const deskripsi = document.querySelectorAll(".deskripsi");
const historyPlasahosting = document.querySelectorAll(".history-plasahosting");
const descWhy = document.querySelectorAll(".desc-why-plasahosting");
const server = document.querySelectorAll(".server");
const domainMurah = document.querySelectorAll(".domain-murah");
const contentLayanan = document.querySelectorAll(".layanan-utama");
const titleQuestion = document.querySelectorAll(".title-question");
const formQuestion = document.querySelectorAll(".form");

const observerOptions = {
  threshold: 0.1,
};

const obser = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("apa itu entri", entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("Left-in");
    }
  });
}, observerOptions);


deskripsi.forEach((desc) => {
  desc.classList.add("Left-init");
  obser.observe(desc);
});

const riwayatPlasahosting = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bottom-in");
    }
  });
}, observerOptions);

historyPlasahosting.forEach((riwayat) => {
  riwayat.classList.add("bottom-init");
  riwayatPlasahosting.observe(riwayat);
});


const kenapaPlasahosting = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("right-in");
    }
  });
}, observerOptions);

descWhy.forEach((kenapa) => {
  kenapa.classList.add("right-init");
  kenapaPlasahosting.observe(kenapa);
});


const serverPlasahosting = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("right-in");
    }
  });
}, observerOptions);

server.forEach((serverMe) => {
  serverMe.classList.add("right-init");
  serverPlasahosting.observe(serverMe);
});


const domainMurahPlasahosting = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bottom-in");
    }
  });
}, observerOptions);

domainMurah.forEach((domain) => {
  domain.classList.add("bottom-init");
  domainMurahPlasahosting.observe(domain);
});

const layanan = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bottom-in");
    }
  });
}, observerOptions);

contentLayanan.forEach((content) => {
  content.classList.add("bottom-init");
  layanan.observe(content);
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