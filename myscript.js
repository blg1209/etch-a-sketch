// select the 600 x 600 grid-container
const container = document.querySelector('#grid-container');



// this corresponds to the 16x16 in the #grid-container

let defaultSize = 256    
function makeSquares() {
        for (let i = 0; i < defaultSize; i++) {
            let square = document.createElement('div');
            square.classList.add("box");
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

    removeSquares();
    
    // backticks are need specifically for the template literals
    container.style.setProperty('grid-template-columns', `repeat(${col},1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${row},1fr)`);
    
    for(let i=0; i<squared; i++){
        let square = document.createElement('div');
        square.classList.add("box");
        container.appendChild(square);
    } 
    // event listener after re-size that listens for click and calls mouseOverListner()
    let box = document.querySelectorAll(".box");
    box.forEach((box)=>{
        box.addEventListener('click',(event)=>{ 
            box.classList.add('change');
            mouseOverListener();
         });
       });
}
// function removes the default squares so that we replace and don't add on new squares
function removeSquares(){
    while(container.firstChild){
        container.firstChild.remove();
    }}
// mouse over that changes the color and is called when the user clicks on a square
function mouseOverListener(){
    let box = document.querySelectorAll('.box');
    box.forEach((box)=>{
        box.addEventListener('mouseover',(event)=>{ 
            box.classList.add('change');
        });
        });
    }

// Creates Squares
makeSquares();
// has to be defined after squares are created. Then iterate over array like object and then call listener()
let box = document.querySelectorAll(".box");
box.forEach((box)=>{
    box.addEventListener('click',(event)=>{ 
        box.classList.add('change');
        mouseOverListener();
     });
    });