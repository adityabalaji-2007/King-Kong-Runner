var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage, ground;
var bananaGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload() {
  monkey_running = loadAnimation("sprite_0.png",             "sprite_1.png", "sprite_2.png", "sprite_3.png",           "sprite_4.png", "sprite_5.png", "sprite_6.png",           "sprite_7.png", "sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
    
}

function setup() {
  createCanvas(400,400);
  

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.shapeColor = "brown";  
}


function draw() {
  background("lightGreen");
  
  ground.x = ground.width/2;
  ground.velocityX = -4;
  console.log(ground.x);
  
  if(keyDown("space")){
    monkey.velocityY = -9;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100, 50);
  
  food();
  obstacles();
  drawSprites();
}

function food(){
  if (frameCount%80 === 0){
    banana = createSprite(400,335);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.y = Math.round(random(220,300));
    banana.setLifetime = 390;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount%150 === 0){
    obstacle = createSprite(400,325);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.setLifetime = 390;
    obstacleGroup.add(obstacle);
  }
}