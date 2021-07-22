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
var WomensClothing = /** @class */ (function (_super) {
    __extends(WomensClothing, _super);
    function WomensClothing(manufacturer, model, size, price, color, Scope) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.scop = Scope;
        return _this;
    }
    Object.defineProperty(WomensClothing.prototype, "scopeW", {
        get: function () {
            return this.scop;
        },
        set: function (Scope) {
            if (Scope <= 40 && Scope >= 10) {
                this.scop = Scope;
            }
        },
        enumerable: false,
        configurable: true
    });
    WomensClothing.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write(" /n Scopes" + this.scopeW + " }");
    };
    return WomensClothing;
}(FashionProduct));
var lengthWo;
(function (lengthWo) {
    lengthWo[lengthWo["short"] = 0] = "short";
    lengthWo[lengthWo["long"] = 1] = "long";
})(lengthWo || (lengthWo = {}));
var Skirt = /** @class */ (function (_super) {
    __extends(Skirt, _super);
    function Skirt(manufacturer, model, size, price, color, Scope, skirtLength) {
        var _this = _super.call(this, manufacturer, model, size, price, color, Scope) || this;
        _this.skirtLength = skirtLength;
        return _this;
    }
    Skirt.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write(" /n Skirt length " + this.skirtLength + "}");
    };
    Skirt.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/07.jpg" >');
    };
    return Skirt;
}(WomensClothing));
var dress = /** @class */ (function (_super) {
    __extends(dress, _super);
    function dress(manufacturer, model, size, price, color, Scope, dressLength, bareBack) {
        var _this = _super.call(this, manufacturer, model, size, price, color, Scope) || this;
        _this.dressLength = dressLength;
        _this.bareBack = bareBack;
        return _this;
    }
    Object.defineProperty(dress.prototype, "dressL", {
        get: function () {
            return this.dressLength;
        },
        set: function (DressLength) {
            if (DressLength <= 30 && DressLength >= 10) {
                this.dressLength = DressLength;
            }
        },
        enumerable: false,
        configurable: true
    });
    dress.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Dress length " + this.dressL + " /n Bare back " + this.bareBack);
    };
    dress.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/08.jpg">');
    };
    return dress;
}(WomensClothing));
var EveningD;
(function (EveningD) {
    EveningD[EveningD["Suede"] = 0] = "Suede";
    EveningD[EveningD["cotton"] = 1] = "cotton";
    EveningD[EveningD["linen"] = 2] = "linen";
    EveningD[EveningD["wool"] = 3] = "wool";
})(EveningD || (EveningD = {}));
var EveningDress = /** @class */ (function (_super) {
    __extends(EveningDress, _super);
    function EveningDress(manufacturer, model, size, price, color, Scope, DressLength, BareBack, FabricType) {
        var _this = _super.call(this, manufacturer, model, size, price, color, Scope) || this;
        _this.dressLength = DressLength;
        _this.bareBack = BareBack;
        _this.fabricType = FabricType;
        return _this;
    }
    Object.defineProperty(EveningDress.prototype, "dressL", {
        get: function () {
            return this.dressLength;
        },
        set: function (DressLength) {
            if (DressLength <= 30 && DressLength >= 10) {
                this.dressLength = DressLength;
            }
        },
        enumerable: false,
        configurable: true
    });
    EveningDress.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Dress length " + this.dressL + " /n Bare back " + this.bareBack + " /n Fabric type" + this.fabricType);
    };
    EveningDress.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/09.jpg" >');
    };
    return EveningDress;
}(WomensClothing));
