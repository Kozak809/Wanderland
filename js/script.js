
function Scene(screen, controls) {
    this.canvas = screen.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.controls = controls;
    this.imgs = screen.imgs;
}// Создание сцены

function GameLoop() {
    this.frame = this.frame.bind(this);
    this.lastTime = 0;
    this.callback = function () { };
}

GameLoop.prototype.start = function (callback) {
    this.callback = callback;
    requestAnimationFrame(this.frame);
};

GameLoop.prototype.frame = function (time) {

    if ((time - this.lastTime) > 20) { //Скорость игры
        this.lastTime = time;
        this.callback(time);
    }
    requestAnimationFrame(this.frame);
};

var screen = {};
screen.canvas = document.getElementById('screen');
screen.canvas.width = 640;
screen.canvas.height = 640;
screen.imgs = {};
var loop = new GameLoop();
var scenes = {};