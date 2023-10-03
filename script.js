const grid = document.querySelector("#grid");

const slider = document.getElementById("myRange");
const output = document.getElementById("selection");
output.textContent = slider.value + "x" + slider.value;
let sqNum = slider.value * slider.value;

slider.addEventListener("input", function () {
    output.textContent = this.value + "x" + this.value;
});



function newGrid(sqNum) {
    for (i = 0; i < sqNum; i++) {
        let content = document.createElement("div");
        content.classList.add("square");
        content.style.height = (720 / slider.value) + "px";
        content.style.width = (720 / slider.value) + "px";
        content.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black"
        });
        grid.appendChild(content);
    }
};


/*
const squares = document.querySelectorAll("square");
squares.forEach((square) => {
    square.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = "black";
    })
}); */

newGrid(sqNum); 