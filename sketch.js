const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage,base,playerArcherimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimage = loadImage("./assets/playerArcher.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  var options = {
    isStatic: true
  }

  base = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, base);
  //criar corpo do jogador

  player = Bodies.rectangle(160, 350, 160, 190, options);
  World.add(world, player);
  angle = 20

  base = Bodies.rectangle(160, 500, 160, 190, options);
  World.add(world, base);
  angle = 20

  playerArcher = Bodies.rectangle(160, 400, 160, 190,options );
  World.add(world, playerArcher);
  angle = 30
  angleMode(DEGREES)
 
}

function draw() {
  background(backgroundImg);


  


  

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);

  push();
  imageMode(CENTER);
  image(baseimage,base.position.x, base.position.y, 180, 150);
  image(playerimage,player.position.x, player.position.y, 50, 180);
  image(playerArcherimage,playerArcher.position.x, playerArcher.position.y, 160, 190);
  imageMode(CENTER)
  pop()

  }



 

