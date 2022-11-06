let swordsmanWoodCost = document.getElementById("swordsmanWoodCost");
let swordsmanClayCost = document.getElementById("swordsmanClayCost");
let swordsmanStoneCost = document.getElementById("swordsmanStoneCost");

let archerWoodCost = document.getElementById("archerWoodCost");
let archerClayCost = document.getElementById("archerClayCost");
let archerStoneCost = document.getElementById("archerStoneCost");

let cavalryWoodCost = document.getElementById("cavalryWoodCost");
let cavalryClayCost = document.getElementById("cavalryClayCost");
let cavalryStoneCost = document.getElementById("cavalryStoneCost");

let recruitSwordsmanButton = document.getElementById("recruitSwordsman");
let recruitArcherButton = document.getElementById("recruitArcher");
let recruitCavalryButton = document.getElementById("recruitCavalry");


function setup() {
    initUI();
    recruitTroops();
}

function draw() {

}

function recruitTroops() {

    recruitSwordsmanButton.onclick = recruitSwordsman;
    recruitArcherButton.onclick = recruitArcher;
    recruitCavalryButton.onclick = recruitCavalry;

}


function recruitSwordsman() {

    let swordsmanAmount = document.getElementById("amountSwordsman").value;
    let woodCost = swordsmanAmount * 30
    let stoneCost = swordsmanAmount * 50

    if (((woodCost <= currentCityInfo.woodAmount) && (stoneCost <= currentCityInfo.stoneAmount)) && swordsmanAmount > 0) {

        let recruitInfo = {
            "cityID": currentCityInfo.id,
            "woodCost": woodCost,
            "stoneCost": stoneCost,
            "amount": swordsmanAmount
        }

        httpPost('/recruitSwordsman', recruitInfo);
        window.location.reload();  //refreshes page

    } else if (swordsmanAmount == 0) {

        alert('Need to recruit at least 1');

    } else {

        alert('Not enough resources');

    }
}


function recruitArcher() {

    let archerAmount = document.getElementById("amountArcher").value;

    let woodCost = archerAmount * 50;
    let stoneCost = archerAmount * 30;

    if (((woodCost <= currentCityInfo.woodAmount) && (stoneCost <= currentCityInfo.stoneAmount)) && archerAmount > 0) {

        let recruitInfo = {
            "cityID": currentCityInfo.id,
            "woodCost": woodCost,
            "stoneCost": stoneCost,
            "amount": archerAmount
        }

        httpPost('/recruitArcher', recruitInfo);
        window.location.reload();  //refreshes page

    } else if (archerAmount == 0) {

        alert('Need to recruit at least 1');

    } else {

        alert('Not enough resources');

    }
}


function recruitCavalry() {

    let cavalryAmount = document.getElementById("amountCavalry").value;

    let woodCost = cavalryAmount *125;
    let stoneCost = cavalryAmount *100;
    let clayCost = cavalryAmount *150;

    if (((woodCost <= currentCityInfo.woodAmount) && (stoneCost <= currentCityInfo.stoneAmount) && (clayCost <= currentCityInfo.clayAmount)) && cavalryAmount > 0) {

        let recruitInfo = {
            "cityID": currentCityInfo.id,
            "woodCost": woodCost,
            "stoneCost": stoneCost,
            "clayCost": clayCost,
            "amount": cavalryAmount
        }

        httpPost('/recruitCavalry', recruitInfo);
        window.location.reload();  //refreshes page

    } else if (cavalryAmount == 0) {

        alert('Need to recruit at least 1');

    } else {

        alert('Not enough resources');

    }
}

setInterval(costs, 100)

function costs() {

    let swordsmanAmount = document.getElementById("amountSwordsman").value;

    swordsmanWoodCost.innerHTML = swordsmanAmount * 30;
    swordsmanStoneCost.innerHTML = swordsmanAmount * 50;
    swordsmanClayCost.innerHTML = 0;

    let archerAmount = document.getElementById("amountArcher").value;

    archerWoodCost.innerHTML = archerAmount * 50;
    archerStoneCost.innerHTML = archerAmount * 30;
    archerClayCost.innerHTML = 0;

    let cavalryAmount = document.getElementById("amountCavalry").value;

    cavalryWoodCost.innerHTML = cavalryAmount * 125;
    cavalryStoneCost.innerHTML = cavalryAmount * 100;
    cavalryClayCost.innerHTML = cavalryAmount * 150;
}