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

router.post('/sendAttackInfo', (req, res) => {

    let sql = "INSERT INTO expedition (expedition_id) VALUES (null);"

    dbase.query(sql, (err, result) => {
        if (err) throw err;
    })

    let sql2 =
        `INSERT INTO troop_expedition (expedition_id, troop_id, troop_amount) VALUES ((SELECT expedition_id FROM expedition ORDER BY expedition_id DESC LIMIT 1), 1, ` + req.body.swordsmanAmount + `);
    INSERT INTO troop_expedition (expedition_id, troop_id, troop_amount) VALUES ((SELECT expedition_id FROM expedition ORDER BY expedition_id DESC LIMIT 1), 2, `+ req.body.archerAmount + `);
    INSERT INTO troop_expedition (expedition_id, troop_id, troop_amount) VALUES ((SELECT expedition_id FROM expedition ORDER BY expedition_id DESC LIMIT 1), 3, `+ req.body.cavalryAmount + `);`

    dbase.query(sql2, (err, result) => {
        if (err) throw err;
    })

    let sql3 =
        `INSERT INTO expedition_order (expedition_id, from_city_id, target_city, arrival_time, returning) VALUES ((SELECT expedition_id FROM troop_expedition ORDER BY expedition_id DESC LIMIT 1), ` + req.body.fromCityID + `,` + req.body.targetCity + `, ADDTIME(now(),`+calculateTravelTime(req.body.fromCityX, req.body.fromCityY, req.body.targetCityX, req.body.targetCityY)+`),0);`

    

    dbase.query(sql3, (err, result) => {
        if (err) throw err;
    })

    let sql4 =
        `UPDATE city_troop SET troop_amount = troop_amount - ` + req.body.swordsmanAmount + ` WHERE city_id = ` + req.body.fromCityID + ` AND troop_id = 1;
     UPDATE city_troop SET troop_amount = troop_amount - `+ req.body.archerAmount + ` WHERE city_id = ` + req.body.fromCityID + ` AND troop_id = 2;
     UPDATE city_troop SET troop_amount = troop_amount - `+ req.body.cavalryAmount + ` WHERE city_id = ` + req.body.fromCityID + ` AND troop_id = 3;`

    dbase.query(sql4, (err, result) => {
        if (err) throw err;
    })
    res.end()
})


function executeAttack(expeditionID, targetCityId, fromCityId) {

    let attackForce;
    let defenseForce;

    let sql = "SELECT troop_id, troop_amount FROM troop_expedition WHERE expedition_id = " + expeditionID + ";"

    dbase.query(sql, (err, result) => {
        if (err) throw err;

        attackForce = ((40 * result[0].troop_amount) + (10 * result[1].troop_amount) + (80 * result[2].troop_amount));

        let sql2 = "SELECT troop_id, troop_amount FROM city_troop WHERE city_id = " + targetCityId + ";"

        dbase.query(sql2, (err, result2) => {
            if (err) throw err;

            defenseForce = ((10 * result2[0].troop_amount) + (40 * result2[1].troop_amount) + (80 * result2[2].troop_amount));

            if (attackForce >= defenseForce) {

                let ratio = (1 / (attackForce / defenseForce));

                let sql3 =
                    `UPDATE troop_expedition SET troop_amount = troop_amount - (troop_amount * ` + ratio + `) WHERE expedition_id = ` + expeditionID + ` AND troop_id = 1;
                UPDATE troop_expedition SET troop_amount = troop_amount - (troop_amount * `+ ratio + `) WHERE expedition_id = ` + expeditionID + ` AND troop_id = 2;
                UPDATE troop_expedition SET troop_amount = troop_amount - (troop_amount * `+ ratio + `) WHERE expedition_id = ` + expeditionID + ` AND troop_id = 3;
                UPDATE city_troop SET troop_amount = 0  WHERE city_id = `+ targetCityId + ` AND troop_id =  1;
                UPDATE city_troop SET troop_amount = 0  WHERE city_id = `+ targetCityId + ` AND troop_id =  2;
                UPDATE city_troop SET troop_amount = 0  WHERE city_id = `+ targetCityId + ` AND troop_id =  3;
                UPDATE player SET player_citycount = (player_citycount - 1) WHERE player_id = (SELECT city_player_id FROM city WHERE city_player_id = `+ targetCityId + ` ORDER BY city_player_id asc LIMIT 1);
                UPDATE player SET player_citycount = (player_citycount + 1) WHERE player_id = (SELECT city_player_id FROM city WHERE city_player_id = `+ fromCityId + ` ORDER BY city_player_id asc LIMIT 1);
                UPDATE city SET city_player_id = (SELECT city_player_id FROM (SELECT * FROM city) AS T WHERE city_id =`+ fromCityId + `) WHERE city_id = ` + targetCityId + `;`

                dbase.query(sql3, (err, result3) => {

                    if (err) throw err;

                });

            } else if ((attackForce <= defenseForce)) {

                let ratio = attackForce / defenseForce;

                let sql4 =
                    `UPDATE city_troop SET troop_amount = troop_amount - (troop_amount * ` + ratio + `) WHERE city_id = ` + targetCityId + ` AND troop_id = 1;
                UPDATE city_troop SET troop_amount = troop_amount - (troop_amount * `+ ratio + `) WHERE city_id = ` + targetCityId + ` AND troop_id = 2;
                UPDATE city_troop SET troop_amount = troop_amount - (troop_amount * `+ ratio + `) WHERE city_id = ` + targetCityId + ` AND troop_id = 3;
                UPDATE expedition_order SET returning = 2  WHERE expedition_id = `+ expeditionID + `;` //if defeated troops dont return

                dbase.query(sql4, (err, result4) => {

                    if (err) throw err;

                });
            };
        });
    });
}




function calculateTravelTime(departureCityX, departureCityY, arrivalCityX, arrivalCityY) {

    let travelTimePerTile = 5 * 60 // 5 minutes per tile in seconds 

    let a = arrivalCityX - departureCityX;
    let b = arrivalCityY - departureCityY;

    let c = Math.sqrt(a * a + b * b);

    let travelTime = Math.round(c * travelTimePerTile)

    return travelTime;

}

module.exports = { router, executeAttack, calculateTravelTime }