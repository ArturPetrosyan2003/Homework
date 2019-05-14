var socket;
function setup() {
    createCanvas(600, 600);
    background('black');
    socket = io();
    socket.on('display', showMsg);
}

function showMsg(data) {
    fill('green');
    ellipse(data.x, data.y, 30, 30);
}

function mouseDragged() {

    var data = {
        x: mouseX,
        y: mouseY
    };

    socket.emit('send', data);
    fill('lightblue');
    ellipse(mouseX, mouseY, 30, 30);
}

function draw() {
}

