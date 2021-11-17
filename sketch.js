var form;
var bg, bg1, bg2, bg3;
var walk, run, runLeft, gost;
var coffin;
var gamers, gamer1, gamer2, gamer3, gamer4;
var ground;

var database;
var gameState = 0;
var playerCount = 0;
var playerPos;
var IceCount = -3;
var form, player, game;
var allPlayers;



function setup() {
  createCanvas(displayWidth, displayHeight-105);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
  bg = bg1;
}

function preload(){
   bg1 = loadImage("images/background/bg1.jpg")
   bg2 = loadImage("images/background/bg2.jpg")
   bg3 = loadImage("images/background/bg3.png")

   ice = loadImage("images/ice.png")
   water = loadImage("images/water.png")
   monster = loadImage("images/monster.png")
   meIce = loadImage("images/meice.png")
   meWater = loadImage("images/mewater.png")





  /* coffin = loadImage("images/coffin.png")

   walk = loadAnimation("images/walking/walk1.png", "images/walking/walk2.png",
  "images/walking/walk3.png", "images/walking/walk4.png", "images/walking/walk5.png",
  "images/walking/walk6.png", "images/walking/walk7.png", "images/walking/walk8.png");

    run = loadAnimation("images/run/run1.png", "images/run/run2.png",
  "images/run/run3.png", "images/run/run4.png", "images/run/run5.png",
  "images/run/run6.png", "images/run/run7.png", "images/run/run8.png",
  "images/run/run9.png","images/run/run10.png","images/run/run11.png","images/run/run12.png");

    runLeft = loadAnimation("images/runLeft/run1.png", "images/runLeft/run2.png",
  "images/runLeft/run3.png", "images/runLeft/run4.png", "images/runLeft/run5.png",
  "images/runLeft/run6.png", "images/runLeft/run7.png", "images/runLeft/run8.png",
  "images/runLeft/run9.png","images/runLeft/run10.png","images/runLeft/run11.png","images/runLeft/run12.png");

    gost = loadAnimation("images/ghost/gost1.png", "images/ghost/gost2.png",
    "images/ghost/gost3.png", "images/ghost/gost4.png", "images/ghost/gost5.png",
    "images/ghost/gost6.png", "images/ghost/gost7.png", "images/ghost/gost8.png");

*/
}

function draw() {
  background(bg);  
  if (playerCount === 4){
    game.update(1);

}
if(gameState === 1){
    clear();
    game.play();
}
if(gameState === 2){       
    game.end();
}
  drawSprites();
}