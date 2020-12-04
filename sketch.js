var database;
var back_img,front_img, garden;
var garden1, garden2, orange_branch, apple_branch
var garden3, cherry_branch
var gameState =0;
var playerCount = 0;
var allPlayers;
var game;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var score = 0


function preload(){
  back_img = loadImage("images/back.png");
  front_img = loadImage("images/garden.png");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  apple_branch = loadImage("images/garden2.png")
  orange_branch = loadImage("images/garden1.png")
  cherry_branch = loadImage("images/garden3.png")
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  

garden1 = createSprite(900, 70, 20, 20)
garden1.addAnimation("oranges", orange_branch)
garden1.scale = 0.5

garden2 = createSprite(50, 70, 20, 20)
garden2.addAnimation("apples", apple_branch)


}


function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }

garden2.display()
garden1.display()  

}


 