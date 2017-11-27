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
    getVectorConstMul():number[];
}


interface VectorsOperations {

    a: number[];
    b: number[];

    getVectorsScalarProduct(): number;
    getVectorsAdd(): number[];
    getVectorsSub(): number[];

    checkCollinearity(): boolean;
    checkOrthogonality(): boolean;

}


const ABSOLUTE_TEMPERATURE_ZERO: number = -273.15;


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

    getVectorModule(): number {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow(this.z,2))
    }

    getVectorConstMul(): number[] {
        let constMulResult: number[] = [];

        for (let i = 0; i < 3; i++) {
            let currentVector: number[] = this.getVector();
            constMulResult[i] = currentVector[i] * ABSOLUTE_TEMPERATURE_ZERO;
        }

        return constMulResult
    }

}


class Operations implements VectorsOperations {

    a: number[];
    b: number[];

    constructor(inputA: number[], inputB: number[]) {

        this.a = inputA;
        this.b = inputB;

    }

    getVectorsScalarProduct():number {
        let mulResult: number[] = [];

        for(let i = 0; i < 3; i++) {
            mulResult[i] = this.a[i] * this.b[i]
        }

        let scalarResult: number = mulResult.reduce(function (a, b) {
            return a + b
        });

        return scalarResult
    }

    getVectorsAdd(): number[] {
        let addResult: number[] = [];

        for(let i = 0; i < 3; i++) {
            addResult[i] = this.a[i] + this.b[i]
        }

        return addResult
    }

    getVectorsSub(): number[] {
        let subResult: number[] = [];

        for( let i = 0; i < 3; i++ ) {
            subResult[i] = this.a[i] - this.b[i]
        }

        return subResult
    }

    checkCollinearity(): boolean {
        let resultArray: number[] = [];
        let result: boolean;

        for( let i = 0; i < 3; i++ ) {
            resultArray[i] = this.a[i] / this.b[i]
        }

        result = resultArray.every(function (item) {
            return item == resultArray[0]
        });

        return result
    }

    checkOrthogonality(): boolean {
        let result: boolean;

        if(  this.getVectorsScalarProduct() == 0) {
            result = true
        } else {
            result = false
        }

        return result
    }

}

let vector1: Vector = new Vector(1, 2, 3);
console.log( vector1.getVectorConstMul() );

let workField: Operations = new Operations( [1,0,1], [0,3,0] ); 
console.log( workField.checkOrthogonality() );