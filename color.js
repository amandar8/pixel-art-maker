document.addEventListener('DOMContentLoaded', function() {

  let canvas = document.getElementById('canvas');
  let fillColor = document.getElementById('colors_container');
  let currentColor = 'red';
  let paletteColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray', 'black', 'white'];
  let brush_color = document.getElementById('brush_color');

  // this creates the div squares in the canvas
  function generateRow() {
    for (let i = 0; i < 100; i++) {
      let canvasBox = document.createElement('div');
      canvasBox.classList.add('canvas-box');
      canvas.append(canvasBox);
    }
  };
  for (let i = 0; i < 10; i++) {
    generateRow(i);
  }

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

  // this allows user to add a color to the squares
  canvas.addEventListener('click', function(event) {
    event.target.style.backgroundColor = currentColor;
  });

  // this shows the selected color in the current color palette circle
  let currentPaletteColor = document.getElementById('colors_container').addEventListener('click', function(event) {
    brush_color.style.backgroundColor = event.target.style.backgroundColor;
  });


});
