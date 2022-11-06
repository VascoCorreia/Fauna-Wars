let canvas;

function setup(){
    initUI();
    canvas = createCanvas(809, 500)
    let stoneMine;
    stoneMine = document.getElementById('stoneMine');
    canvas.parent(stoneMine);
    set_StoneMine_animations();
}

function draw(){
    drawGround();
    Stone_Mine.show();
    Stone_Mine.animate();
    StoneMineInfo();
}

function StoneMineInfo(){
    let production;
    production = Math.floor(30 * Math.pow(1.2, currentCityInfo.stoneMineLevel - 1));
    textSize(32);
    text('Current Level:\nProduction:', 400, 200);
    text(currentCityInfo.stoneMineLevel, 620, 200);
    text(production, 550, 250);
    if(currentCityInfo.stoneMineLevel < 20) {
        let nextProduction;
        nextProduction = Math.floor(30 * Math.pow(1.2, (currentCityInfo.stoneMineLevel + 1) - 1));
        text('Next Level:\nProduction:', 400, 350);
        text(currentCityInfo.stoneMineLevel + 1, 600, 350)
        text(nextProduction, 650, 400);
    }
};
