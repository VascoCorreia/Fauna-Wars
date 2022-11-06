function setup() {
    initUI();
    getLeaderboardInfo();
}

function getLeaderboardInfo() {

    loadJSON('/getLeaderboardInfo', (info) => {

        document.getElementById("rank1Name").innerHTML = info[0].player_username;
        document.getElementById("rank1Cities").innerHTML = info[0].player_citycount;
        document.getElementById("rank1Faction").innerHTML = info[0].player_faction;
        document.getElementById("rank1Points").innerHTML = info[0].player_totalpoints;

        if (info.length <= 2) {

            document.getElementById("rank2Name").innerHTML = info[1].player_username;
            document.getElementById("rank2Cities").innerHTML = info[1].player_citycount;
            document.getElementById("rank2Faction").innerHTML = info[1].player_faction;
            document.getElementById("rank2Points").innerHTML = info[1].player_totalpoints;

        } else if (info.length <= 3) {

            document.getElementById("rank2Name").innerHTML = info[1].player_username;
            document.getElementById("rank2Cities").innerHTML = info[1].player_citycount;
            document.getElementById("rank2Faction").innerHTML = info[1].player_faction;
            document.getElementById("rank2Points").innerHTML = info[1].player_totalpoints;

            document.getElementById("rank3Name").innerHTML = info[2].player_username;
            document.getElementById("rank3Cities").innerHTML = info[2].player_citycount;
            document.getElementById("rank3Faction").innerHTML = info[2].player_faction;
            document.getElementById("rank3Points").innerHTML = info[2].player_totalpoints;

        } else if (info.length <= 4) {

            document.getElementById("rank2Name").innerHTML = info[1].player_username;
            document.getElementById("rank2Cities").innerHTML = info[1].player_citycount;
            document.getElementById("rank2Faction").innerHTML = info[1].player_faction;
            document.getElementById("rank2Points").innerHTML = info[1].player_totalpoints;

            document.getElementById("rank3Name").innerHTML = info[2].player_username;
            document.getElementById("rank3Cities").innerHTML = info[2].player_citycount;
            document.getElementById("rank3Faction").innerHTML = info[2].player_faction;
            document.getElementById("rank3Points").innerHTML = info[2].player_totalpoints;


            document.getElementById("rank4Name").innerHTML = info[3].player_username;
            document.getElementById("rank4Cities").innerHTML = info[3].player_citycount;
            document.getElementById("rank4Faction").innerHTML = info[3].player_faction;
            document.getElementById("rank4Points").innerHTML = info[3].player_totalpoints;

        } else if (info.length > 4) {

            document.getElementById("rank2Name").innerHTML = info[1].player_username;
            document.getElementById("rank2Cities").innerHTML = info[1].player_citycount;
            document.getElementById("rank2Faction").innerHTML = info[1].player_faction;
            document.getElementById("rank2Points").innerHTML = info[1].player_totalpoints;

            document.getElementById("rank3Name").innerHTML = info[2].player_username;
            document.getElementById("rank3Cities").innerHTML = info[2].player_citycount;
            document.getElementById("rank3Faction").innerHTML = info[2].player_faction;
            document.getElementById("rank3Points").innerHTML = info[2].player_totalpoints;

            document.getElementById("rank4Name").innerHTML = info[3].player_username;
            document.getElementById("rank4Cities").innerHTML = info[3].player_citycount;
            document.getElementById("rank4Faction").innerHTML = info[3].player_faction;
            document.getElementById("rank4Points").innerHTML = info[3].player_totalpoints;

            document.getElementById("rank5Name").innerHTML = info[4].player_username;
            document.getElementById("rank5Cities").innerHTML = info[4].player_citycount;
            document.getElementById("rank5Faction").innerHTML = info[4].player_faction;
            document.getElementById("rank5Points").innerHTML = info[4].player_totalpoints;

        }
    })

}


