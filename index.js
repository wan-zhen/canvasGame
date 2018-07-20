var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var position = {
    x: 0,
    y: 0
}

function draw() {
    ctx.clearRect(0, 0, 5000, 5000);
    position.x += 5;
    ctx.fillStyle = 'red';
    ctx.fillRect(position.x, position.y, 50, 50);
}

setInterval(draw, 100);