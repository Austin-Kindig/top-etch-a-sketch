//get user input for grid size
let width = prompt("Please enter desired number of boxes for width:")
let divSize = 960/width;
//create square grid of divs
const container = document.querySelector(".container");
const div = document.createElement("div");
div.classList.add("grid");
div.setAttribute("style", `width: ${divSize}px;`)
//div.setAttribute("style", `height: ${divSize}px;`)
//let width = 16;
let j = width**2;
for (i=1; i<=j; i++) {
    let clone = div.cloneNode(true);
    clone.setAttribute('id', i);
    container.appendChild(clone);
};

//listen for mouse to hover over grid
window.addEventListener("mouseover", e => e.target.classList.add('hover'));
function mouseOver() {
    div.setAttribute("style", "background-color: black;")
};

