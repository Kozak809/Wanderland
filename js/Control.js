function Controls() {
    // Создаем объект, который сопоставляет коды клавиш с названиями действий
    this.codes = { 37: 'left', 65: 'left', 39: 'right', 68: 'right', 38: 'forward', 87: 'forward', 40: 'backward', 83: 'backward', 32: 'fire', 69: 'use' };

    // Создаем объект, который будет хранить состояние каждого действия (нажата/не нажата)
    this.states = { 'left': false, 'right': false, 'forward': false, 'backward': false, 'fire': false, 'use': false };

    // Добавляем обработчики событий нажатия и отпускания клавиш
    document.addEventListener('keydown', this.onKey.bind(this, true), false);
    document.addEventListener('keyup', this.onKey.bind(this, false), false);
}

// Функция, которая обрабатывает события нажатия/отпускания клавиш
Controls.prototype.onKey = function (val, e) {
    // Получаем название действия, соответствующее коду нажатой клавиши
    var state = this.codes[e.keyCode];

    // Если код клавиши не соответствует ни одному действию, выходим из функции
    if (typeof state === 'undefined') return;

    // Устанавливаем состояние действия (true - нажата, false - отпущена)
    this.states[state] = val;

    // Предотвращаем стандартное поведение браузера при нажатии клавиши хуй
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
};

// Создаем экземпляр объекта Controls
var controls = new Controls();