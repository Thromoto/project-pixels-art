let color = document.querySelectorAll('.color');

function selectedColor(event) {
    for (let index = 0; index < color.length; index += 1) {
        color[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
}

window.onload = function novaCor() {
    for (let index = 0; index < color.length; index += 1) {
        color[index].addEventListener('click', selectedColor);
    }

    const pixelBoard = document.getElementById('pixel-board');
}

function corPixel () {
    let boardPixel = document.getElementById('pixel-board');
    boardPixel.addEventListener('click', function(event){
        let pixelSelect = event.target;
        let colorSelected = document.querySelector('.selected');
        
        if (pixelSelect.classList == 'pixel'){
            pixelSelect.id = colorSelected.id;
        }
    })
}
corPixel();


function limpandoPixel () {
    let button = document.querySelector('#clear-board');
    let pixel = document.querySelectorAll('.pixel');
    button.addEventListener('click', function () {
        for (let index = 0; index < pixel.length; index +=1){
            pixel[index].id = document.getElementsByClassName('pixel');
        }
    })
}
limpandoPixel();