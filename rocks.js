class Rock {
  constructor(x,y,w,h, clr) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.clr = clr
  }
  show(){
    fill(this.clr.r, this.clr.g, this.clr.b);
    rect(this.x, this.y, this.w, this.h);
  }

  destroyed(x, y, d){
        //for Rock boundary
    let rkLft = this.x,
        rkRit = this.x + this.w,
        rkTop = this.y,
        rkBtm = this.y + this.h,
        //for WreckingBall boundary
        rknBlLft = x - d/2 ,
        rknBlRit = x + d/2,
        rknBlTop = y - d/2,
        rknBlBtm = y + d/2;
    if(rkRit >= rknBlLft && rkLft < rknBlRit && rkTop <= rknBlBtm && rkBtm > rknBlTop ){
      return true;
    }

  }
}
