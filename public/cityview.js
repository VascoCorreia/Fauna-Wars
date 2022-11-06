let cnv;
let tileSize = 70;
let x = 809/2;
let y = 500/2;
let d = 490;
let overMB = false;
let overBarracks = false;
let overWall = false;
let overStorage = false;
let overWoodMine = false;
let overStoneMine = false;
let overClayMine = false;
let imgWidth = 100;
let imgHeight = 92;
let MineIMGSize = 150;

//MINE BUILDINGS VARIABLES\\
let StoneMineAnimation = [];
let Stone_Mine;

function setup() {

  initUI();
  cnv = createCanvas(809, 500);
  let city;
  city = document.getElementById('cityview');
  cnv.parent(city);
  drawGround();
  set_StoneMine_animations();

}

function draw() {

    drawMBSTAGE1(mouseX, mouseY);
    drawMBSTAGE2(mouseX, mouseY);
    drawBarracksSTAGE1(mouseX, mouseY);
    //drawBarracksSTAGE2(mouseX, mouseY);
    drawStorage(mouseX, mouseY);
    drawWoodMine(mouseX, mouseY);
    //drawStoneMine();
    //is_overClayMine(mouseX, mouseY);
    //drawClayMine()
    //buildingNames();
    //buildingLevels();
    //drawWall();
    Stone_Mine.show()
    Stone_Mine.animate()
    is_overStoneMine(mouseX, mouseY);

}

function mousePressed() {

      if(overMB) {
        location.href='/mainBuilding.html';
      }
      
      else if(overBarracks){
        location.href='/recruit.html';
      }

      else if(overStoneMine){
        location.href='/stoneMine.html';
      }

      else if(overWoodMine){
        location.href='/woodMine.html';
      }

      else if(overStorage){
        location.href='/storage.html';
      }

}


  function drawMBSTAGE1(mx, my){
    imageMode(CENTER);
    if(currentCityInfo.mainBuildingLevel >= 1 && currentCityInfo.mainBuildingLevel < 10){
        if (mx > x - imgWidth/2 && mx < x + imgWidth/2 && my > y - imgHeight/2 && my < y + imgHeight/2) {
          overMB = true;
          image(OverMBStage1, x, y)
        } else {
              overMB = false;
              image(MBStage1, x, y);
            }
          }
      };

function drawMBSTAGE2(mx, my){
  imageMode(CENTER);
  if(currentCityInfo.mainBuildingLevel >= 10){
      if (mx > x - imgWidth/2 && mx < x + imgWidth/2 && my > y - imgHeight/2 && my < y + imgHeight/2) {
        overMB = true;
        image(OverMBStage2, x, y)
      } else {
          overMB = false;
          image(MBStage2, x, y);
          }
        }
  };
  
  function drawBarracksSTAGE1(mx, my){
    imageMode(CENTER);
      if (mx > x/2 * 1.5 - imgWidth/2 && mx < x/2 * 1.5 + imgWidth/2 && my > y/2 * 1.5 - imgHeight/2 && my < y/2 * 1.5 + imgHeight/2) {
        overBarracks = true;
        image(OverBarracksStage1, x/2 * 1.5, y/2 * 1.5);
      } else {
          overBarracks = false;
          image(BarracksStage1, x/2 * 1.5, y/2 * 1.5);
        }
  };

  function drawBarracksSTAGE2(mx, my){
    imageMode(CENTER);
    if(currentCityInfo.barracksLevel >= 5){
      if (mx > x/2 * 1.5 - imgWidth/2 && mx < x/2 * 1.5 + imgWidth/2 && my > y/2 * 1.5 - imgHeight/2 && my < y/2 * 1.5 + imgHeight/2) {
        overBarracks = true;
        image(OverBarracksStage2, x/2 * 1.5, y/2 * 1.5);
      } else {
          overBarracks = false;
          image(BarracksStage2, x/2 * 1.5, y/2 * 1.5);
        }
      }
  };

  function drawStorage(mx, my){
    imageMode(CENTER);
      if (mx > x/2 * 2.5 - imgWidth/2 && mx < x/2 * 2.5 + imgWidth/2 && my > y/2 * 1.5 - imgHeight/2 && my < y/2 * 1.5 + imgHeight/2) {
        overStorage = true;
        image(OverStorageStage1, x/2 * 2.5, y/2 * 1.5);
      } else {
          overStorage = false;
          image(StorageStage1, x/2 * 2.5, y/2 * 1.5);
      }
  };

  function drawWoodMine(mx, my){
    imageMode(CENTER);
      if (mx > x * 1.82 - MineIMGSize/2 && mx < x * 1.82 + MineIMGSize/2 && my > y * 1.7 - MineIMGSize/2 && my < y * 1.7 + MineIMGSize/2) {
        image(OverWoodMine, x * 1.82, y * 1.7);
        overWoodMine = true;
      } else {
        overWoodMine = false;
          image(WoodMine, x * 1.82, y * 1.7);
          }
  ;}

function drawGround(){
  image(cityFloor, 0, 0);
};


  
  function drawWalldeece(){
        circle(x, y, d);
        fill("#FFCC99");
        circle(x, y, d/1.1);
    };

function drawClayMine() {
  rectMode(CENTER);
  square(x * 0.2, y * 0.3, tileSize * 1.5);
}

function drawWall(){
  rectMode(CENTER);
  image(Wall, 0, 0);
}
  
       
  function is_overBarracks(mx, my){
    
      if (mx > x/2 * 1.5 - tileSize/2 && mx < x/2 * 1.5 + tileSize/2 && my > y/2 * 1.5 - tileSize/2 && my < y/2 * 1.5 + tileSize/2) {
        overBarracks = true;
        fill("green"); 
      } else {
        overBarracks = false;
        fill("red");
        }
    
  }

function is_overStorage(mx, my){
  
  if (mx > x/2 * 2.5 - tileSize/2 && mx < x/2 * 2.5 + tileSize/2 && my > y/2 * 1.5 - tileSize/2 && my < y/2 * 1.5 + tileSize/2) {
    overStorage = true;
    fill("green"); 
  } else {
      overStorage = false;
      fill("red");
    }
}

function is_overStoneMine(mx, my) {
  let frames = StoneMineSpriteData.frames;
  let imgW = frames[1].position.w;
  let imgH = frames[1].position.h;
    if (mx > x * 0.28 - (imgW/2) && mx < x * 0.28 + (imgW/2) && my > y * 0.15 - (imgH/2 * 1.5) && my < y * 0.15 + (imgH/2 * 1.5)) {
      overStoneMine = true;
      image(OverStoneMine, x * 0.28, y * 0.15);
  } else {
    overStoneMine = false;
    }
}

function is_overClayMine(mx, my) {
  
    if (mx > x * 0.2 - (tileSize/2 * 1.5) && mx < x * 0.2 + (tileSize/2 * 1.5) && my > y * 0.3 - (tileSize/2 * 1.5) && my < y * 0.3 + (tileSize/2 * 1.5)) {
      overClayMine = true;
      fill("green"); 
  } else {
      overClayMine = false;
      fill("red");
    }
}
    
function is_overWall(mx, my){
  
    if (dist(mx, my, x, y) < d/2 && dist(mx, my, x, y) > (d/1.1)/2)  {
      overWall = true;
      fill("green");
  } else {
      overWall = false;
      fill("black");
    }
}

function set_StoneMine_animations(){
  let frames = StoneMineSpriteData.frames;
  for(let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = StoneMineSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    StoneMineAnimation.push(img);
  }
  console.log(StoneMineSpriteData)
  Stone_Mine = new Sprite(StoneMineAnimation, 0.2);
}
  
  function buildingNames() {
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Wall", x + 180, y - 200);
    //text("Clay\nMine", x * 0.2, y * 0.3 - 5)
    textSize(18);
  }

  function buildingLevels(){
    textSize(25)
    fill(0)
    text(currentCityInfo.mainBuildingLevel, x + 45, y - 35)
    text(currentCityInfo.barracksLevel, x/2 *1.5 + 45, y/2 * 1.5 - 35)
    text(currentCityInfo.storageLevel, x/2 *2.5 + 45, y/2 * 1.5 - 35)
    text(currentCityInfo.clayMineLevel, x * 0.2 + 65, y * 0.3 - 35)
    //text(currentCityInfo.woodMineLevel, x * 1.8 + 65, y * 1.7 - 35)
    text(currentCityInfo.stoneMineLevel, x * 0.2 + 65, y * 1.7 - 35)
    text(currentCityInfo.wallLevel, x + 225, y - 180)
};