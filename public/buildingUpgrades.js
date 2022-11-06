
function upgradeMainBuilding(){
    
    let woodCost = Math.round(90*Math.pow(1.26, (currentCityInfo.mainBuildingLevel+1)-1));//follow the formula for the wood cost
    let clayCost = Math.round(70*Math.pow(1.28, (currentCityInfo.mainBuildingLevel+1)-1));//follow the formula for the clay cost
    let stoneCost = Math.round(80*Math.pow(1.25, (currentCityInfo.mainBuildingLevel+1)-1)); //follow the formula for the stone cost
    let upgradeTime = Math.round(60*Math.pow(1.47, (currentCityInfo.mainBuildingLevel+1)-1)); //follow the formula for the stone cost

    if((woodCost <= currentCityInfo.woodAmount) && (stoneCost <= currentCityInfo.stoneAmount) && (clayCost <= currentCityInfo.clayAmount)){

        let upgradeInfo = {
            "cityID":currentCityInfo.id,
            "level":currentCityInfo.mainBuildingLevel+1,
            "woodCost":woodCost,
            "stoneCost":stoneCost,
            "clayCost":clayCost,
            "upgradeTime":upgradeTime
        }

        
        httpPost('/upgradeMainBuilding',upgradeInfo);

        window.location.reload();  //refreshes page
    }

    else{

        alert('Not enough resources');

    }
}

function upgradeBarracks(){
    
    let woodCost = Math.round(200*Math.pow(1.26, (currentCityInfo.barracksLevel+1)-1));  //follow the formula for the wood cost
    let clayCost = Math.round(170*Math.pow(1.25, (currentCityInfo.barracksLevel+1)-1)); //follow the formula for the clay cost
    let stoneCost = Math.round(90*Math.pow(1.28, (currentCityInfo.barracksLevel+1)-1)); //follow the formula for the stone cost

    if((woodCost <= currentCityInfo.woodAmount) && (stoneCost <= currentCityInfo.stoneAmount) && (clayCost <= currentCityInfo.clayAmount)){

        let upgradeInfo = {
            "cityID":currentCityInfo.id,
            "level":currentCityInfo.barracksLevel+1,
            "woodCost":woodCost,
            "stoneCost":stoneCost,
            "clayCost":clayCost
        }
        
        httpPost('/upgradeBarracks',upgradeInfo);

        window.location.reload(); //refreshes page
    }

    else{

        alert('Not enough resources');

    }
}

function upgradeWall(){
    
    let woodCost = Math.round(50*Math.pow(1.26, (currentCityInfo.wallLevel+1)-1));  //follow the formula for the wood cost
    let clayCost = Math.round(100*Math.pow(1.25, (currentCityInfo.wallLevel+1)-1)); //follow the formula for the clay cost
    let stoneCost = Math.round(70*Math.pow(1.28, (currentCityInfo.wallLevel+1)-1)); //follow the formula for the stone cost

    if((woodCost <= currentCityInfo.woodAmount) && (stoneCost <= currentCityInfo.stoneAmount) && (clayCost <= currentCityInfo.clayAmount)){
        
        let upgradeInfo = {
            "cityID":currentCityInfo.id,
            "level":currentCityInfo.wallLevel+1,
            "woodCost":woodCost,
            "stoneCost":stoneCost,
            "clayCost":clayCost
        }
        
        httpPost('/upgradeWall',upgradeInfo);

        window.location.reload();  //refreshes page
    }

    else{

        alert('Not enough resources');

    }
}

function upgradeWoodMine(){
    
    let woodCost = Math.round(50*Math.pow(1.26, (currentCityInfo.woodMineLevel+1)-1));  //follow the formula for the wood cost
    let clayCost = Math.round(60*Math.pow(1.25, (currentCityInfo.woodMineLevel+1)-1)); //follow the formula for the clay cost
    let stoneCost = Math.round(40*Math.pow(1.28, (currentCityInfo.woodMineLevel+1)-1)); //follow the formula for the stone cost

    if((woodCost <= currentCityInfo.woodAmount) && (stoneCost <= currentCityInfo.stoneAmount) && (clayCost <= currentCityInfo.clayAmount)){

        let upgradeInfo = {
            "cityID":currentCityInfo.id,
            "level":currentCityInfo.woodMineLevel+1,
            "woodCost":woodCost,
            "stoneCost":stoneCost,
            "clayCost":clayCost
        }
        
        httpPost('/upgradeWoodMine',upgradeInfo);

        window.location.reload();//refreshes page
    }

    else{

        alert('Not enough resources');

    }
}

function upgradeStoneMine(){
    
    let woodCost = Math.round(65*Math.pow(1.26, (currentCityInfo.stoneMineLevel+1)-1));  //follow the formula for the wood cost
    let clayCost = Math.round(75*Math.pow(1.25, (currentCityInfo.stoneMineLevel+1)-1)); //follow the formula for the clay cost
    let stoneCost = Math.round(60*Math.pow(1.28, (currentCityInfo.stoneMineLevel+1)-1)); //follow the formula for the stone cost

    if((woodCost <= currentCityInfo.woodAmount) && (stoneCost <= currentCityInfo.stoneAmount) && (clayCost <= currentCityInfo.clayAmount)){

        let upgradeInfo = {
            "cityID":currentCityInfo.id,
            "level":currentCityInfo.stoneMineLevel+1,
            "woodCost":woodCost,
            "stoneCost":stoneCost,
            "clayCost":clayCost
        }
        
        httpPost('/upgradeStoneMine',upgradeInfo);

        window.location.reload();//refreshes page
    }

    else{

        alert('Not enough resources');

    }
}

function upgradeClayMine(){
    
    let woodCost = Math.round(40*Math.pow(1.26, (currentCityInfo.clayMineLevel+1)-1));  //follow the formula for the wood cost
    let clayCost = Math.round(50*Math.pow(1.25, (currentCityInfo.clayMineLevel+1)-1)); //follow the formula for the clay cost
    let stoneCost = Math.round(60*Math.pow(1.28, (currentCityInfo.clayMineLevel+1)-1)); //follow the formula for the stone cost

    if((woodCost <= currentCityInfo.woodAmount) && (stoneCost <= currentCityInfo.stoneAmount) && (clayCost <= currentCityInfo.clayAmount)){

        let upgradeInfo = {
            "cityID":currentCityInfo.id,
            "level":currentCityInfo.clayMineLevel+1,
            "woodCost":woodCost,
            "stoneCost":stoneCost,
            "clayCost":clayCost
        }
        
        httpPost('/upgradeClayMine',upgradeInfo);

        window.location.reload();//refreshes page
    }

    else{

        alert('Not enough resources');

    }
}

function upgradeStorage(){
    
    let woodCost = Math.round(200*Math.pow(1.26, (currentCityInfo.storageLevel+1)-1));  //follow the formula for the wood cost
    let clayCost = Math.round(90*Math.pow(1.25, (currentCityInfo.storageLevel+1)-1)); //follow the formula for the clay cost
    let stoneCost = Math.round(170*Math.pow(1.28, (currentCityInfo.storageLevel+1)-1)); //follow the formula for the stone cost
 
    if((woodCost <= currentCityInfo.woodAmount) && (stoneCost <= currentCityInfo.stoneAmount) && (clayCost <= currentCityInfo.clayAmount)){

        let upgradeInfo = {
            "cityID":currentCityInfo.id,
            "level":currentCityInfo.storageLevel+1,
            "woodCost":woodCost,
            "stoneCost":stoneCost,
            "clayCost":clayCost
        }
        
        httpPost('/upgradeStorage',upgradeInfo);

        window.location.reload();//refreshes page
    }

    else{

        alert('Not enough resources');
        
    }
}