
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, slingshot;
var mango1,mango2,mango3,mango4;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,90,30);
	mango3=new mango(1030,160,30);
	mango4=new mango(1130,170,30);

	stoneObj=new stone(250,340,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	slingshot = new SlingShot(stone.body,{x:250,y:340});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  stoneObj.display();

  groundObject.display();

  slingshot.display();
}
