var canvas = document.querySelector('canvas');
var c = canvas. getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var wave = {
    y: canvas.height / 2,
    length: 0.005,
    amplitude: 200,
    frequency: 0.005
};

var colorArray = [
    '49',
    '0', 
    '172',
    '86'
]

var color = colorArray[Math.floor(Math.random() * colorArray.length)];


let increment = wave.frequency;
function animate() {
    requestAnimationFrame(animate);

    c.fillStyle = 'rgba(40, 64, 62, .05)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.beginPath();

    c.moveTo(0, canvas.height / 2);

    for (let i = 0; i < canvas.width; i++) {
        c.lineTo(i, wave.y + ((Math.sin(i * wave.length + increment) * wave.amplitude) / i) *500
        );
        var color = colorArray[Math.floor(Math.random() * 360)];
    }

    c.strokeStyle = 'hsl(' + color +', 50%, 50%)';
    c.stroke();
    increment += wave.frequency;
}

animate();





