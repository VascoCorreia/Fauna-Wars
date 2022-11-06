#THIS QUERY  IS  USED IN THE REGISTER, IT WILL SELECT ALL ALREADY EXISTING USERNAMES IN THE DATABASE TO LATER CHECK IF IT ALREADY EXISTS

SELECT player_username from player;

## Login query ##

SELECT player_id FROM player WHERE player_username = "Vasco" AND player_password = 1234 ; # this query gets the correct id of the player that logged in according to the credentials he entered in the login form

##

SELECT city_id FROM city WHERE city_player_id  = 1; # gets all the cities of the player
##

SELECT * FROM city_building WHERE city_id = 1; # gets information about all of the buildings from the city

##

SELECT * FROM resources_city WHERE city_id =2 ; # gets information about the resources present in the city with id = 2 (Testing purposes, this is instead used in the script to get the resource information about the city the player is currently in)

##

SELECT * FROM city_troop WHERE city_id = 1;  # gets information about all of the troops present in the city


## the next queries are related to the upgrading of buildings ##

## upgrading the main building ##

UPDATE city_building SET building_time = NOW() WHERE building_id=1 AND city_id = 1;  # inserts the time at which the player started the upgrade of his/her main building 
UPDATE resources_city SET resource_amount = resource_amount - 100 WHERE resource_id = 1 AND city_id = 1; # subtracts from the resources_city table the amount of wood that the upgrade cost (100 is a value made up for testing workbench purposes).
UPDATE resources_city SET resource_amount = resource_amount - 100 WHERE resource_id = 2 AND city_id = 1; # subtracts from the resources_city table the amount of clay that the upgrade cost (100 is a value made up for testing workbench purposes). 
UPDATE resources_city SET resource_amount = resource_amount - 100 WHERE resource_id = 3 AND city_id = 1; # subtracts from the resources_city table the amount of stone that the upgrade cost (100 is a value made up for testing workbench purposes). 

## important: the queries to upgrade all the other buildings are the same as the previous ones only chaging the building_id to the corresponding id of the building being upgraded.
## important: the update to the level of the building is only done after a certain  amount of real time has elapsed. The previous queries (line 29-32) are executed immediatly when the player clicks the button to upgrade the building in the UI, if he has the required amount of resources. See below to check the queries that upgrade the level

SELECT * FROM city_building WHERE building_time IS NOT NULL; # Scans all cities to check which buildings are being upgraded
UPDATE city_building SET building_level = 1 + (SELECT building_level FROM building WHERE city_id = 1 AND building_id = 1), building_time = NULL WHERE building_id=1 AND city_id = 1; # increases the level of the main building by 1, set the building time to null so that the database knows it is not upgrading (in the game if building_time is not null it means an upgrades is being done, it takes real time to complete) 

## end of queries that upgrade the level of a building


##  update wood resource over time  (over time only happens in game)##

SELECT city_id, building_level FROM city_building WHERE city_id = 1 AND building_id=4;  # Gets the level of the wood mine from city_id = 1. IMPORTANT: in the game his query gets the level of the wood mine for ALL cities in the game

UPDATE resources_city SET  resource_amount = resource_amount + 10 WHERE city_id = 1 AND resource_id=1; #update the wood resource for city id = 1  IMPORTANT: 10 is a test amount. In the game the increment is calculated using a formula that depends on the building level. This queries are inside a LOOP in the server that gets executed every minute 

##

##  update stone resource over time  ##

SELECT city_id, building_level FROM city_building WHERE city_id = 1 AND building_id=6;  # Gets the level of the stone mine from city_id = 1 IMPORTANT: in the game his query gets the level of the stone mine for ALL cities in the game

UPDATE resources_city SET  resource_amount = resource_amount + 10 WHERE city_id = 1 AND resource_id=2; #update the stone resource for city id = 1  !IMPORTANT: 10 is a test amount. In the game the increment is calculated using a formula that depends on the building level. This queries are inside a LOOP in the server that gets executed every minute 

##

##  update clay resource over time  ##

SELECT city_id,building_level FROM city_building WHERE city_id = 1 AND building_id=5;  # Gets the level of the clay mine from city_id = 1 IMPORTANT: in the game his query gets the level of the clay mine for ALL cities in the game

UPDATE resources_city SET  resource_amount = resource_amount + 10 WHERE city_id = 1 AND resource_id=3; #update the clay resource for city id = 1  !IMPORTANT: 10 is a test amount. In the game the increment is calculated using a formula that depends on the building level. This queries are inside a LOOP in the server that gets executed every minute 

##

UPDATE city SET city_points = 100  WHERE city_id = 1; # updates the city points, values here are only for testing purposes. In the client the values are calculated by adding the points that all buildings in the city give

## calculate player total points ##

SELECT city_points FROM city WHERE city_player_id = 1; # gets the city points for every city of the player. This values are all added to get the player total points in the game
UPDATE player SET player_totalpoints = 116 WHERE player_id = 1; # updates the player total points in the database, all values here are for testing purposes. Real values are calculated in the game by adding all the results from the previous query (line 71)

##

SELECT city_id, city_X, city_Y, city_name, city_player_id FROM city ; # gets information  about all cities in the game. This will be used to create the map  on the client

SELECT player_username, player_faction, player_totalpoints FROM player WHERE player_id = 1; #gets information about player with id=1. This will be used to create the map on the client, specifically used when clicking on a village in the map  to show the information in the client

## Attacks ##

UPDATE city_troop SET troop_amount = troop_amount - 5 WHERE city_id = 1 AND troop_id = 1; # After sending an attack subtract from the troops in the departure city the  amount of swordsman (testing values, real values are calculated in the client)
UPDATE city_troop SET troop_amount = troop_amount - 5 WHERE city_id = 1 AND troop_id = 2;# After sending an attack subtract from the troops in the departure city the  amount of archers (testing values, real values are calculated in the client)
UPDATE city_troop SET troop_amount = troop_amount - 5 WHERE city_id = 1 AND troop_id = 3;# After sending an attack subtract from the troops in the departure city the  amount of cavalry (testing values, real values are calculated in the client)

##

UPDATE expedition_order SET returning = 1 WHERE expedition_id  = 1; # Each expedition takes real time to arrive at its destination, after arriving update the returning value to 1 meaning it starts returning to the departure city
UPDATE expedition_order SET arrival_time = ADDTIME(arrival_time,20) WHERE expedition_id  = 1; #  updates the arrival time for returning (20 is a test value real value is calculated in the client)

## when troops return from an expedition and arrive at the departure city troops values are updated ##

UPDATE city_troop SET troop_amount = troop_amount + (SELECT troop_amount FROM troop_expedition WHERE troop_id=1 AND expedition_id= 1) WHERE city_id = 1 AND troop_id = 1;  # adds the amount of swordsman in the arriving expedition to the arrival city (The amount added depends on the amount of troops that survived in the expedition, all troops losses are calculated in the client)
UPDATE city_troop SET troop_amount = troop_amount + (SELECT troop_amount FROM troop_expedition WHERE troop_id=2 AND expedition_id= 1) WHERE city_id = 1 AND troop_id = 2; # adds the amount of archers in the arriving expedition to the arrival city (The amount added depends on the amount of troops that survived in the expedition, all troops losses are calculated in the client)
UPDATE city_troop SET troop_amount = troop_amount + (SELECT troop_amount FROM troop_expedition WHERE troop_id=3 AND expedition_id= 1) WHERE city_id = 1 AND troop_id = 3; # adds the amount of cavalry in the arriving expedition to the arrival city (The amount added depends on the amount of troops that survived in the expedition, all troops losses are calculated in the client)
UPDATE expedition_order SET returning = 2 WHERE expedition_id  = 1; #  sets the returning value  to 2 of the  expedition so that the server and database knows it is complete

## When an expedition arrives the following queries are executed ##
## FOLLOWING QUERIES ARE FOR A VICTORIOUS ATTACK ##
 
UPDATE troop_expedition SET troop_amount = troop_amount - (troop_amount * 0.3) WHERE expedition_id = 1 AND troop_id = 1; #subtracts the lost swordsman in the attack to the total troops sent on the expedition (0.3 is a test value, it means that 30% of the sent troops will be lost. The real value is calculated in the client)
UPDATE troop_expedition SET troop_amount = troop_amount - (troop_amount * 0.3) WHERE expedition_id = 1 AND troop_id = 2; #subtracts the lost archer in the attack to the total troops sent  on the expedition (0.3 is a test value, it means that 30% of the sent troops will be lost. The real value is calculated in the client)
UPDATE troop_expedition SET troop_amount = troop_amount - (troop_amount * 0.3) WHERE expedition_id = 1 AND troop_id = 3; #subtracts the lost cavalry in the attack to the total troops sent  on the expedition (0.3 is a test value, it means that 30% of the sent troops will be lost. The real value is calculated in the client)
UPDATE city_troop SET troop_amount = 0  WHERE city_id = 2 AND troop_id =  1; # If an attack is victorious all troops from the target city die so we set the troops in the target city to 0 (Swordsman)
UPDATE city_troop SET troop_amount = 0  WHERE city_id = 2 AND troop_id =  2; # If an attack is victorious all troops from the target city die so we set the troops in the target city to 0 (Archer)
UPDATE city_troop SET troop_amount = 0  WHERE city_id = 2 AND troop_id =  3; # If an attack is victorious all troops from the target city die so we set the troops in the target city to 0 (Cavalry)
UPDATE player SET player_citycount = (player_citycount - 1) WHERE player_id = (SELECT city_player_id FROM city WHERE city_player_id = 2 ORDER BY city_player_id asc LIMIT 1); # if an attacker is victorious the city now belongs to the him. Meaning we need to subtract 1 from the loser city count
UPDATE player SET player_citycount = (player_citycount + 1) WHERE player_id = (SELECT city_player_id FROM city WHERE city_player_id = 1 ORDER BY city_player_id asc LIMIT 1); # if an attacker is victorious the city now belongs to the him. Meaning we need to add 1 from the winner city count
UPDATE city SET city_player_id = (SELECT city_player_id FROM (SELECT * FROM city) AS T WHERE city_id =1) WHERE city_id = 2; # if an attacker is victorious the city now belongs to the him. This query updates the city table and sets the city_player_id to that of the attacker, making the city now his.

##FOLLOWING QUERIES ARE FOR AN ATTACK THAT WAS DEFEATED ##

UPDATE city_troop SET troop_amount = troop_amount - (troop_amount * 0.3) WHERE city_id = 2 AND troop_id = 1; # substract the lost swordsman in the attack from the target city (0.3 is a test value, it means that 30% of the sent troops will be lost. The real value is calculated in the client)
UPDATE city_troop SET troop_amount = troop_amount - (troop_amount * 0.3) WHERE city_id = 2 AND troop_id = 2; # substract the lost archers in the attack from the target city (0.3 is a test value, it means that 30% of the sent troops will be lost. The real value is calculated in the client)
UPDATE city_troop SET troop_amount = troop_amount - (troop_amount * 0.3) WHERE city_id = 2 AND troop_id = 3; # substract the lost cavalry in the attack from the target city (0.3 is a test value, it means that 30% of the sent troops will be lost. The real value is calculated in the client)
UPDATE expedition_order SET returning = 2  WHERE expedition_id = 1; # if the attacker is defeated the troops sent in the expedition dont return to the departure city (returning = 2 means that the expedition is complete)

##

##

SELECT expedition_id, arrival_time, returning, target_city, from_city_id FROM expedition_order; # gets the information about the expedition

## FOLOWING QUERY GETS THE POSITION OF THE TARGET CITY, THIS WILL BE USED TO CALCULATE THE TIME THE EXPEDITION WILL TAKE IN THE CLIENT ##

SELECT city.city_X, city.city_Y
FROM city
JOIN expedition_order ON city_id = target_city AND expedition_order.expedition_id = 1;	

## 

## FOLOWING QUERY GETS THE POSITION OF THE DEPARTURE CITY, THIS WILL BE USED TO CALCULATE THE TIME THE EXPEDITION WILL TAKE IN THE CLIENT ##

SELECT city.city_X, city.city_Y
FROM city
JOIN expedition_order ON city_id = from_city_id AND expedition_order.expedition_id = 1;


##

START TRANSACTION;

UPDATE resources_city SET resource_amount = resource_amount - 1000 WHERE resource_id = 1 AND city_id = 1;
UPDATE resources_city SET resource_amount = resource_amount - 1000 WHERE resource_id = 2 AND city_id = 1;
UPDATE resources_city SET resource_amount = resource_amount - 1000 WHERE resource_id = 3 AND city_id = 1;

COMMIT;

## TRIGGER EXAMPLES (not used in actual game) ##

START TRANSACTION;

CREATE TRIGGER tr_ins_player
BEFORE INSERT ON player
FOR EACH ROW
SET NEW.player_username = UPPER(NEW.player_username);

INSERT INTO player (player_username) VALUES ('swag');

COMMIT;