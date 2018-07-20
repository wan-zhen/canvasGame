var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;

let degToPi = Math.PI * 2 / 360;

canvas.width = w;
canvas.height = h

class Ship {
    constructor(args) {
        let def = {
            x: 0,
            y: 0,
            r: 50,
            deg: 50 * degToPi
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() {
        ctx.translate(w / 2, h / 2);
        ctx.rotate(ship.deg);

        ctx.fillStyle = 'white';
        ctx.fillRect(100, -25 / 2, 25, 25);

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
    }
}

var ship, ship2

function init() {
    ship = new Ship({
        deg: 45 * degToPi,
        r: 120
    })
    ship2 = new Ship({
        deg: 150 * degToPi,
        r: 50
    })
    //ship.deg = 0;
    //ship.x = Math.random() * w;
    //ship.y = Math.random() * h;
}

function update() {
    ship.x += 0.1;
    ship.y += 0.5;
    ship.deg = mousePostion.x / 50;
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
    ship.draw();

    ctx.restore();

    ctx.save();
    ship2.draw();

    ctx.fillStyle = 'white';
    ctx.fillRect(ship.x, ship.y, 50, 50);
    requestAnimationFrame(draw);
}

init();

let fps = 60;
setInterval(update, 1000 / fps);
requestAnimationFrame(draw);

var mousePostion = {
    x: 0,
    y: 0
}

canvas.addEventListener('mousemove', function (e) {
    mousePostion.x = e.x;
    mousePostion.y = e.y;
});