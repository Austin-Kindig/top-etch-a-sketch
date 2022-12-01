const container = document.querySelector(".container");
const div = document.createElement("div");
div.classList.add("grid");
//implement button form to get user input for # of squares per side
const body = document.querySelector("body");
const button = document.querySelector("#canvasBtn");


let divSize = 30;
//get user input for grid size
button.addEventListener("click", function() {
    while (document.querySelector(".container").firstChild) {
        document.querySelector(".container").removeChild(document.querySelector(".container").firstChild);
    };
    let width = 0;
    while (width < 1 || width > 100) {
        width = prompt("Please enter desired number of pixels for width(eg.1-100):")
    };
    divSize = 960/width;
    //create square grid of divs
    div.setAttribute("style", `width: ${divSize}px;`);
    let j = width**2;
    for (i=1; i<=j; i++) {
        let clone = div.cloneNode(true);
        clone.setAttribute('id', i);
        container.appendChild(clone);
    };
});

//listen for mouse to hover over grid
container.addEventListener("mouseover", e => e.target.classList.add('hover'));
function mouseOver() {
    div.setAttribute("style", "background-color: black;")
};

