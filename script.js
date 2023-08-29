const MIN_GRID_SIZE = 16
var color = "#000000";

const colorPicker = document.getElementById('colorPicker');
const grid = document.getElementById('grid');
const gridSizeSlider = document.getElementById('gridSize');
const gridSizeValue = document.getElementById('sliderVal');

colorPicker.addEventListener('input', function() {
    color = this.value;
    console.log(color)
})

gridSizeSlider.addEventListener('input', function(){
    console.log(gridSizeSlider.value)
    gridSizeValue.textContent = gridSizeSlider.value + " x " + gridSizeSlider.value
})

function changeSquareColor(gridSquare){
    gridSquare.style.backgroundColor = `${color}`;
}

function drawGrid(gridSize){

    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for(i = 0; i < gridSize * gridSize; i++){
        const gridSquare = document.createElement('div')
        gridSquare.classList.add('gridSquare')
        gridSquare.addEventListener('mouseenter', function () {
            changeSquareColor(this)
        })
        grid.appendChild(gridSquare)
    }
}

drawGrid(MIN_GRID_SIZE)