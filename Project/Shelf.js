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
    LemonadeMinuteMaid = new Drink();
    LemonadeCharged = new Drink();
    MilkChocolate = new Drink();
    MilkSkim = new Drink();
    MilkWhole = new Drink();
    Milk2 = new Drink();
    Monster = new Drink();
    MountainDew = new Drink();
    OrangeJuice = new Drink();
    Pepsi = new Drink();
    Powerade = new Drink();
    RedBull = new Drink();
    RootbeerBarqs = new Drink();
    RootbeerMug = new Drink();
    Sprite = new Drink();
    TeaBlack = new Drink();
    TeaGreen = new Drink();
    TeaIcedSweetened = new Drink();
    TeaIcedUnsweetened = new Drink();
    Water = new Drink();
    Sevenup = new Drink();
    theList = [this.selectFiller];
    display1(value){
        this.value = value;
        this.theList[value].displayx();
    }
    display2(value){
        this.value = value;
        this.theList[value].displayy();
    }
}
