
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(450,400,25,25)
	ball2 = new Ball(400,400,25,25)
	ball3 = new Ball(350,400,25,25)
	ball4 = new Ball(200,400,25,25)
	ball5 = new Ball(250,400,25,25)
	ball6 = new Ball(300,400,25,25)
	
	rope1 = new Rope(ball1.body,{x:450,y:100})
	rope2 = new Rope(ball2.body,{x:400,y:100})
	rope3 = new Rope(ball3.body,{x:350,y:100})
	rope4 = new Rope(ball4.body,{x:200,y:100})
	rope5 = new Rope(ball5.body,{x:250,y:100})
	rope6 = new Rope(ball6.body,{x:300,y:100})
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ball6.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  rope6.display()


}
function keyPressed(){
    //if(keyCode === 32){
    Matter.Body.applyForce(ball4.body,ball4.body.position,{x:-25,y:1})    
	}
	