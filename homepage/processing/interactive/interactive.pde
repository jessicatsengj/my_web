PImage bg;
PImage flower;

int w = 400;
int h = 400;
int X, Y;
int nX, nY;
int fw = w/8;
int fh = h/8;
int delay = 10;
float rot;

int flakes = 50;
Snow[] snows = new Snow[flakes];

float wind = 0;


void setup(){
  size(w,h);
  bg = loadImage("interactive3.png");
  flower = loadImage("plum.png");
  frameRate(10);
  X = width/2 ;
  Y = height/2 ;
  nX = X;
  nY = Y;
  rot = 0.0;
  
  for (int i=0; i<flakes; i++){
    snows[i] = new Snow();
  }
}

void draw(){
  
 fw += int(sin(frameCount/5)*2); 
 fh += int(sin(frameCount/5)*2);
 
 background(0);
 imageMode(CORNER);
 image(bg,0,0,w,h);
 
 
 X+=(nX-X)/delay;
 Y+=(nY-Y)/delay;

 if(mouseX>w-5){
   X+=5;
 } else if(mouseX<5){
   X-=5;
 } else if(mouseY>h-5){
   Y+=5;
 } else if(mouseY<5){
   Y-=5;
 }
 
 pushMatrix();

 translate(X,Y);
 rotate(rot);
 imageMode(CENTER);
 image(flower,0,0,fw,fh);
 rot+=int(sin(frameCount/10)*2);
 popMatrix(); 
 
 if (mouseX < width/3){
    wind = -3;
  }else if (mouseX < width/3*2){
    wind = 0; 
  } else{
    wind = 3;
  }
  
  for (int i=0; i<flakes; i++){
    snows[i].display();
  }
 
 
}

void mouseMoved(){
 nX = mouseX;
 nY = mouseY;
}

