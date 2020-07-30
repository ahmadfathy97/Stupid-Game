class WreckingBall {
  constructor(x,y,d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.xdir = Math.random() * 2;
    this.ydir = -3;
  }
  show(){
    fill(200,200,200);
    circle(this.x, this.y, this.d);
  }
  move(w, h, bar, rock){
    // let min = Math.random(),
    //     max = Math.random(),
    //     rand = Math.random() * ((max - min) * 8);
    if(this.x >= w){
      this.xdir = -4;
    }
    if(this.x <= 0){
      this.xdir = 4
    }
    if(this.y <= 0){
        this.ydir = 4
    }
    if(this.y + (this.d/2) >= bar.y &&
      ( this.x + (this.d/2) >= bar.x  && this.x - (this.d/2) <= bar.x + (bar.w) ) ){
      this.ydir = -4
      this.xdir = Math.random() * (Math.random() * 4 - Math.random() * 4)
    }else if(rock){
      if(this.w/2 >= rock.w/2){
        this.xdir = 4
      }
      if(this.y >= rock.y){
        this.ydir = 4;
      }
      if(this.w/2 < rock.w/2){
        this.ydir = -4;
      }
      if(this.y < rock.y){
        this.ydir = -4;
      }
    }

    this.x += this.xdir;
    this.y += this.ydir;

  }
  destroyed(h){
    return (this.y > h)
  }
}
