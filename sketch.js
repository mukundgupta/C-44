var back_IMG;
var play_icon;
var coins =500
var diamonds = 10
var gameState = "HOME_SCREEN"
function setup() {
  createCanvas(1030,600);
}

function preload(){
  back_IMG = loadImage("tower.JPG")
}

function draw() {
  background(back_IMG);  
  if(gameState === "HOME_SCREEN"){
  fill("orange")
  textSize(90)
  textFont()
  text("T.O.W.E.R.",290,160)
  play_icon = createSprite(730,270,80,80)
  play_icon.visible = false;
  }
  fill("brown")
  rect(700,50,170,21)
  textSize(21)
  fill("gold")
  text("coins: "+coins,720,67)
  fill("brown")
  rect(20,50,170,21)
  fill("#7DF9FF")
  text("diamonds: "+diamonds,40,67)
  noFill();
  stroke("gold")
  strokeWeight(10)
  ellipse(730,267,100,100)
  triangle(715, 293, 715, 240, 750, 266);
  drawSprites();
}
function changState(){
  
  gameState =  "LEVEL"
}