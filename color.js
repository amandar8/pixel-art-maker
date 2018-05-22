document.addEventListener('DOMContentLoaded', function() {

  let canvas = document.getElementById('canvas');
  let fillColor = document.getElementById('colors_container');
  let currentColor = 'white';
  let paletteColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', '#A66829', 'gray', 'black', 'white'];
  let brush_color = document.getElementById('brush_color');
  let customColor = document.getElementById('color_picker');

  // this creates the div squares in the canvas
  function generateRow() {
    for (let i = 0; i < 4000; i++) {
      let canvasBox = document.createElement('div');
      canvasBox.classList.add('canvas-box');
      canvas.append(canvasBox);
    }
  };
    generateRow();

  // this creates the palette color divs
  for (let i = 0; i < paletteColors.length; i++) {
    let palette = document.createElement('div');
    palette.classList.add('palette');
    palette.style.backgroundColor = paletteColors[i];
    colors_container.append(palette);
  }

  // this allows user to click on palette color and pick up the color
  fillColor.addEventListener('click', function(event) {
    currentColor = event.target.style.backgroundColor;
  });

// this allows user to click on custom color box and select a color as well as changed current color box
  customColor.addEventListener('change', function(event) {
    event.preventDefault;
    currentColor = event.target.value;
    brush_color.style.backgroundColor = event.target.value;
  });

  // this allows user to add a color to the squares
  // canvas.addEventListener('click', function(event) {
  //   event.target.style.backgroundColor = currentColor;
  // });

  // this shows the selected color in the current color palette circle
  let currentPaletteColor = document.getElementById('colors_container').addEventListener('click', function(event) {
    brush_color.style.backgroundColor = event.target.style.backgroundColor;
  });

  document.getElementById('canvas').addEventListener('mousedown', startBrushStroke);

  function startBrushStroke() {
    event.preventDefault();
    colorCell(event);
    document.getElementById('canvas').addEventListener('mouseover', drawBrushStroke);
    document.getElementById('myBody').addEventListener('mouseup', releaseBrushStroke);
  }

  function drawBrushStroke() {
    event.preventDefault();
    colorCell(event);
  }

  function releaseBrushStroke() {
    event.preventDefault();
    document.getElementById('canvas').removeEventListener('mouseover', drawBrushStroke);
  }

  function colorCell(event) {
    event.target.style.backgroundColor = currentColor;
    event.target.style.borderColor = currentColor;
  }


});
