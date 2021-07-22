var dimensions = /** @class */ (function () {
    function dimensions(length, width, height) {
        this.height = height;
        this.length = length;
        this.width = width;
    }
    return dimensions;
}());
var materialMa;
(function (materialMa) {
    materialMa[materialMa["Metal"] = 0] = "Metal";
    materialMa[materialMa["leather"] = 1] = "leather";
    materialMa[materialMa["fabric"] = 2] = "fabric";
    materialMa[materialMa["plastic"] = 3] = "plastic";
})(materialMa || (materialMa = {}));
var Belt = /** @class */ (function () {
    function Belt(manufacturer, model, size, price, Beltcolor, BuckleColor, buckleMaterial, beltSize) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.sizeBelt = size;
        this.priceBelt = price;
        this.beltColor = Beltcolor;
        this.buckleColor = BuckleColor;
        this.buckleMaterial = buckleMaterial;
        this.BeltSize = beltSize;
    }
    Object.defineProperty(Belt.prototype, "sizeB", {
        get: function () {
            return this.sizeBelt;
        },
        set: function (size) {
            if (size <= 9 && size >= 1) {
                this.sizeBelt = size;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Belt.prototype, "priceB", {
        get: function () {
            return this.priceBelt;
        },
        set: function (price) {
            if (price <= 500 && price >= 300) {
                this.priceBelt = price;
            }
        },
        enumerable: false,
        configurable: true
    });
    Belt.prototype.displayDerails = function () {
        document.write("Manufacturer " + this.manufacturer + " /n Model " + this.model + " /n  Size " + this.sizeB + " /n Price " + this.priceB + " /n Belt color " + this.beltColor + " /n Buckle color " + this.buckleColor + " \n  /n Buckle material " + this.buckleMaterial + "  /n  Belt size " + this.BeltSize);
    };
    Belt.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/18.jpg" >');
    };
    return Belt;
}());
