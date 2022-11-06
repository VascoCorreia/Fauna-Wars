let canvas3;

let StoneMineLevel;

function setup(){
    initUI();
    canvas3 = createCanvas(809, 500)
    let storage;
    storage = document.getElementById('storage');
    canvas3.parent(storage);
    set_StoneMine_animations();
    StoneMineLevel = currentCityInfo.storageLevel;
    console.log(StoneMineLevel);
}

function draw(){
    drawFloor();
    StoneMineInfo();
    drawStorage();
}

function StoneMineInfo(){
    let capacity = Math.ceil(1000 * Math.pow(1.23, StoneMineLevel - 1));
    let text1 = ["Current Level:", nf(StoneMineLevel), "\nProduction per hour:", nf(capacity)];
    let space = " ";
    let fulltext1 = join(text1, space);
    let textHalf = [text1[2][3]];
    let textHalfSpace = join(textHalf, space);
    let text1Width = textWidth(textHalfSpace);

    let x = 400;
    let y = 150;
    let w = 300;
    let h = 100;

    console.log(textWidth)
    rectMode(CORNER);
    fill('#c0b9ae');
    rect(x, y, w, h);

    textSize(30);
    textFont(corsiva);
    fill('black');
    text(fulltext1, x + text1Width, y + textAscent(fulltext1) * 2 );

    if(StoneMineLevel < 14) {
        let nextCapacity = Math.ceil(1000 * Math.pow(1.23, (StoneMineLevel +1) - 1));
        let text2 = ["Next Level:", nf(StoneMineLevel + 1), "\nProduction per hour:", nf(nextCapacity)];
        let fulltext2 = join(text2, space);
        fill('#c0b9ae');
        rect(x, y + 120, w, h);
        fill('black');
        text(fulltext2, x + text1Width, 310)
    }
};

function drawStorage(){
    if (currentCityInfo.mainBuildingLevel <= 5){
        image(StorageStage1, 150, 200, StorageStage1.width * 1.5, StorageStage1.height * 1.5);
    }
}

function drawFloor(){
    image(floorBuildings, 0, 0);
};