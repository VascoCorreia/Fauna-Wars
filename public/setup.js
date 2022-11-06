let loggedPlayer;
let playerCities;
let playerCurrentCityID;
let currentCityInfo;
let cityBuildinginfo;

function preload() {

    getLoggedPlayer(); //loads the player that logged and creates a player object
    getLoggedPlayerCities(getCityInfo); //gets all of the cities of the player that logged
    // gets all the information about the buildings of the current city
    SetupImages(); //loads the images

}

function setup() {

    noLoop()
    noCanvas();

}

function draw() {

}

function getLoggedPlayer() {

    loadJSON('/getLoggedPlayer', function (data) {

        createPlayer(data);

    });
}

function getLoggedPlayerCities(callback) {

    loadJSON('/getLoggedPlayerCities', function (data) {

        playerCities = data;

        loadJSON('/getCurrentCity', function (currentCity) {

            playerCurrentCityID = currentCity[0].player_currentcity; // CHANGES DEPENDING ON THE CITY THAT THE PLAYER WISHES TO USE 

            for (let i = 0; i < playerCities.length; i++) {

                addItem("myDropdown", playerCities[i].city_name, i + 1, playerCities[i].city_id)

                document.getElementById(playerCities[i].city_id).setAttribute('onmousedown', 'changeCity(' + playerCities[i].city_id + ')');

            }

            callback();
        });
    });
}



function getCityInfo() {

    loadJSON('/getCityName/' + playerCurrentCityID, function (dataCityName) {

        cityName = dataCityName;

    });

    loadJSON('/getCityPosition/' + playerCurrentCityID, function (dataCityPosition) {

        cityPosition = dataCityPosition;

    });

    loadJSON('/getCityBuildings/' + playerCurrentCityID, function (dataBuilding) {

        cityBuildinginfo = dataBuilding;

    });

    loadJSON('/getCityTroops/' + playerCurrentCityID, function (dataTroops) {

        cityTroopsInfo = dataTroops;

        loadJSON('/getCityResources/' + playerCurrentCityID, function (dataResources) {

            createCity(cityName, cityPosition, cityBuildinginfo, dataResources, cityTroopsInfo);

        });
    });
}

function createPlayer(data) {  //STORES PLAYER INFORMATION ON A OBJECT
    loggedPlayer = new Player(data.id, data.username, data.faction, data.totalpoints, data.citycount);
}


function createCity(cityName, cityPosition, cityBuildinginfo, dataResources, cityTroopsInfo) { //STORES CITY INFORMATION ON A OBJECT

    currentCityInfo = new City(playerCurrentCityID, cityName[0].city_name, cityPosition[0].city_X, cityPosition[0].city_Y, cityBuildinginfo[0].building_level, cityBuildinginfo[1].building_level, cityBuildinginfo[2].building_level, cityBuildinginfo[3].building_level, cityBuildinginfo[4].building_level, cityBuildinginfo[5].building_level, cityBuildinginfo[6].building_level, dataResources[0].resource_amount, dataResources[1].resource_amount, dataResources[2].resource_amount, cityTroopsInfo[0].troop_amount, cityTroopsInfo[1].troop_amount, cityTroopsInfo[2].troop_amount);

}


function addItem(list, cityNames, index, cityID) {

    var ul = document.getElementById(list);

    var li = document.createElement("li");

    li.setAttribute("id", cityID)

    li.appendChild(document.createTextNode(index + ': ' + cityNames));

    ul.appendChild(li);

}

function changeCity(id) {

    let city = document.getElementById(id)

    httpPost('/updateCurrentCity', 'json', { "cityID": city.id }, () => { })

    window.location.reload();

}

