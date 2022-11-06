let selectedTile = {
    id: null,
    positionX: null,
    positionY: null
}

let attackButton = document.getElementById("attackButton");

let swordsmanAmount;
let archerAmount;
let cavalryAmount;

function setup() {

    initUI();
    getSelectedTileInfo();
    setInterval(updateTroopValues, 100);//update values  in the  inputs 
    sendAttack();
    noLoop();

}

function getSelectedTileInfo() {

    loadJSON('/getTileInfo', (data) => {

        selectedTile.id = data.selectedCityID;
        selectedTile.positionX = data.selectedCityPositionX;
        selectedTile.positionY = data.selectedCityPositionY;

    })
}

function sendAttack() {


    attackButton.onclick = () => {

        if ((swordsmanAmount > 0 && currentCityInfo.swordsman >= swordsmanAmount) && (archerAmount >= 0 && currentCityInfo.archer >= archerAmount) && (cavalryAmount >= 0 && currentCityInfo.cavalry >= cavalryAmount)) {


            attackInfo = {
                "swordsmanAmount": swordsmanAmount,
                "archerAmount": archerAmount,
                "cavalryAmount": cavalryAmount,
                "fromCityID": currentCityInfo.id,
                "fromCityX": currentCityInfo.positionX,
                "fromCityY": currentCityInfo.positionY,
                "targetCity": selectedTile.id,
                "targetCityX": selectedTile.positionX,
                "targetCityY": selectedTile.positionY
            }

            httpPost('/sendAttackInfo', attackInfo, () => {

                window.location.reload();

            })

        } else if (swordsmanAmount == 0 && archerAmount == 0 && cavalryAmount == 0) {

            alert('No troops selected!');

        } else if (currentCityInfo.swordsman <= swordsmanAmount || currentCityInfo.archer <= archerAmount || currentCityInfo.cavalry <= cavalryAmount) {

            alert('Not enough troops!');

        }
    }
}

function updateTroopValues() {

    swordsmanAmount = document.getElementById("attackSwordsmanAmount");
    archerAmount = document.getElementById("attackArcherAmount");
    cavalryAmount = document.getElementById("attackCavalryAmount");

    swordsmanAmount = swordsmanAmount.value;
    archerAmount = archerAmount.value;
    cavalryAmount = cavalryAmount.value;

}