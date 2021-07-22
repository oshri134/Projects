var Generator = /** @class */ (function () {
    function Generator() {
        this.random = Math.round(Math.random() * 100);
    }
    Generator.manufacturer = function () {
        var manufacturer = ["Castro", "Zara", "Pull&Beer", "D&G", "Bershka"];
        return (manufacturer[Math.floor(Math.random() * manufacturer.length)]);
    };
    Generator.model = function () {
        var model = ["Moses", "Jonathan", "Daniel", "Joseph", "Simon"];
        return (model[Math.floor(Math.random() * model.length)]);
    };
    Generator.price = function () {
        var num;
        num = Math.floor(Math.random() * 49) + 1;
        return num;
    };
    Generator.size = function () {
        var num;
        num = Math.floor(Math.random() * 19) + 1;
        return num;
    };
    Generator.color = function () {
        var color = ["Blue", "Red", "Yellow", "Green", "Black"];
        return (color[Math.floor(Math.random() * color.length)]);
    };
    Generator.sleeve = function () {
        var sleeve;
        sleeve = Math.floor(Math.random() * 49) + 1;
        return sleeve;
    };
    Generator.text = function () {
        var text;
        //
    };
    Generator.numberOfButtons = function () {
        var numberB;
        numberB = Math.floor(Math.random() * 8) + 1;
        return numberB;
    };
    Generator.WomenShirt = function () {
        var WomenShirt = ["Suede", "cotton", "linen", "wool"];
        return (WomenShirt[Math.floor(Math.random() * WomenShirt.length)]);
    };
    Generator.ltength = function () {
        var trouserLength;
        trouserLength = Math.floor(Math.random() * 69) + 1;
        return trouserLength;
    };
    Generator.trueOrFalse = function () {
        var treared;
        treared = Math.floor(Math.random() * 1) + 0;
        if (treared = 1) {
            return true;
        }
        else {
            return false;
        }
    };
    Generator.poketNumber = function () {
        var num;
        num = Math.floor(Math.random() * 4) + 1;
        return num;
    };
    Generator.fabricType = function () {
        var type = ["Suede", "cotton", "linen", "wool"];
        return (type[Math.floor(Math.random() * type.length)]);
    };
    Generator.scopeW = function () {
        var num;
        num = Math.floor(Math.random() * 39) + 1;
        return num;
    };
    Generator.skirtLength = function () {
        var material = [0, 1];
        return (material[Math.floor(Math.random() * material.length)]);
    };
    Generator.dressL = function () {
        var num;
        num = Math.floor(Math.random() * 29) + 1;
        return num;
    };
    Generator.countryOfManufacture = function () {
        var country = ["Israel", "USA", "Germany", "Spine"];
        return (country[Math.floor(Math.random() * country.length)]);
    };
    Generator.materialType = function () {
        var type = [0, 1, 2];
        return (type[Math.floor(Math.random() * type.length)]);
    };
    //private static CreateDate(): Date
    Generator.heelType = function () {
        var type = [0, 1, 2];
        return (type[Math.floor(Math.random() * type.length)]);
    };
    Generator.fabricTh = function () {
        var num;
        num = Math.floor(Math.random() * 19) + 1;
        return num;
    };
    Generator.numberPockets = function () {
        var num;
        num = Math.floor(Math.random() * 4) + 1;
        return num;
    };
    Generator.diameter = function () {
        var num;
        num = Math.floor(Math.random() * 8) + 1;
        return num;
    };
    Generator.buckleMaterial = function () {
        var material = [0, 1, 2, 3];
        return (material[Math.floor(Math.random() * material.length)]);
    };
    //private static buckleSize(): dimensions{
    Generator.readingD = function () {
        var num;
        num = Math.floor(Math.random() * 49) + 1;
        return num;
    };
    Generator.prototype.getRandomItem = function () {
        var itemType = this.productList[this.random];
    };
    return Generator;
}());
