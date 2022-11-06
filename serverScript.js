const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const port = 3000;
const app = express();

const routerLogin = require('./routes/loginRegister.js') //load login register and player info module
const upgradeBuildings = require('./routes/upgradeBuildings.js') //load upgradeBuildigns module
const recruitTroops = require('./routes/recruitTroops.js') //load upgradeBuildigns module 
const updateResources = require('./serverLoops/resources.js') //load resources module 
const expeditionTimers = require('./serverLoops/expeditionTimers.js') //load expeditionTimers module
const calculatePlayerPoints = require('./serverLoops/calculatePlayerPoints.js') //load calculatePlayerPoints module
const attacks = require('./routes/attacks.js') //load attacks module
const map = require('./routes/map.js') //load attacks module
const leaderboard = require('./routes/leaderboard.js')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('libraries'));
app.use(express.static('public'));
app.use(express.static('addons'));
app.use(routerLogin)
app.use(leaderboard)
app.use(upgradeBuildings.router)
app.use(recruitTroops)
app.use(attacks.router)
app.use(map)

//CODE FOR CONNECTION TO DATABASE
const dbase = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: "3306",
    user: "root",
    password: "wowgold1",
    database: "faunawars",
});

dbase.connect(function (err) {
    if (err) throw err;

    console.log("Database Connected!");

});


app.listen(port, function () { console.log(`Example app listening on port ${port}!`) });

//SERVER LOOPS
setInterval(updateResources.updateWoodResource, 60000); //UPDATE WOOD EVERY MINUTE
setInterval(updateResources.updateClayResource, 60000); //UPDATE CLAY EVERY MINUTE
setInterval(updateResources.updateStoneResource, 60000); //UPDATE STONE EVERY MINUTE
setInterval(upgradeBuildings.checkBuildingTime, 1000); //CHECKS IF ANY  BUILDINGS HAVE COMPLETED THE UPGRADE
setInterval(expeditionTimers.checkExpeditionsTimes, 1000); //CHECKS IF MOVEMENTS HAVE COMPLETED
setInterval(calculatePlayerPoints.calculatePlayerPoints, 30000)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/getCityBuildings/:playerLoggedCityID', (req, res) => {

    let playerCurrentCityID = req.params.playerLoggedCityID;

    let sql = "SELECT * FROM city_building WHERE city_id =" + playerCurrentCityID + ";"

    dbase.query(sql, (err, result) => {
        if (err) throw err
        res.send(result)
    });
})

app.get('/getCityResources/:playerLoggedCityID', (req, res) => {

    let playerCurrentCityID = req.params.playerLoggedCityID;

    let sql = "SELECT * FROM resources_city WHERE city_id =" + playerCurrentCityID + ";"

    dbase.query(sql, (err, result) => {

        if (err) throw err
        res.send(result)

    });
})

app.get('/getCityTroops/:playerLoggedCityID', (req, res) => {

    let playerCurrentCityID = req.params.playerLoggedCityID;

    let sql = "SELECT * FROM city_troop WHERE city_id =" + playerCurrentCityID + ";"

    dbase.query(sql, (err, result) => {

        if (err) throw err
        res.send(result)

    });
})

app.get('/getCityName/:playerLoggedCityID', (req, res) => {

    let playerCurrentCityID = req.params.playerLoggedCityID;

    let sql = "SELECT city_name FROM city WHERE city_id =" + playerCurrentCityID + ";"

    dbase.query(sql, (err, result) => {

        if (err) throw err
        res.send(result)

    });
})

app.get('/getCityPosition/:playerLoggedCityID', (req, res) => {

    let playerCurrentCityID = req.params.playerLoggedCityID;

    let sql = "SELECT city_X, city_Y FROM city WHERE city_id =" + playerCurrentCityID + ";"

    dbase.query(sql, (err, result) => {

        if (err) throw err
        res.send(result)

    });
})


app.post('/cityPoints', (req, res) => {

    let sql = "UPDATE city SET city_points = " + req.body.cityTotalPoints + "  WHERE city_id = " + req.body.currentCityID + ";";

    dbase.query(sql, (err, result) => {

        if (err) throw err;

    });

    res.send(req.body);

})


app.get('/getAllyMovementsTimers/:cityID', (req, res) => {

    let allyMovements = []

    let sql = "SELECT arrival_time, returning, city_name as targetCity, expedition_order_id  FROM expedition_order JOIN city ON city_id = target_city WHERE (returning BETWEEN 0 AND 1)  AND from_city_id = " + req.params.cityID + ";"

    dbase.query(sql, (err, result) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {

            let parsedTime;
            let returning = result[i].returning
            let targetCityName = result[i].targetCity
            let expeditionID = result[i].expedition_order_id

            let movementInformation = []

            parsedTime = result[i].arrival_time.getTime()

            movementInformation.push(parsedTime, returning, targetCityName, expeditionID)
            allyMovements.push(movementInformation)

        }
        res.send(allyMovements)

    });
})

app.get('/getEnemyMovementsTimers/:cityID', (req, res) => {

    let enemyMovements = []

    let sql = "SELECT arrival_time, returning, city_name as arrivalCity, expedition_order_id FROM expedition_order JOIN city ON city_id = from_city_id WHERE returning = 0 AND target_city = " + req.params.cityID + ";"

    dbase.query(sql, (err, result) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {

            let parsedTime;
            let returning = result[i].returning
            let arrivalCityName = result[i].arrivalCity
            let expeditionID = result[i].expedition_order_id

            let movementInformation = []

            parsedTime = result[i].arrival_time.getTime()

            movementInformation.push(parsedTime, returning, arrivalCityName, expeditionID)
            enemyMovements.push(movementInformation)

        }
        
        res.send(enemyMovements)

    });
})
