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
    getCals()
    {
        return cal;
    }
    displayx()
    {
        if(this.num == 0){
            document.getElementsByClassName("c1")[0].innerHTML = "Select A Drink";
        }
        else{
            document.getElementsByClassName("c1")[0].innerHTML = "Calories: " + this.cal + "<br><br>Sugar: " + this.sugar + "g<br><br> Caffeine: " + this.caf + "mg<br><br>Artificial Sweetener: " + this.cas;
            
        }
    }
    displayy()
    {
        if(this.num == 0){
            document.getElementsByClassName("c2")[0].innerHTML = "Select A Drink";
        }
        else{
            document.getElementsByClassName("c2")[0].innerHTML = "Calories: " + this.cal + "<br><br>Sugar: " + this.sugar + "g<br><br>Caffeine: " + this.caf + "mg<br><br>Artificial Sweetener: " + this.cas;
            
        }
    }

}


