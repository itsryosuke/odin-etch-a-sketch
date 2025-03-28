const container = document.querySelector("#container");

function makeGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const column = document.createElement("div");
        column.className = "column";
        container.appendChild(column);

        for (j = 0; j < gridSize; j++) {
            const row = document.createElement("div");
            row.className = "row";
            column.appendChild(row);
        }
    }
    const row = document.querySelectorAll(".row");

row.forEach(function(mySquare){
    mySquare.addEventListener("mouseenter", function(e) {
        e.target.style.backgroundColor = "red";
    })
})
}

makeGrid(16);


document.getElementById("size").onclick = () => {
    let userInput = Number(prompt("Please enter the number of squares per side for the new grid\n\n(limit - 100)"));
    if (userInput > 0 && userInput <= 100) {
        const columns = document.querySelectorAll(".column");
        columns.forEach(function(column){
            column.remove();
        })
        makeGrid(userInput);
    }
    else {
        alert("Invalid number!\n\nChoose a number between 1 and 100")
    }
}
  

function getRandomRGB() {
  function getRandomInteger(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

const r = getRandomInteger(0, 255);
const g = getRandomInteger(0, 255);
const b = getRandomInteger(0, 255);

const rgb = `rgb(${[r,g,b].join(',')})`;

return rgb;
}


document.getElementById("rgb").onclick = () => {
    const row = document.querySelectorAll(".row");

    row.forEach(function(mySquare){
        mySquare.addEventListener("mouseenter", function(e) {
            e.target.style.backgroundColor = getRandomRGB();
        })
    })
} 


document.getElementById("reset").onclick = () => {
    const row = document.querySelectorAll(".row");

    row.forEach(function(mySquare) {
        mySquare.style.backgroundColor = "";
    })
}