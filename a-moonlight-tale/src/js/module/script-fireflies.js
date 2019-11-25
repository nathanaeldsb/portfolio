// JAVASCRIPT FIREFLIES START
(function(){

  let canvas = document.getElementById("canvas__fireflies");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let ctx = canvas.getContext("2d");

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

  let circleArray = [];

  for (let i = 0; i < 55; i++) {
    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - radius);
    let y = Math.random() * (innerHeight - radius);
    let dx = (Math.random() - 0.3) * 3;
    let dy = (Math.random() - 0.3) * 3;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }

  function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }
  animate();
})()

// JAVASCRIPT FIREFLIES END