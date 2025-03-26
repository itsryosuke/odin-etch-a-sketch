const container = document.querySelector("#container");

function makeGrid() {
    for (i = 0; i < 16; i++) {
        const column = document.createElement("div");
        column.className = "column";
        container.appendChild(column);

        for (j = 0; j < 16; j++) {
            const row = document.createElement("div");
            row.className = "row";
            column.appendChild(row);
        }
    }
}

makeGrid();

const row = document.querySelectorAll(".row");

row.forEach(function(mySquare){
    mySquare.addEventListener("mouseenter", function(e) {
        e.target.style.backgroundColor = "red";
    })
})

