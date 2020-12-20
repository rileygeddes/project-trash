
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxpar1,boxpar2,boxpar3
var paper1
var paperthrown = 0


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
  background.color="white"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,675,1600,20)
    paper1 = new Paper(20,550)

	Engine.run(engine);
	boxpar1=new Wall(1000,670,200,10,"sprites/dustbingreen.png")
  boxpar2=new Wall(1100,600,10,160)
  
	boxpar3=new Wall(900,600,10,160)



}


function draw() {
  background("white");
  rectMode(CENTER);
  keypressed();
  drawSprites();
  ground.display();
  paper1.display();
  boxpar1.display();
  //boxpar2.display();
  //boxpar3.display();
  

}

function keypressed(){
  if(keyCode === UP_ARROW && paperthrown === 0){
    
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:82,y:-85})
	console.log(keypressed)
	paperthrown=1
  }

}

