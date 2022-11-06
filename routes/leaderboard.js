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

router.get('/getLeaderboardInfo', (req, res) => {

    let sql = 'select player_username, player_citycount, player_faction, player_totalpoints FROM player order by player_totalpoints desc limit 5;'

    dbase.query(sql, (err, result) => {
        if (err) throw err;

        console.log(result)
        res.send(result)

    })

})

router.get('/getRank', (req, res) => {

    let sql = 'select player_username FROM player order by player_totalpoints desc limit 5;'

    dbase.query(sql, (err, result) => {
        if (err) throw err;

        res.send(result)

    })

})


module.exports = router;