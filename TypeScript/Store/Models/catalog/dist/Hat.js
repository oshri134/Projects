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
var Hat = /** @class */ (function (_super) {
    __extends(Hat, _super);
    function Hat(manufacturer, model, size, price, color, diameter) {
        var _this = _super.call(this, manufacturer, model, size, price, color) || this;
        _this.diameter = diameter;
        return _this;
    }
    Object.defineProperty(Hat.prototype, "diameterHat", {
        set: function (diameter) {
            if (diameter <= 9 && diameter >= 1) {
                this.diameter = diameter;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hat.prototype, "number", {
        get: function () {
            return this.diameter;
        },
        enumerable: false,
        configurable: true
    });
    Hat.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Hat diameter " + this.diameterHat);
    };
    Hat.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/16.jpg" >');
    };
    return Hat;
}(FashionProduct));
var Cap = /** @class */ (function (_super) {
    __extends(Cap, _super);
    function Cap(manufacturer, model, size, price, color, diameter, PrintAdvertisement) {
        var _this = _super.call(this, manufacturer, model, size, price, color, diameter) || this;
        _this.PrintAdvertisement = PrintAdvertisement;
        return _this;
    }
    Cap.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Print advertisement " + this.PrintAdvertisement);
    };
    Cap.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/17.jpg" >');
    };
    return Cap;
}(Hat));
var BlackHat = /** @class */ (function (_super) {
    __extends(BlackHat, _super);
    function BlackHat(manufacturer, model, size, price, color, diameter, height) {
        var _this = _super.call(this, manufacturer, model, size, price, color, diameter) || this;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(BlackHat.prototype, "heightHat", {
        get: function () {
            return this.height;
        },
        set: function (height) {
            if (height <= 12 && height >= 1) {
                this.height = height;
            }
        },
        enumerable: false,
        configurable: true
    });
    BlackHat.prototype.displayDerails = function () {
        _super.prototype.displayDerails.call(this);
        document.write("/n Hat height " + this.heightHat);
    };
    BlackHat.prototype.displayImage = function () {
        document.write('<img src= "../../..FinalProject/Store Items/18.jpg" >');
    };
    return BlackHat;
}(Hat));
