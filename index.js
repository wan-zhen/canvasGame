var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;
canvas.width = w;
canvas.height = h

var ship = {
    x: 0,
    y: 0,
    deg: 0,
    r: 70
}

function init() {
    ship.deg = 45;
    ship.x = Math.random() * w;
    ship.y = Math.random() * h;
}

function update() {
    ship.x += 0.1;
    ship.y += 0.5;
    ship.deg += 0.05;
}

function draw() {
    ctx.fillStyle = '#001d2e';
    ctx.fillRect(0, 0, w, h);
    ctx.beginPath();
    // 格線
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

    // 船
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(ship.deg);

    ctx.beginPath();
    ctx.arc(0, 0, ship.r, 0, Math.PI * 2);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 12;

    ctx.shadowBlur = 20;
    ctx.shadowColor = 'white';

    ctx.stroke();

    for (let index = 0; index < 3; index++) {
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -ship.r);
        ctx.stroke();
        ctx.rotate(Math.PI * 2 / 3)
    }

    ctx.restore();

    ctx.fillStyle = 'white';
    ctx.fillRect(ship.x, ship.y, 50, 50);
    requestAnimationFrame(draw);
}

init();

let fps = 60;
setInterval(update, 1000 / fps);
requestAnimationFrame(draw);