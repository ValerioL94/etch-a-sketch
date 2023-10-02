const container = document.querySelector("#container");


let num = 16;
let sqNum = num * num;

function newDiv(sqNum) {
    for (i = 0; i < sqNum; i++) {
        let content = document.createElement("div");
        content.classList.add("square");
        content.style.height = (720 / num) + "px";
        content.style.width = (720 / num) + "px";
        container.appendChild(content);
    }
};

window.onload = newDiv(sqNum); 