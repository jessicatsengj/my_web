class Ink{

    int[] xpos;  
    int[] ypos;
    
    int x;
    int y; 
    int xspeed;
    int yspeed;
    
    
  Ink(int len, int pos) {
    xpos = new int[len];
    ypos = new int[len];
    x = int(random(pos,pos+width/7));
    y = int(random(height));
    xspeed = int(random(2,3));
    yspeed = int(random(2,3));
  }
  
    void display(int r1, int r2, int div1, int div2){
      for (int i = 0; i < xpos.length-1; i ++ ) {
        xpos[i] = xpos[i+1];
        ypos[i] = ypos[i+1];
      }
      xpos[xpos.length-1] = x-xspeed*10; 
      ypos[ypos.length-1] = y-yspeed*10;
      
      for (int i = 0; i < xpos.length; i ++ ) {
        noStroke();
        fill(255-i*div1, 80);
//        fill(255, 255-i*5/2, 0, 80);
        ellipse(xpos[i],ypos[i],i/div2,i/div2);
      }
      fill(0);
      ellipse(xpos[xpos.length-1], ypos[ypos.length-1], r1, r2);
      
    }
    void run(int sp){
      x = x + int(random(-3,3));
      y+=yspeed*sp;
    
    }
    void checkEdge(int repos){
        if(x<50 || x>width-50){
          x = repos;
          
        }
        if(y<-300 || y>height+300){
          yspeed*=-1;
        }
      }
    
} //end class
