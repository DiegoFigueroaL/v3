function changeHEX(){
    let hex = '#'

    for (var i = 0; i < 6; i++){
        var rand = Math.floor(Math.random()*hexValues.length)
        hex +=  hexValues[rand]
    }
    value.textContent = hex
    body.style.backgroundColor = hex
    button.style.color = hex



}


const button = document.querySelector('#boton');
const body = document.querySelector('body');
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const value = document.querySelector('#color');

button.addEventListener('click',changeHEX)