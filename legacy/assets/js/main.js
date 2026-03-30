/* ================================================
   Jean-Charles Bernard — Hypnothérapeute
   Main JavaScript
   ================================================ */

// Smooth scroll
function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// Mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// Stagger children of problem cards
document.querySelectorAll('.problems-grid .problem-card, .services-grid .service-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 60}ms`;
  el.classList.add('reveal');
  observer.observe(el);
});

// Counter animation for stat numbers
function animateCount(el, target, isFloat) {
  const dur = 1800;
  const start = performance.now();
  const from = 0;
  function step(now) {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const val = from + (target - from) * ease;
    el.textContent = isFloat ? val.toFixed(1) : Math.round(val) + (el.dataset.suffix || '');
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      nums.forEach(n => {
        const text = n.textContent;
        if (text.includes('500')) { n.textContent = '0+'; animateCount(n, 500, false); n.dataset.suffix = '+'; }
        else if (text.includes('92')) { animateCount(n, 92, false); n.dataset.suffix = '%'; }
        else if (text.includes('12')) { animateCount(n, 12, false); }
        else if (text.includes('4.9')) { animateCount(n, 4.9, true); }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const trustBar = document.querySelector('.trust-bar');
if (trustBar) statsObserver.observe(trustBar);