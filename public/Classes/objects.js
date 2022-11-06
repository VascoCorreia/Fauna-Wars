class Player{

    constructor(id,username,faction,totalpoints,citycount){
    
    this.id=id;
    this.username = username;
    this.faction = faction;
    this.totalpoints = totalpoints;
    this.citycount = citycount
    
    }
}

class City{
    constructor(id,name,positionX,positionY, mainBuildingLevel,barracksLevel,wallLevel,woodMineLevel,clayMineLevel,stoneMineLevel,storageLevel,woodAmount,stoneAmount,clayAmount,swordsman,archer,cavalry) {
        this.id = id;
        this.name = name;

        this.positionX = positionX;
        this.positionY = positionY;

        this.mainBuildingLevel=mainBuildingLevel;
        this.barracksLevel=barracksLevel;
        this.wallLevel=wallLevel;
        this.woodMineLevel=woodMineLevel;
        this.stoneMineLevel=stoneMineLevel;
        this.clayMineLevel=clayMineLevel;
        this.storageLevel = storageLevel;
        

        this.woodAmount = woodAmount;
        this.stoneAmount = stoneAmount;
        this.clayAmount = clayAmount;

        this.swordsman = swordsman;
        this.archer = archer;
        this.cavalry = cavalry;

    }

printLevels(){
    push()
    fill(0)
    text(this.mainBuildingLevel, 100, 100)
    pop()
    }
}