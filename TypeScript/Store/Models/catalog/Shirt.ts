

abstract class Shirt extends FashionProduct {
    private sleevesLength: number;
    

    public constructor(manufacturer : string, model : string, size : number, price : number, color : string , sleevesLength : number) {
        super(manufacturer,model,size,price,color);
        this.sleevesLength = sleevesLength;
}
        
    set sleeve(sleevesLength: number) {
      
        if (sleevesLength <= 50 && sleevesLength >= 10) {
            
            this.sleevesLength=sleevesLength
        }
    }
    
    get sleeve(): number{
        
        return this.sleevesLength
    }
     
    displayDerails():void {
        
        super.displayDerails()

        document.write(`/n Sleeves length ${this.sleeve}`)

}
    

     
        
  
}


class TShirt extends Shirt {
    private shirtText : string ;

    public constructor(manufacturer : string, model : string, size : number, price : number, color : string , sleevesLength : number, shirtText : string) {
        super(manufacturer,model,size,price,color,sleevesLength);
        this.shirtText = shirtText;
    }

    set text(shirtText: string) {
        
        if (shirtText !="") {
    
            shirtText==null

}
    }

    get text(): string{
        
     return this.shirtText

    }

    displayDerails() {
        super.displayDerails()
        document.write(`  /n Shirt text ${this.shirtText}`)

    }
    
    public displayImage() {
        document.write('<img src="../../../FinalProject/Store Items/01.jpg" >')
    
    }
    
}

class ButtonedShirt extends Shirt {
    private numberOfButtons : number;

    public constructor(manufacturer : string, model : string, size : number, price : number, color : string , sleevesLength : number, numberOfButtons : number) {
        super(manufacturer,model,size,price,color,sleevesLength);
        this.numberOfButtons = numberOfButtons;
    }

    set number(numberOfButtons: number) {
      
        if (numberOfButtons <= 9 && numberOfButtons >= 1) {
            
            this.numberOfButtons=numberOfButtons
        }
    }
    
    get number(): number{
        
        return this.numberOfButtons
    }
     
    displayDerails() {
        super.displayDerails()
        document.write(` Number of buttons ${this.number}`)

}

public displayImage() {
    document.write('<img src= "../../../FinalProject/Store Items/02.jpg" >')

}

    
}

enum Wshirt{

    Suede,
    cotton,
    linen,
    wool


}

   


class WomenShirt extends Shirt {


    public fabricType: Wshirt;
    

    public constructor(manufacturer: string, model: string, size: number, price: number, color: string, sleevesLength: number, fabricType: Wshirt) {
        super(manufacturer, model, size, price, color, sleevesLength);
        this.fabricType = fabricType;
    }
   
        
    displayDerails() {
        super.displayDerails()

        document.write(` /n Fabric type ${this.fabricType}`)

    }

    public displayImage() {
        document.write('<img src= "../../../FinalProject/Store Items/03.jpg" >')
    
    }
}
