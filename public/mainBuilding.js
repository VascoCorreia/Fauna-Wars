function setup() {
    initUI();
    initBuildUI();
    upgradeBuilding();
}

function initBuildUI() {
    let mainBuildingCurrentLevel = document.getElementById("mainBuildingCurrentLevel");
    let barracksCurrentLevel = document.getElementById("barracksCurrentLevel");
    let wallCurrentLevel = document.getElementById("wallCurrentLevel");
    let woodMineCurrentLevel = document.getElementById("woodMineCurrentLevel");
    let stoneMineCurrentLevel = document.getElementById("stoneMineCurrentLevel");
    let clayMineCurrentLevel = document.getElementById("clayMineCurrentLevel");

    let mainBuildingWoodCost = document.getElementById("mainBuildingWoodCost");
    let mainBuildingStoneCost = document.getElementById("mainBuildingStoneCost");
    let mainBuildingClayCost = document.getElementById("mainBuildingClayCost");

    let barracksWoodCost = document.getElementById("barracksWoodCost");
    let barracksStoneCost = document.getElementById("barracksStoneCost");
    let barracksClayCost = document.getElementById("barracksClayCost");

    let wallWoodCost = document.getElementById("wallWoodCost");
    let wallStoneCost = document.getElementById("wallStoneCost");
    let wallClayCost = document.getElementById("wallClayCost");

    let woodMineWoodCost = document.getElementById("woodMineWoodCost");
    let woodMineStoneCost = document.getElementById("woodMineStoneCost");
    let woodMineClayCost = document.getElementById("woodMineClayCost");

    let stoneMineWoodCost = document.getElementById("stoneMineWoodCost");
    let stoneMineStoneCost = document.getElementById("stoneMineStoneCost");
    let stoneMineClayCost = document.getElementById("stoneMineClayCost");

    let clayMineWoodCost = document.getElementById("clayMineWoodCost");
    let clayMineStoneCost = document.getElementById("clayMineStoneCost");
    let clayMineClayCost = document.getElementById("clayMineClayCost");

    let storageWoodCost = document.getElementById("storageWoodCost");
    let storageStoneCost = document.getElementById("storageStoneCost");
    let storageClayCost = document.getElementById("storageClayCost");


    mainBuildingCurrentLevel.innerHTML = "Current Level: " + currentCityInfo.mainBuildingLevel;
    barracksCurrentLevel.innerHTML = "Current Level: " + currentCityInfo.barracksLevel;
    wallCurrentLevel.innerHTML = "Current Level: " + currentCityInfo.wallLevel;
    woodMineCurrentLevel.innerHTML = "Current Level: " + currentCityInfo.woodMineLevel;
    stoneMineCurrentLevel.innerHTML = "Current Level: " + currentCityInfo.stoneMineLevel;
    clayMineCurrentLevel.innerHTML = "Current Level: " + currentCityInfo.clayMineLevel;
    storageCurrentLevel.innerHTML = "Current Level: " + currentCityInfo.storageLevel;

    mainBuildingWoodCost.innerHTML = Math.round(90 * Math.pow(1.26, (currentCityInfo.mainBuildingLevel + 1) - 1));//follow the formula for the wood cost
    mainBuildingClayCost.innerHTML = Math.round(70 * Math.pow(1.28, (currentCityInfo.mainBuildingLevel + 1) - 1));//follow the formula for the clay cost
    mainBuildingStoneCost.innerHTML = Math.round(80 * Math.pow(1.25, (currentCityInfo.mainBuildingLevel + 1) - 1)); //follow the formula for the stone cost

    barracksWoodCost.innerHTML = Math.round(200 * Math.pow(1.26, (currentCityInfo.barracksLevel + 1) - 1));  //follow the formula for the wood cost
    barracksClayCost.innerHTML = Math.round(170 * Math.pow(1.25, (currentCityInfo.barracksLevel + 1) - 1)); //follow the formula for the clay cost
    barracksStoneCost.innerHTML = Math.round(90 * Math.pow(1.28, (currentCityInfo.barracksLevel + 1) - 1)); //follow the formula for the stone cost

    wallWoodCost.innerHTML = Math.round(50 * Math.pow(1.26, (currentCityInfo.wallLevel + 1) - 1));  //follow the formula for the wood cost
    wallClayCost.innerHTML = Math.round(100 * Math.pow(1.25, (currentCityInfo.wallLevel + 1) - 1)); //follow the formula for the clay cost
    wallStoneCost.innerHTML = Math.round(70 * Math.pow(1.28, (currentCityInfo.wallLevel + 1) - 1)); //follow the formula for the stone cost

    woodMineWoodCost.innerHTML = Math.round(50 * Math.pow(1.26, (currentCityInfo.woodMineLevel + 1) - 1));  //follow the formula for the wood cost
    woodMineClayCost.innerHTML = Math.round(60 * Math.pow(1.25, (currentCityInfo.woodMineLevel + 1) - 1)); //follow the formula for the clay cost
    woodMineStoneCost.innerHTML = Math.round(40 * Math.pow(1.28, (currentCityInfo.woodMineLevel + 1) - 1)); //follow the formula for the stone cost

    stoneMineWoodCost.innerHTML = Math.round(65 * Math.pow(1.26, (currentCityInfo.stoneMineLevel + 1) - 1));  //follow the formula for the wood cost
    stoneMineClayCost.innerHTML = Math.round(75 * Math.pow(1.25, (currentCityInfo.stoneMineLevel + 1) - 1)); //follow the formula for the clay cost
    stoneMineStoneCost.innerHTML = Math.round(60 * Math.pow(1.28, (currentCityInfo.stoneMineLevel + 1) - 1)); //follow the formula for the stone cost

    clayMineWoodCost.innerHTML = Math.round(40 * Math.pow(1.26, (currentCityInfo.clayMineLevel + 1) - 1));  //follow the formula for the wood cost
    clayMineClayCost.innerHTML = Math.round(50 * Math.pow(1.25, (currentCityInfo.clayMineLevel + 1) - 1)); //follow the formula for the clay cost
    clayMineStoneCost.innerHTML = Math.round(60 * Math.pow(1.28, (currentCityInfo.clayMineLevel + 1) - 1)); //follow the formula for the stone cost

    storageWoodCost.innerHTML = Math.round(200 * Math.pow(1.26, (currentCityInfo.storageLevel + 1) - 1));  //follow the formula for the wood cost
    storageClayCost.innerHTML = Math.round(90 * Math.pow(1.25, (currentCityInfo.storageLevel + 1) - 1)); //follow the formula for the clay cost
    storageStoneCost.innerHTML = Math.round(170 * Math.pow(1.28, (currentCityInfo.storageLevel + 1) - 1)); //follow the formula for the stone cost
}