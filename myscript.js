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

// access the range on the sidebar when it's selected and call function that returns the value
let slider = document.getElementById('slider').oninput = function(){
    displaySliderValue();
}
function displaySliderValue(){
    let val = document.getElementById('slider').value;
    updateSquares(val);
    console.log(val);
}

// function called when slider is adjusted. takes in slider value, updates grid and CSS
function updateSquares(num){
    let col = num;
    let row = num;
    let squared = col * row;

    container.style.setProperty('grid-template-columns', 'repeat(${squared},1fr)');
    container.style.setProperty('grid-template-rows', 'repeat(${squared},1fr)');

    for(let i=0; i<squared; i++){
        let square = document.createElement('div');
        square.className = "row";
        container.appendChild(square)
    }
}      


makeSquares();

