var ABSOLUTE_TEMPERATURE_ZERO = -273.15;
var Vector = /** @class */ (function () {
    function Vector(inputX, inputY, inputZ) {
        this.x = inputX;
        this.y = inputY;
        this.z = inputZ;
    }
    Vector.prototype.getVector = function () {
        return [this.x, this.y, this.z];
    };
    Vector.prototype.getVectorModule = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    };
    Vector.prototype.getVectorConstMul = function () {
        var constMulResult = [];
        for (var i = 0; i < 3; i++) {
            var currentVector = this.getVector();
            constMulResult[i] = currentVector[i] * ABSOLUTE_TEMPERATURE_ZERO;
        }
        return constMulResult;
    };
    return Vector;
}());
var Operations = /** @class */ (function () {
    function Operations(inputA, inputB) {
        this.a = inputA;
        this.b = inputB;
    }
    Operations.prototype.getVectorsScalarProduct = function () {
        var mulResult = [];
        for (var i = 0; i < 3; i++) {
            mulResult[i] = this.a[i] * this.b[i];
        }
        var scalarResult = mulResult.reduce(function (a, b) {
            return a + b;
        });
        return scalarResult;
    };
    Operations.prototype.getVectorsAdd = function () {
        var addResult = [];
        for (var i = 0; i < 3; i++) {
            addResult[i] = this.a[i] + this.b[i];
        }
        return addResult;
    };
    Operations.prototype.getVectorsSub = function () {
        var subResult = [];
        for (var i = 0; i < 3; i++) {
            subResult[i] = this.a[i] - this.b[i];
        }
        return subResult;
    };
    Operations.prototype.checkCollinearity = function () {
        var resultArray = [];
        var result;
        for (var i = 0; i < 3; i++) {
            resultArray[i] = this.a[i] / this.b[i];
        }
        result = resultArray.every(function (item) {
            return item == resultArray[0];
        });
        return result;
    };
    Operations.prototype.checkOrthogonality = function () {
        var result;
        if (this.getVectorsScalarProduct() == 0) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };
    return Operations;
}());
var vector1 = new Vector(1, 2, 3);
var vector2 = new Vector(3, 2, 3);
console.log(vector1.getVectorConstMul());
var workField = new Operations(vector1.getVector(), vector2.getVector());
console.log(workField.checkOrthogonality());
console.log(vector1.z);
