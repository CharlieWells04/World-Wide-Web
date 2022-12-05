class Shelf{
    constructor(){
    }
    selectFiller = new Drink(0, 0, 0, 0, false, "none");
    AppleJuice = new Drink(1, 156, 33, 0, "no", "red");
    Coffee = new Drink(2, 3.4, 0, 136, "no", "brown");
    Coke = new Drink(3, 149, 39, 34, "no", "red");
    Crush = new Drink(4, 184, 48, 0, "no", "orange");
    DietCoke = new Drink(5, 0, 0, 46, "yes", "silver");
    DietPepsi = new Drink(6, 0, 0, 36.7, "yes", "silver");
    DrPepper = new Drink(7, 139, 37, 41, "no", "red");
    Fanta = new Drink(8, 180, 49, 0, "no", "orange");
    Gatorade = new Drink(9, 75, 20, 0, "no", "yellow");
    GingerAle = new Drink(10, 140, 37, 0, "no", "green");
    LemonadeMinuteMaid = new Drink(11, 153, 40, 0, "no", "yellow");
    LemonadeCharged = new Drink(12, 216, 53, 207, "no", "pink");
    MilkChocolate = new Drink(13, 270, 17, 0, "no", "brown");
    MilkSkim = new Drink(14, 116, 17, 0, "no", "white");
    MilkWhole = new Drink(15, 211, 16, 0, "no", "white");
    Milk2 = new Drink(16, 173, 17, 0, "no", "white");
    Monster = new Drink(17, 160, 37, 112, "no", "green");
    MountainDew = new Drink(18, 170, 46, 54, "no", "green");
    OrangeJuice = new Drink(19, 153, 29, 0, "no", "orange");
    Pepsi = new Drink(20, 150, 41, 39, "no", "blue");
    Powerade = new Drink(21, 109, 21, "no", "blue");
    RedBull = new Drink(22, 146, 35, 0, "no", "blue");
    RootbeerBarqs = new Drink(23, 169, 45, 22, "no", "silver");
    RootbeerMug = new Drink(24, 153, 41, 0, "no", "brown");
    Sprite = new Drink(25, 133, 36, 0, "no", "lime");
    TeaBlack = new Drink(26, 3.5, 0, 68, "no", "black");
    TeaGreen = new Drink(27, 3.5, 0, 40, "no", "green");
    TeaIcedSweetened = new Drink(28, 4, 0, 15, "no", "caramel");
    TeaIcedUnsweetened = new Drink(29, 7, 17, 15, "no", "caramel");
    Water = new Drink(30, 0, 0, 0, "no", "blue");
    Sevenup = new Drink(31, 138, 35, 0, "no", "lime");
    theList = [this.selectFiller, this.AppleJuice, this.Coffee, this.Coke, this.Crush, this.DietCoke, this.DietPepsi, this.DrPepper, this.Fanta, this.Gatorade, this.GingerAle, this.LemonadeMinuteMaid, this.LemonadeCharged, this.MilkChocolate, this.MilkSkim, this.MilkWhole, this.Milk2, this.Monster, this.MountainDew, this.OrangeJuice, this.Pepsi, this.Powerade, this.RedBull, this.RootbeerBarqs, this.RootbeerMug, this.Sprite, this.TeaBlack, this.TeaGreen, this.TeaIcedSweetened, this.TeaIcedUnsweetened, this.Water, this.Sevenup];
    
    leftCals = 0;
    rightCals = 0;
    display1(value){
        this.value = value;
        this.theList[value].displayx();
        this.leftCals = this.theList[value].getCals;
        this.updateMiddle();
    }
    display2(value){
        this.value = value;
        this.theList[value].displayy();
        this.rightCals = this.theList[value].getCals;
        this.updateMiddle();
    }
    updateMiddle()
    {
        calTotal = this.leftCals + this.rightCals;
        //calPercentLeft = this.leftCals / this.calTotal;
        //calPercentRight = this.rightCals / this.calTotal;
        //calPercentLeft = calPercentLeft * .88;
        //calPercentRight = calPercentRight * .88;
        alert("test");
        //document.getElementsByClassName("LCal").style.width = calPercentLeft + "em";
        //document.getElementsByClassName("RCal").style.width = calPercentRight + "em";

     }
}
