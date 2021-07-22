

class dimensions{

  public length: number;
  public width: number;
  public height: number;

  public constructor(length: number, width: number, height: number) {
    
    this.height = height;
    this.length = length;
    this.width = width;



  }

}

enum materialMa{

  Metal,
  leather,
  fabric,
  plastic


}



class Belt{

  public manufacturer : string;
  public model : string;
  private sizeBelt : number;
  private priceBelt : number;
  public beltColor: string;
  public buckleColor: string;
  public buckleMaterial: materialMa;
  public BeltSize: dimensions;




  public constructor (manufacturer : string, model : string, size : number, price : number, Beltcolor : string,BuckleColor:string, buckleMaterial: materialMa ,beltSize: dimensions) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.sizeBelt = size;
      this.priceBelt = price;
      this.beltColor = Beltcolor;
      this.buckleColor = BuckleColor;
      this.buckleMaterial = buckleMaterial;
      this.BeltSize = beltSize;

  }
  set sizeB(size: number) {
      
    if (size <= 9 && size >= 1) {
        
        this.sizeBelt=size
    }
}

get sizeB(): number{
    
    return this.sizeBelt
}


set priceB(price: number) {
      
  if (price <= 500 && price >= 300) {
      
      this.priceBelt=price
  }
}

get priceB(): number{
  
  return this.priceBelt
}

displayDerails() {
    
  document.write(`Manufacturer ${this.manufacturer} /n Model ${this.model} /n  Size ${this.sizeB} /n Price ${this.priceB} /n Belt color ${this.beltColor} /n Buckle color ${this.buckleColor} 
  /n Buckle material ${this.buckleMaterial}  /n  Belt size ${this.BeltSize}`)

}
  
public displayImage() {
  document.write('<img src= "../../..FinalProject/Store Items/18.jpg" >')

}
}