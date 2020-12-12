
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

var 
function setup() {
 canvas = createCanvas(WindowWidth/2,WindowHeight/1.5);
 engine = Engine.create();
 world = engine.world;

 let canvasmouse = Mouse.create(canvas.elt);
 canvasmouse.pixelRatio = PixelDensity();	
 let options ={
	 mouse : canvasmouse
 }
 mConstraint = MouseConstraint.create(engine,options);
 World.add(world,mConstraint);

 p1 = new Pendulum(50,100,30);
 p2 = new Pendulum(100,100,30);
 p3 = new Pendulum(150,100,30);
 p4 = new Pendulum(200,100,30);
 p5 = new Pendulum(250,100,30);

 s1 = new Sling(p1.body.x,400,2,2);
 s2 = new Sling(p2.body.x,400,2,2);
 s3 = new Sling(p3.body.x,400,2,2);
 s4 = new Sling(p4.body.x,400,2,2);
 s5 = new Sling(p5.body.x,400,2,2);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
}
function mouseDragged(){
  Matter.bosy.setPosition(p1.body,{x : mousex , y : mousey});
}
function mouseReleased(){
 s1.fly();
 s2.fly();
 s3.fly();
 s4.fly();
 s5.fly();
}



