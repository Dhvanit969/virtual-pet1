//Create variables here
var dog, happyDog, database;
var foods,foodStock
function preload()
{
  //load images here
  this.image=loadImage("images/dogImg.png");
  this.image=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  
var firebase=database;

  dog=createSprite(100,200,20,20);
  dog=addImage(dogImg.png);

  happydog=createSprite(100,200,20,20);
  happydog=addImage(dogImg1.png);

  foodStock=database.ref("food");
   foodStock.on("value",readStock);
}


function draw() {  

  background(46, 139, 87);
if(dog.foods){
  this.loadimage("dogImg1.png");
}
if(UP_ARROW.keyPressed){
text("Noote please press UP_ARROW to feed food");
textSize(30);
fill("red");
}
  drawSprites();
  //add styles here


}

function keyPressed(){
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage()
  }
}

//function to Read values from DB
function readStock(data){
  foods=data.val();
}

//function to write values DB
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}

//function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
  Food:x
  })
}