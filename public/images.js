//BUILDING IMAGE VARIABLES\\
let MBStage1;
let MBStage2;
let BarracksStage1;
let BarracksStage2;
let StorageStage1;
let OverStorageStage1;
let OverMBStage1;
let OverMBStage2;
let OverBarracksStage1;
let OverBarracksStage2;
let WoodMine;
let StoneMine;
let wall;
let OverWoodMine;

let StoneMineSpritesheet;
let StoneMineSpriteData;
let OverStoneMine;

let cityFloor;
let forest;

//MAP VARIABLES\\
let mapIMG;
let mapHumans;
let OverMapHumans;
let mapApes;
let OverMapApes;
let attackImg;

//BACKGROUND VARIABLE\\
let background;
let floorBuildings;

//TEXT FONT VARIABLES\\
let corsiva;

function SetupImages() {
    background = loadImage('img/Background_Images/background.jpg');

    cityFloor = loadImage('img/Background_Images/city_floor.jpg')
    forest = loadImage('img/Background_Images/forest.jpg')

    floorBuildings = loadImage('img/Background_Images/floor_buildings.jpg')

    MBStage1 = loadImage('img/Buildings/City_Buildings/Main_Building/main_building_stage_1.png');
    MBStage2 = loadImage('img/Buildings/City_Buildings/Main_Building/main_building_stage_2.png');
    BarracksStage1 = loadImage('img/Buildings/City_Buildings/Barracks_Building/barracks_stage_1.png');
    BarracksStage2 = loadImage('img/Buildings/City_Buildings/Barracks_Building/barracks_stage_2.png');
    StorageStage1 = loadImage('img/Buildings/City_Buildings/Storage_Building/storage_stage_1.png');

    OverMBStage1 = loadImage('img/Buildings/City_Buildings/Main_Building/Over_main_building_stage_1.png');
    OverMBStage2 = loadImage('img/Buildings/City_Buildings/Main_Building/Over_main_building_stage_2.png');
    OverBarracksStage1 = loadImage('img/Buildings/City_Buildings/Barracks_Building/Over_barracks_stage_1.png');
    OverBarracksStage2 = loadImage('img/Buildings/City_Buildings/Barracks_Building/Over_barracks_stage_2.png');
    OverStorageStage1 = loadImage('img/Buildings/City_Buildings/Storage_Building/Over_storage_stage_1.png');


    WoodMine = loadImage('img//Buildings/Mine_Buildings/Wood_Mine/wood_mine.png');
    OverWoodMine = loadImage('img//Buildings/Mine_Buildings/Wood_Mine/Over_wood_mine.png');

    StoneMineSpriteData = loadJSON('img//Buildings/Mine_Buildings/Stone_Mine/StoneMine.json');
    StoneMineSpritesheet = loadImage('img//Buildings/Mine_Buildings/Stone_Mine/StoneMine.png');
    OverStoneMine = loadImage('img//Buildings/Mine_Buildings/Stone_Mine/OverStoneMine.png');

    mapIMG = loadImage('img/Map/the_map.png');
    mapHumans = loadImage('img/Map/map_humans.png');
    OverMapHumans = loadImage('img/Map/over_map_humans.png');
    mapApes = loadImage('img/Map/map_apes.png');
    OverMapApes = loadImage('img/Map/over_map_apes.png');
    attackImg = loadImage('img/attack.png');

    //TEXT FONT\\
    corsiva = loadFont('img/Text_Font/NK_Mono.ttf');

}