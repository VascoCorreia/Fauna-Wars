<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25254690/200179396-ebabee61-d887-4d5f-b63e-a98cdcefba83.png#">
    <img alt="Text changing depending on mode. Light: 'So light!' Dark: 'So dark!'" src="https://user-images.githubusercontent.com/25254690/200178921-e65eb6ca-a662-432c-ac92-f34b2cfac21e.png">
  </picture>
</p>

Fauna Wars is a web browser real time strategy war game where two factions: The Apes and the Humans are at war to hold most of the world. 

To achieve this, they must develop their cities, recruit troops, and conquer enemy cities.

# Instructions

Fauna Wars has been developed to be only played on a local computer, the database is created locally and the server runs with NodeJS on the local machine.

To run the server you need to acess the cmd in the folder downloaded using **cd "path_to_folder** and run the **serverScript.js** using the command **node serverScript.js**

Inside the Database folder there are 2 sql scripts used to initialize and populate the database these need to be run for example using MySQL Workbench in order for the game to work. The *queries.sql* are some test queries that I used.

**The game is set to run on port 3306.**

# Gameplay

 ## 1. Map

Clicking the Map box changes the main window to the world map window.
Here the player can see his own, his allies and his enemy’s cities. Clicking on a city will show the Username, player faction, player total points and city name clicking it also allows the player to send an attack if it’s an enemy.	

**See the image below.** 

<p align="center">
  <img src="https://user-images.githubusercontent.com/25254690/200179788-94494f26-6225-43a2-baf7-c465df8b8d04.png" width="60%" height="60%">
</p>

 ## 2. City

Clicking the city box changes the main window to the players current selected village view. Here the players can see his buildings and their levels. 
Here the player can interact with some of his buildings taking him to different windows.

In the build page the player can upgrade the buildings on his currently selected city. Building or upgrading a building cost resources and takes time.

<p align="center">
  <img src="https://user-images.githubusercontent.com/25254690/200182036-3dbccef8-5efb-476b-979e-47794d4843eb.png" width="40%" height="40%">
</p>

  ### 2.1. City Dropdown
  
  In this section the player can see the currently selected city name.
There is also a button here to show a dropdown menu with all the player cit-ies. Here the player can click a certain city in the dropdown menu to select it.

<p align="center">
  <img src="https://user-images.githubusercontent.com/25254690/200186286-0a7ceb0c-d22d-43af-8fbc-922df50ff8f9.png" width="60%" height="60%">
</p>

 ## 3. Buildings

Buildings are one of the main concepts in Fauna Wars. Each building has levels and a level capTo build or upgrade a building you require resources. 

You will require more resources the higher the level of the building.
The buildings exist in players cities and they define how much points a play-er possesses. Each building and building level gives the players points.


 ## 4. Attacking and Defending

Attacking is one of the core concepts in Fauna Wars.
In the world map view after selecting an enemy city a player can select the attack button which leads the player to the window shown below.
Here he can select the number of troops he wants to send in an attack.

<p align="center">
  <img src="https://user-images.githubusercontent.com/25254690/200182338-7076e715-6cda-4c8f-923f-60f0c1a2e6f4.png" width="47%" height="47%">
  <img src="https://user-images.githubusercontent.com/25254690/200183332-1cec89de-6afa-4096-a6b5-fce440dc98be.png" width="47%" height="47%">
</p>

After sending an attack the troops take a set amount of time to arrive at the enemy. The time the army takes to arrive is always calculated depending on the distance between the cities.

  ### 4.1. Attack Points

To know the strength of an attack a total of an army Attack points is calculated.

The formula used is:

<p align="center">
  <img src="https://user-images.githubusercontent.com/25254690/200184321-d6665b91-f720-4386-ab38-ce4df88026a8.png" width="60%" height="60%">
</p>


 ### 4.2. Defense Points

To know the strength of a defense a total of an army Defense points is calculated.

The formula used is:

<p align="center">
  <img src="https://user-images.githubusercontent.com/25254690/200185573-740d9697-b0a0-4870-965b-0bed33d36248.png" width="60%" height="60%">
</p>

  ###4.3. Calculating the winner


To know who wins a battle we calculate the ratio between the Total Attack points of the attacker and Total Defense Points of the Defender is done.

The formula used is:  

$$Ratio=(Total Attack Points  Of attacker)/(Total  Defense Points Of Defender)$$

	-If Ratio > 1, then Attacker Wins
	-If 0 < Ratio < 1, then Defender Wins
	-If Ratio = 1, then Defender Wins

  ### 4.4. Troops Lost
  
To know the number of troops the attacker and defender loose in a battle the ratio between the Total Attack points of the attacker and Total Defense Points of the Defender is used.
When the ratio is between 0 and 1, the attacker loses all troops since he lost battle and we use this to know of many troops the defender loses.

  ### 4.5. Conquering

When the attacker wins a battle, he conquers the enemy city he attacked. This city belongs now to the attacker and he can do what he wants with it.
The resources that were present in the city the moment it was conquered also now belong to the attacker.
The buildings stay at the level they were. 
The only thing that changes is the faction and owner.

## 5. Troops

Clicking the Recruit box changes the main window to the Recruit window.
In the city main view clicking on the Barracks will also take the player to this window.
Here the player can recruit troops that stay in the city they are being recruit-ed on until the player gives them some action.
Recruiting troops cost resources and takes time.ç

<p align="center">
  <img src="https://user-images.githubusercontent.com/25254690/200185810-98237ce0-8a0a-43be-a891-e6532bc10210.png" width="60%" height="60%">
</p>

## 6. Enemy Movements

In this section the player can see information about enemy movements that are happening related to his currently selected city. Enemy movements in-clude attacks coming to the current city.

<p align="center">
  <img src="https://user-images.githubusercontent.com/25254690/200185974-89cc48f1-6e9b-40da-b2cc-75421f4d7663.png" width="60%" height="60%">
</p>

## 7. Player Movements

In this section the player can see information about ally movements that are happening related to his currently selected city. Allied movements include his own movements.

<p align="center">
  <img src="https://user-images.githubusercontent.com/25254690/200186060-4368f774-67da-462a-901d-e44c6593b5f2.png" width="60%" height="60%">
</p>

## 8. Leadboards

In this section the player can see the leaderboards.

<p align="center">
  <img src="https://user-images.githubusercontent.com/25254690/200186217-90befab3-e50c-4fc5-9b93-42012659ad2c.png" width="60%" height="60%">
</p>

---

## Thank you very much for reading! Hopefully it helped you understand what Fauna Wars is about.
