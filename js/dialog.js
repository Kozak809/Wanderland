function showDialog(phrases, onClose) {
    // Создаем диалоговое окно
    var currentStep = 0;
    var dialog = document.createElement("div");
    dialog.style.position = "absolute";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.transform = "translate(-50%, 20vh)";
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
    var nameSpan = document.createElement("span");
    nameSpan.style.fontWeight = "bold";
    textContainer.appendChild(nameSpan);

    // Добавляем текст
    var textSpan = document.createElement("span");
    textSpan.style.textAlign = "center";
    textContainer.appendChild(textSpan);

    dialog.appendChild(textContainer);

    // Добавляем кнопки
    var buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "flex-start";
    buttonContainer.style.marginTop = "20px";
    buttonContainer.style.paddingLeft = "250px";

    var nextButton = document.createElement("button");
    nextButton.innerHTML = "Далее";
    buttonContainer.appendChild(nextButton);

    var closeButton = document.createElement("button");
    buttonContainer.appendChild(closeButton);
    dialog.appendChild(buttonContainer);
    document.body.appendChild(dialog);

    function UpdateDialog() {
        var curentFrase = phrases[currentStep];
        nameSpan.innerHTML = curentFrase.name || 'Марк';
        textSpan.innerHTML = curentFrase.text;
        dialog.style.border = curentFrase.border || "3px solid gold";

        if (currentStep === phrases.length - 1) {
            nextButton.style.display = "none";
            closeButton.style.marginLeft = "70px";
            closeButton.innerHTML = curentFrase.lastBtnText || "Завершить";
        } else {
            nextButton.style.display = "block";
            closeButton.style.marginLeft = "10px";
            closeButton.innerHTML = "Пропустить";
        }
    }

    nextButton.onclick = function () {
        if (currentStep < phrases.length - 1) {
            currentStep++;
            UpdateDialog();
        }
    };

    closeButton.onclick = function () {
        dialog.remove();
        if (typeof onClose === "function") onClose();
    };

    UpdateDialog();
}

// 1. Стартовый диалог
function showStartDialog() {
    showDialog([
        { text: "Что, где я?" },
        { text: "Похоже я возле того озера, где в детстве рыбачил с отцом." },
        { text: "Но как я тут оказался?" },
        { text: "Ладно, надо выбиратся от сюда!" },
        {
            name: "Обучение",
            text: "WASD или стрелочки - перемещение, E - действие",
            border: "3px solid black"
        }
    ]);
}

// 2. Попытка открыть ворота
function showCloseGridDialog() {
    showDialog([
        { text: "Похоже эти ворота не открывали уже давно." },
        { text: "Интерестно, кто и зачем поставил здесь эти ворота?" },
        { text: "Необходимо найти обход!", lastBtnText: "Ясно" }
    ], function () {
        Cooldown = 0;
    });
}

// 3. Нахождение лука
function showGetBowDialog() {
    showDialog([
        { text: "Ух ты, возьму ка я этот лук!" },
        { text: "Надеюсь не пригодится..." },
        {
            name: "Обучение",
            text: "Пробел - выстрел из лука",
            border: "3px solid black"
        }
    ], function () {
        Cooldown = 0;
    });
}

// 4. Смерть монстра
function showMonsterDeadDialog() {
    showDialog([
        { text: "Что за чертовщина тут творится?" },
        { text: "Необходимо скорее добратся до деревни!" }
    ], function () {
        Cooldown = 0;
    });
}