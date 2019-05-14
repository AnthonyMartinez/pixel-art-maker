/* 
 * to do 
 * * finalize pixel size
 * * figure out a way to embed values in the color palletes
 * * figure out why the color circles look shitty - flexing somehow? text
 * stretching?
 * * add event listener to colors - make a colorchange() function that changes
 * a global
 * * maybe have a corrent color display in its own row- could be cool
 * * dont be a nut and actually ship
 * */
document.addEventListener("DOMContentLoaded", function() {
  let grid = []
  let colors = ["white", "silver", "gray", "black", "red", "maroon", "yellow", "olive", "lime", "green", "aqua", "teal", "blue", "navy", "fuchsia", "purple"]
  let num_row = 50
  let num_col = 50
  let paint_color = "red"

  function render(){
    let main = document.querySelector('#main');
    let pixel_container = document.querySelector('#container');
    for (let i=0; i < num_row; i++){ // loop through rows, creating column containers
      let row = document.createElement('div');
      row.className = "row justify-content-sm-center" //appends .col divs to #container
      pixel_container.appendChild(row);

      grid.push([]); // adds a column to the data grid

      for (let j=0; j < num_col; j++){ // loop through columns, adding pixels to column
        let pix = document.createElement('div');
        pix.className = "pixel" // appends .pixel s to .col s 
        row.appendChild(pix);
        
        grid[i].push(pix.backgroundColor); // records background color in grid. note that 0,0 corresponds to top left pixel (i think?!!?)

        //pix.addEventListener("click", color(event));
      }
    }

    let color_container = document.querySelector('#colors')
    
    for(let i=0; i < colors.length;i++){
      let choice = document.createElement('div')
      choice.className = "color-choice rounded-circle"
      choice.style.backgroundColor = colors[i]
      choice.setAttribute('id', colors[i])
      color_container.appendChild(choice)

      //choice.addEventListener("click", color_select(event))

    }
    // now set the current
    let display = document.createElement('h1')
    let curr = document.querySelector("#current")
    display.style.color = paint_color
    display.textContent = "the current color is " + paint_color
    curr.appendChild(display)
    
    main.addEventListener('click', (e) => {color(e)})
  }

  function render_colors(){
    for (let i=0; i < num_row; i++){
      for (let j=0; j < num_col; j++){

        // set color attribute according to grid i j 
      }
    }
  }

  function color(e){
    console.log(e)
    if(e.target.className === "color-choice rounded-circle"){
      paint_color = e.target.id
      console.log('new color', paint_color)
    }
    if(e.target.className === "pixel"){
      e.target.style.backgroundColor = paint_color
      console.log('paint it', paint_color)
    }
    let display = document.querySelector('h1')
    display.style.color = paint_color
    display.textContent = "the current color is " + paint_color
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
