

abstract class Trousers extends FashionProduct {
    private trouserLength : number;

    public constructor(manufacturer : string, model : string, size : number, price : number, color : string , trouserLength : number) {
        super(manufacturer,model,size,price,color);
        this.trouserLength = trouserLength;
    }

    set ltength(trouserLength: number) {
      
        if (trouserLength <= 70 && trouserLength >= 30) {
            
            this.trouserLength=trouserLength
        }
    }
    
    get ltength(): number{
        
        return this.trouserLength
    }


    displayDerails() {
        super.displayDerails()

        document.write(`/n Trouser length ${this.ltength} `)
    
      }

}


class JeansPants extends Trousers {
    public isTeared : boolean;

    public constructor(manufacturer : string, model : string, size : number, price : number, color : string , trouserLength : number, isTeared : boolean) {
        super(manufacturer,model,size,price,color,trouserLength);
        this.isTeared = isTeared;
    }

    displayDerails() {
        super.displayDerails()
        document.write(` /n Teared ${this.isTeared}`)
    
    }
    
    public displayImage() {
        document.write('<img src= "../../..FinalProject/Store Items/04.jpg" >')
    
    }
}

class FabricPants extends Trousers {

  private  pocketNumber : number;

    public constructor(manufacturer : string, model : string, size : number, price : number, color : string , trouserLength : number, pocketNumber : number) {
        super(manufacturer,model,size,price,color,trouserLength);
        this.pocketNumber = pocketNumber;
    }

    set pocketN(pocketNumber: number) {
      
        if (pocketNumber <= 5 && pocketNumber >= 1) {
            
            this.pocketNumber=pocketNumber
        }
    }
    
    get pocketN(): number{
        
        return this.pocketNumber
    }


    displayDerails() {
        super.displayDerails()

        document.write(` Pocket number ${this.pocketN} `)
    
    }
    
    public displayImage() {
        document.write('<img src= "../../..FinalProject/Store Items/05.jpg" >')
    
    }
}



class ShortPants extends Trousers {

    public fabricType : string;

    public constructor(manufacturer : string, model : string, size : number, price : number, color : string , trouserLength : number, fabricType : string) {
        super(manufacturer,model,size,price,color,trouserLength);
        this.fabricType = fabricType;
    }

    displayDerails() {
        super.displayDerails()

        document.write(` /n   Fabric type ${this.fabricType}`)
    
    }
    
    public displayImage() {
        document.write('<img src= "../../..FinalProject/Store Items/06.jpg" >')
    
    }
}
