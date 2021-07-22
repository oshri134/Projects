

abstract class WinterClothes extends FashionProduct{

  private fabricThickness: number;

  public constructor(manufacturer: string, model: string, size: number, price: number, color: string, fabricThickness: number) {
    super(manufacturer, model, size, price, color);
    this.fabricThickness = fabricThickness

  }

  set fabricTh(fabricThickness: number) {
      
    if (fabricThickness <= 20 && fabricThickness >= 5) {
        
        this.fabricThickness=fabricThickness
    }
}

get fabricTh(): number{
    
    return this.fabricThickness
}
  
displayDerails() {
  super.displayDerails()
  document.write(`/n Fabric thickness${this.fabricTh}`)

}
}


class Jacket extends WinterClothes{
  
  private numberPockets: number;

  public constructor(manufacturer: string, model: string, size: number, price: number, color: string, FabricThickness: number,numberPockets:number) {
    super(manufacturer, model, size, price, color,FabricThickness);
   
    this.numberPockets=numberPockets
  }

  set pocketN(numberPockets: number) {
      
    if (numberPockets <= 5 && numberPockets >= 1) {
        
        this.numberPockets=numberPockets
    }
}

get pocketN(): number{
    
    return this.numberPockets
}
  
  
displayDerails() {
 super.displayDerails()
    
  document.write(`/n numberPockets ${this.pocketN}`)

}
  
public displayImage() {
  document.write('<img src="../../..FinalProject/Store Items/14.jpg">')

}
  
}

class Coat extends WinterClothes{
  
  public rainCoat: boolean;

  public constructor(manufacturer: string, model: string, size: number, price: number, color: string, fabricThickness: number,rainCoat:boolean) {
    super(manufacturer, model, size, price, color,fabricThickness);
   
    this.rainCoat=rainCoat
  }

  displayDerails() {
    super.displayDerails()
     
    document.write(`/n Raincoat  ${this.rainCoat}`)
  
  }

  public displayImage() {
    document.write('<img src= "../../..FinalProject/Store Items/15.jpg" >')
  
  }
}
