
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,700,1200,30);
	boy = new Boy(250,600,350,350)
	tree = new Tree(950,470,450,450)
	rock = new Rock(145,505,50,50)
	mango1 = new Mango(970,310,70,70)
	mango2 = new Mango(850,400,70,70)
	mango3 = new Mango(1100,400,70,70)
	mango4 = new Mango(950,380,70,70)
	mango5 = new Mango(1000,430,70,70)
	slingRock = new Sling(rock.body,{x:200,y:100});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  boy.display();
  tree.display();
  rock.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
 
}

function mouseDragged() {

    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}


function mouseReleased() {

    sling.fly();
}



