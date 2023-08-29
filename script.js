const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', function() {
    const color = this.value;
    console.log(color)
})

const gridSizeSlider = document.getElementById('gridSize')
const gridSizeValue = document.getElementById('sliderVal')

gridSizeSlider.addEventListener('input', function(){
    console.log(gridSizeSlider.value)
    gridSizeValue.textContent = gridSizeSlider.value + " x " + gridSizeSlider.value
})