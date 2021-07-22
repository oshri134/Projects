

abstract class Shoes extends FashionProduct {

  public countryOfManufacture: string;
  

  public constructor(manufacturer : string, model : string, size : number, price : number, color : string , CountryOfManufacture : string) {
      super(manufacturer,model,size,price,color);
      this.countryOfManufacture = CountryOfManufacture;
  }

       
  displayDerails():void {
        
    super.displayDerails()

    document.write(`/n Country Of Manufacture ${this.countryOfManufacture}`)

}

}

enum material{

  Leather14,
  fabric1,
  suede
}


class ElegantShoes extends Shoes{


   
  public laces: boolean;
  public materialType: material;



  public constructor(manufacturer : string, model : string, size : number, price : number, color : string , countryOfManufacture : string,laces:boolean,materialType:material) {
    super(manufacturer, model, size, price, color, countryOfManufacture);
    
    this.laces = laces
    this.materialType = materialType
    
  }

  displayDerails():void {
        
    super.displayDerails()

    document.write(`/n Laces ${this.laces} /n Material type ${this.materialType}`)

  }
  
public displayImage() {
  document.write('<img src= "../../..FinalProject/Store Items/10.jpg" >')

}
}



class SportShoes extends Shoes{

  public laces: boolean;
  public manufacturingDate: Date;


  public constructor(manufacturer : string, model : string, size : number, price : number, color : string , countryOfManufacture : string,laces:boolean,manufacturing:Date) {
      super(manufacturer,model,size,price,color,countryOfManufacture);
    this.laces = laces
    this.manufacturingDate=manufacturing
  }
  displayDerails():void {
        
    super.displayDerails()

    document.write(`/n Laces ${this.laces} /n Manufacturing date ${this.manufacturingDate}`)

}

public displayImage() {
  document.write('<img src= "../../..FinalProject/Store Items/11.jpg" >')

}
}


class ComfortShoes extends Shoes{

  public laces: boolean;
  public footHold: boolean;

  public constructor(manufacturer : string, model : string, size : number, price : number, color : string , countryOfManufacture : string,laces:boolean,footHold:boolean) {
      super(manufacturer,model,size,price,color,countryOfManufacture);
    this.laces = laces
    this.footHold = footHold
    

    
  }

  displayDerails():void {
        
    super.displayDerails()

    document.write(`/n Laces ${this.laces} /n foothold ${this.footHold}`)

  }
  
  public displayImage() {
    document.write('<img src= "../../..FinalProject/Store Items/12.jpg">')
  
  }

}

enum HeelType{

  LowHeel, MediumHeel,HighHeel
}

class highHeels extends Shoes {

  public heel: HeelType;

  public constructor(manufacturer: string, model: string, size: number, price: number, color: string, CountryOfManufacture: string, Heel: HeelType) {
    super(manufacturer, model, size, price, color, CountryOfManufacture);
    this.heel = Heel




  }

  displayDerails():void {
        
    super.displayDerails()

    document.write(`/n Heel ${this.heel}`)

  }
  
  public displayImage() {
    document.write('<img src= "../../..FinalProject/Store Items/13.jpg" >')
  
  }
}