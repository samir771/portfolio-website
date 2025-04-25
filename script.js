// script.js
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function openProject() {
  alert('Project clicked!');
}

const canvas = document.getElementById('mouse-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let mouse = { x: 0, y: 0 };

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  draw();
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
  ctx.stroke();
}
