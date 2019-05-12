document.addEventListener("DOMContentLoaded", function() {
  let grid = []
  let colors = ["white", "silver", "gray", "black", "red", "maroon", "yellow", "olive", "lime", "green", "aqua", "teal", "blue", "navy", "fuchsia", "purple"]
  let num_row = 50
  let num_col = 50
  let paint_color = "red"
  function color(event){
    console.log(this.nodeName)
    console.log(event)
    //this.style.backgroundColor = paint_color;

  }

  function render(){
    for (let i=0; i < num_row; i++){ // loop through rows, creating column containers
      let target = document.querySelector('#container');
      let row = document.createElement('div');
      row.className = "row" //appends .col divs to #container
      target.appendChild(row);

      grid.push([]); // adds a column to the data grid

      for (let j=0; j < num_col; j++){ // loop through columns, adding pixels to column
        let pix = document.createElement('div');
        pix.className = "pixel" // appends .pixel s to .col s 
        row.appendChild(pix);
        
        grid[i].push(pix.backgroundColor); // records background color in grid. note that 0,0 corresponds to top left pixel (i think?!!?)

        pix.addEventListener("click", color);
      }
    }

    let color_container = document.querySelector('#colors')
    for(let i=0; i < colors.length;i++){
      let choice = document.createElement('div')
      choice.className = "color-choice rounded-circle"
      choice.style.backgroundColor = colors[i]
      choice.style.textColor = colors[i]
      choice.innerText = colors[i]
      color_container.appendChild(choice)

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
