/* ============================================
   OPERA SINGER SITE — MAIN JS
   ============================================ */

// ── Navbar scroll effect ────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── Active nav link ─────────────────────────
(function markActive() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('nav ul li a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (path === href || (href !== '/' && path.startsWith(href))) {
      a.classList.add('active');
    }
  });
})();

// ── Mobile hamburger ────────────────────────
const hamburger = document.querySelector('.hamburger');
const navUl     = document.querySelector('nav ul');
if (hamburger && navUl) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navUl.classList.toggle('open');
  });
  // close on link click
  navUl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navUl.classList.remove('open');
    });
  });
}

// ── Contact form (static — no backend) ──────
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    // Replace with your preferred form service (Formspree, Netlify Forms, etc.)
    // For Formspree: set action="https://formspree.io/f/YOUR_ID" and remove this listener
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message sent!';
    btn.disabled = true;
    form.reset();
  });
}
