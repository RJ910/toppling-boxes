const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box,ground;

function setup(){
  var canvas=createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

 box = new Box(150,150,50,50);
 box1 = new Box(190,100,50,100);

 ground = new Ground(200,390,400,20);
}

function draw()
{
   background(0);
   Engine.update(engine);
   box.display(); 
    ground.display();
    box1.display();
}
