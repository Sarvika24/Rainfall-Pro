var d;
function setup() {
  createCanvas(500,500);
 // d = new Drop(200) ;
  d = new Drop(random(10,450)) ;
 
  

  
}

function draw() {
  background(253, 208, 221); 
  d.show();
  d.fall(); 

  
  drawSprites();
}