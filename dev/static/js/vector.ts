const ABSOLUTE_TEMPERATURE_ZERO: number = -273.15;

interface VectorPrototype {

    getVector(): number[];
    getVectorModule(): number;
    getVectorConstMul():number[];

}


interface VectorsOperations {

    getVectorsScalarProduct(): number;
    getVectorsAdd(): number[];
    getVectorsSub(): number[];
    checkCollinearity(): boolean;
    checkOrthogonality(): boolean;

}


class Vector implements VectorPrototype {

    constructor(private x: number, private y: number, private z: number) {

        this.x = x;
        this.y = y;
        this.z = z;

    }

    public getVector(): number[] {
        return [this.x, this.y,  this.z];
    }

    public getVectorModule(): number {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow(this.z,2))
    }

    public getVectorConstMul(): number[] {
        let constMulResult: number[] = [];

        for ( let i = 0; i < 3; i++ ) {
            let currentVector: number[] = this.getVector();
            constMulResult[i] = currentVector[i] * ABSOLUTE_TEMPERATURE_ZERO;
        }

        return constMulResult
    }

}


class Operations implements VectorsOperations {

    constructor(private a: number[], private b: number[]) {

        this.a = a;
        this.b = b;

    }

    public getVectorsScalarProduct():number {
        let mulResult: number[] = [];

        for( let i = 0; i < 3; i++ ) {
            mulResult[i] = this.a[i] * this.b[i]
        }

        let scalarResult: number = mulResult.reduce(function (a, b) {
            return a + b
        });

        return scalarResult
    }

    public getVectorsAdd(): number[] {
        let addResult: number[] = [];

        for( let i = 0; i < 3; i++ ) {
            addResult[i] = this.a[i] + this.b[i]
        }

        return addResult
    }

    public getVectorsSub(): number[] {
        let subResult: number[] = [];

        for( let i = 0; i < 3; i++ ) {
            subResult[i] = this.a[i] - this.b[i]
        }

        return subResult
    }

    public checkCollinearity(): boolean {
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

    public checkOrthogonality(): boolean {
        let result: boolean;

        if( this.getVectorsScalarProduct() == 0 ) {
            result = true
        } else {
            result = false
        }

        return result
    }

}
/*
    let vector1: Vector = new Vector(1, 2, 3);
    let vector2: Vector = new Vector(3, 2, 3);
    console.log( vector1.getVectorConstMul() );

    let workField: Operations = new Operations( vector1.getVector(), vector2.getVector() );
    console.log( workField.checkOrthogonality() );
*/

document.getElementById("vectorModule").addEventListener("click", function() {

    let inputX: number = Number( <string>(<HTMLInputElement>document.getElementById("userX")).value );
    let inputY: number = Number( <string>(<HTMLInputElement>document.getElementById("userY")).value );
    let inputZ: number = Number( <string>(<HTMLInputElement>document.getElementById("userZ")).value );

    let userVector: Vector = new Vector(inputX, inputY, inputZ);
    document.getElementById("vectorResult").innerHTML = String( userVector.getVectorModule() )

});

document.getElementById("vectorConstMul").addEventListener("click", function() {

    let inputX: number = Number( <string>(<HTMLInputElement>document.getElementById("userX")).value );
    let inputY: number = Number( <string>(<HTMLInputElement>document.getElementById("userY")).value );
    let inputZ: number = Number( <string>(<HTMLInputElement>document.getElementById("userZ")).value );

    let userVector: Vector = new Vector(inputX, inputY, inputZ);
    document.getElementById("vectorResult").innerHTML = String( userVector.getVectorConstMul() )

});


document.getElementById("vectorScalar").addEventListener("click", function() {

    let inputFirstX: number = Number( <string>(<HTMLInputElement>document.getElementById("userFirstX")).value );
    let inputFirstY: number = Number( <string>(<HTMLInputElement>document.getElementById("userFirstY")).value );
    let inputFirstZ: number = Number( <string>(<HTMLInputElement>document.getElementById("userFirstZ")).value );

    let inputSecondX: number = Number( <string>(<HTMLInputElement>document.getElementById("userSecondX")).value );
    let inputSecondY: number = Number( <string>(<HTMLInputElement>document.getElementById("userSecondY")).value );
    let inputSecondZ: number = Number( <string>(<HTMLInputElement>document.getElementById("userSecondZ")).value );

    let userFirstVector: Vector = new Vector( inputFirstX, inputFirstY, inputFirstZ );
    let userSecondVector: Vector = new Vector (inputSecondX, inputSecondY, inputSecondZ );
    let vectorGroup: Operations = new Operations( userFirstVector.getVector(), userSecondVector.getVector() );

    document.getElementById("vectorGroupResult").innerHTML = String( vectorGroup.getVectorsScalarProduct() )

});


document.getElementById("vectorAdd").addEventListener("click", function() {

    let inputFirstX: number = Number( <string>(<HTMLInputElement>document.getElementById("userFirstX")).value );
    let inputFirstY: number = Number( <string>(<HTMLInputElement>document.getElementById("userFirstY")).value );
    let inputFirstZ: number = Number( <string>(<HTMLInputElement>document.getElementById("userFirstZ")).value );

    let inputSecondX: number = Number( <string>(<HTMLInputElement>document.getElementById("userSecondX")).value );
    let inputSecondY: number = Number( <string>(<HTMLInputElement>document.getElementById("userSecondY")).value );
    let inputSecondZ: number = Number( <string>(<HTMLInputElement>document.getElementById("userSecondZ")).value );

    let userFirstVector: Vector = new Vector( inputFirstX, inputFirstY, inputFirstZ );
    let userSecondVector: Vector = new Vector (inputSecondX, inputSecondY, inputSecondZ );
    let vectorGroup: Operations = new Operations( userFirstVector.getVector(), userSecondVector.getVector() );

    document.getElementById("vectorGroupResult").innerHTML = "Сложение векторов:    (" + String( userFirstVector.getVector() ) + ") + (" + String( userSecondVector.getVector() ) + ") = (" + String( vectorGroup.getVectorsAdd() ) + ")"

});


document.getElementById("vectorSub").addEventListener("click", function() {

});


document.getElementById("vectorCollinearity").addEventListener("click", function() {

});


document.getElementById("vectorOrthogonality").addEventListener("click", function() {

});