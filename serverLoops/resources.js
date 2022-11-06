const express = require('express');
const mysql = require('mysql2')

const dbase = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: "3306",
    user: "root",
    password: "wowgold1",
    database: "faunawars",
});

function updateWoodResource() {

    let allCities = [];

    let sql = "SELECT city_id FROM city;" //GET ALL CITIES ID
    dbase.query(sql, (err, result) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {

            allCities.push(result[i].city_id) //STORES THE IDS OF ALL CITIES IN A ARRAY
        }

        for (let i = 0; i < allCities.length; i++) { //iterates all cities and gets the wood mine level

            let sql = "SELECT city_id,building_level FROM city_building WHERE city_id = " + allCities[i] + " AND building_id=4;"

            dbase.query(sql, (err, result2) => {
                if (err) throw err;

                let increment = ((30 * Math.pow(1.2, result2[0].building_level - 1)) / 60) //amount of wood a player gets every minute

                let sql = "UPDATE resources_city SET  resource_amount = resource_amount + " + increment + " WHERE city_id = " + result2[0].city_id + " AND resource_id=1"

                dbase.query(sql, (err, result3) => {
                    if (err) throw err;
                });
            });
        };
    });
}


function updateClayResource() {

    let allCities = [];

    let sql = "SELECT city_id FROM city;" //GET ALL CITIES ID
    dbase.query(sql, (err, result) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {

            allCities.push(result[i].city_id) //STORES THE IDS OF ALL CITIES IN A ARRAY
        }

        for (let i = 0; i < allCities.length; i++) { //iterates all cities and gets the wood mine level

            let sql = "SELECT city_id,building_level FROM city_building WHERE city_id = " + allCities[i] + " AND building_id=5;"

            dbase.query(sql, (err, result2) => {
                if (err) throw err;

                let increment = ((30 * Math.pow(1.2, result2[0].building_level - 1)) / 60) //amount of clay a player gets every minute

                let sql = "UPDATE resources_city SET  resource_amount = resource_amount + " + increment + " WHERE city_id = " + result2[0].city_id + " AND resource_id=3"

                dbase.query(sql, (err, result3) => {
                    if (err) throw err;
                });

            });
        };
    });
}

function updateStoneResource() {

    let allCities = [];

    let sql = "SELECT city_id FROM city;" //GET ALL CITIES ID
    dbase.query(sql, (err, result) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {

            allCities.push(result[i].city_id) //STORES THE IDS OF ALL CITIES IN A ARRAY
        }

        for (let i = 0; i < allCities.length; i++) { //iterates all cities and gets the wood mine level

            let sql = "SELECT city_id,building_level FROM city_building WHERE city_id = " + allCities[i] + " AND building_id=6;"

            dbase.query(sql, (err, result2) => {
                if (err) throw err;

                let increment = ((30 * Math.pow(1.2, result2[0].building_level - 1)) / 60) //amount of stone a player gets every minute


                let sql = "UPDATE resources_city SET  resource_amount = resource_amount + " + increment + " WHERE city_id = " + result2[0].city_id + " AND resource_id=2"

                dbase.query(sql, (err, result3) => {
                    if (err) throw err;
                });

            });
        };
    });
}

module.exports = { updateWoodResource, updateStoneResource, updateClayResource }