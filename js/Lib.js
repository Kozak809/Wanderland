function Lib(screen, controls) {
    Scene.apply(this, arguments);
    this.assets = [
        { name: 'orc', path: 'assets/orc.png' },
        { name: 'player', path: 'assets/player.png' },
        { name: 'sceleton', path: 'assets/sceleton.png' },
        { name: 'bg', path: 'assets/tilestest.png' },
        { name: 'title', path: 'assets/title.png' }
    ];// Подключение изображений

    this.total = this.assets.length;
    this.loaded = 0;
    this.status = "loading";


    this.loaded_at = 0;

    var self = this;
    for (var i = 0; i < this.total; i++) {
        var img = new Image();
        img.onload = function () {
            self.loaded++; // Если изображение загруженно то увеличивается счетчик
        };
        img.src = self.assets[i].path;
        screen.imgs[self.assets[i].name] = img;

    }

}// Загрузка всех данных

Lib.prototype = Object.create(Scene.prototype);
Lib.prototype.constructor = Lib; // Наследование из класса Scene в Lib

Lib.prototype.render = function (time) {
    if (this.status == "loading") {
        if (this.loaded == this.total) {
            this.status = "loaded";
            this.loaded_at = time;
        }
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = "22px Georgia";
        this.ctx.fillText("Loading " + this.loaded + '/' + this.total, 50, 70);
        return "lib";
    }

    if (this.status == "loaded") {
        if ((time - this.loaded_at) > 1000) {
            return "menu";
        } else {
            return "lib";
        }
    }// Анимация Загрузки

}// Анимация загрузки
var current_scene = 'lib';
loop.start(function frame(time) {
    current_scene = scenes[current_scene].render(time);
});// Обновление экрана
scenes['lib'] = new Lib(screen, controls); // Запуск начального экрана