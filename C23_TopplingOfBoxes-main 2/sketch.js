const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(200,375,400,20);

    box1= new Box(227,300,50,50);
box2=new Box(240,200,70,100);
  
}
function draw(){
    background(0);
    Engine.update(engine);
   

    box1.display();
    box2.display();
    ground1.display();
}