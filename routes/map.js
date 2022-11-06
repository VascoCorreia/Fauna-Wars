const express = require('express');
const mysql = require('mysql2')

const router = express.Router();

const dbase = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: "3306",
    user: "root",
    password: "wowgold1",
    database: "faunawars",
});


let selectedCityID = 0;
let selectedCityPositionX = 0;
let selectedCityPositionY = 0;


router.get('/getCityInfo', (req, res) => {

    let cityArray = []

    dbase.query("SELECT city_id, city_X, city_Y, city_name, city_player_id FROM city ;", (err, result) => {

        for (let i = 0; i < result.length; i++) {

            dbase.query("SELECT player_username, player_faction, player_totalpoints FROM player WHERE player_id = " + result[i].city_player_id + ";", (err, result2) => {

                cityInfo = {

                    "cityID": result[i].city_id,
                    "posX": result[i].city_X,
                    "posY": result[i].city_Y,
                    "cityName": result[i].city_name,
                    "playerName": result2[0].player_username,
                    "playerFaction": result2[0].player_faction,
                    "playerPoints": result2[0].player_totalpoints
                }

                cityArray.push(cityInfo)

                if (cityArray.length == result.length) {
                    res.send(cityArray);
                }
            });
        };
    });
})


router.post('/sendTileInfo', (req, res) => {

    selectedCityID = req.body.cityID;
    selectedCityPositionX = req.body.cityX;
    selectedCityPositionY = req.body.cityY;

    res.end();

})

router.get('/getTileInfo', (req, res) => {

    res.json({ "selectedCityID": selectedCityID, "selectedCityPositionX": selectedCityPositionX, "selectedCityPositionY": selectedCityPositionY });

})

module.exports = router;