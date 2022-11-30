class Drink{
    constructor(num, cal, sugar, caf, cas, color)
    {
        this.num = num;
        this.cal = cal;
        this.sugar = sugar;
        this.caf = caf;
        this.cas = cas;
        this.color = color;
    }
    getNumber()
    {
        return num;
    }
    displayx()
    {
        if(this.num == 0){
            document.getElementsByClassName("c1")[0].innerHTML = "Select A Drink";
        }
        else{
            document.getElementsByClassName("c1")[0].innerHTML = "Calories: " + this.cal + "<br><br>Sugar: " + this.sugar + "g<br><br>Caffiene: " + this.caf + "mg<br><br>Artificial Sweetener: " + this.cas;
            theImage = new Image(100, 100);
            theImage.src = "Images/coca-cola-original-12oz.jpg";
            document.getElementsByClassName("c1")[0].appendChild(theImage);
        }
    }

}


