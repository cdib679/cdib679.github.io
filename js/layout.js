/* ============================================
   OPERA SINGER SITE — LAYOUT INJECTOR
   Injects the shared <header> and <footer>
   into every page automatically.
   ============================================ */

(function () {
  // ── NAV ROOT: adjust if site lives in a subfolder
  const ROOT = '/';

  const headerHTML = `
  <header id="navbar">
    <a class="nav-logo" href="${ROOT}">
      <span>Kasumi</span> Hiyane
    </a>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <nav>
      <ul>
        <li><a href="${ROOT}">Home</a></li>
        <li><a href="${ROOT}about">About</a></li>
        <li><a href="${ROOT}listen">Listen</a></li>
        <li><a href="${ROOT}projects">Projects</a></li>
        <li><a href="${ROOT}contact">Contact</a></li>
      </ul>
    </nav>
  </header>`;

  const footerHTML = `
  <footer>
    <p><!-- EDIT: year updates automatically --> &copy; <span id="yr"></span> Kasumi Hiyane · Soprano</p>
    <div class="social-links">
      <!-- EDIT: replace # with real profile URLs, remove unused -->
      <a href="#" target="_blank" rel="noopener">Instagram</a>
      <a href="#" target="_blank" rel="noopener">YouTube</a>
      <a href="#" target="_blank" rel="noopener">Spotify</a>
    </div>
  </footer>`;

  // Inject at top and bottom of <body>
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Set year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
