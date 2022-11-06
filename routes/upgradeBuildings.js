const express = require('express');
const mysql = require('mysql2')
const path = require('path')

const router = express.Router();

const dbase = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: "3306",
    user: "root",
    password: "wowgold1",
    database: "faunawars",
});


router.post('/upgradeMainBuilding', (req, res) => {

    dbase.query('UPDATE city_building SET building_time = NOW() WHERE building_id=1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

        dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.woodCost + ' WHERE resource_id = 1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

            dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.stoneCost + ' WHERE resource_id = 2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.clayCost + ' WHERE resource_id = 3 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                    if (err) throw err;
                    res.end()

                });
            });
        });
    });

});

router.post('/upgradeBarracks', (req, res) => {

    dbase.query('UPDATE city_building SET building_time = NOW() WHERE building_id=2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

        dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.woodCost + ' WHERE resource_id = 1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

            dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.stoneCost + ' WHERE resource_id = 2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.clayCost + ' WHERE resource_id = 3 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                    if (err) throw err;
                    res.end()

                });
            });
        });
    });
});

router.post('/upgradeWall', (req, res) => {

    dbase.query('UPDATE city_building SET building_time = NOW() WHERE building_id=3 AND city_id = ' + req.body.cityID + ';', (err, result) => {

        dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.woodCost + ' WHERE resource_id = 1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

            dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.stoneCost + ' WHERE resource_id = 2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.clayCost + ' WHERE resource_id = 3 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                    if (err) throw err;
                    res.end()
                });
            });
        });
    });
});

router.post('/upgradeWoodMine', (req, res) => {

    dbase.query('UPDATE city_building SET building_time = NOW() WHERE building_id=4 AND city_id = ' + req.body.cityID + ';', (err, result) => {

        dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.woodCost + ' WHERE resource_id = 1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

            dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.stoneCost + ' WHERE resource_id = 2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.clayCost + ' WHERE resource_id = 3 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                    if (err) throw err;
                    res.end()
                });
            });
        });
    });
});

router.post('/upgradeStoneMine', (req, res) => {

    dbase.query('UPDATE city_building SET building_time = NOW() WHERE building_id=6 AND city_id = ' + req.body.cityID + ';', (err, result) => {

        dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.woodCost + ' WHERE resource_id = 1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

            dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.stoneCost + ' WHERE resource_id = 2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.clayCost + ' WHERE resource_id = 3 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                    if (err) throw err;
                    res.end()
                });
            });
        });
    });
});

router.post('/upgradeClayMine', (req, res) => {

    dbase.query('UPDATE city_building SET building_time = NOW() WHERE building_id=5 AND city_id = ' + req.body.cityID + ';', (err, result) => {

        dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.woodCost + ' WHERE resource_id = 1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

            dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.stoneCost + ' WHERE resource_id = 2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.clayCost + ' WHERE resource_id = 3 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                    if (err) throw err;
                    res.end()
                });
            });
        });
    });
});

router.post('/upgradeStorage', (req, res) => {

    dbase.query('UPDATE city_building SET building_time = NOW() WHERE building_id=7 AND city_id = ' + req.body.cityID + ';', (err, result) => {

        dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.woodCost + ' WHERE resource_id = 1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

            dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.stoneCost + ' WHERE resource_id = 2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.clayCost + ' WHERE resource_id = 3 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                    if (err) throw err;
                    res.end();
                });
            });
        });
    });
})

router.get('/getConstructionTimers/:cityID', (req, res) => {

    let sql = "SELECT building_id, building_time FROM city_building WHERE city_id = " + req.params.cityID + ";"
    let constructions = [] //stores the building times to send to the client

    dbase.query(sql, (err, result) => {

        if (result.length > 0) {
            if (err) throw err;

            for (let i = 0; i < result.length; i++) {

                if (result[i].building_time != null) {

                    constructions.push([result[i].building_id, result[i].building_time.getTime()]) //pushes the result to constructions array

                };
            };
        };
        res.send(constructions);

    });
})

function checkBuildingTime() { //CHECK IF UPGRADES OF BUILDINGS ARE COMPLETE WHEN THEY ARE UPGRADES THE CORRECT BUILDING ID

    let currentDate = new Date();

    currentDate = currentDate.getTime()//tranfroms date into milliseconds for comparison

    sql = "SELECT * FROM city_building WHERE building_time IS NOT NULL;"

    dbase.query(sql, (err, result) => {

        if (err) throw err;

        if (result.length > 0) {

            for (let i = 0; i < result.length; i++) {

                let parseDate = result[i].building_time;

                parseDate = parseDate.getTime(); //tranfroms date into milliseconds for comparison

                let buildingID = result[i].building_id

                //UPGRADE MAIN BUILDING

                if (buildingID == 1) {

                    let upgradeCompleteTime = parseDate + Math.round((60 * Math.pow(1.47, (result[i].building_level + 1) - 1)) * 1000)

                    if (currentDate >= upgradeCompleteTime) { //if upgrade is complete then update database

                        dbase.query('UPDATE city_building SET building_level = 1 + ' + result[i].building_level + ', building_time = NULL WHERE building_id=1 AND city_id = ' + result[i].city_id + ';', (err, result) => {

                            if (err) throw err;

                        });
                    };

                    //UPGRADE BARRACKS

                } else if (buildingID == 2) {

                    let upgradeCompleteTime = parseDate + Math.round((100 * Math.pow(1.6, (result[i].building_level + 1) - 1)) * 1000)

                    if (currentDate >= upgradeCompleteTime) {

                        dbase.query('UPDATE city_building SET building_level = 1 + ' + result[i].building_level + ', building_time = NULL WHERE building_id=2 AND city_id = ' + result[i].city_id + ';', (err, result) => {

                            if (err) throw err;

                        });
                    };

                    //UPGRADE WALL

                } else if (buildingID == 3) {

                    let upgradeCompleteTime = parseDate + Math.round((60 * Math.pow(1.47, (result[i].building_level + 1) - 1)) * 1000)

                    if (currentDate >= upgradeCompleteTime) {

                        dbase.query('UPDATE city_building SET building_level = 1 + ' + result[i].building_level + ', building_time = NULL WHERE building_id=3 AND city_id = ' + result[i].city_id + ';', (err, result) => {

                            if (err) throw err;

                        });
                    };

                    //UPGRADE WOOD MINE

                } else if (buildingID == 4) {

                    let upgradeCompleteTime = parseDate + Math.round((12 * Math.pow(1.55, (result[i].building_level + 1) - 1)) * 1000)

                    if (currentDate >= upgradeCompleteTime) {

                        dbase.query('UPDATE city_building SET building_level = 1 + ' + result[i].building_level + ', building_time = NULL WHERE building_id=4 AND city_id = ' + result[i].city_id + ';', (err, result) => {

                            if (err) throw err;

                        });
                    };

                    //UPGRADE CLAY MINE   

                } else if (buildingID == 5) {

                    let upgradeCompleteTime = parseDate + Math.round((12 * Math.pow(1.55, (result[i].building_level + 1) - 1)) * 1000)

                    if (currentDate >= upgradeCompleteTime) {

                        dbase.query('UPDATE city_building SET building_level = 1 + ' + result[i].building_level + ', building_time = NULL WHERE building_id=5 AND city_id = ' + result[i].city_id + ';', (err, result) => {

                            if (err) throw err;

                        });
                    };

                    //UPGRADE STONE MINE  

                } else if (buildingID == 6) {

                    let upgradeCompleteTime = parseDate + Math.round((12 * Math.pow(1.55, (result[i].building_level + 1) - 1)) * 1000)

                    if (currentDate >= upgradeCompleteTime) {

                        dbase.query('UPDATE city_building SET building_level = 1 + ' + result[i].building_level + ', building_time = NULL WHERE building_id=6 AND city_id = ' + result[i].city_id + ';', (err, result) => {

                            if (err) throw err;
                        });
                    };
                } else if (buildingID == 7) {

                    let upgradeCompleteTime = parseDate + Math.round((12 * Math.pow(1.55, (result[i].building_level + 1) - 1)) * 1000)

                    if (currentDate >= upgradeCompleteTime) {

                        dbase.query('UPDATE city_building SET building_level = 1 + ' + result[i].building_level + ', building_time = NULL WHERE building_id=7 AND city_id = ' + result[i].city_id + ';', (err, result) => {

                            if (err) throw err;
                        });
                    };
                };

            };
        };
    });
}

module.exports =
{
    router,
    checkBuildingTime
}