//      Определить класс Вектор размерности n. Определить несколько конструкторов.
//      Реализовать методы для вычисления модуля вектора, скалярного произведения,
//      сложения, вычитания, умножения на константу.
//
//      Объявить массив объектов. Написать метод, который для заданной пары векторов будет
//      определять, являются ли они коллинеарными или ортогональными.

interface VectorPrototype {

    x: number;
    y: number;
    z: number;

    getVector(): number[];
    getVectorModule(): number;

}


interface Operations {

    a: number[];
    b: number[];

    getVectorsScalarProduct(): number[];
    getVectorsAdd(): number[];
    getVectorsSub(): number[];
    getVectorsMul(): number[];

}


class Vector implements VectorPrototype {

    x: number;
    y: number;
    z: number;

    constructor(inputX: string, inputY: string, inputZ: string);
    constructor(inputX: number, inputY: number, inputZ: number);
    constructor(inputX: any, inputY: any, inputZ: any) {

        this.x = inputX;
        this.y = inputY;
        this.z = inputZ;

    }

    getVector(): number[] {
        return [this.x, this.y,  this.z];
    }

    getVectorModule():number {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow(this.z,2))
    }

}


class VectorsOperations implements Operations {

    a: number[];
    b: number[];

    constructor(inputA: number[], inputB: number[]) {

        this.a = inputA;
        this.b = inputB;

    }

    getVectorsScalarProduct():number[] {
        return this.a
    }

    getVectorsAdd():number[] {
        return this.a
    }

    getVectorsSub():number[] {
        return this.a
    }

    getVectorsMul():number[] {
        return this.a
    }

}

let vector1: Vector = new Vector(1, 2, 3);
console.log(vector1.getVector());

let workField: VectorsOperations = new VectorsOperations( [1,1,2], [1,3,2] );
console.log( workField.getVectorsScalarProduct() );