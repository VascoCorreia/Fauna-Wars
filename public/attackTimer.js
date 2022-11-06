let allyMovements = [];
let enemyMovements = [];

function addAllyAttackToUi() {

    loadJSON('/getAllyMovementsTimers/' + currentCityInfo.id, (data) => {

        allyMovements = data;

        for (let i = 0; i < allyMovements.length; i++) {

            let flag = false;

            for (let j = 1; j < document.getElementById('AllyMovements').childElementCount + 1; j++) {

                let liID = document.getElementById('AllyMovements').childNodes[j].id;

                if ('allyAttack' + allyMovements[i][3] == liID) {

                    flag = true;

                    updateAttackTimer("AllyMovements", allyMovements[i][2], currentCityInfo.name, allyMovements[i][0], 'allyAttack' + allyMovements[i][3], allyMovements[i][1])

                }
            }

            if (flag == false) {

                addAllyAttackToList("AllyMovements", currentCityInfo.name, allyMovements[i][2], allyMovements[i][0], allyMovements[i][1], 'allyAttack' + allyMovements[i][3]);

                if (allyMovements.length == 0) {

                    document.getElementById('AllyMovements').innerHTML = "";

                }
            }
        }
    });
}

function addEnemyAttackToUi() {

    loadJSON('/getEnemyMovementsTimers/' + currentCityInfo.id, (data) => {

        enemyMovements = data;

        for (let i = 0; i < enemyMovements.length; i++) {

            let flag = false;

            for (let j = 1; j < document.getElementById('enemyMovements').childElementCount + 1; j++) {

                let liID = document.getElementById('enemyMovements').childNodes[j].id;

                if ('enemyAttack' + enemyMovements[i][3] == liID) {

                    flag = true;

                    updateAttackTimer("enemyMovements", currentCityInfo.name, enemyMovements[i][2], enemyMovements[i][0], 'enemyAttack' + enemyMovements[i][3], enemyMovements[i][1])
                }
            }

            if (flag == false) {

                addEnemyAttackToList("enemyMovements", enemyMovements[i][2], currentCityInfo.name, enemyMovements[i][0], 'enemyAttack' + enemyMovements[i][3]);

                if (enemyMovements.length == 0) {

                    document.getElementById('enemyMovements').innerHTML = "";

                }
            }
        }
    });
}

function updateAttackTimer(list, arrivalCity, departureCity, timer, id, returning) {

    let currentTime = new Date();
    currentTime = currentTime.getTime();
    let movementList = document.getElementById(list);

    let listItem = document.getElementById(id)

    timer = timer - currentTime;
    timer = transformMilisecondsToTime(timer);

    listItem.innerHTML = 'Attack to <b>' + arrivalCity + '</b> from <b>' + departureCity + ' ' + timer + '</b>'

    if (returning == 1) {

        listItem.innerHTML = 'Returning to <b>' + departureCity + '</b> from <b>' + arrivalCity + ' ' + timer + '</b>'
    }

    if (timer == '0:0:0' && arrivalCity == currentCityInfo.name) {

        movementList.removeChild(listItem);

    }

    if (timer == '0:0:0' && returning == 1) {

        movementList.removeChild(listItem);

    }

    if (returning == 2) {

        movementList.removeChild(listItem);

    }
}

function addAllyAttackToList(list, departureCity, arrivalCity, timer, returning, id) {

    var ul = document.getElementById(list);

    var li = document.createElement("li");

    li.setAttribute("id", id);

    if (returning == 0 || returning == 1) {

        li.appendChild(document.createTextNode('Attack from ' + departureCity + ' to ' + arrivalCity + ' ' + timer));

        ul.appendChild(li);

    }
}

function addEnemyAttackToList(list, departureCity, arrivalCity, timer, id) {

    var ul = document.getElementById(list);

    var li = document.createElement("li");

    li.setAttribute("id", id);

    li.appendChild(document.createTextNode('Attack to ' + arrivalCity + ' from ' + departureCity + ' ' + timer));

    ul.appendChild(li);

}

function transformMilisecondsToTime(miliseconds) {

    let hours = Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);

    let countdown = hours + ":" + minutes + ":" + seconds;

    return countdown;
}

setInterval(addAllyAttackToUi, 1000);
setInterval(addEnemyAttackToUi, 1000);
