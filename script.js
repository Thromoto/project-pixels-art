let color = document.querySelectorAll('.color');

function selectedColor(event) {
    for (let index = 0; index < color.length; index += 1){
        color[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
}

window.onload = function novaCor () {
    for (let index = 0; index < color.length; index += 1) {
        color[index].addEventListener('click', selectedColor);
    }
    // selected = document.querySelectorAll('.selected');
    // console.log(selected);;
}



// window.onload = function() {
//     let alternativesColor = document.querySelector('#color-palette');
//     alternativesColor.addEventListener('click', function (event) {
//         console.log(event.target);
//     });
// };
