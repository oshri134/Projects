var FashionProduct = /** @class */ (function () {
    function FashionProduct(manufacturer, model, size, price, color) {
        this.VAT = 0.17;
        this.manufacturer = manufacturer;
        this.model = model;
        this.size = size;
        this.price = price;
        this.color = color;
    }
    Object.defineProperty(FashionProduct.prototype, "sizeF", {
        get: function () {
            return this.size;
        },
        set: function (size) {
            if (size <= 20 && size >= 1) {
                this.size = size;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FashionProduct.prototype, "priceF", {
        get: function () {
            return this.price;
        },
        set: function (price) {
            if (price <= 600 && price >= 50) {
                this.price = price;
            }
        },
        enumerable: false,
        configurable: true
    });
    FashionProduct.prototype.displayDerails = function () {
        document.write("Manufacturer " + this.manufacturer + " /n Model " + this.model + " /n  Size " + this.sizeF + " /n Price " + this.priceF + " /n Color " + this.color + " ");
    };
    FashionProduct.prototype.getPriceWithoutVat = function () {
        return this.price - this.VAT;
    };
    Object.defineProperty(FashionProduct.prototype, "brand", {
        get: function () {
            return "Producer" + this.manufacturer + "  ,model " + this.model;
        },
        enumerable: false,
        configurable: true
    });
    return FashionProduct;
}());
