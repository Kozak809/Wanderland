function Camera(x, y, scene) {
    this.x = x;
    this.y = y;
    this.w = 640; // Ширина куда может свалить
    this.h = 640; // Высота куда может свалить
    this.scene = scene; // Сцена - текущая сцена
}

Camera.prototype.update = function (time) {
    if ((this.scene.player.x - this.x) < 200) {
        this.x = this.scene.player.x - 200;
    } // Плавное передвижение камеры

    if ((this.scene.player.x - this.x) > 440) {
        this.x = this.scene.player.x - 440;
    }// Плавное передвижение камеры

    if (this.x < 0) this.x = 0;
    if (this.x > 640) this.x = 640; // Плавный рендеринг камеры


    if ((this.scene.player.y - this.y) < 200) {
        this.y = this.scene.player.y - 200;
    }// Плавное передвижение камеры

    if ((this.scene.player.y - this.y) > 440) {
        this.y = this.scene.player.y - 440;
    }// Плавное передвижение камеры

    if (this.x < 0) this.x = 0;
    if (this.x > 640) this.x = 640; // Плавный рендеринг камеры

    if (this.y < 0) this.y = 0;
    if (this.y > 640) this.y = 640; // Плавный рендеринг камеры

};
