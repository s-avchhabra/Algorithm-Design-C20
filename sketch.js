var fixedx,fixedy,fixedw,fixedh,movingx,movingy,movingw,movingh;
var color;


function setup() {
  createCanvas(600,600);
  fixedx = 300;
  fixedy = 300;
  fixedw = 50;
  fixedh = 100;
  movingw = 100;
  movingh = 50;

  color = rgb(77,255,255); 
  
  
}

function draw() {
  background(0);  
  
  fill(color);

  movingx = mouseX;
  movingy = mouseY;
  ellipse(fixedx,fixedy,fixedw,fixedh);
  ellipse(movingx,movingy,movingw,movingh);

  if(movingx-fixedx < (fixedw + movingw)/2 &&
      fixedx - movingx < (fixedw + movingw)/2 &&
      movingy-fixedy < (fixedh + movingh)/2 &&
      fixedy - movingy < (fixedh + movingh)/2 ){
    color = rgb(255,20,147); 
  }
  else{
    color =  rgb(77,255,255);
  }
}