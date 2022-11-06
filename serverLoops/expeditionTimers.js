const mysql = require('mysql2')
const express = require('express')
const router = express.Router()

const attacks = require('../routes/attacks.js'); //load attacks module

const dbase = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: "3306",
    user: "root",
    password: "wowgold1",
    database: "faunawars",
});

function checkExpeditionsTimes() {

    let currentDate = new Date();

    currentDate = currentDate.getTime();

    let sql = "SELECT expedition_id, arrival_time, returning, target_city, from_city_id FROM expedition_order"

    dbase.query(sql, (err, result) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {

            let parseDate = result[i].arrival_time;

            parseDate = parseDate.getTime(); //tranfroms date into milliseconds for comparison

            let expeditionID = result[i].expedition_id;
            let returning = result[i].returning;
            let targetCityID = result[i].target_city;
            let fromCityID = result[i].from_city_id;

            if ((currentDate > parseDate) && returning == 0) {

                let sql =
                    `SELECT city.city_X, city.city_Y
                    FROM city
                    JOIN expedition_order ON city_id = target_city AND expedition_order.expedition_id = `+ expeditionID + `;`

                dbase.query(sql, (err, result2) => {
                    if (err) throw err;

                    let sql =
                        `SELECT city.city_X, city.city_Y
                        FROM city
                        JOIN expedition_order ON city_id = from_city_id AND expedition_order.expedition_id = `+ expeditionID + `;`

                    dbase.query(sql, (err, result3) => {
                        if (err) throw err;

                        let targetCityX = result2[0].city_X;
                        let targetCityY = result2[0].city_Y;
                        let departureCityX = result3[0].city_X;
                        let departureCityY = result3[0].city_Y;

                        console.log(targetCityX, targetCityY, departureCityX, departureCityY)

                        attacks.executeAttack(expeditionID, targetCityID, fromCityID);

                        let sql =
                            `UPDATE expedition_order SET returning = 1 WHERE expedition_id  = ` + expeditionID + `;
                            UPDATE expedition_order SET arrival_time = ADDTIME(now(),`+attacks.calculateTravelTime(departureCityX, departureCityY, targetCityX, targetCityY)+`) WHERE expedition_id  = `+ expeditionID + `;`

                        dbase.query(sql, (err, result) => {
                            if (err) throw err;
                        })
                    })
                })


            } else if ((currentDate > parseDate) && returning == 1) {

                let sql =
                    `UPDATE city_troop SET troop_amount = troop_amount + (SELECT troop_amount FROM troop_expedition WHERE troop_id=1 AND expedition_id= ` + expeditionID + `) WHERE city_id = ` + fromCityID + ` AND troop_id = 1;
                    UPDATE city_troop SET troop_amount = troop_amount + (SELECT troop_amount FROM troop_expedition WHERE troop_id=2 AND expedition_id= `+ expeditionID + `) WHERE city_id = ` + fromCityID + ` AND troop_id = 2;
                    UPDATE city_troop SET troop_amount = troop_amount + (SELECT troop_amount FROM troop_expedition WHERE troop_id=3 AND expedition_id= `+ expeditionID + `) WHERE city_id = ` + fromCityID + ` AND troop_id = 3;
                    UPDATE expedition_order SET returning = 2 WHERE expedition_id  =`+ expeditionID + `;`

                dbase.query(sql, (err, result) => {
                    if (err) throw err;

                });
            };
        };
    });
}

module.exports = { checkExpeditionsTimes }