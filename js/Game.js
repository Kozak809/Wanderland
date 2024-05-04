function Game(screen, controls) {
    Scene.apply(this, arguments); // Запуск сцены
    this.camera = new Camera(0, 0, this); // Запуск сцены
    this.player = new Player(1 * 64, 18 * 64, this); //Добавление игрока
    this.monster = new Player(896, 128, this); //Добавление монстра
    this.monster.type = "monster"; // Делаем монстра монстром
    this.monster.status = "walking"; // Заставляем его двигатся
    this.sounds = {};
    this.sounds['arrow'] = new Sound('assets/arrow.wav');
    this.sounds['sword'] = new Sound('assets/sword.wav');
    this.sounds['mainTheme'] = new Sound('assets/mainTheme.wav'); // Импорт звуков

    this.map = [
        [18, 0, 17, 17, 17, 16, 17, 19, 18, 17, 17, 17, 17, 17, 18, 17, 16, 17, 18, 18],
        [17, 0, 0, 0, 0, 0, 23, 23, 23, 2, 18, 0, 0, 0, 0, 0, 0, 39, 14, 17],
        [17, 0, 0, 0, 0, 0, 0, 19, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 39, 15],
        [18, 0, 0, 0, 0, 0, 19, 19, 0, 1, 18, 0, 8, 6, 6, 6, 2, 6, 7, 16],
        [17, 24, 25, 25, 25, 25, 19, 19, 25, 25, 25, 25, 19, 19, 19, 5, 0, 5, 9, 17],
        [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 10, 0, 10, 11, 18],
        [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 29, 0, 0, 0, 2, 17],
        [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 29, 18, 18, 0, 0, 17],
        [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 29, 0, 0, 0, 17, 16],
        [31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 32, 0, 0, 15, 16, 17],
        [18, 16, 15, 16, 17, 17, 18, 17, 17, 16, 17, 18, 17, 18, 0, 17, 2, 0, 0, 16],
        [18, 17, 16, 17, 17, 16, 17, 16, 15, 17, 17, 18, 17, 18, 14, 18, 15, 0, 1, 15],
        [17, 4, 0, 2, 0, 0, 2, 2, 0, 0, 4, 40, 0, 0, 38, 0, 2, 2, 0, 17],
        [18, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 37, 15, 14, 15, 0, 0, 4, 17],
        [18, 1, 0, 0, 2, 0, 0, 0, 2, 1, 4, 1, 37, 16, 17, 15, 0, 1, 2, 18],
        [18, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 37, 15, 16, 15, 0, 0, 0, 17],
        [18, 1, 0, 2, 0, 0, 2, 0, 0, 1, 0, 1, 37, 15, 15, 0, 0, 2, 0, 17],
        [18, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2, 1, 37, 0, 0, 4, 0, 2, 39, 17],
        [17, 4, 0, 0, 0, 0, 2, 0, 0, 2, 0, 1, 1, 2, 16, 16, 0, 39, 14, 18],
        [18, 17, 16, 17, 17, 18, 17, 18, 17, 18, 17, 16, 17, 18, 18, 17, 18, 17, 17, 18],
    ]; // Создание карты

    this.tiles = [
        { j: 0, i: 0, walk: true },  //0 - Трава
        { j: 1, i: 0, walk: false }, //1 - Большой куст
        { j: 2, i: 0, walk: true },  //2 - Травинка
        { j: 3, i: 0, walk: false }, //3 - Говно-дерево
        { j: 4, i: 0, walk: true },  //4 - Цветочек
        { j: 5, i: 0, walk: false }, //5 - стена
        { j: 6, i: 0, walk: false }, //6 - верх стены
        { j: 7, i: 0, walk: false }, //7 - правый край верх стены
        { j: 8, i: 0, walk: false }, //8 - левый край верх стены
        { j: 9, i: 0, walk: false }, //9 - wall with r end
        { j: 5, i: 1, walk: false }, //10 - bottom-wall
        { j: 6, i: 1, walk: false }, //11 - bottom-wall with r-end
        { j: 7, i: 1, walk: false }, //12 - bottom-wall with l-end
        { j: 8, i: 1, walk: false }, //13 - wall with l end
        { j: 5, i: 2, walk: false }, //14 - камень
        { j: 3, i: 3, walk: false }, //15 - Елка размера 1
        { j: 4, i: 3, walk: false }, //16 - Елка размера 2
        { j: 3, i: 4, walk: false }, //17 - Елка размера 3
        { j: 4, i: 4, walk: false }, //18 - Елка размера 4
        { j: 5, i: 3, walk: false }, //19 - Вода 1
        { j: 5, i: 4, walk: false }, //20 - Вода 2
        { j: 9, i: 1, walk: true }, //21 - top-grass with l-end
        { j: 9, i: 2, walk: true }, //22 - top-grass with r-end
        { j: 8, i: 2, walk: true }, //23 - Доски
        { j: 0, i: 1, walk: true }, //24 - sand in grass b-r
        { j: 1, i: 1, walk: true }, //25 - sand in grass b
        { j: 2, i: 1, walk: true }, //26 - sand in grass b-l
        { j: 0, i: 2, walk: true }, //27 - sand in grass r
        { j: 1, i: 2, walk: true }, //28 - Песок
        { j: 2, i: 2, walk: true }, //29 - sand in grass l
        { j: 0, i: 3, walk: true }, //30 - sand in grass u-r
        { j: 1, i: 3, walk: true }, //31 - sand in grass u
        { j: 2, i: 3, walk: true }, //32 - sand in grass u-l
        { j: 3, i: 1, walk: true }, //33 - gras in sand b-r
        { j: 4, i: 1, walk: true }, //34 - gras in sand b-l
        { j: 3, i: 2, walk: true }, //35 - gras in sand u-r
        { j: 4, i: 2, walk: true }, //36 - gras in sand u-l
        { j: 6, i: 3, walk: true }, //37 - Высокая трава
        { j: 6, i: 2, walk: false }, //38 - Решетка
        { j: 7, i: 2, walk: false }, //39 - Камушки
        { j: 6, i: 4, walk: false }, //40 - Лук
        { j: 7, i: 3, walk: false }, //41 - Решетка со знаком взаимодействия
    ];
    this.waterTexture = 19; // Начальная текстура воды (19 - Вода 1)
    this.BowTexture = 40; // Начальная текстура Блока с луком 40
    this.toggleWaterTexture(); // Вызов функции для переключения текстуры воды
    this.arrows = []; // Пустой масив стрел

}

Game.prototype = Object.create(Scene.prototype);
Game.prototype.constructor = Game; // Наследование из класса Scene в Game

Game.prototype.render_bg = function (time) {
    var start_col = Math.floor(this.camera.x / 64); //Область рендеринга по x
    var start_row = Math.floor(this.camera.y / 64); //Область рендеринга по y

    for (var i = start_row; i < (start_row + 11); i++) {
        for (var j = start_col; j < (start_col + 11); j++) {
            if ((j < 20) && (i < 20)) {
                var tileID = this.map[i][j];
                // Если тайл является одной из текстур воды, используем текущую текстуру
                if (tileID === 19 || tileID === 20) {
                    tileID = this.waterTexture;
                }
                var tile = this.tiles[tileID];
                this.ctx.drawImage(this.imgs['bg'], tile.j * 64, tile.i * 64, 64, 64,
                    (j * 64) - this.camera.x, (i * 64) - this.camera.y, 64, 64);
            }
        }
    }

};

Game.prototype.render_batle = function (time) {

}




Game.prototype.toggleWaterTexture = function () {
    setInterval(function () {
        // Переключение между текстурой 19 (Вода 1) и 20 (Вода 2)
        this.waterTexture = this.waterTexture === 19 ? 20 : 19;
    }.bind(this), 500); // интервал в 500 мс 
};

var Cooldown = 0;

Game.prototype.render_sprites = function (time) {


    this.player.update(time);
    this.monster.update(time);
    this.camera.update(time);
    // Обновление игрока, монстра и камеры соответсвенно

    //Рендер монстра
    this.ctx.drawImage(this.imgs['orc'],
        this.monster.j * 64, this.monster.i * 64, 64, 64,
        (this.monster.x) - this.camera.x, (this.monster.y) - this.camera.y, 64, 64);

    //Рендер игрока
    this.ctx.drawImage(this.imgs['player'],
        this.player.j * 64, this.player.i * 64, 64, 64,
        (this.player.x) - this.camera.x, (this.player.y) - this.camera.y, 64, 64);



    //Рендер стрела
    for (var i = this.arrows.length; i > 0; i--) {
        if (this.arrows[i - 1].active === false) this.arrows.splice(i - 1, 1);
    }

    for (var i = 0; i < this.arrows.length; i++) {
        this.arrows[i].update(time);
        this.ctx.drawImage(this.imgs['player'],
            this.arrows[i].j * 64, this.arrows[i].i * 64, 64, 64,
            (this.arrows[i].x) - this.camera.x, (this.arrows[i].y) - this.camera.y, 64, 64);

    }
    for (let i = 0; i < this.map.length; i++) {
        for (let j = 0; j < this.map[i].length; j++) {
            if (this.map[i][j] === 40) {
                // Если игрок в одном тайле слева от тайла с id 40
                if (this.player.x >= (j - 1) * 64 && this.player.x < j * 64 && this.player.y >= i * 64 - 32 && this.player.y < (i + 1) * 64 - 32) {
                    // Заменяем тайл с id 40 на тайл с id 2
                    showGetBowDialog()
                    GetBow();
                    this.map[i][j] = 2;
                }
            }
            if (this.map[i][j] === 38 || this.map[i][j] === 41) {
                // Если игрок в одном тайле слева от тайла с id 40
                if (this.player.x >= (j - 1) * 64 && this.player.x < j * 64 && this.player.y >= i * 64 - 32 && this.player.y < (i + 1) * 64 - 32) {
                    // Заменяем тайл с id 38 на тайл с id 2
                    this.map[i][j] = 41;
                    if ((controls.states['use']) && (Cooldown == 0)) {
                        Cooldown = 1;
                        showCloseGridDialog();
                    }
                } else { // Заменяем тайл с id 2 на тайл с id 38
                    this.map[i][j] = 38;
                }
            }
        }
    }


};

Game.prototype.render = function (time) {
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); // Если нет тайлов то рисует белый фон

    this.render_bg(time); // Рендер тайлов
    this.render_sprites(time); // Рендер спрайтов

    if ((this.monster.dead) && (this.player.x < 84) && (this.player.y < 84)) { // При смерти монстра и когда дошел до выхода победа
        return "win";
    } else {
        //        console.log(this.player.x + ' ' + this.player.y);
        return "game";
    }
};

scenes['game'] = new Game(screen, controls); //Запуск игры