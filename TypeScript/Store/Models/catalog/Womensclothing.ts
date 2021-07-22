


abstract class WomensClothing extends FashionProduct{

  private scop:  number;

  public constructor(manufacturer : string, model : string, size : number, price : number, color : string , Scope : number) {
    super(manufacturer,model,size,price,color);
    this.scop =  Scope;

  
      
  }

  
  set scopeW(Scope: number) {
      
    if (Scope <= 40 && Scope >= 10) {
        
        this.scop=Scope
    }
}

get scopeW(): number{
    
    return this.scop
}
  
  


displayDerails() {
  super.displayDerails()

  document.write(` /n Scopes${this.scopeW} }`)

}
  
}
  


enum lengthWo {

  short,
  long
}


class Skirt extends WomensClothing{


  public skirtLength: lengthWo ;


  public constructor(manufacturer : string, model : string, size : number, price : number, color : string , Scope : number,skirtLength:lengthWo) {
    super(manufacturer,model,size,price,color,Scope);
    this.skirtLength=skirtLength
  }

  displayDerails() {

    super.displayDerails()

    document.write(` /n Skirt length ${this.skirtLength}}`)
  
  }

  public displayImage() {
    document.write('<img src= "../../..FinalProject/Store Items/07.jpg" >')

}
}

class dress extends WomensClothing{

  private dressLength: number;
  public bareBack: boolean;

  public constructor(manufacturer: string, model: string, size: number, price: number, color: string, Scope: number, dressLength: number, bareBack: boolean) {
    super(manufacturer, model, size, price, color, Scope);
    
    this.dressLength = dressLength
    this.bareBack=bareBack


  }

  set dressL(DressLength: number) {
      
    if (DressLength <= 30 && DressLength >= 10) {
        
        this.dressLength=DressLength
    }

   
}

get dressL(): number{
    
    return this.dressLength
}

displayDerails() {
  super.displayDerails()

  document.write(`/n Dress length ${this.dressL} /n Bare back ${this.bareBack}`)

}
  
public displayImage() {
  document.write('<img src= "../../..FinalProject/Store Items/08.jpg">')

}



}


enum EveningD{

  Suede,
  cotton,
  linen,
  wool


}


class EveningDress extends WomensClothing{

  private dressLength: number;
  public bareBack: boolean;
  public fabricType: EveningD;


  public constructor(manufacturer: string, model: string, size: number, price: number, color: string, Scope: number, DressLength: number, BareBack: boolean,FabricType:EveningD) {
    super(manufacturer, model, size, price, color, Scope);
    
    this.dressLength = DressLength
    this.bareBack=BareBack
    this.fabricType=FabricType

  }

  set dressL(DressLength: number) {
      
    if (DressLength <= 30 && DressLength >= 10) {
        
        this.dressLength=DressLength
    }
}

get dressL(): number{
    
    return this.dressLength
}


displayDerails() {
  super.displayDerails()

  document.write(`/n Dress length ${this.dressL} /n Bare back ${this.bareBack} /n Fabric type${this.fabricType}`)

}

public displayImage() {
  document.write('<img src= "../../..FinalProject/Store Items/09.jpg" >')

}

}