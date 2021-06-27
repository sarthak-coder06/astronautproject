var back
function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
  bath = loadAnimation("images/bath2.png", "images/bath2.png");
}
function setup() {
  createCanvas(400, 400);
  bakgroud=createSprite(200,200)
  bakgroud.addImage(bg)
  astronaut=createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep)
 astronaut.scale=0.1
  
}

function draw() {
  background(225);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y=200
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=190
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=220
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("M")){
   
    astronaut.velocityX=4
    astronaut.velocityY=4
  }
  drawSprites();
}
