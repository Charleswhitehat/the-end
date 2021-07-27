function setup(){
  createCanvas(800,400);
}

function draw(){
  
  background("white");
  var randomFrameCount = Math.floor(80*Math.random()) + 60
  if (frameCount % randomFrameCount === 0){
    spawnGround();
  }
  

  drawSprites();
}

function spawnGround(){
  var height= Math.floor(200*Math.random()) + 100;
  var width= Math.floor(200*Math.random()) + 100;
  var ground = createSprite(800,400,width, height);
  ground.velocityX = -2;
  
}