// select the 600 x 600 grid-container
const container = document.querySelector('#grid-container');

// this corresponds to the 16x16 in the #grid-container
let defaultSize = 256    
function makeSquares() {
        for (let i = 0; i < defaultSize; i++) {
            let square = document.createElement('div');
            square.className = "row";
            container.appendChild(square);
            }                
        }

let slider = document.getElementById('slider').oninput = function(){
    displaySliderValue();
}

function displaySliderValue(){
    let val = document.getElementById('slider').value;
    let updateText = document.getElementById('slider-value').textContent;
    


    console.log(updateText.textContent = (val));
}
makeSquares();
