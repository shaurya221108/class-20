var fr,mr;
function setup() {
  createCanvas(1200,800);
  fr=createSprite(200, 200, 50, 80);
fr.shapeColor="lime";
  mr=createSprite(400, 200, 80, 30);
  mr.shapeColor="cyan";
}

function draw() {
  background(0);  
  mr.x=World.mouseX;
  mr.y=World.mouseY
  if (mr.x-fr.x<fr.width/2+mr.width/2
    &&fr.x-mr.x<mr.width/2+fr.width/2
    &&mr.y-fr.y<fr.height/2+mr.height/2
   && fr.y-mr.y<fr.height/2+mr.height/2){
    mr.shapeColor="beige";
    fr.shapeColor="beige";
  }
  else{
    mr.shapeColor="cyan";
    fr.shapeColor="lime";
  }
    
  drawSprites();
}