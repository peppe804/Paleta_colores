document.getElementById('color').addEventListener('input', getColor) // se llama al documento , lo primero que hay que hacer

function getColor(){

let col = document.getElementById('color').value

document.getElementById('visualizar').style.background=col
document.getElementById('visualizar').innerHTML=col
}