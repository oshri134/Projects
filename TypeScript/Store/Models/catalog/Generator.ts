class Generator{
  
  private static manufacturer(): string{
    
    let manufacturer: string[] = ["Castro", "Zara", "Pull&Beer", "D&G", "Bershka"];
    return (manufacturer[Math.floor(Math.random()*manufacturer.length)])

  }
  private static model(): string {
    let model: string[] = ["Moses","Jonathan","Daniel","Joseph","Simon"];
    return (model[Math.floor(Math.random() * model.length)]);
}

private static price(): number{
    
    let num: number;
    num = Math.floor(Math.random() * 49) + 1;

    return num

  }
  private static size(): number{
    
    let num: number;
    num = Math.floor(Math.random() * 19) + 1;

    return num

  }

  
  private static color(): string {
    let color: string[] = ["Blue","Red","Yellow","Green","Black"];
    return (color[Math.floor(Math.random() * color.length)]);
  }
  

  private static sleeve(): number{
    
    let sleeve: number;
    sleeve = Math.floor(Math.random() * 49) + 1;

    return sleeve


  }

  private static text(): string{
    
let text
//
  }

  private static numberOfButtons(): number{
    
    let numberB: number;
    numberB = Math.floor(Math.random() * 8) + 1;

    return numberB;


  }

  private static WomenShirt(): string{
    
    let WomenShirt: string[] = ["Suede", "cotton", "linen", "wool"]
    
   return (WomenShirt[Math.floor(Math.random() * WomenShirt.length)]);


  }
  

  private static ltength(): number{
    

    let trouserLength: number;
    trouserLength = Math.floor(Math.random() * 69) + 1;

    return trouserLength;
  }

  
  
  private static trueOrFalse(): boolean{
    
    let treared: number;
    treared = Math.floor(Math.random() * 1) + 0;

    if (treared = 1) {
      return true;
  }
  else {
      return false;
  }


  }
  private static poketNumber(): number{
    

    let num: number;
    num = Math.floor(Math.random() * 4) + 1;

    return num;
  }

  private static fabricType(): string{
    
    let type: string[] = ["Suede", "cotton", "linen", "wool"]
    
   return (type[Math.floor(Math.random() * type.length)]);


  }
  
  private static scopeW(): number{


     let num: number;
    num = Math.floor(Math.random() * 39) + 1;

    return num;

  }

  private static skirtLength(): lengthWo{
    
    let material: number[] = [0, 1];
    return (material[Math.floor(Math.random() * material.length)]);


  }
  
  private static dressL(): number{
    
    let num: number;
    num = Math.floor(Math.random() * 29) + 1;

    return num;
  }
  
  private static countryOfManufacture(): string{
    
    
    let country: string[] = ["Israel", "USA", "Germany", "Spine"]
    
   return (country[Math.floor(Math.random() * country.length)]);



  }

  private static materialType(): material{
    
    let type: material[] = [0, 1, 2];

    return (type[Math.floor(Math.random() * type.length)]);

  }

  //private static CreateDate(): Date
  
 


  private static  heelType(): material{
    
    let type: material[] = [0, 1, 2];

    return (type[Math.floor(Math.random() * type.length)]);

  }

  private static fabricTh(): number{
    
    let num: number;
    num = Math.floor(Math.random() * 19) + 1;

    return num;


  }

  private static numberPockets(): number{
    
    let num: number;
    num = Math.floor(Math.random() * 4) + 1;

    return num;


  } 
  
  private static diameter(): number{


    let num: number;
    num = Math.floor(Math.random() * 8) + 1;

    return num;


  }

  private static buckleMaterial(): material{
  
    let material:material[]= [0, 1, 2, 3];

    return (material[Math.floor(Math.random() * material.length)]);

  }

  //private static buckleSize(): dimensions{
  



  private static readingD(): number{
   
    let num: number;
    num = Math.floor(Math.random() * 49) + 1;

    return num;

 }



  






  private random = Math.round(Math.random() * 100);

  public getRandomItem() {

    var itemType=this.productList[this.random]
    

  }



}