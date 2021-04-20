import('./render.js');

function handleSelect(measure) {
    let title = document.getElementById("title");
    let fromMeasure = document.getElementById("from");
    let toMeasure = document.getElementById("to");

    document.getElementById('fromInput').value = "";
    document.getElementById('toInput').value = "";

    switch (measure) {
        case "temperature":
            title.innerHTML = "Температура";
            fromMeasure.innerHTML = "Цельсии";
            toMeasure.innerHTML = "Фаренгейты";
            break;
        case "weight":
            title.innerHTML = "Масса";
            fromMeasure.innerHTML = "Килограммы";
            toMeasure.innerHTML = "Фунты";
            break;
        case "volume":
            title.innerHTML = "Объём";
            fromMeasure.innerHTML = "Литры";
            toMeasure.innerHTML = "Кубические сантиметры";
            break
        case "speed":
            title.innerHTML = "Скорость";
            fromMeasure.innerHTML = "Километры в час";
            toMeasure.innerHTML = "Метры в секунду";
            break
        case "time":
            title.innerHTML = "Время";
            fromMeasure.innerHTML = "Часы";
            toMeasure.innerHTML = "Минуты";
            break;
        default:
            break
    }
}

function getTemperature(func, value) {
    if (func === toSecond) {
        return (value * 9 / 5) + 32
    } else if (func === toFirst) {
        return (value - 32) * 5 / 9;
    }
}

function getWeight(func, value) {
    if (func === toSecond) {
        return value * 2.2046;
    } else if (func === toFirst) {
        return value / 2.2046;
    }
}

function getVolume(func, value) {
    if (func === toSecond) {
        return value * 1000;
    } else if (func === toFirst) {
        return value / 1000;
    }
}

function getSpeed(func, value) {
    if (func === toSecond) {
        return value / 3.6;
    } else if (func === toFirst) {
        return value * 3.6;
    }
}

function getTime(func, value) {
    if (func === toSecond) {
        return value * 60;
    } else if (func === toFirst) {
        return value / 60;
    }
}

function toSecond() {
    let fromValue = document.getElementById('fromInput').value;
    let title = document.getElementById('title').innerHTML;

    switch (title) {
        case "Температура":
            document.getElementById('toInput').value = getTemperature(toSecond, fromValue);
            break
        case "Масса":
            document.getElementById('toInput').value = getWeight(toSecond, fromValue);
            break
        case "Объём":
            document.getElementById('toInput').value = getVolume(toSecond, fromValue);
            break
        case "Скорость":
            document.getElementById('toInput').value = getSpeed(toSecond, fromValue);
            break
        case "Время":
            document.getElementById('toInput').value = getTime(toSecond, fromValue);
            break
        default:
            break
    }
}

function toFirst() {
    let fromValue = document.getElementById('toInput').value;
    let title = document.getElementById('title').innerHTML;

    switch (title) {
        case "Температура":
            document.getElementById('fromInput').value = getTemperature(toFirst, fromValue);
            break
        case "Масса":
            document.getElementById('fromInput').value = getWeight(toFirst, fromValue);
            break
        case "Объём":
            document.getElementById('fromInput').value = getVolume(toFirst, fromValue);
            break
        case "Скорость":
            document.getElementById('fromInput').value = getSpeed(toFirst, fromValue);
            break
        case "Время":
            document.getElementById('fromInput').value = getTime(toFirst, fromValue);
            break
        default:
            break
    }
}