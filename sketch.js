var invisibleLine;
var boat1,boat1Image;
var boat2,boat2Image;
var score1,score2;
var coinGroup;
var check=false; 
function preload(){
  boat1Image=loadImage("Images/PlayerBoat1.png");
  boat2Image=loadImage("Images/PlayerBoat2.png");
  coinImage=loadImage("Images/CoinImage.png");
  bgImage1=loadImage("BackgroundImage.jpeg");

}
function setup() {
  createCanvas(1000,550);
  bgImage=createSprite(500,225,10,10);
  bgImage.addImage("bg", bgImage1);
  bgImage.scale=5;
  invisibleLine=createSprite(500,275,4,550);
  invisibleLeft=createSprite(0,275,4,550);
  invisibleRight=createSprite(1000,275,4,550);
  boat1=createSprite(250,500,10,10);
  boat1.addImage("boat1",boat1Image);
  boat2=createSprite(750,500,10,10);
  boat2.addImage("boat2",boat2Image);
  boat2.scale=0.2;
  boat1.scale=0.2;
  coinGroup=new Group();
  score1=0
  score2=0
}

function draw() {
  background(0,0,0);  
  

  if(keyDown("left")){
    boat1.x=boat1.x-10;
  }
  if(keyDown("right")){
    boat1.x=boat1.x+10;
  }
  if(keyDown("A")){
    boat2.x=boat2.x-10;
  }
  if(keyDown("D")){
    boat2.x=boat2.x+10;
  }
  boat1.bounceOff(invisibleLine);
  boat2.bounceOff(invisibleLine);
  boat1.bounceOff(invisibleLeft);
  boat2.bounceOff(invisibleRight);
  for(var i=0;i<coinGroup.length;i++){
    if(boat1.isTouching(coinGroup.get(i))){
     // coinGroup.get(i).destroy();
    check=true;
      score1=score1+10;
    }
    if(boat2.isTouching(coinGroup.get(i))){
      //coinGroup.get(i).destroy();
      check=true;
      score2=score2+10;
    }
    if(check===true){
      coinGroup.get(i).destroy();
      check=false;
    }
  }
  spawnCoin();
  drawSprites();
  textSize(30);
  fill("black");
  text("score: "+score1,50,50);
  text("score: "+score2,850,50);

}
function spawnCoin(){
  if(frameCount%50===0){
    var randX=Math.round(random(10,900));
    coin=createSprite(randX,100,10,10);
    coin.addImage("coin", coinImage);
    coin.scale=0.2;
    coin.velocityY=10;
    coin.lifetime=45;
    coinGroup.add(coin);

  }
}