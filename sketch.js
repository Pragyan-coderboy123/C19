var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup=new Group()
  climbersGroup=new Group()
invisibleBlockGroup= new Group()
  ghost=createSprite(200,200,10,20);
  ghost.addImage(ghostImg);
  ghost.scale=0.3;
 spookySound.loop()
  

  
}

function draw() {




  background(200);

  if(gameState==="play"){
     if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("Left_arrow")){
      ghost.x=ghost.x-3;

    }
    if(keyDown("Right_arrow")){
      ghost.x=ghost.x+3;
    }
    if(keyDown("Space")){

    ghost.velocityY=-4
    
    }
    ghost.velocityY+=0.8
if(climbersGroup.isTouching(ghost)){
  ghost.velocityY=0;

}
    doors()
    if(invisibleBlockGroup.isTouching(ghost)|| ghost.y>600){
      ghost.destroy()
      gameState="end"


    }
}
drawSprites()
if(gameState==="end"){
  stroke("yellow")
  fill("Red");
  textSize(30)
  text("GAME OVER... NICE try",230,250);

}

   
}





function doors(){
  if(frameCount%240==0){
  door=createSprite(200,-50,10,10);
  door.addImage(doorImg);
  door.velocityY=2;


  door.x=Math.round(random(120,400));
  doorsGroup.add(door)
  door.lifetime=800

  climber=createSprite(200, 10,10,10);

climber.addImage(climberImg);
 climber.velocityY=2;
 climber.x=door.x
  climbersGroup.add(climber);
  climber.lifetime=800;
ghost.depth=door.depth;
ghost.depth++

invisibleBlock=createSprite(200,15)
invisibleBlock.width=climber.width
invisibleBlock.height=2;

invisibleBlock.velocityY=2
invisibleBlock.x=climber.x
invisibleBlock.debug=true
invisibleBlockGroup.add(invisibleBlock);


}


}
