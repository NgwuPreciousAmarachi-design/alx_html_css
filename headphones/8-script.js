// Mobile menu toggle with accessibility improvements
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!isOpen));

    if (!isOpen) {
      mobileMenu.hidden = false;
      // small animation
      mobileMenu.style.opacity = 0;
      requestAnimationFrame(() => {
        mobileMenu.style.transition = "opacity 220ms ease";
        mobileMenu.style.opacity = 1;
      });
    } else {
      mobileMenu.style.opacity = 0;
      mobileMenu.addEventListener("transitionend", function _hide() {
        mobileMenu.hidden = true;
        mobileMenu.style.transition = "";
        mobileMenu.removeEventListener("transitionend", _hide);
      });
    }
  });

  // Close mobile menu when clicking a link
  mobileMenu.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    }
  });
}

// Prevent default form submission (demo)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // You can replace this with actual submit logic (AJAX, fetch, etc.)
    alert('Thanks — form submission handled (demo).');
  });
}