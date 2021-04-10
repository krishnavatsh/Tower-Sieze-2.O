
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,stand1,stand2;
var polygon1,polygonImg;
var sling1,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;

function preload()
{
    polygonImg= loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);


    

    ground= new Ground(600,390,1200,10);
    stand1= new Ground(400,300,200,10);
    stand2= new Ground(900,200,200,10);

box1= new Box(330,235,30,40,'pink')
box2= new Box(360,235,30,40,'pink')
box3= new Box(390,235,30,40,'pink')
box4= new Box(420,235,30,40,'pink')
box5= new Box(450,235,30,40,'pink')

box6= new Box(360,195,30,40,'skyblue')
box7= new Box(390,195,30,40,'skyblue')
box8= new Box(420,195,30,40,'skyblue')

box9= new Box(390,155,30,40,'lime')



box10= new Box(830,135,30,40,'pink')
box11= new Box(860,135,30,40,'pink')
box12= new Box(890,135,30,40,'pink')
box13= new Box(920,135,30,40,'pink')
box14= new Box(950,135,30,40,'pink')

box15= new Box(860,95,30,40,'skyblue')
box16= new Box(890,95,30,40,'skyblue')
box17= new Box(920,95,30,40,'skyblue')

box18= new Box(890,55,30,40,'lime')

polygon1 = Bodies.circle(50,200,20,{density:1,friction:0.3,restitution:0.8});
    World.add(world,polygon1);

sling1 = new Slingshot(polygon1,{x:50,y:200});

}

function draw(){
    background(0);
   
    textSize(20);
    fill("lime");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30)
    ground.display();
    stand1.display();
    stand2.display();
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()

    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    sling1.display();
    push ()
    imageMode (CENTER);
    image (polygonImg,polygon1.position.x,polygon1.position.y,40,40);
    pop ()
}

function mouseDragged(){
     Matter.Body.setPosition(polygon1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon1,{x:100,y:200});
        sling1.attach(polygon1);
    }
    }