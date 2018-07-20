var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(500, 100);
ctx.lineTo(300, 400);
ctx.closePath();

ctx.fillStyle = 'red';
ctx.fill();