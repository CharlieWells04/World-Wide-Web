class Shelf{
    constructor(){
    }
    selectFiller = new Drink(0, 0, 0, 0, false, "none", "no Image");
    Coffee = new Drink(3, 2, 3, 4, false, "red");
    Mountain_Dew = new Drink(4, 2, 3, 4, false, "red");
    theList = [this.selectFiller, this.Coke, this.Sprite, this.Coffee, this.Mountain_Dew];
    display1(value){
        this.value = value;
        this.theList[value].displayx();
    }
}