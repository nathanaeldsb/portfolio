// JAVASCRIPT FIREFLIES START

var canvas = document.getElementById("canvas__fireflies");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

// Firelies circles multiplied

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    ctx.strokeStyle = "yellow";
    ctx.stroke();

    ctx.fillStyle = "orange";
    ctx.fill();

    ctx.shadowBlur = 10;
    ctx.shadowColor = "yellow";

    ctx.globalAlpha = 0.5; // OPACITY Modification
  };

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var circleArray = [];

for (var i = 0; i < 55; i++) {
  var radius = Math.random() * 3 + 1;
  var x = Math.random() * (innerWidth - radius);
  var y = Math.random() * (innerHeight - radius);
  var dx = (Math.random() - 0.3) * 3;
  var dy = (Math.random() - 0.3) * 3;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();

// JAVASCRIPT FIREFLIES END