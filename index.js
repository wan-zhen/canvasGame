var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;
canvas.width = w;
canvas.height = h

var ship = {
    x: 0,
    y: 0,
    deg: 0
}

function init() {
    ship.deg = 45;
    ship.x = Math.random() * w;
    ship.y = Math.random() * h;
}

function update() {
    ship.x += 0.1;
    ship.y += 0.5;
}

function draw() {
    ctx.fillStyle = '#001d2e';
    ctx.fillRect(0, 0, w, h);
    ctx.beginPath();

    for (let index = 0; index < w; index += 50) {
        ctx.moveTo(index, 0);
        ctx.lineTo(index, w);
    }

    for (let index = 0; index < h; index += 50) {
        ctx.moveTo(0, index);
        ctx.lineTo(w, index);
    }

    ctx.strokeStyle = 'rgba(255,255,255,.2)';
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.fillRect(ship.x, ship.y, 50, 50);
    requestAnimationFrame(draw);
}

init();

let fps = 60;
setInterval(update, 1000 / fps);
requestAnimationFrame(draw);