function setup() {
    createCanvas(400, 400);
    background("rgb(116,63,235)");
  }
  
  function draw() {
    
    
    fill("rgb(245,30,198)")
    stroke("black");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 20);
      
    }
  }