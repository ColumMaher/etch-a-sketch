const MIN_GRID_SIZE = 16
var color = "#000000";

const colorPicker = document.getElementById('colorPicker');
const grid = document.getElementById('grid');
const gridSizeSlider = document.getElementById('gridSize');
const gridSizeValue = document.getElementById('sliderVal');

const clearBtn = document.getElementById('clearBtn');
const toggleBtn = document.getElementById('toggleBtn');

colorPicker.addEventListener('input', function() {
    color = this.value;
    console.log(color)
})

gridSizeSlider.addEventListener('input', function(){
    console.log(gridSizeSlider.value)
    gridSizeValue.textContent = gridSizeSlider.value + " x " + gridSizeSlider.value
})

clearBtn.addEventListener('click', function(){
    clearGrid();
    console.log(gridSizeSlider.value)
    drawGrid(gridSizeSlider.value)
})

toggleBtn.addEventListener('click', function(){
    toggleSquareBorder()
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
        gridSquare.classList.add('active')
        gridSquare.addEventListener('mouseenter', function () {
            changeSquareColor(this)
        })
        grid.appendChild(gridSquare)
    }
}

function resetGrid(){
    grid.innerHTML = '';
}

function clearGrid(){
    resetGrid();
}

function toggleSquareBorder(){
    const gridSquare = document.querySelectorAll('.gridSquare');
    console.log(gridSquare)
    gridSquare.forEach(square => {
        square.classList.toggle('active')
    })
}

drawGrid(MIN_GRID_SIZE)