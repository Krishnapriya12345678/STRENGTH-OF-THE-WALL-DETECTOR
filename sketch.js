var bullet,speed,weight
var thickness,wall





function setup(){
  createCanvas(1600,800);
  thickness=random(22,60)
  weight=random(35,59);
  speed=random(80,90)
  bullet=createSprite(400, 200, 40, 15);
  wall=createSprite(1000,200,thickness,1000);
  bullet.shapeColor='white'
  wall.shapeColor='brown'
 bullet.velocityX=speed

}

function draw() {
  background('BLACK');  
  drawSprites();
  hit();
}
  function hit(){
if(wall.x-bullet.x<(wall.width+bullet.width)/2){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  
  if(damage>10){
    wall.shapeColor='red'
    textSize='90'
    text('BAD',400,400)
    
  }
    
  if(damage<10){
    wall.shapeColor='green'
    textSize='90'
     text('GOOD',400,400)
    
  }
}
  }
