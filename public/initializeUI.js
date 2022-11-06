function initUI() {


    //UI NAVIGATION BUTTONS

    let cityButton = document.getElementById("goToCity");
    let recruitButton = document.getElementById("goToRecruit");
    let buildButton = document.getElementById("goToMainBuilding");
    let leaderboardButton = document.getElementById("goToLeaderboard");
    let mapButton = document.getElementById("goToMap");

    let logoutButton = document.getElementById("logout");

    //TOP UI

    let cityName = document.getElementById("cityName");
    let playerPoints = document.getElementById("playerPoints");
    let woodAmount = document.getElementById("woodAmount");
    let stoneAmount = document.getElementById("stoneAmount");
    let clayAmount = document.getElementById("clayAmount");

    //TROOPS UI

    let swordsmanInCity = document.getElementById("swordsmanInCity");
    let archerInCity = document.getElementById("archerInCity");
    let cavalryInCity = document.getElementById("cavalryInCity");

    //BUTTONS

    recruitButton.onclick = function () { location.href = '/recruit.html'; }
    buildButton.onclick = function () { location.href = '/mainBuilding.html'; }
    leaderboardButton.onclick = function () { location.href = '/leaderboard.html'; }
    mapButton.onclick = function () { location.href = '/map.html'; }
    cityButton.onclick = function () { location.href = '/cityview.html'; }
    logoutButton.onclick = function () { location.href = '/' }

    cityName.innerHTML = currentCityInfo.name;
    playerPoints.innerHTML = "Points: " + loggedPlayer.totalpoints;
    woodAmount.innerHTML = currentCityInfo.woodAmount;
    stoneAmount.innerHTML = currentCityInfo.stoneAmount;
    clayAmount.innerHTML = currentCityInfo.clayAmount;


    swordsmanInCity.innerHTML = currentCityInfo.swordsman + ' Swordsmans'
    archerInCity.innerHTML = currentCityInfo.archer + ' Archers'
    cavalryInCity.innerHTML = currentCityInfo.cavalry + ' Cavalry'


    loadJSON('/getRank', (info) => {

        if (loggedPlayer.username == info[0].player_username) {
            document.getElementById("playerRank").innerHTML = "Rank: 1";
        } else if (loggedPlayer.username == info[1].player_username) {
            document.getElementById("playerRank").innerHTML = "Rank: 2";
        } else if (loggedPlayer.username == info[2].player_username) {
            document.getElementById("playerRank").innerHTML = "Rank: 3";
        } else if (loggedPlayer.username == info[3].player_username) {
            document.getElementById("playerRank").innerHTML = "Rank: 4";
        } else if (loggedPlayer.username == info[4].player_username) {
            document.getElementById("playerRank").innerHTML = "Rank: 5"
        } else {
            document.getElementById("playerRank").innerHTML = "Rank: 5+"

        }
    })


    setInterval(calculateCityPoints, 1000);
    setInterval(calculatePlayerPoints, 1000)

}



function calculateCityPoints() {

    let cityTotalPoints;
    let pointsUI;

    let mainBuildingPoints;
    let barracksPoints;
    let wallPoints;
    let woodMinePoints;
    let clayMinePoints;
    let stoneMinePoints;

    mainBuildingPoints = Math.round(3 * Math.pow(1.2, (currentCityInfo.mainBuildingLevel) - 1));

    barracksPoints = Math.round(2 * Math.pow(1.2, (currentCityInfo.barracksLevel) - 1));

    wallPoints = Math.round(2 * Math.pow(1.2, (currentCityInfo.wallLevel) - 1));

    woodMinePoints = Math.round(3 * Math.pow(1.2, (currentCityInfo.woodMineLevel) - 1));

    clayMinePoints = Math.round(3 * Math.pow(1.2, (currentCityInfo.clayMineLevel) - 1));

    stoneMinePoints = Math.round(3 * Math.pow(1.2, (currentCityInfo.stoneMineLevel) - 1));

    cityTotalPoints = mainBuildingPoints + barracksPoints + wallPoints + woodMinePoints + clayMinePoints + stoneMinePoints;


    httpPost('/cityPoints', 'json', { 'cityTotalPoints': cityTotalPoints, 'currentCityID': currentCityInfo.id })

}

function calculatePlayerPoints() {

    loadJSON('/getPlayerPoints', (data) => {

        pointsUI = document.getElementById('playerPoints');

        pointsUI.innerHTML = "Points: " + data.playerTotalPoints;

    })

}