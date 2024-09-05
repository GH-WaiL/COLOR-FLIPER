const body = document.getElementsByTagName("body")[0];// recuperer la partie body et engistre a une constante body et l'indice pour le 1er element
const title = document.getElementsByTagName("h2")[0]; // ou avec getElementById("title")
function setcolor (name) {
   // body.style.backgroundColor = name;
    title.style.color = name; 
}

function randomcolor () {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
}