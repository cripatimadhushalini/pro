var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3;
var garden,gardenImg;

function preload() {
    //load the images here
  catImg1 = loadAnimation("images/cat1.png");
  catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
  catImg3 = loadAnimation("images/cat4.png");
  
  gardenImg = loadImage("images/garden.png");
  mouseImg2 = loadImage("images/mouse1.png");
  mouseImg = loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500,400,100,100);
    garden.addImage(gardenImg);
    garden.scale = 1.1;

    cat = createSprite(900,700,10,10);
    cat.addAnimation("Img1",catImg1);  
    cat.addAnimation("Img2",catImg2);
    cat.addAnimation("Img3",catImg3);
    cat.scale = 0.2;

    mouse = createSprite(100,600,10,10);
    mouse.addImage("Img2",mouseImg2);
    mouse.addAnimation("Img",mouseImg);
    mouse.addAnimation("Img3",mouseImg3);
    mouse.scale = 0.2;

    cat.debug = true;
    mouse.debug = true;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
      cat.addAnimation("Img3",catImg3);
      cat.changeAnimation("Img3");
      mouse.changeAnimation("Img3",mouseImg3);
      //cat.velocityX = 0;
    }


    keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("Img1",catImg1);
    cat.changeAnimation("Img2",catImg2);
    mouse.changeAnimation("Img",mouseImg);
  }
}
