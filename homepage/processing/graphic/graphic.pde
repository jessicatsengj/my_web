Ink ink1;
Ink ink2;
Ink ink3;

PImage bg;
PImage ring1;

int w = 345;
int h = 345;



void setup(){
  size(w,h);
  bg = loadImage("graphic.png");
  ring1 = loadImage("ring1.png");
  frameRate = 30;
  ink1 = new Ink(70,w/3);
  ink2 = new Ink(40,w/3*2);
  ink3 = new Ink(30,w*7/12);
}

void draw(){
 background(0);
 image(bg,0,0,w,h);
 image(ring1,w/3,-h/6,w, h);
 

 ink1.display(37,52,7/2,4);
 ink1.run(1);
 ink1.checkEdge(w/3);
 
 ink2.display(30,40,7,3);
 ink2.run(2);
 ink2.checkEdge(w/3*2);
 
 ink3.display(10,17,7,5);
 ink3.run(5/3);
 ink3.checkEdge(w*7/12);


}
