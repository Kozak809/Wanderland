function Menu(screen, controls) {
    Scene.apply(this, arguments);
} // Отображение сцены меню

Menu.prototype = Object.create(Scene.prototype);
Menu.prototype.constructor = Menu; // Наследование из класса Scene в Menu


Menu.prototype.render = function (time) {

    this.ctx.drawImage(this.imgs['title'], 0, 0, 640, 640, 0, 0, 640, 640); //Выводит картинку title на холст

    this.ctx.fillStyle = '#FFFFFF'; //Задает белый цвет текста
    this.ctx.font = "22px Arial"; //Шрифт и его размер
    this.ctx.fillText("Нажмите пробел", 250, 500); //Выводит текст
    if (this.controls.states['fire']) { //Если нажал на пробел
        return "game"; //Начинается игра
    } else {
        return "menu"; //Обновляется меню
    }
}; //Рендер сцены меню

scenes['menu'] = new Menu(screen, controls); // Отображение меню