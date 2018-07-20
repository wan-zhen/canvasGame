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
        ctx.save();
        ctx.rotate(this.deg);

        ctx.fillStyle = 'white';
        ctx.fillRect(100, -25 / 2, 25, 25);

        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 15;

        ctx.shadowBlur = 20;
        ctx.shadowColor = 'white';

        ctx.stroke();

        for (let index = 0; index < 3; index++) {
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -this.r);
            ctx.stroke();
            ctx.rotate(Math.PI * 2 / 3)
        }
        ctx.restore();
    }
}

class Bullet {
    constructor(args) {
        let def = {
            x: 0,
            y: 0,
            v: {
                x: 0,
                y: 0
            }
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    update() {
        this.x += this.v.x;
        this.y += this.v.y;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 10, 10);
        ctx.restore();
    }
}

var ship, ship2, ship3
var b

function init() {
    ship = new Ship({
        deg: 150 * degToPi,
        r: 120
    })

    b = new Bullet({
        x: 50,
        y: 50,
        v: {
            x: 5,
            y: 5
        }
    })
    //ship.deg = 0;
    //ship.x = Math.random() * w;
    //ship.y = Math.random() * h;
}

function update() {
    // ship.x += 0.1;
    // ship.y += 0.5;
    ship.deg = mousePostion.x / 50;
    b.update();
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
    ship.draw();
    ship2.draw();
    ship3.draw();
    ctx.restore();

    // 子彈
    b.draw()

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