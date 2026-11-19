
// var

var var1: string = 'Playwright'; // Declaration and intialization

var var2: string;
var2 = 'Typescript';

var var1: string = 'Playwright'; // Re-Declaration

var1 = 'Typescript'; // Re-Assignment
var1 = 'Typescript 123'; // Re-Assignment

// console.log(var3); // Hoisting
// var var3: number;

//=======================================

// let variabale

let var4: string = 'Balakrishna';

// let var4: string = 'Balakrishna'; // Re-Declaration not allowed
var4 = 'Typescript'; // Re-Assignment
var4 = 'Typescript 123'; // Re-Assignment

// console.log(var5); // Hoisting not allowed - ReferenceError
// let var5: number;


//=======================================

// const variabale

const var6: string = 'India';
const var8: number = 100;

// const var6: string = 'India';// Re-Declaration not allowed

// var6 = 'USA'; // Re-Assignment not allowed

// console.log(var7); // Hoisting not allowed - ReferenceError
// const var7: number = 123;

// ===================================================


let sName: string = 'Balakrishna'; // '',  "",  ``(Backtik quotes)
let sData: string = '100';
let sAge: number = 45;
let sFlag: boolean = true;

// type of a variable or Data

// typeof(); - returns data type

// console.log(typeof (sName));
// console.log(typeof (sAge));
// console.log(typeof (sData));
// console.log(typeof (sFlag));

let sNoData: undefined;
// console.log(sNoData);

let sNoData1: string;
// console.log(sNoData1);

let sAnyData: any;
// console.log(typeof (sAnyData));

sAnyData = 123;
// console.log(typeof (sAnyData));

sAnyData = 'hello';
// console.log(typeof (sAnyData));

sAnyData = true;
// console.log(typeof (sAnyData));

let sUnioin: string | number | boolean;

sUnioin = 123;
// console.log(typeof (sUnioin));

sUnioin = '123';
// console.log(typeof (sUnioin));

sUnioin = false;
// console.log(typeof (sUnioin));

let sNull: null = null;
// console.log(typeof (sNull));

let sInference;
console.log(typeof (sInference));
// console.log(sInference);

sInference = 'Inference';
console.log(typeof (sInference));
// console.log(sInference);

sInference = 100;
console.log(typeof (sInference));

