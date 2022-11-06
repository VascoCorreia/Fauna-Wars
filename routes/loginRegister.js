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

let playerLoggedID;

router.post('/Register', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let faction = req.body.faction;
    let points = 16;
    let cities = 1;

    let usernameAlreadyExist = false;

    let validateSQL = "SELECT player_username from player;"

    //CHECKS IF USERNAME ALREADY EXISTS

    dbase.query(validateSQL, (err, result) => {

        if (err) throw err;

        for (let i = 0; i < result.length; i++) {

            if (result[i].player_username === username) {

                usernameAlreadyExist = true;

            }
        }

        if (usernameAlreadyExist) {
            res.send("Username Already exist")
        } else {

            //FILL THE PLAYER TABLE IN DATABASE WHEN A NEW PLAYER REGISTERS

            let sql = "INSERT INTO player (`player_faction`,`player_username`,`player_password`,`player_totalpoints`,`player_citycount`) VALUES ('" + faction + "','" + username + "','" + password + "','" + points + "','" + cities + "');"

            dbase.query(sql, (err, result) => {
                if (err) throw err;
            });

            let sql2 = "SELECT player_id FROM player ORDER BY player_id DESC LIMIT 1" //gets last registered player id

            dbase.query(sql2, (err, result) => {
                if (err) throw err;
                registeredPlayerID = result[0].player_id; //stores the id in registeredPlayerID
            });

            //FILL THE CITY TABLE IN  DATABASE  WHEN A NEW PLAYER REGISTERS
            let sql3 =
                `set @lastID := (SELECT player_id FROM player ORDER BY player_id DESC LIMIT 1);
                select @lastID;
                set @lastUsername := (select player_username from player where player_id=@lastID);
                select  @lastUsername;
                INSERT INTO city (city_player_id, city_X, city_Y, city_name,city_points) VALUES (@lastID, `+ Math.floor(Math.random() * 6) + `, ` + Math.floor(Math.random() * 6) + `, concat('city  of ',@lastUsername), 16);`

            dbase.query(sql3, (err, result) => {
                if (err) throw err;
            });

            //FILL THE BUILDING_CITY TABLE IN DATABASE WHEN A NEW PLAYER REGISTERS

            let sql4 =
                `set @newPlayerCityID := (select city_id from city ORDER BY city_id DESC LIMIT 1); #GETS THE ID OF THE LAST CITY WHICH WILL BELONG TO THE PLAYER THAT LAST REGISTERED
            
            insert into city_building (city_id, building_id, building_level, building_time) values (@newPlayerCityID, (select building_id from building where building_id=1), 1, null);
            insert into city_building (city_id, building_id, building_level, building_time) values (@newPlayerCityID, (select building_id from building where building_id=2), 1, null);
            insert into city_building (city_id, building_id, building_level, building_time) values (@newPlayerCityID, (select building_id from building where building_id=3), 1, null);
            insert into city_building (city_id, building_id, building_level, building_time) values (@newPlayerCityID, (select building_id from building where building_id=4), 1, null);
            insert into city_building (city_id, building_id, building_level, building_time) values (@newPlayerCityID, (select building_id from building where building_id=5), 1, null);
            insert into city_building (city_id, building_id, building_level, building_time) values (@newPlayerCityID, (select building_id from building where building_id=6), 1, null);
            insert into city_building (city_id, building_id, building_level, building_time) values (@newPlayerCityID, (select building_id from building where building_id=7), 1, null)`

            dbase.query(sql4, (err, res) => {
                if (err) throw err;
            });

            //FILL  THE RESOURCE_CITY WHEN A  NEW PLAYER REGISTERS

            let sql5 =
                `set @newPlayerCityID := (select city_id from city ORDER BY city_id DESC LIMIT 1);

            insert into resources_city (resource_amount, resource_id, city_id) values (1000000, (select resource_id from resources where resource_id = 1), @newPlayerCityID);
            insert into resources_city (resource_amount, resource_id, city_id) values (1000000, (select resource_id from resources where resource_id = 2), @newPlayerCityID);
            insert into resources_city (resource_amount, resource_id, city_id) values (1000000, (select resource_id from resources where resource_id = 3), @newPlayerCityID);`

            dbase.query(sql5, (err, res) => {
                if (err) throw err;
            });

            //FILL  THE TROOP_CITY WHEN A NEW PLAYER REGISTERS

            let sql6 =
                `set @newPlayerCityID := (select city_id from city ORDER BY city_id DESC LIMIT 1);

            insert into city_troop (troop_amount, troop_id, city_id) values (0, (select troop_id from troop	where troop_id = 1), @newPlayerCityID);
            insert into city_troop (troop_amount, troop_id, city_id) values (0, (select troop_id from troop where troop_id = 2), @newPlayerCityID);
            insert into city_troop (troop_amount, troop_id, city_id) values (0, (select troop_id from troop where troop_id = 3), @newPlayerCityID);
            `

            dbase.query(sql6, (err, result) => {
                if (err) throw err;
            });

            res.redirect('/');
        }
    });
});

//END OF REGISTERATION QUERIES


router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;



    let sql = "SELECT player_id, player_citycount FROM player WHERE player_username = " + mysql.escape(username) + " AND player_password = " + mysql.escape(password);
    dbase.query(sql, (err, result) => {
        if (err) throw (err);
        if (result.length > 0) {

            playerLoggedID = result[0].player_id; //WHY IS THIS LINE NOT BEING EXECUTED

            if (result[0].player_citycount > 0) {

                res.sendFile(path.join(__dirname, '../public/cityview.html'));

            } else if (result[0].player_citycount == 0) {

                res.send("All your cities have been conquered you have lost!")

            }
        } else {
            res.send("user not found");
        }

        let sql2 = 'UPDATE player SET player_currentcity = (SELECT city_id from city WHERE city_player_id = ' + playerLoggedID + ' ORDER BY city_id asc LIMIT 1) WHERE player_id = ' + playerLoggedID + ';'
        dbase.query(sql2, (err, result) => {
            if (err) throw (err);
        });
    });
});

router.get('/getLoggedPlayer', (req, res) => {

    let sql = "SELECT * from player WHERE player_id = " + playerLoggedID + ";"

    dbase.query(sql, (err, result) => {
        if (err) throw err;

        player = {
            "id": result[0].player_id,
            "faction": result[0].player_faction,
            "username": result[0].player_username,
            "totalpoints": result[0].player_totalpoints,
            "citycount": result[0].player_citycount
        }
        res.send(player);
    });
});

router.get('/getLoggedPlayerCities/', (req, res) => {

    let sql = "SELECT city_id, city_name FROM city WHERE city_player_id  =" + playerLoggedID + ";"  //GETS ALL THE CITY IDS FOR THE LOGGEDPLAYER

    dbase.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

router.get('/getCurrentCity', (req, res) => {


    let sql = "SELECT player_currentcity FROM player WHERE player_id  =" + playerLoggedID + ";"  //GETS ALL THE CITY IDS FOR THE LOGGEDPLAYER

    dbase.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

router.post('/updateCurrentCity', (req, res) => {

    let sql = 'UPDATE player SET player_currentcity = ' + req.body.cityID + ' WHERE player_id = ' + playerLoggedID + ';'

    dbase.query(sql, (err, result) => {
        if (err) throw err;
        res.end;
    })

});


router.get('/getPlayerPoints', (req, res) => {

    let playerTotalPoints = 0;

    let sql = "SELECT city_points FROM city WHERE city_player_id = " + playerLoggedID + ";"

    dbase.query(sql, (err, result) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {

            playerTotalPoints += result[i].city_points
        }

        let sql = "UPDATE player SET player_totalpoints = " + playerTotalPoints + " WHERE player_id = " + playerLoggedID + ";" //UPDATES PLAYER TOTAL POINTS IN DATABASE

        dbase.query(sql, (err, result) => {
            if (err) throw err;
        })

        res.json({ "playerTotalPoints": playerTotalPoints })
    });
})


module.exports = router;