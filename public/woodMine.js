let canvas2;
let production;

function setup(){
    initUI();
    canvas2 = createCanvas(809, 500)
    let woodMine;
    woodMine = document.getElementById('woodMine');
    canvas2.parent(woodMine);
    set_StoneMine_animations();
}

function draw(){
    drawForest();
    StoneMineInfo();
}

function StoneMineInfo(){
    textSize(32);
    text('Current Level:\nProduction:', 400, 200);
    text(currentCityInfo.stoneMineLevel, 620, 200);
    text('100', 550, 250);
    if(currentCityInfo.stoneMineLevel < 20) {
        text('Next Level:\nProduction:', 400, 350);
        text(currentCityInfo.stoneMineLevel + 1, 600, 350)
    }
};

function drawForest(){
    image(forest, 0, 0);
}