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
var WinterClothes = /** @class */ (function (_super) {
    __extends(WinterClothes, _super);
    function WinterClothes(manufacturer, model, size, price, color, fabricThickness) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.fabricThickness = fabricThickness;
        return _this;
    }
    Object.defineProperty(WinterClothes.prototype, "fabricTh", {
        get: function () {
            return this.fabricThickness;
        },
        set: function (fabricThickness) {
            if (fabricThickness <= 20 && fabricThickness >= 5) {
                this.fabricThickness = fabricThickness;
            }
        },
        enumerable: false,
        configurable: true
    });
    WinterClothes.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Fabric thickness" + this.fabricTh);
    };
    return WinterClothes;
}(FashionProduct));
var Jacket = /** @class */ (function (_super) {
    __extends(Jacket, _super);
    function Jacket(manufacturer, model, size, price, color, FabricThickness, numberPockets) {
        var _this = _super.call(this, manufacturer, model, size, price, color, FabricThickness) || this;
        _this.numberPockets = numberPockets;
        return _this;
    }
    Object.defineProperty(Jacket.prototype, "pocketN", {
        get: function () {
            return this.numberPockets;
        },
        set: function (numberPockets) {
            if (numberPockets <= 5 && numberPockets >= 1) {
                this.numberPockets = numberPockets;
            }
        },
        enumerable: false,
        configurable: true
    });
    Jacket.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n numberPockets " + this.pocketN);
    };
    Jacket.prototype.displayImage = function () {
        document.write('<img src="../../..FinalProject/Store Items/14.jpg">');
    };
    return Jacket;
}(WinterClothes));
var Coat = /** @class */ (function (_super) {
    __extends(Coat, _super);
    function Coat(manufacturer, model, size, price, color, fabricThickness, rainCoat) {
        var _this = _super.call(this, manufacturer, model, size, price, color, fabricThickness) || this;
        _this.rainCoat = rainCoat;
        return _this;
    }
    Coat.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Raincoat  " + this.rainCoat);
    };
    Coat.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/15.jpg" >');
    };
    return Coat;
}(WinterClothes));
