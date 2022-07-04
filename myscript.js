// select the 600 x 600 grid-container
const container = document.querySelector('#grid-container');
let click = false;

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
    
    //  event listener calls to call colorSquare, which only draws if click is true. clicking in body enables drawing
    for(let i=0; i<squared; i++){
        let square = document.createElement('div');
        square.classList.add("box");
        square.addEventListener('mouseover',colorSquare)
        container.appendChild(square);
    } 
}
updateSquares(16);

// function removes the default squares so that we replace and don't add on new squares
function removeSquares(){
    while(container.firstChild){
        container.firstChild.remove();
    }}

// listener that enables drawing in the colorSquare function
container.addEventListener('click', ()=>{
    click = !click;
})
function colorSquare(){
    if(click){
        this.style.backgroundColor = 'black';
        console.log('Coloring')
    }
    else{
        console.log('not coloring')
    }
}