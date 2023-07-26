let c = 0;
let d = 0;
var m = 20;
var f = 0;
var g;
let l;
let h;
var win;



function setup() {
    var canvas;
    canvas= createCanvas(windowWidth, windowHeight, WEBGL);
   canvas.position(0,0);
   canvas.style('z-index','-1');
}

function draw() {
win=(windowWidth/3)*-1;
  background(79,59,145);
  translate(win,0);
      push();
    fill(255, 255,255);
       pop();
  var a = f * cos(1);
  var b = d * sin(c);
  d = +m;
  f = f + 0.001;
  c = +m;
  for (let i = 0; i < 4; i++) {
    l=i;
         if(l==0){
       fill(0);
     }
     else{
   
     }
    
    for (let j = 0; j < 4; j++) {
      translate(a * i, b * j);

     stroke(20,204,172);
      strokeWeight(0.5);
      //normalMaterial();
      torus(400,0.2,5);
      rotateX(millis()/7000); 
      rotateY(millis()/8000);
      m=m+0.000001;
      
     if (m > 2) {
        m = 0;
      }
      

    }
  }
}