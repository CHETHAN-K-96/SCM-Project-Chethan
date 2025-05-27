ocument.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetID = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      e.preventDefault();
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .section-title').forEach(el => {
  el.style.opacity = 0;
  el.style.transition = 'opacity 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)';
  observer.observe(el);
});

observer.disconnect();
document.querySelectorAll('.card, .section-title').forEach(el => {
  observer.observe(el);
});
