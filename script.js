function enter() {
  document.getElementById("gate").style.display = "none";
  document.getElementById("realm").classList.remove("hidden");
}

/* stars */
const c = document.getElementById("stars");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = "white";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += 0.3;

    if (s.y > c.height) s.y = 0;
  });

  requestAnimationFrame(draw);
}

draw();
