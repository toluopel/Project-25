
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20)
	paper = new Paper(10,500,20)
	base = new Dustbin(720,625,80,100)


	Engine.run(engine);
  
}


function draw() {
  
  background(180);
  
  	
	ground.display();
	paper.display();
	base.display();
	// left.display();
	// right.display();



  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70})
		
	}
}



