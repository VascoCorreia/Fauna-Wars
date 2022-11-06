let buildTimer = [];
let buildingID = [];
let parsedTime = [];

function getConstructionTimers() {

    let constructionFirstInQueue = document.getElementById("firstInQueue");
    let constructionSecondInQueue = document.getElementById("secondInQueue");

    //GETS AN ARRAY OF THE BUILDING ID OF BUILDINGS BEING UPGRADED AND THE DATE THE UPGRADE STARTED

    loadJSON('/getConstructionTimers/' + currentCityInfo.id, (data) => {

        for (let i = 0; i < data.length; i++) { //IF THERE IS ONLY ONE CONSTRUCTION IN QUEUE (the prototype is programed to only have one buiding in queue at a time)

            buildingID[i] = data[i][0]; //STORES THE ID OF THE FIRST BUILDING UPGRADE

            let currentTime = new Date();

            parsedTime[i] = data[i][1];  //STORES THE START OF THE FIRST BUILDING UPGRADE

            //IF MAIN BUILDING IS BEING UPGRADED

            if (buildingID[i] == 1) {

                let upgradeCompleteTime = parsedTime[i] + Math.round((60 * Math.pow(1.47, (currentCityInfo.mainBuildingLevel + 1) - 1)) * 1000);

                buildTimer[i] = (upgradeCompleteTime - currentTime.getTime());

                if (buildTimer[i] > 0 && i == 0) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionFirstInQueue.innerHTML = 'Main Building to level: ' + (currentCityInfo.mainBuildingLevel + 1) + '<br></br>' + buildTimer[i];

                } else if (buildTimer[i] > 0 && i == 1) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionSecondInQueue.innerHTML = 'Main Building to level: ' + (currentCityInfo.mainBuildingLevel + 1) + '<br></br>' + buildTimer[i];
                }

                //IF BARRACKS IS BEING UPGRADED 

            } else if (buildingID[i] == 2) {

                let upgradeCompleteTime = parsedTime[i] + Math.round((100 * Math.pow(1.6, (currentCityInfo.barracksLevel + 1) - 1)) * 1000)

                buildTimer[i] = (upgradeCompleteTime - currentTime.getTime());

                if (buildTimer[i] > 0 && i == 0) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionFirstInQueue.innerHTML = 'Barracks to level: ' + (currentCityInfo.barracksLevel + 1) + '<br></br>' + buildTimer[i];

                } else if (buildTimer[i] > 0 && i == 1) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionSecondInQueue.innerHTML = 'Barracks to level: ' + (currentCityInfo.mainBuildingLevel + 1) + '<br></br>' + buildTimer[i];
                }

                //IF WALL IS BEING UPGRADED 

            } else if (buildingID[i] == 3) {

                let upgradeCompleteTime = parsedTime[i] + Math.round((60 * Math.pow(1.47, (currentCityInfo.wallLevel + 1) - 1)) * 1000)

                buildTimer[i] = (upgradeCompleteTime - currentTime.getTime());

                if (buildTimer[i] > 0 && i == 0) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionFirstInQueue.innerHTML = 'Wall to level: ' + (currentCityInfo.wallLevel + 1) + '<br></br>' + buildTimer[i];


                } else if (buildTimer[i] > 0 && i == 1) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionSecondInQueue.innerHTML = 'Wall to level: ' + (currentCityInfo.mainBuildingLevel + 1) + '<br></br>' + buildTimer[i];
                }

                //IF MINES ARE BEING UPGRADED 

            } else if (buildingID[i] == 4) {

                let upgradeCompleteTime = parsedTime[i] + Math.round((12 * Math.pow(1.55, (currentCityInfo.woodMineLevel + 1) - 1)) * 1000)

                buildTimer[i] = (upgradeCompleteTime - currentTime.getTime());

                if (buildTimer[i] > 0 && i == 0) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionFirstInQueue.innerHTML = 'Wood Mine to level: ' + (currentCityInfo.woodMineLevel + 1) + '<br></br>' + buildTimer[i];


                } else if (buildTimer[i] > 0 && i == 1) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionSecondInQueue.innerHTML = 'Wood Mine to level: ' + (currentCityInfo.mainBuildingLevel + 1) + '<br></br>' + buildTimer[i];
                }

            } else if (buildingID[i] == 5) {

                let upgradeCompleteTime = parsedTime[i] + Math.round((12 * Math.pow(1.55, (currentCityInfo.clayMineLevel + 1) - 1)) * 1000)

                buildTimer[i] = (upgradeCompleteTime - currentTime.getTime());

                if (buildTimer[i] > 0 && i == 0) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionFirstInQueue.innerHTML = 'Clay Mine to level: ' + (currentCityInfo.clayMineLevel + 1) + '<br></br>' + buildTimer[i];


                } else if (buildTimer[i] > 0 && i == 1) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionSecondInQueue.innerHTML = 'Clay Mine to level: ' + (currentCityInfo.mainBuildingLevel + 1) + '<br></br>' + buildTimer[i];
                }

            } else if (buildingID[i] == 6) {

                let upgradeCompleteTime = parsedTime[i] + Math.round((12 * Math.pow(1.55, (currentCityInfo.stoneMineLevel + 1) - 1)) * 1000)

                buildTimer[i] = (upgradeCompleteTime - currentTime.getTime());

                if (buildTimer[i] > 0 && i == 0) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionFirstInQueue.innerHTML = 'Stone Mine to level: ' + (currentCityInfo.stoneMineLevel + 1) + '<br></br>' + buildTimer[i];

                } else if (buildTimer[i] > 0 && i == 1) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionSecondInQueue.innerHTML = 'Stone Mine to level: ' + (currentCityInfo.mainBuildingLevel + 1) + '<br></br>' + buildTimer[i];
                }

            } else if (buildingID[i] == 7) {

                let upgradeCompleteTime = parsedTime[i] + Math.round((12 * Math.pow(1.55, (currentCityInfo.stoneMineLevel + 1) - 1)) * 1000)

                buildTimer[i] = (upgradeCompleteTime - currentTime.getTime());

                if (buildTimer[i] > 0 && i == 0) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionFirstInQueue.innerHTML = 'Storage to level: ' + (currentCityInfo.storageLevel + 1) + '<br></br>' + buildTimer[i];


                } else if (buildTimer[i] > 0 && i == 1) {

                    buildTimer[i] = transformMilisecondsToTime(buildTimer[i]);
                    constructionSecondInQueue.innerHTML = 'Storage to level: ' + (currentCityInfo.mainBuildingLevel + 1) + '<br></br>' + buildTimer[i];
                }
            }

            if (buildTimer[i] === "0:0:0" || buildTimer[i] < 0) {

                switch (buildingID[i]) {
                    case 1: alert('Main Building upgrade complete!'); if (window.location.pathname == '/mainBuilding.html') { window.location.reload() } break; //if user is the main Building page it will reload the page
                    case 2: alert('Barracks upgrade complete!'); if (window.location.pathname == '/mainBuilding.html') { window.location.reload() } break; //if user is the main Building page it will reload the page
                    case 3: alert('Wall upgrade complete!'); if (window.location.pathname == '/mainBuilding.html') { window.location.reload() } break; //if user is the main Building page it will reload the page
                    case 4: alert('Wood Mine upgrade complete!'); if (window.location.pathname == '/mainBuilding.html') { window.location.reload() } break; //if user is the main Building page it will reload the page
                    case 5: alert('Clay Mine upgrade complete!'); if (window.location.pathname == '/mainBuilding.html') { window.location.reload() } break; //if user is the main Building page it will reload the page
                    case 6: alert('Stone Mine upgrade complete!'); if (window.location.pathname == '/mainBuilding.html') { window.location.reload() } break; //if user is the main Building page it will reload the page
                    case 7: alert('Storage upgrade complete!'); if (window.location.pathname == '/mainBuilding.html') { window.location.reload() } break; //if user is the main Building page it will reload the page
                }

                buildTimer.splice(i, 1); //if upgrade has finished remove from timer array
                buildingID.splice(i, 1)

                if (i == 0) { constructionFirstInQueue.innerHTML = ''; }
                else if (i == 1) { constructionSecondInQueue.innerHTML = ''; }

                //ALERTS WHEN UPGRADE FINISHES
            }
        }
    });
}

function upgradeBuilding() {

    if (window.location.pathname == '/mainBuilding.html') {

        let upgradeMainBuildingButton = document.getElementById("upgradeMainBuilding");
        let upgradeBarracksButton = document.getElementById("upgradeBarracks");
        let upgradeWallButton = document.getElementById("upgradeWall");
        let upgradeWoodMineButton = document.getElementById("upgradeWoodMine");
        let upgradeStoneMineButton = document.getElementById("upgradeStoneMine");
        let upgradeClayMineButton = document.getElementById("upgradeClayMine");
        let upgradeStorageButton = document.getElementById("upgradeStorage");

        if (buildTimer.length == 2) {

            upgradeMainBuildingButton.disabled = true;
            upgradeBarracksButton.disabled = true;
            upgradeWallButton.disabled = true;
            upgradeWoodMineButton.disabled = true;
            upgradeStoneMineButton.disabled = true;;
            upgradeClayMineButton.disabled = true;
            upgradeStorageButton.disabled = true;

            upgradeMainBuildingButton.innerHTML = 'Queue Full'
            upgradeBarracksButton.innerHTML = 'Queue Full'
            upgradeWallButton.innerHTML = 'Queue Full'
            upgradeWoodMineButton.innerHTML = 'Queue Full'
            upgradeStoneMineButton.innerHTML = 'Queue Full'
            upgradeClayMineButton.innerHTML = 'Queue Full'
            upgradeStorageButton.innerHTML = 'Queue Full'



        } else {
            upgradeMainBuildingButton.disabled = false;
            upgradeBarracksButton.disabled = false;
            upgradeWallButton.disabled = false;
            upgradeWoodMineButton.disabled = false;
            upgradeStoneMineButton.disabled = false;
            upgradeClayMineButton.disabled = false;
            upgradeStorageButton.disabled = false;

            upgradeMainBuildingButton.onclick = upgradeMainBuilding;
            upgradeBarracksButton.onclick = upgradeBarracks;
            upgradeWallButton.onclick = upgradeWall;
            upgradeWoodMineButton.onclick = upgradeWoodMine;
            upgradeStoneMineButton.onclick = upgradeStoneMine;
            upgradeClayMineButton.onclick = upgradeClayMine;
            upgradeStorageButton.onclick = upgradeStorage;

        }
    }
}

function transformMilisecondsToTime(miliseconds) {

    let hours = Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);

    let countdown = hours + ":" + minutes + ":" + seconds;

    return countdown;

}

setInterval(getConstructionTimers, 1000);  //CHECKS AND UPDATES CONSTRUCTION TIMER IN THE UI
setInterval(upgradeBuilding, 200);  //CHECKS AND UPDATES CONSTRUCTION TIMER IN THE UI
