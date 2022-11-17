//create 16x16 grid of divs
const container = document.querySelector(".container");
container.textContent = "Container";
const div = document.createElement("div");
div.classList.add("grid");
let j = 16*16;
for (i=1; i<=j; i++) {
    let clone = div.cloneNode(true);
    clone.setAttribute('id', i);
    clone.textContent = `div #${i}`;
    container.appendChild(clone);
    

}
