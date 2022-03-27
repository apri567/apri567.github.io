'use strict'; // Включаем "строгий режим"

// Сохраняем значение HTML тегов в переменные
const resultTag = document.getElementById('result');
const resultParagraph = document.getElementById('resultParagraph');
const destroyBtn = document.getElementById('destroyBtn');
const textInput = document.getElementById('textInput');
const symbolInput = document.getElementById('symbolInput');
const textParagraph = document.getElementById('textParagraph');
const symbolParagraph = document.getElementById('symbolParagraph');
const backBtn = document.getElementById('backBtn');
const sumBtn = document.getElementById('sumBtn');

// Функция, удаляющая символ из текста:
function destroy () {
    const textVal = textInput.value; // Сохраняем значение из поля ввода текста
    const symbolVal = symbolInput.value; // Сохраняем значение из поля ввода символа
    let result = ''; // Создадим переменную, в будущем хранящую результат удаления символа из текста
    for (let i of textVal) { // Перебираем символы в textVal
        if (i != symbolVal) { // Если символ не равен символу, который нужно удалить:
            result += i; // Добавляем символ в переменную, хранящую результат
        }
        else { // Иначе:
            result += ' '; // Добавляем пробел вместо символа, который нужно пропустить
        }
    }
    return result; // Возвращаем результат
}

// Функция отображения результата, запускается кнопкой УНИЧТОЖИТЬ:
function displayResult () {
    // Если поле ввода текста не пустое:
    if (textInput.value != '') {
        resultTag.style.display = 'block'; // Отобразить тег с результатом
        resultTag.innerHTML = destroy(); // Изменить содержание тега с результатом
        resultParagraph.style.display = 'block'; // Отобразить текст "Результат:"
        destroyBtn.style.display = 'none'; // Скрыть кнопку УНИЧТОЖИТЬ
        textInput.style.display = 'none'; // Скрыть поле ввода текста
        symbolInput.style.display = 'none'; // Скрыть поле ввода символа, который нужно удалить
        textParagraph.style.display = 'none'; // Скрыть надпись "Введите текст:"
        symbolParagraph.style.display = 'none'; // Скрыть надпись "Введите символ:"
        backBtn.style.display = 'block'; // Показать кнопку "Назад"
        displaySumBtn(); // Запустить функцию по отображению кнопки "+"
    }
}

// Функция, скрывающая результат и возвращающая всё в начальное положение, срабатывает при нажатии кнопки "Назад":
function back () {
    resultTag.style.display = 'none'; // Скрыть результат
    resultParagraph.style.display = 'none'; // Скрыть надпись "Результат:"
    destroyBtn.style.display = 'block'; // Показать кнопку УНИЧТОЖИТЬ
    textInput.style.display = 'inline'; // Показать поле ввода текста
    symbolInput.style.display = 'inline'; // Показать поле ввода символа, который нужно удалить
    textParagraph.style.display = 'block'; // Показать надпись "Введите текст:"
    symbolParagraph.style.display = 'block'; // Показать надпись "Введите символ:"
    backBtn.style.display = 'none'; // Скрыть кнопку "Назад"
    sumBtn.style.display = 'none'; // Скрыть кнопку "+"
}

// Функция, решающая, нужно ли показывать кнопку "+", и отображающая её:
function displaySumBtn () {
    let resultList = resultTag.innerHTML.split(' '); // Разделяем готовый текст по пробелам в список
    let letterInList = false; // Переменная, определяющая, есть ли буква в списке
    for (let i of resultList) { // Перебираем список
        if (isNaN(+i) == true) { // Если символ невозможно преобразовать в число (если буква в списке)
            letterInList = true; // Изменяем значение переменной на true
        }
    }
    if (letterInList == false) { // Если букв нет в списке
        sumBtn.style.display = 'block'; // Отобразить кнопку "+"
    }
}

// Функция, которая суммирует все разделённые числа в списке, срабатывает при нажатии кнопки "+":
function sum () {
    let resultList = resultTag.innerHTML.split(' '); // Разделяем готовый текст по пробелам в список
    let sumResult = 0; // Создаём переменную, которая будет хранить результат суммирования чисел
    for (let i of resultList) { // Перебираем список
        sumResult += +i; // Суммируем числа
    }
    resultTag.innerHTML = sumResult.toString(); // Отображаем результат на экран
}
