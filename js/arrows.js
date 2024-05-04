function Arrow(x, y, direction, scene) {
    this.active = true;
    this.x = x; // x стрелы
    this.y = y; // y стрелы
    this.scene = scene; // Сцена на которой стрела
    this.speed = 10; // Скорость стрелы
    this.direction = direction; // Направление полёта
    this.sprites = {
        right: [10, 0],
        left: [9, 0],
        up: [11, 0],
        down: [12, 0]
    }; // Отступы от игрока чтобы стрела не попадала в него
    this.j = this.sprites[direction][0];
    this.i = this.sprites[direction][1]; // Передвижение стрел
}

Arrow.prototype.update = function (time) {
    this.move(); // само движение стрелы
};

Arrow.prototype.move = function () {
    var new_x = this.x;
    var new_y = this.y;
    if (this.direction == "right") new_x += this.speed;
    if (this.direction == "left") new_x -= this.speed;
    if (this.direction == "up") new_y -= this.speed;
    if (this.direction == "down") new_y += this.speed;
    // Движение стрелы вправо, влево, вверх и вниз соответсвенно

    if (this.is_hit(new_x, new_y)) {
        this.active = false;
        return true;  // Если попала во врага то больше не активна
    } else {
        this.x = new_x;
        this.y = new_y; // продолжит лететь
    }
}

var hpMonstr = 2;

Arrow.prototype.is_hit = function (x, y) {
    var pos_x = x;
    var pos_y = y;
    if (this.direction == "right") { pos_x += 64; pos_y += 32; };
    if (this.direction == "left") { pos_y += 32; };
    if (this.direction == "up") { pos_x += 32; };
    if (this.direction == "down") { pos_x += 32; pos_y += 64; };
    // Нормальное отображение полета стрел

    if ((pos_x < 0) || (pos_x > 1280) || (pos_y < 0) || (pos_y > 1280)) {
        return true;  // Если на карте то она летит
    }

    var j = Math.floor(pos_x / 64);
    var i = Math.floor(pos_y / 64);
    // Где щас стрела по ячейкам x и y
    if ((pos_x > this.scene.monster.x) && (pos_x < (this.scene.monster.x + 64)) &&
        (pos_y > this.scene.monster.y) && (pos_y < (this.scene.monster.y + 64))) {
        hpMonstr--;
        if (hpMonstr == 0) {
            this.scene.monster.set_action("down", "dead");
            showMonsterDeadDialog();
        }
        return true;  // если попала в монстра то монст умрёт и упадёт
    }
    return !this.scene.tiles[this.scene.map[i][j]].walk; // При попадании в препфтствие стрела исчезает
}