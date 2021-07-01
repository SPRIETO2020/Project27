const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1, rope2, rope3, rop44, rope5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload() {}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,50,700,50);

	bobObject1 = new Bob(150,600,125);
	bobObject2 = new Bob(275,600,125);
	bobObject3 = new Bob(400,600,125);
	bobObject4 = new Bob(525,600,125);
	bobObject5 = new Bob(650,600,125);

  rope1 = new Rope(bobObject1.body, roof.body, -250, 0);
  rope2 = new Rope(bobObject2.body, roof.body, -125, 0);
  rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
  rope4 = new Rope(bobObject4.body, roof.body, 125, 0);
  rope5 = new Rope(bobObject5.body, roof.body, 250, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-400,y:-45});
  }
}
