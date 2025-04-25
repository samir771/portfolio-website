// Toggle Dark/Light Mode
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
});

// Auto scroll to top on last page scroll
document.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3000);
  }
});

// Pop-up for socials
const links = document.querySelectorAll('.popup-link');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    alert(`Redirecting to ${link.href}`);
    window.open(link.href, '_blank');
  });
});

// Open project animation
function openProject(url) {
  window.open(url, '_blank');
}

// Typed animation (simplified)
const typedText = document.querySelector('.typed-text');
const messages = ["Web SQL Engineer", "Database Designer", "Full Stack Learner"];
let index = 0;

setInterval(() => {
  typedText.textContent = messages[index];
  index = (index + 1) % messages.length;
}, 3000);
// --- Mouse Tracking Connecting Dots ---
const canvas = document.getElementById("mouse-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 100;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = 2;
    this.baseX = this.x;
    this.baseY = this.y;
    this.dx = Math.random() - 0.5;
    this.dy = Math.random() - 0.5;
  }

  draw() {
    ctx.fillStyle = "#6c63ff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x > canvas.width || this.x < 0) this.dx *= -1;
    if (this.y > canvas.height || this.y < 0) this.dy *= -1;
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function connectParticles() {
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let dx = particlesArray[a].x - particlesArray[b].x;
      let dy = particlesArray[a].y - particlesArray[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        ctx.strokeStyle = "rgba(108,99,255,0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let particle of particlesArray) {
    particle.update();
    particle.draw();
  }
  connectParticles();
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
