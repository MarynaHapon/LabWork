//      Определить класс Вектор размерности n. Определить несколько конструкторов.
//      Реализовать методы для вычисления модуля вектора, скалярного произведения,
//      сложения, вычитания, умножения на константу.
//
//      Объявить массив объектов. Написать метод, который для заданной пары векторов будет
//      определять, являются ли они коллинеарными или ортогональными.
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
    return Operations;
}());
var vector1 = new Vector(1, 2, 3);
console.log(vector1.getVectorConstMul());
var workField = new Operations([3, 1, 2], [1, 3, 2]);
console.log(workField.getVectorsScalarProduct());
