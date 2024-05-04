// Часть победы
function Win(screen, controls) {
    Scene.apply(this, arguments);
}// Дает возможность работать со сценой

Win.prototype = Object.create(Scene.prototype);
Win.prototype.constructor = Win; // Наследование из класса Scene в Win


Win.prototype.render = function (time) {

    this.ctx.drawImage(this.imgs['title'], 0, 0, 640, 640, 0, 0, 640, 640); //Выводит картинку title на холст

    this.ctx.fillStyle = '#FFFFFF'; //Задает белый цвет текста
    this.ctx.font = "22px Arial"; //Шрифт и его размер
    this.ctx.fillText("Продолжение следует...", 200, 500);
    return "win";
}; //Анимация победы

scenes['win'] = new Win(screen, controls); // Запуск победы