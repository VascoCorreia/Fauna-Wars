let board = [];
let cnv;
let currentTile;
let canAttack = false;


function setup() {
  cnv = createCanvas(809, 500);
  let worldmap;
  worldmap = document.getElementById('map');
  cnv.parent(worldmap);
  initUI();
  initBoard();
  loadCityInfo();
  drawMap();
}

function draw() {
  drawBoard();
}

function mousePressed() {

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j].click_tile(mouseX, mouseY) && board[i][j].occupied) {

        currentTile = board[i][j];
        clear()
        imageMode(CORNER);
        image(mapIMG, 0, 0);
        textSize(25);
        textFont(corsiva);

        fill('#c0b9ae')
        rect(470, 90, 250, 110)

        fill('black')
        text("Name: " + board[i][j].cityName, 490, 120);
        text("Player Name: " + board[i][j].playerName, 490, 140);
        text("Player Faction: " + board[i][j].playerFaction, 490, 160);
        text("Player Points: " + board[i][j].playerPoints, 490, 180);

        if (board[i][j].playerFaction !== loggedPlayer.faction) {

          canAttack = true
          image(attackImg, 490, 210, 50 * 1.25, 50 * 1.25)

        } else {

          canAttack = false;

        }
      }
    }
  }
  if ((mouseX > 490 && mouseX < 490 + 50 * 1.25 && mouseY > 210 && mouseY < 210 + 50 * 1.25) && canAttack) {

    tileInfo = {

      "cityID": currentTile.cityID,
      "cityX": currentTile.positionX,
      "cityY": currentTile.positionY

    }

    httpPost('/sendTileInfo', tileInfo, () => {

      window.location.href = "/attack.html"

    })
  }
}





function drawBoard() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j].draw_tile();
      board[i][j].changecolour(board[i][j].playerFaction); //colous the tiles depending on faction and if its clicked
    }
  }
}

function initBoard() {

  let numberOfCols = 7;
  let sizeOfTile = 42;
  let GBW = 300;
  let GBH = 300;
  let y = 0;
  let x = 0;
  let countID = 0;
  let countID2 = 0;
  let initialY = height / 2 - GBH / 2;
  let initialX = (width / 2 - GBW / 2) - 100;

  for (let i = 0; i < numberOfCols; i++) {
    //every colum is also an array
    board[i] = [];
    if (i == 0) {
      y = initialY;
      centerY = (y +(y + sizeOfTile))/2;
      console.log(centerY, mouseY);
    } else {
      y = y + GBH / numberOfCols;
      centerY = (y +(y + sizeOfTile))/2;
    }
    countID2++
    for (var j = 0; j < numberOfCols; j++) {
      if (j == 0) {
        x = initialX;
        centerX = (x +(x + sizeOfTile))/2;
      } else {
        x = x + GBW / numberOfCols;
        centerX = (x +(x + sizeOfTile))/2;
      }
      countID++;
      if(countID == 8){
        countID = 1
      }
      board[i][j] = new tile(x, y, sizeOfTile, 255, 0, "", countID, countID2, centerX, centerY, false, false);
    }
  }
}


class tile {

  constructor(x, y, s, c, st, t, id, id2, centerX, centerY, clicked, occupied) {

    this.x = x;
    this.y = y;
    this.s = s;
    this.c = c;
    this.st = st;
    this.t = t;
    this.id = id;
    this.id2 = id2;
    this.centerX = centerX;
    this.centerY = centerY;
    this.clicked = clicked;
    this.clicked = occupied

  }

  draw_tile() {

    push();
    noFill();
    stroke(this.st);
    square(this.x, this.y, this.s);
    text(this.t, this.x + this.s / 2, this.y + this.s / 2);
    pop();
  }

  click_tile(posx, posy) {

    if ((posx > this.x & posx < this.x + this.s) & (posy > this.y & posy < this.y + this.s)) {

      return true;

    }
  }


  changecolour(faction) {
    if (faction === 'Humans' && this != currentTile){
      imageMode(CENTER);
      image(mapHumans, this.centerX, this.centerY);
    }else if(faction === 'Apes' && this != currentTile){
      imageMode(CENTER);
      image(mapApes, this.centerX, this.centerY);
    }else if(this == currentTile){
      if(faction == "Humans") {
        imageMode(CENTER);
        image(OverMapHumans, this.centerX, this.centerY);
      } else {
        imageMode(CENTER);
        image(OverMapApes, this.centerX, this.centerY);
      }
    }
  }

  get_id() {

    return this.id;
  }

  get_id2() {

    return this.id2
  }

}


function loadCityInfo() {
  loadJSON('/getCityInfo', function (cityArray) {
    let numberOfCols = 7;

    for (let k = 0; k < cityArray.length; k++) {

      for (let i = 0; i < numberOfCols; i++) {  //  linhas

        for (let j = 0; j < numberOfCols; j++) {// colunas

          if (cityArray[k].posX == i && cityArray[k].posY == j) {

            board[i][j].cityID = cityArray[k].cityID;
            board[i][j].cityName = cityArray[k].cityName;
            board[i][j].playerName = cityArray[k].playerName;
            board[i][j].playerFaction = cityArray[k].playerFaction;
            board[i][j].playerPoints = cityArray[k].playerPoints;
            board[i][j].positionX = cityArray[k].posX;
            board[i][j].positionY = cityArray[k].posY;
            board[i][j].occupied = true;

          }
        }
      }
    }
  })
};

function drawMap(){
  image(mapIMG, 0, 0);
};