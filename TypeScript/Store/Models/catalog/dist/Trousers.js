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
var Trousers = /** @class */ (function (_super) {
    __extends(Trousers, _super);
    function Trousers(manufacturer, model, size, price, color, trouserLength) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.trouserLength = trouserLength;
        return _this;
    }
    Object.defineProperty(Trousers.prototype, "ltength", {
        get: function () {
            return this.trouserLength;
        },
        set: function (trouserLength) {
            if (trouserLength <= 70 && trouserLength >= 30) {
                this.trouserLength = trouserLength;
            }
        },
        enumerable: false,
        configurable: true
    });
    Trousers.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Trouser length " + this.ltength + " ");
    };
    return Trousers;
}(FashionProduct));
var JeansPants = /** @class */ (function (_super) {
    __extends(JeansPants, _super);
    function JeansPants(manufacturer, model, size, price, color, trouserLength, isTeared) {
        var _this = _super.call(this, manufacturer, model, size, price, color, trouserLength) || this;
        _this.isTeared = isTeared;
        return _this;
    }
    JeansPants.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write(" /n Teared " + this.isTeared);
    };
    JeansPants.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/04.jpg" >');
    };
    return JeansPants;
}(Trousers));
var FabricPants = /** @class */ (function (_super) {
    __extends(FabricPants, _super);
    function FabricPants(manufacturer, model, size, price, color, trouserLength, pocketNumber) {
        var _this = _super.call(this, manufacturer, model, size, price, color, trouserLength) || this;
        _this.pocketNumber = pocketNumber;
        return _this;
    }
    Object.defineProperty(FabricPants.prototype, "pocketN", {
        get: function () {
            return this.pocketNumber;
        },
        set: function (pocketNumber) {
            if (pocketNumber <= 5 && pocketNumber >= 1) {
                this.pocketNumber = pocketNumber;
            }
        },
        enumerable: false,
        configurable: true
    });
    FabricPants.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write(" Pocket number " + this.pocketN + " ");
    };
    FabricPants.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/05.jpg" >');
    };
    return FabricPants;
}(Trousers));
var ShortPants = /** @class */ (function (_super) {
    __extends(ShortPants, _super);
    function ShortPants(manufacturer, model, size, price, color, trouserLength, fabricType) {
        var _this = _super.call(this, manufacturer, model, size, price, color, trouserLength) || this;
        _this.fabricType = fabricType;
        return _this;
    }
    ShortPants.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write(" /n   Fabric type " + this.fabricType);
    };
    ShortPants.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/06.jpg" >');
    };
    return ShortPants;
}(Trousers));
