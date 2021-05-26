var canvas, backgroundImage;
var player1,playerStep1,playerNormal1,playerTouch1;
var player2,playerStep2,playerNormal2,playerTouch2;
var player3,playerStep3,playerNormal3,playerTouch3;
var player4,playerStep4,playerNormal4,playerTouch4;
var player5,playerStep5,playerNormal5,playerTouch5;
var Tree
var Tree2
var invisibleLeft , invisibleRight,invisibleBottom,invisibleTop1
var invisibleCenter
var restart, edges;
//var touch
var gameState=1;
var bird
var birds
var birdss
var birdsss
var birdssss
var timer = 1000;
var touch = 0
var youWon




function preload(){
backgroundImage=loadImage("sprites/GROUND.jpg")
    player1 = loadAnimation("sprites/player1-1.png","sprites/player1-2.png",
    "sprites/player1-3.png","sprites/player1-4.png");

    player2 = loadAnimation("sprites/player2-1.png","sprites/player2-2.png",
    "sprites/player2-3.png","sprites/player2-4.png");

    player3 = loadAnimation("sprites/player3-1.png","sprites/player3-2.png",
    "sprites/player3-3.png","sprites/player3-4.png");

    player4 = loadAnimation("sprites/player4-1.png","sprites/player4-2.png",
    "sprites/player4-3.png","sprites/player4-4.png");

    player5 = loadAnimation("sprites/player5-1.png","sprites/player5-2.png",
    "sprites/player5-3.png","sprites/player5-4.png");

   

     Tree=loadAnimation("sprites/TREE.png")
     Tree2=loadAnimation("sprites/TREE1.png")

     restartImg=loadImage("sprites/restart.png");
     touchImg=loadImage("sprites/touch.png")
    
     birdImg=loadImage("sprites/bird.png")
     birdsImg=loadImage("sprites/birds.png")
     birdssImg=loadImage("sprites/birdss.png")
     birdsssImg=loadImage("sprites/birdsss.png")
     birdssssImg=loadImage("sprites/birdssss.png")
     bgSound=loadSound("background.mp3")
   
     youWon=loadImage("sprites/youWon.png")

}

function setup(){

canvas = createCanvas(windowWidth,windowHeight);
bgSound.loop();

colors = [color(255,0,0), color(0,255,0), color(0,0,255), color(255, 255,0), color(0,255,255)];


playerA=createSprite(width/2,height/2+200)
playerA.addAnimation("running",player1)
playerA.scale=0.2
playerA.velocityX=5
playerA.velocityY=-6
//playerA.debug=true
playerA.setCollider("rectangle",0,0,20,20)


playerB=createSprite(width-300,height/1)
playerB.addAnimation("running",player2)
playerB.scale=0.2
playerB.velocityX=-6
playerB.velocityY=-5
playerB.setCollider("rectangle",0,0,20,20)

playerC=createSprite(width-200,height/1)
playerC.addAnimation("running",player3)
playerC.scale=0.2
playerC.velocityX=7
playerC.velocityY=5
playerC.setCollider("rectangle",0,0,20,20)

playerD=createSprite(width-400,height/1)
playerD.addAnimation("running",player4)
playerD.scale=0.2
playerD.velocityX=-7
playerD.velocityY=-5
playerD.setCollider("rectangle",0,0,20,20)

playerE=createSprite(width-900,height/1)
playerE.addAnimation("running",player5)
playerE.scale=0.2




TreeA=createSprite(width/7,height/2-100)
TreeA.addAnimation("running",Tree)
TreeA.scale=0.6


TreeB=createSprite(width/1.09,height/2-100)
TreeB.addAnimation("running",Tree)
TreeB.scale=0.6



invisibleTop=createSprite(width/2,height/2,width,5)
invisibleTop.visible=false;

invisibleCenter=createSprite(width/2,height/2.2,width,5)
invisibleCenter.visible=false;




restart = createSprite(width/2,height/2);
restart.addImage(restartImg);
restart.scale = 0.3;
restart.visible=false;
restart.scale=0.3


// touch = createSprite(1217,680)
// touch.addImage(touchImg)
// touch.scale = 0.7

bird=createSprite(width/4-150,height/2-200)
bird.addImage(birdImg)
bird.scale=0.1

birds=createSprite(width-200,height/2-200)
birds.addImage(birdsImg)
birds.scale=0.1

birdss=createSprite(width-125,height/2-220)
birdss.addImage(birdssImg)
birdss.scale=0.1

birdsss=createSprite(width/4-200,height/2-180)
birdsss.addImage(birdsssImg)
birdsss.scale=0.1

birdssss=createSprite(width-150,height/2-150)
birdssss.addImage(birdssssImg)
birdssss.scale=0.1

youWin=createSprite(590,120)
youWin.addImage(youWon)
youWin.scale = 0.2
youWin.visible=false

edges=createEdgeSprites();




}



function draw(){
background(backgroundImage);

for (var i = 0; i < touches.length; i++) {
  noStroke();
  // One color per finger
  fill(colors[i]);
  // Draw a circle at each finger
  ellipse(touches[i].x, touches[i].y, 24, 24);
}


playerA.bounceOff(edges);
playerB.bounceOff(edges);
playerC.bounceOff(edges);
playerD.bounceOff(edges);
playerE.bounceOff(edges);

playerA.bounceOff(TreeA);
playerB.bounceOff(TreeA);
playerC.bounceOff(TreeA);
playerD.bounceOff(TreeA);
playerE.bounceOff(TreeA);
playerE.bounceOff(invisibleCenter);

playerA.bounceOff(TreeB);
playerB.bounceOff(TreeB);
playerC.bounceOff(TreeB);
playerD.bounceOff(TreeB);
playerE.bounceOff(TreeB);






playerA.bounce(playerB);
playerA.bounce(playerC);
playerA.bounce(playerD);



playerB.bounce(playerC);
playerB.bounce(playerD);


playerC.bounce(playerD);

if(timer>0)
timer=timer-1

console.log (timer)
console.log (touch)
if(timer==0&&touch==0){
  fill("green");
  textSize(30);
  text("YOU WON YAY",600,120);
 youWin.visible=true
 gameState=2
 
}



if(playerA.isTouching(invisibleTop)){
  playerA.velocityY=7
}

if(playerB.isTouching(invisibleTop)){
  playerB.velocityY=4
}

if(playerC.isTouching(invisibleTop)){
  playerC.velocityY=5
}

if(playerD.isTouching(invisibleTop)){
  playerD.velocityY=8
}







if(keyDown("left_arrow")){
    playerE.x-=7;
}
if(keyDown("right_arrow")){
    playerE.x+=7;
}

if(keyDown("up_arrow")){
    playerE.y-=7;
}

if(keyDown("down_arrow")){
    playerE.y+=7;
}

//playerE.x=mouseX;
//playerE.y=mouseY;




if(playerA.isTouching(playerE)){
  gameState=0;

  

}


if(playerB.isTouching(playerE)){
  gameState=0;
  
 
}

if(playerC.isTouching(playerE)){
  gameState=0;


}



if(playerD.isTouching(playerE)){
  gameState=0;
  

}



if(gameState==2){
restart.visible=true;
youWin.visible=true;
playerA.setVelocity(0,0);
playerB.setVelocity(0,0);
playerC.setVelocity(0,0);
playerD.setVelocity(0,0);
playerE.setVelocity(0,0);
timer=1000;



if(mousePressedOver(restart)||touches.length>0){
  playerA.velocityX=5
  playerA.velocityY=-6

  playerB.velocityX=-6
  playerB.velocityY=-5

  playerC.velocityX=7
  playerC.velocityY=5

  playerD.velocityX=-7
  playerD.velocityY=-5 

  gameState=1;
  bgSound.loop();

  restart.visible=false;
  youWin.visible=false;
  touches=[];
}
}

if (gameState==0){
bgSound.stop();
touch++;
restart.visible=true;
playerA.setVelocity(0,0);
playerB.setVelocity(0,0);
playerC.setVelocity(0,0);
playerD.setVelocity(0,0);
playerE.setVelocity(0,0);

if(mousePressedOver(restart)){
    playerA.velocityX=
    playerA.velocityY=-6

    playerB.velocityX=-7
    playerB.velocityY=-5

    playerC.velocityX=7
    playerC.velocityY=5

    playerD.velocityX=-7
    playerD.velocityY=-5 

    gameState=1;
    bgSound.loop();
    timer=1000;
    restart.visible=false;
    youWin.visible=false
}
}


//if(keyDown("space")&&playerE.y>=159) {
//  playerE.velocityY = -10;
//}
// if(playerA.x>1100){
//  // playerA.velocityX=playerA.velocityX*-1
//  playerA.velocityY=4
//  playerA.velocityX=-1
// }

// if(playerA.y>600){
//   playerA.velocityX=-4
//   playerA.velocityY=2
// }

// if(playerA.x<40){
//   playerA.velocityX=1
//   playerA.velocityY=-4
// }
// if(playerA.y<370&&playerA.x<300){
//   playerA.velocityX=4
//   playerA.velocityY=1
// }



 
 











 // if(playerB.x<10||playerB.x>1230||playerB.y<370){
//   playerB.velocityX=playerB.velocityX*-1
// }
// if(playerC.x<10||playerC.x>1230||playerC.y<370){
//   playerC.velocityX=playerC.velocityX*-1
// }
// if(playerD.x<10||playerD.x>1230||playerD.y<370){
//   playerD.velocityX=playerD.velocityX*-1
// }


//playerA.bounceOff(playerB,explosion);
drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY);
textSize (30) 
fill ("red")
text("Time Left :"+timer,width-500,100);


}
// this prevents dragging screen around
function touchMoved() {
  return false;
}
function explosion(player)
{
  player.velocityY=random(7,-7);
  player.velocityX=random(7,-7);
}





