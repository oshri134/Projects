
abstract class Hat extends FashionProduct {

  private diameter: number;
  

  public constructor(manufacturer : string, model : string, size : number, price : number, color : string , diameter : number) {
      super(manufacturer,model,size,price,color);
      this.diameter = diameter;
  }

  
  set diameterHat(diameter: number) {
      
    if (diameter <= 9 && diameter >= 1) {
        
        this.diameter=diameter
    }
}

get number(): number{
    
    return this.diameter
}
      
displayDerails() {
  super.displayDerails()

  document.write(`/n Hat diameter ${this.diameterHat}`)

}
  
public displayImage() {
  document.write('<img src= "../../..FinalProject/Store Items/16.jpg" >')

}
  
}

class Cap extends Hat{

  public PrintAdvertisement: boolean;

  public constructor(manufacturer : string, model : string, size : number, price : number, color : string , diameter : number,PrintAdvertisement:boolean) {
    super(manufacturer,model,size,price,color,diameter);
    this.PrintAdvertisement = PrintAdvertisement;
}

displayDerails() {
  super.displayDerails()

  document.write(`/n Print advertisement ${this.PrintAdvertisement}`)

}
public displayImage() {
  document.write('<img src= "../../..FinalProject/Store Items/17.jpg" >')

}

}

class BlackHat extends Hat {

  private height: number;
   
  public constructor(manufacturer: string, model: string, size: number, price: number, color: string, diameter: number, height: number) {
    super(manufacturer, model, size, price, color, diameter);
    this.height = height;

  }


  set heightHat(height: number) {
      
    if (height <= 12 && height >= 1) {
        
        this.height=height
    }
}

get heightHat(): number{
    
    return this.height
}
  
displayDerails() {
  super.displayDerails()

  document.write(`/n Hat height ${this.heightHat}`)

}
  
public displayImage() {
  document.write('<img src= "../../..FinalProject/Store Items/18.jpg" >')

}
}


