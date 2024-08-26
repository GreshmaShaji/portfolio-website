// Smooth Scrolling
document.querySelectorAll('.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing Effect
const nameText = "Greshma";
let index = 0;

function typeEffect() {
  if (index < nameText.length) {
    document.getElementById('typing-name').innerHTML += nameText.charAt(index);
    index++;
    setTimeout(typeEffect, 200);
  }
}

window.onload = typeEffect;

// Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.innerText = 'Light Mode';
  } else {
    themeToggleBtn.innerText = 'Dark Mode';
  }
});

// Scroll Reveal Animations
function revealElementsOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealElementsOnScroll);
