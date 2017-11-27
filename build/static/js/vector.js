//      Определить класс Вектор размерности n. Определить несколько конструкторов.
//      Реализовать методы для вычисления модуля вектора, скалярного произведения,
//      сложения, вычитания, умножения на константу.
//
//      Объявить массив объектов. Написать метод, который для заданной пары векторов будет
//      определять, являются ли они коллинеарными или ортогональными.
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
    return Vector;
}());
var VectorsOperations = /** @class */ (function () {
    function VectorsOperations(inputA, inputB) {
        this.a = inputA;
        this.b = inputB;
    }
    VectorsOperations.prototype.getVectorsScalarProduct = function () {
        return this.a;
    };
    VectorsOperations.prototype.getVectorsAdd = function () {
        var addResult;
        addResult = [];
        for (var i = 0; i < 3; i++) {
            addResult[i] = this.a[i] + this.b[i];
        }
        return addResult;
    };
    VectorsOperations.prototype.getVectorsSub = function () {
        var subResult;
        subResult = [];
        for (var i = 0; i < 3; i++) {
            subResult[i] = this.a[i] - this.b[i];
        }
        return subResult;
    };
    VectorsOperations.prototype.getVectorsMul = function () {
        return this.a;
    };
    return VectorsOperations;
}());
//let vector1: Vector = new Vector(1, 2, 3);
//console.log(vector1.getVector());
var workField = new VectorsOperations([333, 1, 2], [1, 3, 2]);
console.log(workField.getVectorsAdd());
