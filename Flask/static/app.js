document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-open');
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));

  const form = document.querySelector('#loanForm');
  const overlay = document.querySelector('#loadingOverlay');

  if (form && overlay) {
    form.addEventListener('submit', () => {
      overlay.classList.add('is-visible');
    });
  }
});
