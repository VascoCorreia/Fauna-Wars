create database FaunaWars;

use FaunaWars;

SET GLOBAL sql_mode='';

create table  Player (player_id smallint not null auto_increment,
					player_faction varchar(10),
                    player_username varchar(30),
                    player_password varchar(30),
                    player_totalpoints int,
					player_citycount  int,
                    player_currentcity int,
                    check (player_totalpoints >= 0),
                    check (player_citycount >= 0),
                    unique (player_username),
                    primary key(player_id));
                    
create table City (city_id int not null auto_increment,
				city_X int, 	# X coordinates in map
                city_Y int, 	# Y coordinates in map
                city_player_id smallint,	 #foreign key from table player
                city_name varchar(50),
                city_points int,
                check (city_points >= 0),
                primary key(city_id));
                
create table Resources (resource_id tinyint not null,
					resource_name varchar(10),
					primary key(resource_id));

create table Resources_city (row_id int not null auto_increment, # get a better name for this PK
							resource_amount int,
                            resource_id tinyint,
							city_id int,
                            check (resource_amount >= 0),
                            primary key(row_id));

create table Building (building_id tinyint not null,
					building_name varchar(30),
                    primary key(building_id));
                    
create table City_Building (city_building_id int not null auto_increment,
						city_id int,
                        building_id tinyint,
                        building_level tinyint,
						building_time datetime,
                        check (building_level >= 1),
                        primary key(city_building_id));

create table Troop(troop_id tinyint not null,
				   troop_name varchar(20),
                   primary key(troop_id));
                   
create table City_Troop(city_troop_id int auto_increment not null,
						troop_id tinyint,
						city_id int,
						troop_amount int,
                        check (troop_amount >= 0),
                        primary key(city_troop_id));
                   
create table expedition_order(expedition_order_id int not null auto_increment,
								expedition_id int not null,
								from_city_id int not null,
								target_city int not null,
								arrival_time datetime,
								returning tinyint,
								primary key (expedition_order_id));
                                 
create table expedition(expedition_id int not null auto_increment,
						primary key(expedition_id));

                        
create table troop_expedition(troop_expedition_id int not null auto_increment,
						expedition_id int not null,
						troop_id tinyint not null,
                        troop_amount int,
						primary key(troop_expedition_id));
                               
							                                             
                            
# -----------------------------------  FOREIGN KEYS ------------------------------------

# CITY_PLAYER_ID FOREIGN KEY OF CITY TABLE     

alter table City add constraint player_FK_city #player_id in city foreign key
			foreign key (city_player_id) references player(player_id)
            on delete no action on update no action;

# RESOURCE_ID FOREIGN KEY OF RESOURCES-CITY TABLE     

alter table Resources_city add constraint resource_FK_id
			foreign key (resource_id) references resources(resource_id)
            on delete no action on update no action;
            
# CITY_ID FOREIGN KEY OF RESOURCES-CITY TABLE            
            
alter table Resources_city add constraint city_FK_id
			foreign key (city_id) references City(city_id)
            on delete no action on update no action;
    
# CITY_ID FOREIGN KEY OF CITY-BUILDING TABLE    
    
alter table City_Building add constraint city_FK_id2
			foreign key (city_id) references City(city_id)
            on delete no action on update no action;

# BUILDING_ID FOREIGN KEY OF CITY-BUILDING TABLE

alter table City_Building add constraint building_FK_id
			foreign key (building_id) references Building(building_id)
            on delete no action on update no action;
            
# CITY_ID FOREIGN KEY OF CITY-TROOP TABLE
            
alter table City_Troop add constraint city_FK_id3
			foreign key (city_id) references City(city_id)
            on delete no action on update no action;

# TROOP_ID FOREIGN KEY OF CITY-TROOP TABLE
            
alter table City_Troop add constraint troop_FK_id
			foreign key (troop_id) references Troop(troop_id)
            on delete no action on update no action;

# EXPEDITION_ID FOREIGN KEY OF EXPEDITION-ORDER TABLE

alter table troop_expedition add constraint expedition_FK_troop_expedition
			foreign key (expedition_id) references expedition(expedition_id)
            on delete no action on update no action;
            
# EXPEDITION_ID FOREIGN KEY OF EXPEDITION-ORDER TABLE

alter table troop_expedition add constraint troop_FK_troop_expedition
			foreign key (troop_id) references troop(troop_id)
            on delete no action on update no action;
            
# EXPEDITION_ID FOREIGN KEY OF EXPEDITION-ORDER TABLE         
            
alter table expedition_order add constraint expeditionorder_FK_id
			foreign key (expedition_id) references troop_expedition(expedition_id)
            on delete no action on update no action;
            

#one usefull index

create index idx_cityresources on resources_city(city_id, resource_amount); # this is every second selected in the server for ALL PLAYER in the game script so indexing it is good 



