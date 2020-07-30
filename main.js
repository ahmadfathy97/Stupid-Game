let bar,
    rock,
    rocks = [],
    rknBl,
    canW,
    canH,
    started = false;
let slctElem = selector => document.querySelector(selector);
let leftBtn = slctElem('#left-btn'),
    rightBtn = slctElem('#right-btn'),
    winner = slctElem('#winner'),
    gameOver = slctElem('#gameOver'),
    rstbtns = document.querySelectorAll('.restart'),
    start = slctElem('#start'),
    startContainer = slctElem('.start');

function setup() {
  canW = innerWidth -20 <= 650 ? innerWidth -20 : 650;
  createCanvas(canW , innerHeight- 50);
  canH = height;
  bar = new Bar(width/2 - width * .1, height - (height * .03), width * .2, height * .03);
  rknBl = new WreckingBall(width/2, height - (height * .04), width * .035);
  let x=0,y=0;
  for (i=0; i<7;i++){
    for(j=0;j<10;j++){
      let r = Math.floor(Math.random() * 255),
          g = Math.floor(Math.random() * 255),
          b = Math.floor(Math.random() * 255),
          clr = {
            r,g,b
          }
      rock = new Rock(x, y, width/10, height/40, clr);
      rocks.push(rock);
      x += width/10;
    }
    x = 0;
    y += height/40 +30;
  }
}
//bad UX
// function keyPressed(){
//   if (keyCode === LEFT_ARROW){
//     bar.setX(-width * .1)
//   } else if(keyCode === RIGHT_ARROW){
//     bar.setX(width * .1)
//   }
// }


//for better UX
//=========================
let leftBtnDown = false;
let rightBtnDown = false;
leftBtn.onmousedown = ()=>{
  leftBtnDown = true;
}
rightBtn.onmousedown = ()=>{
  rightBtnDown = true;
}

leftBtn.onmouseup = ()=>{
  leftBtnDown = false;
}
rightBtn.onmouseup = ()=>{
  rightBtnDown = false;
}

// for mobile

leftBtn.ontouchstart = ()=>{
  leftBtnDown = true;
}
rightBtn.ontouchstart = ()=>{
  rightBtnDown = true;
}

leftBtn.ontouchend = ()=>{
  leftBtnDown = true;
}
rightBtn.ontouchend = ()=>{
  rightBtnDown = true;
}
//=================================

rstbtns.forEach((btn) => {
  btn.addEventListener('click', reset)
});

function reset(){
  gameOver.style.display = 'none';
  winner.style.display = 'none';
  rocks = [];
  bar = new Bar(width/2 - width * .1, height - (height * .03), width * .2, height * .03);
  rknBl = new WreckingBall(width/2, height - (height * .04), width * .035);
  let x=0,y=0;
  for (i=0; i<7;i++){
    for(j=0;j<10;j++){
      let r = Math.floor(Math.random() * 255),
          g = Math.floor(Math.random() * 255),
          b = Math.floor(Math.random() * 255),
          clr = {
            r,g,b
          }
      rock = new Rock(x, y, canW/10, canH/40, clr);
      rocks.push(rock);
      x += canW/10;
    }
    x = 0;
    y += canH/40 + 30;
  }
  loop();
}

start.addEventListener('click', startFunc)
function startFunc() {
  started = true;
  loop();
  startContainer.style.display = 'none'
}

function draw() {
  // for better UX
  //================================
  if (keyIsDown(RIGHT_ARROW)) {
    bar.setX(width * .02)
  }
  if (keyIsDown(LEFT_ARROW)) {
    bar.setX(-width * .02)
  }
  if(rightBtnDown) bar.setX(width * .02)
  if(leftBtnDown) bar.setX(-width * .02)
  //================================
  if(!started){
    noLoop();
  }
  if(!rocks.length){
    noLoop();
    console.log("well done");
    winner.style.display = 'flex';
    leftBtnDown = false;
    rightBtnDown = false;
  }
  background(40);
  rocks.forEach((rock, i) => {
    rock.show();
    if(rock.destroyed(rknBl.x, rknBl.y, rknBl.d)){
      rocks.splice(i, 1);
      rknBl.move(canW, canH, bar, rock);
    }
  });
  rknBl.show();
  rknBl.move(canW, canH, bar);
  if(rknBl.destroyed(canH)){
    noLoop();
    console.log("game over");
    gameOver.style.display = 'flex';
    leftBtnDown = false;
    rightBtnDown = false;
  }
  bar.move(width);
  bar.show();
}
