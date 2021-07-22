var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Glasses = /** @class */ (function () {
    function Glasses(manufacturer, model, price, frameColor) {
        this.manuFacturer = manufacturer;
        this.model = model;
        this.price = price;
        this.FrameColor = frameColor;
    }
    Object.defineProperty(Glasses.prototype, "priceG", {
        get: function () {
            return this.price;
        },
        set: function (price) {
            if (price <= 500 && price >= 300) {
                this.price = price;
            }
        },
        enumerable: false,
        configurable: true
    });
    Glasses.prototype.displayDerails = function () {
        document.write("Manufacturer " + this.manuFacturer + " /n Model " + this.model + " /n  Price " + this.priceG + " /n  Frame Color " + this.FrameColor + " ");
    };
    Glasses.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/19.jpg" >');
    };
    return Glasses;
}());
var ReadingGlasses = /** @class */ (function (_super) {
    __extends(ReadingGlasses, _super);
    function ReadingGlasses(manufacturer, model, price, FrameColor, readingDistance) {
        var _this = _super.call(this, manufacturer, model, price, FrameColor) || this;
        _this.readingDistance = readingDistance;
        return _this;
    }
    Object.defineProperty(ReadingGlasses.prototype, "readingD", {
        get: function () {
            return this.readingDistance;
        },
        set: function (readingDistance) {
            if (readingDistance <= 50 && readingDistance >= 10) {
                this.readingDistance = readingDistance;
            }
        },
        enumerable: false,
        configurable: true
    });
    ReadingGlasses.prototype.displayDerails = function () {
        document.write("Manufacturer " + this.manuFacturer + " /n Model " + this.model + " /n  Price " + this.priceG + " /n  Frame Color " + this.FrameColor + " /n Reading distance " + this.readingD + " ");
    };
    return ReadingGlasses;
}(Glasses));
var Sunglasses = /** @class */ (function (_super) {
    __extends(Sunglasses, _super);
    function Sunglasses(manufacturer, model, price, FrameColor, glassColor) {
        var _this = _super.call(this, manufacturer, model, price, FrameColor) || this;
        _this.glassColor = glassColor;
        return _this;
    }
    Sunglasses.prototype.displayDerails = function () {
        document.write("Manufacturer " + this.manuFacturer + " /n Model " + this.model + " /n  Price " + this.priceG + " /n  Frame Color " + this.FrameColor + "  /n Glass color " + this.glassColor);
    };
    Sunglasses.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/20.jpg" >');
    };
    return Sunglasses;
}(Glasses));
