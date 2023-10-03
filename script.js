const grid = document.querySelector("#grid");
const slider = document.getElementById("myRange");
const output = document.getElementById("selection");
output.textContent = (slider.value + "x" + slider.value);
let sqNum = (slider.value * slider.value);

function newGrid(sqNum) {
    for (i = 0; i < sqNum; i++) {
        let content = document.createElement("div");
        content.classList.add("square");
        content.style.height = ((720 / slider.value) + "px");
        content.style.width = ((720 / slider.value) + "px");
        content.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black"
        });
        grid.appendChild(content);
    }
};

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

slider.addEventListener("input", function () {
    output.textContent = (this.value + "x" + this.value);
});
slider.addEventListener("input", function () {
    removeChildNodes(grid);
    newGrid((this.value * this.value));
})



/*
const squares = document.querySelectorAll("square");
squares.forEach((square) => {
    square.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = "black";
    })
}); */
newGrid(sqNum);