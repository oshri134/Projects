abstract class Glasses{

  public manuFacturer : string;
  public model: string;
  private price: number;
  public FrameColor: string;

  public constructor(manufacturer: string, model: string, price: number, frameColor: string) {
    this.manuFacturer = manufacturer;
    this.model = model;
    this.price = price;
    this.FrameColor = frameColor;
  
  }

set priceG(price: number) {
      
  if (price <= 500 && price >= 300) {
      
      this.price=price
  }
}

get priceG(): number{
  
  return this.price
}
  
displayDerails() {
    
  document.write(`Manufacturer ${this.manuFacturer} /n Model ${this.model} /n  Price ${this.priceG} /n  Frame Color ${this.FrameColor} `)

}
  
public displayImage() {
  document.write('<img src= "../../..FinalProject/Store Items/19.jpg" >')

}
    
}


class  ReadingGlasses extends Glasses{

  private readingDistance: number;

  public constructor(manufacturer: string, model: string, price: number, FrameColor: string,readingDistance: number) {
    
    super(manufacturer,model,price,FrameColor)
    this.readingDistance = readingDistance;
  
  }
  set readingD(readingDistance: number) {
      
    if (readingDistance <= 50 && readingDistance >= 10) {
        
        this.readingDistance=readingDistance
    }
  }
  
  get readingD(): number{
    
    return this.readingDistance
  }

  displayDerails() {
    
    document.write(`Manufacturer ${this.manuFacturer} /n Model ${this.model} /n  Price ${this.priceG} /n  Frame Color ${this.FrameColor} /n Reading distance ${this.readingD} `)
  
  }
}

class Sunglasses extends Glasses {


  public glassColor: string;
  
  public constructor(manufacturer: string, model: string, price: number, FrameColor: string, glassColor: string) {
    
    super(manufacturer, model, price, FrameColor)
    
    this.glassColor = glassColor


  }

  displayDerails() {
    
    document.write(`Manufacturer ${this.manuFacturer} /n Model ${this.model} /n  Price ${this.priceG} /n  Frame Color ${this.FrameColor}  /n Glass color ${this.glassColor}`)
  
  }
  public displayImage() {
    document.write('<img src= "../../..FinalProject/Store Items/20.jpg" >')
  
  }
}