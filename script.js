function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Scrollspy: highlight left-rail nav link for the section in view
const sections = document.querySelectorAll('main .section');
const navLinks = document.querySelectorAll('.local-nav .nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    if (!id) return;
    const link = document.querySelector(`.local-nav a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { threshold: 0.5, rootMargin: "-10% 0px -60% 0px" });

sections.forEach(sec => spyObserver.observe(sec));
