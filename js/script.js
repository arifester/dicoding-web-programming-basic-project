document.addEventListener('DOMContentLoaded', () => {
  
  // --- LOGIKA UNTUK TAHUN DINAMIS ---
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // --- LOGIKA UNTUK MENU HAMBURGER ---
  const hamburger = document.getElementById('hamburger-icon');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // --- LOGIKA UNTUK ANIMASI FADE-IN SAAT SCROLL ---
  const fadeInSections = document.querySelectorAll('.fade-in-section');

  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  fadeInSections.forEach(section => {
    observer.observe(section);
  });

});
