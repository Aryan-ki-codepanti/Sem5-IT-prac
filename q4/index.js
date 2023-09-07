const tableBox = document.getElementById("table-box");

let number = 2;
let multiplier = 1;
let fontSize = 16;

const randomColor = () => {
    let colors = ["red", "blue", "green", "yellow", "orange", "lime"];

    let idx = Math.floor(Math.random() * colors.length);
    return colors[idx];
};

const timing = 50;

const timer = setInterval(() => {
    tableBox.innerHTML += `
    <p 
        style='font-size: ${fontSize}px; color: ${randomColor()}'
    >${number} x ${multiplier} = ${number * multiplier}</p>`;

    if (multiplier == 10) {
        number++;
        multiplier = 1;
    } else multiplier++;

    if (number == 11) clearInterval(timer);

    fontSize *= 1.02;
}, timing);
