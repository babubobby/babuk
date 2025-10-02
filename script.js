// Typing animation using Typed.js
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: ["ML Engineer", "Creative Thinker", "Problem Solver", "Full Stack Developer"],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
  });
});

window.addEventListener("scroll", () => {
  const scrollDown = document.querySelector(".scroll-down");
  const socialIcons = document.querySelector(".social-icons");
  const homeSection = document.getElementById("home");
  const skillsSection = document.getElementById("skills");

  // === 1. Scroll-down indicator show/hide ===
  if (scrollDown) {
    if (window.scrollY > 100) {
      scrollDown.classList.add("hidden");
    } else {
      scrollDown.classList.remove("hidden");
    }
  }

  // === 2. Show social-icons only in Home and Skills sections ===
  if (socialIcons && homeSection && skillsSection) {
    const scrollMiddle = window.scrollY + window.innerHeight / 2;

    const isInHome =
      scrollMiddle >= homeSection.offsetTop &&
      scrollMiddle <= homeSection.offsetTop + homeSection.offsetHeight;

    const isInSkills =
      scrollMiddle >= skillsSection.offsetTop &&
      scrollMiddle <= skillsSection.offsetTop + skillsSection.offsetHeight;

    // if (isInHome || isInSkills) {
    if (isInHome) {
      socialIcons.style.display = "flex";
    } else {
      socialIcons.style.display = "none";
    }
  }
});




// Scroll Reveal Logic
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("active");
    } else {
      el.classList.remove("active"); // Optional: remove if you want one-time animation
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Trigger once on load
revealOnScroll();


