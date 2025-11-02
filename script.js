// cool animated background grid effect
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function random(min, max) {
  return Math.random() * (max - min) + min;
}

let particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: random(0, w),
    y: random(0, h),
    r: random(1, 3),
    dx: random(-0.5, 0.5),
    dy: random(-0.5, 0.5),
  });
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 20, 0.2)";
  ctx.fillRect(0, 0, w, h);

  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#00fff2";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > w) p.dx *= -1;
    if (p.y < 0 || p.y > h) p.dy *= -1;
  }

  requestAnimationFrame(draw);
}

draw();

const cta = document.getElementById("cta");
cta.addEventListener("click", () => {
  alert("Initializing Neural Motion Engine...");
});
