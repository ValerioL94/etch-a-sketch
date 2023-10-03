const grid = document.getElementById("grid");
const slider = document.getElementById("myRange");
const output = document.getElementById("selection");
const blackBtn = document.getElementById("black");
const rgbBtn = document.getElementById("rgb");
const resetBtn = document.getElementById("reset");

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

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = "rgb(" + x + "," + y + "," + z + ")";
    return color;
}

slider.addEventListener("input", function () {
    output.textContent = (this.value + "x" + this.value);
});
slider.addEventListener("input", function () {
    removeChildNodes(grid);
    newGrid((this.value * this.value));
})

let cell = grid.children;

blackBtn.addEventListener("click", function () {
    for (i = 0; i < (slider.value * slider.value); i++) {
        cell[i].addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
        });
    }
})

rgbBtn.addEventListener("click", function () {
    for (i = 0; i < (slider.value * slider.value); i++) {
        cell[i].addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = randomColor();
        });
    }
})

resetBtn.addEventListener("click", function () {
    for (i = 0; i < (slider.value * slider.value); i++) {
        cell[i].style.backgroundColor = "white";
    }
})
newGrid(sqNum);