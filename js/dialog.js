function showStartDialog() {
    // Создаем диалоговое окно
    var counter = 0;
    var dialog = document.createElement("div");
    dialog.style.position = "absolute";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, 500px)";
    dialog.style.background = "white";
    dialog.style.border = "3px solid gold";
    dialog.style.padding = "10px"
    dialog.style.width = "400px"
    dialog.style.height = "80px"
    dialog.style.display = "flex";
    dialog.style.flexDirection = "column";
    dialog.style.alignItems = "flex-start";

    // Создаем контейнер для имени и текста
    var textContainer = document.createElement("div");
    textContainer.style.display = "flex";
    textContainer.style.flexDirection = "column";
    textContainer.style.alignItems = "flex-start";

    // Добавляем имя
    var name = document.createElement("span");
    name.innerHTML = "Марк";
    name.style.fontWeight = "bold";
    textContainer.appendChild(name);

    // Добавляем текст
    var text = document.createElement("span");
    text.innerHTML = "Что, где я?";
    text.style.textAlign = "center";
    textContainer.appendChild(text);

    dialog.appendChild(textContainer);

    // Добавляем кнопки
    var buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "flex-start";
    buttonContainer.style.marginTop = "20px";
    buttonContainer.style.paddingLeft = "250px";
    var nextButton = document.createElement("button");
    nextButton.innerHTML = "Далее";
    nextButton.onclick = function () {
        counter++;
        switch (counter) {
            case 1:
                text.innerHTML = "Похоже я возле того озера, где в детстве рыбачил с отцом.";
                break;
            case 2:
                text.innerHTML = "Но как я тут оказался?";
                break;
            case 3:
                text.innerHTML = "Ладно, надо выбиратся от сюда!";
                break;
            case 4:
                dialog.style.border = "3px solid black";
                name.innerHTML = "Обучение";
                text.innerHTML = "WASD или стрелочки - перемещение, E - действие";
                nextButton.remove();
                closeButton.style.marginLeft = "70px";
                closeButton.innerHTML = "Завершить";
                break;

        }
    };
    buttonContainer.appendChild(nextButton);
    var closeButton = document.createElement("button");
    closeButton.style.marginLeft = "10px";
    closeButton.innerHTML = "Пропустить";
    closeButton.onclick = function () {
        dialog.remove();
    };
    buttonContainer.appendChild(closeButton);

    dialog.appendChild(buttonContainer);

    // Добавляем диалоговое окно в документ
    document.body.appendChild(dialog);
}
// Попытка открыть ворота
function showCloseGridDialog() {
    // Создаем диалоговое окно
    var counter = 0;
    var dialog = document.createElement("div");
    dialog.style.position = "absolute";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, 500px)";
    dialog.style.background = "white";
    dialog.style.border = "3px solid gold";
    dialog.style.padding = "10px"
    dialog.style.width = "400px"
    dialog.style.height = "80px"
    dialog.style.display = "flex";
    dialog.style.flexDirection = "column";
    dialog.style.alignItems = "flex-start";

    // Создаем контейнер для имени и текста
    var textContainer = document.createElement("div");
    textContainer.style.display = "flex";
    textContainer.style.flexDirection = "column";
    textContainer.style.alignItems = "flex-start";

    // Добавляем имя
    var name = document.createElement("span");
    name.innerHTML = "Марк";
    name.style.fontWeight = "bold";
    textContainer.appendChild(name);

    // Добавляем текст
    var text = document.createElement("span");
    text.innerHTML = "Похоже эти ворота не открывали уже давно.";
    text.style.textAlign = "center";
    textContainer.appendChild(text);

    dialog.appendChild(textContainer);

    // Добавляем кнопки
    var buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "flex-start";
    buttonContainer.style.marginTop = "20px";
    buttonContainer.style.paddingLeft = "250px";
    var nextButton = document.createElement("button");
    nextButton.innerHTML = "Далее";
    nextButton.onclick = function () {
        counter++;
        switch (counter) {
            case 1:
                text.innerHTML = "Интерестно, кто и зачем поставил здесь эти ворота?";
                break;
            case 2:
                text.innerHTML = "Необходимо найти обход!";
                nextButton.remove();
                closeButton.style.marginLeft = "70px";
                closeButton.innerHTML = "Ясно";
                break;

        }
    };
    buttonContainer.appendChild(nextButton);
    var closeButton = document.createElement("button");
    closeButton.style.marginLeft = "10px";
    closeButton.innerHTML = "Пропустить";
    closeButton.onclick = function () {
        Cooldown = 0;
        dialog.remove();
    };
    buttonContainer.appendChild(closeButton);

    dialog.appendChild(buttonContainer);

    // Добавляем диалоговое окно в документ
    document.body.appendChild(dialog);
}
// Нахождение лука
function showGetBowDialog() {
    // Создаем диалоговое окно
    var counter = 0;
    var dialog = document.createElement("div");
    dialog.style.position = "absolute";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, 500px)";
    dialog.style.background = "white";
    dialog.style.border = "3px solid gold";
    dialog.style.padding = "10px"
    dialog.style.width = "400px"
    dialog.style.height = "80px"
    dialog.style.display = "flex";
    dialog.style.flexDirection = "column";
    dialog.style.alignItems = "flex-start";

    // Создаем контейнер для имени и текста
    var textContainer = document.createElement("div");
    textContainer.style.display = "flex";
    textContainer.style.flexDirection = "column";
    textContainer.style.alignItems = "flex-start";

    // Добавляем имя
    var name = document.createElement("span");
    name.innerHTML = "Марк";
    name.style.fontWeight = "bold";
    textContainer.appendChild(name);

    // Добавляем текст
    var text = document.createElement("span");
    text.innerHTML = "Ух ты, возьму ка я этот лук!";
    text.style.textAlign = "center";
    textContainer.appendChild(text);

    dialog.appendChild(textContainer);

    // Добавляем кнопки
    var buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "flex-start";
    buttonContainer.style.marginTop = "20px";
    buttonContainer.style.paddingLeft = "250px";
    var nextButton = document.createElement("button");
    nextButton.innerHTML = "Далее";
    nextButton.onclick = function () {
        counter++;
        switch (counter) {
            case 1:
                text.innerHTML = "Надеюсь не пригодится...";
                break;
            case 2:
                dialog.style.border = "3px solid black";
                name.innerHTML = "Обучение";
                text.innerHTML = "Пробел - выстрел из лука";
                nextButton.remove();
                closeButton.style.marginLeft = "70px";
                closeButton.innerHTML = "Завершить";
                break;
        }
    };
    buttonContainer.appendChild(nextButton);
    var closeButton = document.createElement("button");
    closeButton.style.marginLeft = "10px";
    closeButton.innerHTML = "Пропустить";
    closeButton.onclick = function () {
        var Cooldown = 0;
        dialog.remove();
    };
    buttonContainer.appendChild(closeButton);

    dialog.appendChild(buttonContainer);

    // Добавляем диалоговое окно в документ
    document.body.appendChild(dialog);
}

// Нахождение лука
function showMonsterDeadDialog() {
    // Создаем диалоговое окно
    var counter = 0;
    var dialog = document.createElement("div");
    dialog.style.position = "absolute";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, 500px)";
    dialog.style.background = "white";
    dialog.style.border = "3px solid gold";
    dialog.style.padding = "10px"
    dialog.style.width = "400px"
    dialog.style.height = "80px"
    dialog.style.display = "flex";
    dialog.style.flexDirection = "column";
    dialog.style.alignItems = "flex-start";

    // Создаем контейнер для имени и текста
    var textContainer = document.createElement("div");
    textContainer.style.display = "flex";
    textContainer.style.flexDirection = "column";
    textContainer.style.alignItems = "flex-start";

    // Добавляем имя
    var name = document.createElement("span");
    name.innerHTML = "Марк";
    name.style.fontWeight = "bold";
    textContainer.appendChild(name);

    // Добавляем текст
    var text = document.createElement("span");
    text.innerHTML = "Что за чертовщина тут творится?";
    text.style.textAlign = "center";
    textContainer.appendChild(text);

    dialog.appendChild(textContainer);

    // Добавляем кнопки
    var buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "flex-start";
    buttonContainer.style.marginTop = "20px";
    buttonContainer.style.paddingLeft = "250px";
    var nextButton = document.createElement("button");
    nextButton.innerHTML = "Далее";
    nextButton.onclick = function () {
        counter++;
        switch (counter) {
            case 1:
                text.innerHTML = "Необходимо скорее добратся до деревни!";
                nextButton.remove();
                closeButton.style.marginLeft = "70px";
                closeButton.innerHTML = "Завершить";
                break;
        }
    };
    buttonContainer.appendChild(nextButton);
    var closeButton = document.createElement("button");
    closeButton.style.marginLeft = "10px";
    closeButton.innerHTML = "Пропустить";
    closeButton.onclick = function () {
        var Cooldown = 0;
        dialog.remove();
    };
    buttonContainer.appendChild(closeButton);

    dialog.appendChild(buttonContainer);

    // Добавляем диалоговое окно в документ
    document.body.appendChild(dialog);
}

