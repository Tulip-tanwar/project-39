var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4;
var cars;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

var track,car1img,car2img,car3img,car4img,ground;
function preload(){
track=loadImage("../images/track.jpg");
car1img=loadImage("../images/car1.png");
car2img=loadImage("../images/car2.png");
car3img=loadImage("../images/car3.png");
car4img=loadImage("../images/car4.png");
ground=loadImage("../images/ground.png");

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
