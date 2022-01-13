var score=0;
var gun,bottle,background,bullte;

var gunImg,bottleImg,backgroundImg,buttleImg;

var bottlegroup,bulltegroup;


var life=3;
var score=0;
var gameState=1;


function preload() {

gunImg = loadImage("gun img .png")
bottleImg = loadImage("game img .png")
backgroundImg = loadImage("Background img .png")
bullteImg = loadImage("gun img .png")
}

function Setup () {
createCanvar (800,600);

backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  bottleGroup = createGroup();   
  
  
  heading= createElement("h1");
  scoreboard= createElement("h1");backBoard= createSprite(50, width/2, 100,height);
  }

  function draw() {
    background("#BDA297");
    
    heading.html("Life: "+life)
    heading.style('color:red'); 
    heading.position(150,20)
  
    scoreboard.html("Score: "+score)
    scoreboard.style('color:red'); 
    scoreboard.position(width-200,20)
  
    if(gameState===1){
      gun.y=mouseY  
  
      if (frameCount % 80 === 0) {
        drawbluebuttle();
      }
  
      if (frameCount % 100 === 0) {
        drawredbottle();
      }
  
      if(keyDown("space")){
        shootBullet();
      }
  
  
      if(bottleGroup.collide(bulletGroup)){
        handlebottleCollision(bottleGroup);
      }
  
    }


  }






