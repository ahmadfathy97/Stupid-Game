class Bar {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xdir = 0;
  }
  move(w){
    if(this.x <= 0){
      this.x = 0;
      this.xdir = 0;
    } else if(this.x >= w - this.w){
      this.x = w - this.w;
      this.xdir = 0;
    }
  }
  show(){
    fill(36, 81, 144);
    rect(this.x, this.y, this.w, this.h);
  }
  setX(x){
    this.xdir += x;
    this.x += this.xdir;
    this.xdir = 0;
  }
}
