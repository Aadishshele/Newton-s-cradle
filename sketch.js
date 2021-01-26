
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob1 = new Bob(150,500,50)
	Bob2 = new Bob(250,500,50)
	Bob3 = new Bob(350,500,50)
	Bob4 = new Bob(450,500,50)
	Bob5 = new Bob(550,500,50)
	ground = new Ground(350,200,30,480)
	//Sling1 = new Constraint(Bob1.body,ground.body,-Bob1*2,0)
	Rope1 = new constraint(Bob1.body,{x : 150,y : 220})
	Rope2 = new constraint(Bob2.body,{x : 250,y : 220 })
	Rope3 = new constraint(Bob3.body,{x : 350,y : 220})
	Rope4 = new constraint(Bob4.body,{x : 450,y : 220 })
	Rope5 = new constraint(Bob5.body,{x : 550,y : 220})




	
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  Engine.update(engine)
  background("orange");
  Bob1.display()
  Bob2.display()
  Bob3.display()
  Bob4.display()
  Bob5.display()
  ground.display()
  //Sling1.display();
  Rope1.Display()
  Rope2.Display()
  Rope3.Display()
  Rope4.Display()
  Rope5.Display()
	
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x : -90,y : 0})
	}

}

