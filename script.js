document.addEventListener("DOMContentLoaded", function() {
  let grid = []
  let num_row = 50
  let num_col = 50

  function render(){
    for (let i=0; i < num_row; i++){
      let target = document.querySelector('#container');
      let col = document.createElement('div');
      col.className = "col"
      target.appendChild(col);

      grid.push([]);

      for (let j=0; j < num_col; j++){
        let pix = document.createElement('div');
        pix.style.backgroundColor = "red"
        pix.className = "pixel"
        col.appendChild(pix);
        
        grid[i].push(pix.backgroundColor);
      }
    }
  }

  function render_colors(){
    for (let i=0; i < num_row; i++){
      for (let j=0; j < num_col; j++){

        // set color attribute according to grid i j 
      }
    }
  }
  render();
  //to dos:
  //
  //add event listener for click
  //
  //add color selector
  //
  //add css, rules for color divs, layout, containers 

});
