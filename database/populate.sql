#BUILDING TABLE#

insert into building(building_id, building_name) values(1, 'Main Building');
insert into building(building_id, building_name) values(2, 'Barracks');
insert into building(building_id, building_name) values(3, 'Wall');
insert into building(building_id, building_name) values(4, 'Wood Mine');
insert into building(building_id, building_name) values(5, 'Clay Mine');
insert into building(building_id, building_name) values(6, 'Stone Mine');
insert into building(building_id, building_name) values(7, 'storage');

####


#RESOURCES TABLE#

insert into resources(resource_id, resource_name) values(1, 'Wood');
insert into resources(resource_id, resource_name) values(2, 'Stone');
insert into resources(resource_id, resource_name) values(3, 'Clay');

####


#TROOP TABLE#

insert into troop(troop_id, troop_name) values(1, 'Swordsman');
insert into troop(troop_id, troop_name) values(2, 'Archer');
insert into troop(troop_id, troop_name) values(3, 'Cavalry');

#INSERT FICTIONAL PLAYERS#

#PLAYER 1#

INSERT INTO player (player_faction, player_username, player_password , player_totalpoints, player_citycount) VALUES ('Humans','Vasco','1234',16,1);
INSERT INTO city (city_player_id, city_X, city_Y, city_name, city_points) VALUES (1, ROUND(RAND()*(6-0)+0), ROUND(RAND()*(6-0)+0), 'City of Vasco', 16);
insert into city_building (city_id, building_id, building_level, building_time) values (1, (select building_id from building where building_id=1), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (1, (select building_id from building where building_id=2), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (1, (select building_id from building where building_id=3), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (1, (select building_id from building where building_id=4), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (1, (select building_id from building where building_id=5), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (1, (select building_id from building where building_id=6), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (1, (select building_id from building where building_id=7), 1, null);

insert into resources_city (resource_amount, resource_id, city_id) values (1000000, (select resource_id from resources where resource_id = 1), 1);
insert into resources_city (resource_amount, resource_id, city_id) values (1000000, (select resource_id from resources where resource_id = 2), 1);
insert into resources_city (resource_amount, resource_id, city_id) values (1000000, (select resource_id from resources where resource_id = 3), 1);

insert into city_troop (troop_amount, troop_id, city_id) values (5, (select troop_id from troop	where troop_id = 1), 1);
insert into city_troop (troop_amount, troop_id, city_id) values (5, (select troop_id from troop where troop_id = 2), 1);
insert into city_troop (troop_amount, troop_id, city_id) values (5, (select troop_id from troop where troop_id = 3), 1);

###

#PLAYER 2#


INSERT INTO player (player_faction, player_username, player_password, player_totalpoints, player_citycount ) VALUES ('Apes','Nuno','1234',16,1);
INSERT INTO city (city_player_id, city_X, city_Y, city_name, city_points) VALUES (2, ROUND(RAND()*(6-0)+0), ROUND(RAND()*(6-0)+0), 'City of Nuno', 16);
insert into city_building (city_id, building_id, building_level, building_time) values (2, (select building_id from building where building_id=1), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (2, (select building_id from building where building_id=2), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (2, (select building_id from building where building_id=3), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (2, (select building_id from building where building_id=4), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (2, (select building_id from building where building_id=5), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (2, (select building_id from building where building_id=6), 1, null);
insert into city_building (city_id, building_id, building_level, building_time) values (2, (select building_id from building where building_id=7), 1, null);

insert into resources_city (resource_amount, resource_id, city_id) values (1000000, (select resource_id from resources where resource_id = 1), 2);
insert into resources_city (resource_amount, resource_id, city_id) values (1000000, (select resource_id from resources where resource_id = 2), 2);
insert into resources_city (resource_amount, resource_id, city_id) values (1000000, (select resource_id from resources where resource_id = 3), 2);

insert into city_troop (troop_amount, troop_id, city_id) values (5, (select troop_id from troop	where troop_id = 1), 2);
insert into city_troop (troop_amount, troop_id, city_id) values (5, (select troop_id from troop where troop_id = 2), 2);
insert into city_troop (troop_amount, troop_id, city_id) values (5, (select troop_id from troop where troop_id = 3), 2);

## INSERT A ATTACK ##

INSERT INTO expedition (expedition_id) VALUES (null); # auto increments

INSERT INTO troop_expedition (expedition_id, troop_id, troop_amount) VALUES ((SELECT expedition_id FROM expedition ORDER BY expedition_id DESC LIMIT 1), 1, 100); # inserts into the troop_expedition table the last id from the expeditions generated when the player sends an attack, and the amount of 100 swordsman(testing value, the real value is specified by the player in the client) (troop_id=1)
INSERT INTO troop_expedition (expedition_id, troop_id, troop_amount) VALUES ((SELECT expedition_id FROM expedition ORDER BY expedition_id DESC LIMIT 1), 2, 50); # inserts into the troop_expedition table the last id from the expeditions generated when the player sends an attack, and the amount of 50 swordsman(testing value, the real value is specified by the player in the client) (troop_id=2)
INSERT INTO troop_expedition (expedition_id, troop_id, troop_amount) VALUES ((SELECT expedition_id FROM expedition ORDER BY expedition_id DESC LIMIT 1), 3, 25);# inserts into the troop_expedition table the last id from the expeditions generated when the player sends an attack, and the amount of 25 swordsman(testing value, the real value is specified by the player in the client) (troop_id=3)

## OREMOVE COMMENT TO INSERT ATTACK ## 
#INSERT INTO expedition_order (expedition_id, from_city_id, target_city, arrival_time, returning) VALUES ((SELECT expedition_id FROM troop_expedition ORDER BY expedition_id DESC LIMIT 1), 1, 2,ADDTIME(now(),20),0);# inserts into the expedition_order table all the correct information: the id, the city the attack is sent from, the city that is the target, the time of arrival and the returning = 0 (these are testing values, real values calculated in the client)