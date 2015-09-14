PImage bg;
int w = 400;
int h = 400;
int[] xpos = new int[80]; 
int[] ypos = new int[80];

void setup(){
  size(w,h);
  bg = loadImage("writing.png");
  
  for (int i = 0; i < xpos.length; i ++ ) {
    xpos[i] = 0; 
    ypos[i] = 0;
  }
}

void draw(){
  image(bg,0,0,w,h);
  
  for (int i = 0; i < xpos.length-1; i ++ ) { 
    xpos[i] = xpos[i+1];
    ypos[i] = ypos[i+1];
  }

  xpos[xpos.length-1] = mouseX; 
  ypos[ypos.length-1] = mouseY;
  
  // Draw everything
  for (int i = 0; i < xpos.length; i ++ ) {
    noStroke();
    fill(0, 255-i, 255-i*3, 12);
    ellipse(xpos[i],ypos[i],i/5*2,i/5*2);
  }
}

