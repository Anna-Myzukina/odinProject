let container = document.querySelector(".container");
let createBtn = document.querySelector(".create");
let clrDivBtn = document.querySelector(".clearBtn");
let logMsg = document.querySelector(".logs");

document.body.addEventListener("load", createDivs(4, 4));

function createDivs(columns, rows) {
    if (columns < 4 || rows < 4) {
        logMsg.textContent = "Minimum rows 4, Minimun columns 4";
        logMsg.style.color = "red";
        return;
    };
    if (container.hasChildNodes) {
    	deleteChildNodes();
    }
    if (columns > 20 || rows > 20) {
        logMsg.textContent = "Maximum rows 20, Maximum columns 20";
        logMsg.style.color = "red";
        return;
    }
    // style the grid container according to input values
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    let innerCount = 1;
    for (let i = 0; i < (columns * rows); i++) {
        let newDiv = document.createElement("div");
        newDiv.textContent = `div ${innerCount}`;

        if ((innerCount % 2) !== 0) {
            newDiv.className = "bg-teal";
        } else
            newDiv.className = "domDiv";

        innerCount++;
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseenter", () => {
            newDiv.classList.toggle("domHovered");
        });
    }
}

function deleteChildNodes() {
    while (container.childElementCount > 0)
        container.removeChild(container.lastChild);
}

function clearDivs() {
    if (!container.hasChildNodes()) {
        logMsg.textContent = ("Nothing to clear");
        logMsg.style.color = "red";
        return;
    }
    deleteChildNodes();
}

createBtn.addEventListener("click", () => {
    let userCol = document.getElementsByName("columns")[0].value;
    let userRow = document.getElementsByName("rows")[0].value;
    createDivs(userCol, userRow);
});

clrDivBtn.addEventListener("click", clearDivs);