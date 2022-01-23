const colorSet = [
    ["#FF9696", "#8C6BAE",],
    ["#A8C8ED", "#7673DC",],
    ["#000046", "#1CB5E0",],
    ["#EEAECA", "#91BEF3",],
    ["#AAC0FF", "#8C6BAE",],
    ["#48355B", "#91BEF3",],
    ["#EB5757", "#000000"],
    ["#e1eec3", "#f05053"],
    ["#000000", "#0f9b0f"],
    ["#36D1DC", "#5B86E5"],
    ["#283c86", "#45a247"],
    ["#c0392b", "#8e44ad"],
];

const body = document.querySelector("body");

function setBackground() {
    const randomColorSet = colorSet[Math.floor(Math.random() * colorSet.length)];
    body.style.background = `linear-gradient(to right, ${randomColorSet[0]}, ${randomColorSet[1]})`;
}

setBackground();