'use strict';

const resultTag = document.getElementById('result');
const resultParagraph = document.getElementById('resultParagraph');
const destroyBtn = document.getElementById('destroyBtn');
const textInput = document.getElementById('textInput');
const symbolInput = document.getElementById('symbolInput');
const textParagraph = document.getElementById('textParagraph');
const symbolParagraph = document.getElementById('symbolParagraph');
const backBtn = document.getElementById('backBtn');
const sumBtn = document.getElementById('sumBtn');

function destroy () { // 2
    const textVal = textInput.value;
    const symbolVal = symbolInput.value;
    let result = '';
    for (let i of textVal) {
        if (i != symbolVal) {
            result += i;
        }
        else {
            result += ' ';
        }
    }
    return result;
}

function displayResult () { // 1
    if (textInput.value != '') {
        resultTag.style.display = 'block';
        resultTag.innerHTML = destroy();
        resultParagraph.style.display = 'block';
        destroyBtn.style.display = 'none';
        textInput.style.display = 'none';
        symbolInput.style.display = 'none';
        textParagraph.style.display = 'none';
        symbolParagraph.style.display = 'none';
        backBtn.style.display = 'block';
        displaySumBtn();
    }
}

function back () {
    resultTag.style.display = 'none';
    resultParagraph.style.display = 'none';
    destroyBtn.style.display = 'block';
    textInput.style.display = 'inline';
    symbolInput.style.display = 'inline';
    textParagraph.style.display = 'block';
    symbolParagraph.style.display = 'block';
    backBtn.style.display = 'none';
    sumBtn.style.display = 'none';
}

function displaySumBtn () { // 3
    let resultList = resultTag.innerHTML.split(' ');
    let letterInList = false;
    for (let i of resultList) {
        if (isNaN(+i) == true) {
            letterInList = true;
        }
    }
    if (letterInList == false) {
        sumBtn.style.display = 'block';
    }
}

function sum () {
    let resultList = resultTag.innerHTML.split(' ');
    let sumResult = 0;
    for (let i of resultList) {
        sumResult += +i;
    }
    resultTag.innerHTML = sumResult.toString();
}
