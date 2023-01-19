let age: number = 20;
if (age<30){
    age += 10;
}

let numbers: number[] = [1,2,3]; 

let user:[number, string] = [1, 'mosh'];
user.push(1);

const small =1;

const enum Size { Small=1, Medium, Large };
let mySize : Size = Size.Medium;

function calculateTax(income: number, taxYear?:number): number {
    if ((taxYear || 2022)  < 50_000) {
        return income*1.2;
    }
    return 0;
}

// function calculateVoid(income: number): void {
    
// }