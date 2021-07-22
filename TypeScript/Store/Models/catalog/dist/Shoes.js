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
var Shoes = /** @class */ (function (_super) {
    __extends(Shoes, _super);
    function Shoes(manufacturer, model, size, price, color, CountryOfManufacture) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.countryOfManufacture = CountryOfManufacture;
        return _this;
    }
    Shoes.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Country Of Manufacture " + this.countryOfManufacture);
    };
    return Shoes;
}(FashionProduct));
var material;
(function (material) {
    material[material["Leather14"] = 0] = "Leather14";
    material[material["fabric1"] = 1] = "fabric1";
    material[material["suede"] = 2] = "suede";
})(material || (material = {}));
var ElegantShoes = /** @class */ (function (_super) {
    __extends(ElegantShoes, _super);
    function ElegantShoes(manufacturer, model, size, price, color, countryOfManufacture, laces, materialType) {
        var _this = _super.call(this, manufacturer, model, size, price, color, countryOfManufacture) || this;
        _this.laces = laces;
        _this.materialType = materialType;
        return _this;
    }
    ElegantShoes.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Laces " + this.laces + " /n Material type " + this.materialType);
    };
    ElegantShoes.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/10.jpg" >');
    };
    return ElegantShoes;
}(Shoes));
var SportShoes = /** @class */ (function (_super) {
    __extends(SportShoes, _super);
    function SportShoes(manufacturer, model, size, price, color, countryOfManufacture, laces, manufacturing) {
        var _this = _super.call(this, manufacturer, model, size, price, color, countryOfManufacture) || this;
        _this.laces = laces;
        _this.manufacturingDate = manufacturing;
        return _this;
    }
    SportShoes.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Laces " + this.laces + " /n Manufacturing date " + this.manufacturingDate);
    };
    SportShoes.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/11.jpg" >');
    };
    return SportShoes;
}(Shoes));
var ComfortShoes = /** @class */ (function (_super) {
    __extends(ComfortShoes, _super);
    function ComfortShoes(manufacturer, model, size, price, color, countryOfManufacture, laces, footHold) {
        var _this = _super.call(this, manufacturer, model, size, price, color, countryOfManufacture) || this;
        _this.laces = laces;
        _this.footHold = footHold;
        return _this;
    }
    ComfortShoes.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Laces " + this.laces + " /n foothold " + this.footHold);
    };
    ComfortShoes.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/12.jpg">');
    };
    return ComfortShoes;
}(Shoes));
var HeelType;
(function (HeelType) {
    HeelType[HeelType["LowHeel"] = 0] = "LowHeel";
    HeelType[HeelType["MediumHeel"] = 1] = "MediumHeel";
    HeelType[HeelType["HighHeel"] = 2] = "HighHeel";
})(HeelType || (HeelType = {}));
var highHeels = /** @class */ (function (_super) {
    __extends(highHeels, _super);
    function highHeels(manufacturer, model, size, price, color, CountryOfManufacture, Heel) {
        var _this = _super.call(this, manufacturer, model, size, price, color, CountryOfManufacture) || this;
        _this.heel = Heel;
        return _this;
    }
    highHeels.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Heel " + this.heel);
    };
    highHeels.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/13.jpg" >');
    };
    return highHeels;
}(Shoes));
