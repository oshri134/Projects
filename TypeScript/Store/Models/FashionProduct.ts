abstract class FashionProduct {
    public manufacturer : string;
    public model : string;
    private size : number;
    private price : number;
    public color: string;
    public VAT = 0.17;

    public constructor (manufacturer : string, model : string, size : number, price : number, color : string ) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.size = size;
        this.price = price;
        this.color = color;
    }


    set sizeF(size: number) {
      
        if (size <= 20&& size >= 1) {
            
            this.size=size
        }
    }
    
    get sizeF(): number{
        
        return this.size
    }

    set priceF(price: number) {
      
        if (price <= 600&& price >= 50) {
            
            this.price=price
        }
    }
    
    get priceF(): number{
        
        return this.price
    }

     
    displayDerails() {
    
        document.write(`Manufacturer ${this.manufacturer} /n Model ${this.model} /n  Size ${this.sizeF} /n Price ${this.priceF} /n Color ${this.color} `)

}
     
    public getPriceWithoutVat(): number {

        return this.price - this.VAT
    }

    public get brand(){

        return "Producer" + this.manufacturer + "  ,model " + this.model
    }



}