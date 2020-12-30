var playerImg, asteroidImg, backImg, comp, lazer, heart; 
var player, back, asteroidsGroup, compPlay, playerLife;


function preload(){
  playerImg = loadImage("player.png");
  asteroidImg = loadImage("asteroid.png");
  backImg = loadImage("background.jpg");
  laser = loadImage("lazer.png");
  comp = loadImage("ai play.png");
  heart = loadImage("player Heart.png");
}
function setup() {
  createCanvas(500,500);

  player = createSprite(250,250, 40,40);
  player.addImage(playerImg); 

  compPlay = createSprite(230, 350, 40,40);
  compPlay.addImage(comp);

  asteroid = createSprite(500,250,20,20);
  asteroid.addImage(asteroidImg);

  
}

function draw() {
  
  background(backImg);

  backImg.velocityX = 2;

   playerLife = 3; 

 if (keyDown(UP_ARROW))
 {
   player.velocityX = 0;
   player.velocityY = -2;
 }
 
  if (keyDown(DOWN_ARROW)) {
    player.velocityY = 2;
    player.velocityX = 0;
  }
 
 if (keyDown(LEFT_ARROW))
 {
  player.velocityX = -2;
  player.velocityY = 0;
 }
 
 if (keyDown(RIGHT_ARROW))
 { 
  player.velocityX = 2;
  player.velocityY = 0;
 }

 if(asteroid.isTouching(player))
 {
   playerLife = playerLife - 0.6;
 }

 if(player.velocityX > 0){
   compPlay.velocityX = 2.1;
 }


 if(compPlay.velocityX > 0) {
  var rand = Math.round(random(1,2));
  switch(rand) {
    case 1: compPlay = 1;
        break;
    case 2: compPlay = 2;
        break;     
  }

  if(compPlay = 1){
    playerLife = playerLife - 0.3;
  }
 }

  if(keyDown("space")){
    createLazer();
  }

 if( playerLife = 0){
   text("Game Over", 250,250);
   player.velocityX = 0;
   player.velocityY = 0;
   compPlay.velocityX = 0;
   compPlay.velocityY = 0;
 }

 spawnAsteroids();
 

  drawSprites();
}

function createLazer(){
  lazer = createSprite(player.x, player.y,10,10);
  lazer.addImage(laser);
  lazer.x = mouseX;
  lazer.y = mouseY;
  
}
function spawnAsteroids(){
  if(frameCount % 80 === 0){
    y = random(2, 498);
    asteroid = createSprite(450,y,20,20);
  asteroid.addImage(asteroidImg);
  asteroid.velocityX = -4;
    
    
    
    asteroid.scale = 1.3;
    asteroid.lifetime = 300;
  
   
  }
}