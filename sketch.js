const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var boy,boyrunningImg;
var snow;
var ground;
var gameState = "null";

function preload(){
  boyrunningImg = loadAnimation("boy jumping 1.jpg","boy jumping 2.jpg","boy jumping 3.jpg"
  ," boy jumping 4.jpg","boy jumping 5.jpg","boy jumping 6.jpg");
  boyskatingImg = loadAnimation("boy skating 1.jpg","boy skating 2.jpg"
  ,"boy skating 3.jpg","boy skating 4.jpg");
  bg = loadImage("snow1.jpg");
  boystandingImg = loadImage("boy skating 1.jpg");
  snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(1350,650);

  engine =  Engine.create();
  world = engine.world;

  Engine.run(engine);

  back = createSprite(600,100);
  back.addImage("background",bg);
  back.scale = 3.5;
  back.x = back.width/2;

  ground = createSprite(1,600,3000,10);
  ground.visible = false;

  boy = createSprite(90,500,20,20); 
  boy.addImage("boy standing",boystandingImg);
  boy.scale = 0.5;

  

}


function draw() {
  background("white");  

  Engine.update(engine);

  if(back.x<=500){
    back.x = 600;
  }

  if(keyDown("RIGHT")&& gameState === "null"){
    gameState = "Play";
    boy.addAnimation("boy skating",boyskatingImg);
    boy.changeAnimation("boy skating");
  }

  if(gameState === "Play"){


    back.velocityX = -5;

  snowfall();

  if(keyDown("Space")){
    if(boy.y>=400){
    boy.setVelocity(0,-15);
    }
  }

  boy.velocityY = boy.velocityY +0.8;
}

  boy.collide(ground);

  drawSprites();
  
  textSize(20);
  fill("yellow");
  text("Press Right Arrow to start the game",800,50);

  textSize(20);
  fill("red");
  text("Press space key to jump",1000,600);

}
function snowfall(){
  if(frameCount%30===0){
    snow = createSprite(Math.round(random(10,1200,20,20)))
    snow.addImage("snowfall",snowImg);
    snow.scale=0.3;
    snow.setVelocity(0,5);
    snow.collide(ground);
    }
    
}