function windowResized(){
  resizeCanvas(windowWidth,windowHeight/2);
}



function setup() {
    let m;
let x = 0;
var canvas;
 canvas= createCanvas(windowWidth/3, windowHeight, WEBGL);
canvas.position(0,0);
canvas.style('z-index','-1');

}



function draw() {

    if (windowWidth>800)
    {   background(255,255,255,0);

let x=255;


  let i=1;

  
 // translate(p5.Vector.fromAngle(millis() / 1000, 10));

  for(let i=1;i<3;i++){
 
    
   noFill();
    //stroke(226,94,250);
    stroke(96,227,247);
  torus(mouseX,windowHeight,5);

   
    rotateX(frameCount/1000);  
    rotateY(frameCount/1000);
 
  }

  }

}


  