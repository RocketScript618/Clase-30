const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var tower,towerImage;

var cannon, cball;

var backImage;

var ammo = [];

var fired = false;

function preload() {
  backImage = loadImage("background.gif");
  towerImage = loadImage("tower.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  angle = -PI/4;

  tower = new Tower(120,350,180,310);
  cannon = new Cannon(160,120,150,75,angle);

  rectMode(CENTER);
}

function draw() {
  background("black");

  image(backImage,0,0,width,height);

  Engine.update(engine);

  for(var i = 0; i<ammo.length; i++){
    showCannonBalls(cball[i],i);
  }



  tower.display();
  cannon.display();
}

function showCannonBalls(ammo,index){
  cball.display();
}

function keyReleased(){
  if(keyCode==ENTER){
    ammo[ammo.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode==ENTER){
    ammo.push(cball);
    cball = new CBall(cannon.x+25,cannon.y-50,80);
    console.log(ammo)
  }
}