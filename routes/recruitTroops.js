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

router.post('/recruitSwordsman', (req, res) => {

    dbase.query('UPDATE city_troop SET troop_amount = troop_amount +' + req.body.amount + ' WHERE troop_id=1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

        dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.woodCost + ' WHERE resource_id = 1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

            dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.stoneCost + ' WHERE resource_id = 2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                if (err) throw err;


            });
        });
    });
})

router.post('/recruitArcher', (req, res) => {

    dbase.query('UPDATE city_troop SET troop_amount = troop_amount + ' + req.body.amount + ' WHERE troop_id=2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

        dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.woodCost + ' WHERE resource_id = 1 AND city_id = ' + req.body.cityID + ';', (err, result) => {

            dbase.query('UPDATE resources_city SET resource_amount = resource_amount - ' + req.body.stoneCost + ' WHERE resource_id = 2 AND city_id = ' + req.body.cityID + ';', (err, result) => {

                if (err) throw err;
                res.end();

            });
        });
    });
})

router.post('/recruitCavalry', (req, res) => {

    dbase.query('UPDATE city_troop SET troop_amount = troop_amount + ' + req.body.amount + ' WHERE troop_id=3 AND city_id = ' + req.body.cityID + ';', (err, result) => {

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

module.exports = router;