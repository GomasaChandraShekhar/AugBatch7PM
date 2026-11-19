// 1. Literal :: 

let arr1: string[] = [];

let arr2: string[] = ['a', 'b', 'c'];

arr1[0] = 'Chandra';

arr1[1] = 'Shekhar';

arr1[2] = 'Playwright';

arr1[3] = 'Typescript';

// console.log(arr1[0]);

// console.log(arr1[3]);

// console.log(arr1[4]); // undefined

// console.log(arr1);

// console.table(arr1);

let arr3: (string | number | boolean)[] = [];

arr3[0] = 100;
arr3[1] = 'Javascript';
arr3[2] = true;
arr3[3] = false;
arr3[4] = 'Playwright';
arr3[4] = 'Playwright Javascript';
arr3[5] = 200;
arr3[6] = 'Playwright';
arr3[4] = 'Playwright Typescript';

// console.table(arr3);

let arr3Length = arr3.length;
// console.log(arr3Length);

// for

// for (let index = 0; index < arr3Length; index++) {
//     console.log(arr3[index]);
// }

// for (let ele of arr3) {
//     console.log(ele);
// }

// for (let index in arr3) {
//     console.log(arr3[index]);
// }


// Grneric way

let arr4: Array<number> = [12, 2, 3, 1, 10, 7, 0, 100, 4, 5];

let arr4_7 = arr4.at(7);
// console.log(arr4_7); //undefined


let arr5: Array<string> = ['Testing', 'Playwright', 'Typescript']

// new keywrod

let arr6: string[] = new Array('Javascript', 'Java', 'Typescript');

arr6[3] = 'Playwright';

// Array Functions ::

let arr6_3 = arr6.at(3);
// console.log(arr6_3);

let arr7 = arr3.concat(arr4)
// console.log(arr7);

let ind = arr6.findIndex(ele => ele == "Playwright");
// console.log(ind);

let ind1 = arr6.find(ele => ele == "Playwright111");
// console.log(ind1);

// for (let ind = 0; ind < arr6.length; ind++) {
//     if (arr6[ind] == "Playwright") {
//         console.log(arr6[ind]);
//     }
// }

let numEle = arr6.push('Automation_456');
// console.log(numEle);

arr6.push('Automation123');
// console.table(arr6);

let deletedData = arr6.pop();
// console.log(deletedData);
// console.table(arr6);

let unshiftNum = arr6.unshift('Automation');
// console.log(unshiftNum);
// console.table(arr6);

let shiftData = arr6.shift();
// console.log(shiftData);
// console.table(arr6);

let arr8 = arr6.map(ele => ele.toUpperCase());
// console.table(arr8);

arr6.forEach(ele => {
    let eleu = ele.toUpperCase();
    // console.log(eleu);
});

let arr9 = arr6.every(ele => {
    ele == "Playwright"
});
// console.table(arr9);

// Sort number array
let arr10 = arr4.sort((a, b) => a - b);
console.table(arr10);

// sort string array
let arr11 = arr6.sort();
console.table(arr11);




