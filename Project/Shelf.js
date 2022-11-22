class Shelf{
    constructor(){

    }
    Coke = new Drink(1, 200, 33, 0, false, "red");
    Sprite = new Drink(2, 200, 33, 0, false, "red");
    Coffee = new Drink(3, 200, 33, 0, false, "red");
    Mountain_Dew = new Drink(4, 200, 33, 0, false, "red");
    display(){
        document.getElementsByClassName("c1").innerHTML = "Hello";
        alert("Hello");
    }

}