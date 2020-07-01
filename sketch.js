function setup() {
  createCanvas(800,400);
  Fixedrect = createSprite(200,200,50,50);
  Fixedrect.shapeColor = "green";

  Movingrect = createSprite(400,200,60,50);
  Movingrect.shapeColor = "green";
  Movingrect.debug = true;
}

function draw() {
  background(255,255,255); 
  
  Movingrect.x = World.mouseX;
  Movingrect.y = World.mouseY;
  //console.log(Movingrect.x - Fixedrect.x);

  if(Movingrect.x - Fixedrect.x < Movingrect.width / 2 + Fixedrect.width / 2 &&
     Fixedrect.x - Movingrect.x < Movingrect.width / 2 + Fixedrect.width / 2 &&
     Movingrect.y - Fixedrect.y < Movingrect.height / 2 + Fixedrect.height / 2 &&
     Fixedrect.y - Movingrect.y < Movingrect.height / 2 + Fixedrect.height / 2 ) {

      Movingrect.shapeColor = "blue";
      Fixedrect. shapeColor = "blue";
    }

  else {
      Movingrect.shapeColor = "green";
      Fixedrect. shapeColor = "green";
    }

  
  drawSprites();
}