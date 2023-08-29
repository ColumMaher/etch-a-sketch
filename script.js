const MIN_GRID_SIZE = 16;
var color = "#000000";
var mode = "color";

const colorPicker = document.getElementById('colorPicker');
const grid = document.getElementById('grid');
const gridSizeSlider = document.getElementById('gridSize');
const gridSizeValue = document.getElementById('sliderVal');

const colorBtn = document.getElementById('colorBtn');
colorBtn.classList.add('activeBtn')
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const toggleBtn = document.getElementById('toggleBtn');

colorPicker.addEventListener('input', function() {
    color = this.value;
    console.log(color)
})

colorBtn.addEventListener('click', function(){
    changeActiveButton("color");
})

rainbowBtn.addEventListener('click', function(){
    changeActiveButton("rainbow");
})

eraserBtn.addEventListener('click', function(){
    changeActiveButton("eraser");
})

clearBtn.addEventListener('click', function(){
    clearGrid();
    console.log(gridSizeSlider.value)
    drawGrid(gridSizeSlider.value)
})

toggleBtn.addEventListener('click', function(){
    toggleSquareBorder()
})

gridSizeSlider.addEventListener('input', function(){
    console.log(gridSizeSlider.value)
    gridSizeValue.textContent = gridSizeSlider.value + " x " + gridSizeSlider.value
})

gridSizeSlider.addEventListener('mouseup', function(){
    clearGrid()
    drawGrid(gridSizeSlider.value)
})

function changeActiveButton(button){
    if(button === "color"){
        colorBtn.classList.add('activeBtn');
        mode = "color";
        rainbowBtn.classList.remove('activeBtn');
        eraserBtn.classList.remove('activeBtn');
    } 
    else if(button === "rainbow"){
        rainbowBtn.classList.add('activeBtn');
        mode = "rainbow";
        colorBtn.classList.remove('activeBtn');
        eraserBtn.classList.remove('activeBtn');
    } else {
        eraserBtn.classList.add('activeBtn');
        mode = "eraser";
        colorBtn.classList.remove('activeBtn');
        rainbowBtn.classList.remove('activeBtn');
    }
}

function getRainbowColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeSquareColor(gridSquare){
    if(mode === "color"){
        gridSquare.style.backgroundColor = `${color}`;
    } 
    else if ( mode === "rainbow"){
        let color = getRainbowColor();
        gridSquare.style.backgroundColor = `${color}`;
    }
    else {
        gridSquare.style.backgroundColor = "#ffffff"
    }
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