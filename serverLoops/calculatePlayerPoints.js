const mysql = require('mysql2')

const dbase = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: "3306",
    user: "root",
    password: "wowgold1",
    database: "faunawars",
});

function calculatePlayerPoints() {

    let playerTotalPoints;

    let sql = "SELECT player_id FROM player;"

    dbase.query(sql, (err, result) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {

            let sql2 = 'SELECT city_points FROM city WHERE city_player_id = ' + result[i].player_id + ';'

            dbase.query(sql2, (err, result2) => {
                if (err) throw err;
                playerTotalPoints = 0;
                for (let j = 0; j < result2.length; j++) {

                    playerTotalPoints += result2[j].city_points

                }
                let sql3 = 'UPDATE player SET player_totalpoints = ' + playerTotalPoints + ' WHERE player_id = ' + result[i].player_id + ';'

                dbase.query(sql3, (err, result3) => {
                    if (err) throw err;

                })
            })
        }
    })
}

module.exports = { calculatePlayerPoints }