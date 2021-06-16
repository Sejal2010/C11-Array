var s1,s2,s3,s4;
var sprites =[]

function setup() {
  createCanvas(400, 400);
  s1 = createSprite(75, 100, 30, 30);
  s2 = createSprite(150, 250, 30, 30);
  s3 = createSprite(300, 300, 30, 30);
  s4 = createSprite(350, 150, 30, 30);
  console.log(s1)
  sprites = [s1,s2,s3,s4]; 
  for(i=0;i<4;i++){
    console.log(sprites[i].position.x);
  }
 
}
function draw() {

  background(150,20,200);
  drawSprites();
  
}



