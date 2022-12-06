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
    LemonadeCharged = new Drink(12, 162, 40, 155, "no", "pink");
    MilkChocolate = new Drink(13, 270, 17, 0, "no", "brown");
    MilkSkim = new Drink(14, 116, 17, 0, "no", "lightgray");
    MilkWhole = new Drink(15, 211, 16, 0, "no", "lightgray");
    Milk2 = new Drink(16, 173, 17, 0, "no", "lightgray");
    Monster = new Drink(17, 160, 37, 112, "no", "green");
    MountainDew = new Drink(18, 170, 46, 54, "no", "lime");
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
    calTotal;
    Lcolor;
    RColor;
    display1(value){
        this.value = value;
        this.theList[value].displayx();
        this.leftCals = this.theList[value].cal;
        this.Lcolor = this.theList[value].color;
        this.updateMiddle();
    }
    display2(value){
        this.value = value;
        this.theList[value].displayy();
        this.rightCals = this.theList[value].cal;
        this.Rcolor = this.theList[value].color;
        this.updateMiddle();
    }
    updateMiddle()
    {
        document.getElementsByClassName("LCal")[0].style.backgroundColor = this.Lcolor;
        document.getElementsByClassName("RCal")[0].style.backgroundColor = this.Rcolor;
        document.getElementsByClassName("t1")[0].style.backgroundColor = this.Lcolor;
        document.getElementsByClassName("t2")[0].style.backgroundColor = this.Rcolor;
        document.getElementsByClassName("c1")[0].style.borderColor = this.Lcolor;
        document.getElementsByClassName("c2")[0].style.borderColor = this.Rcolor;
        document.getElementsByClassName("t1")[0].style.borderColor = this.Lcolor;
        document.getElementsByClassName("t2")[0].style.borderColor = this.Rcolor;

        this.calTotal = this.leftCals + this.rightCals;
        this.calPercentLeft = this.leftCals / this.calTotal;
        this.calPercentRight = this.rightCals / this.calTotal;
        
        this.calPercentLeft = Math.floor(this.calPercentLeft * 100);
        if(this.calPercentLeft == 100){
            this.calPercentLeft = this.calPercentLeft -7;
        }
        if(this.calPercentRight == 100){
            this.calPercentRight= this.calPercentRight -7;
        }
        this.calPercentRight = Math.floor(this.calPercentRight * 100);

        document.getElementsByClassName("LCal")[0].style.width =  this.calPercentLeft +  "%";
        document.getElementsByClassName("RCal")[0].style.width = this.calPercentRight + "%";
        
        

    }
}
