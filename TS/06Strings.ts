
let str1: string = '     Playwright     ';

let str2: string = 't Playwright Typescript t Learning t';

let toLowerCaseStr = str1.toLowerCase();
// console.log(toLowerCaseStr);

let toUpperCaseStr = str2.toUpperCase();
// console.log(toUpperCaseStr);

let trimStart = str1.trimStart();
// console.log(trimStart);

let trimEnd = str1.trimEnd();
// console.log(trimEnd);

let trim = str1.trim();
// console.log(trim);

// console.log(str2.at(0));

// console.log(str2.at(10));

// console.log(str2.length)

// console.log(str2.charAt(0));

// console.log(str2.charAt(11));

let endsWith = str2.endsWith('pt');
// console.log(endsWith);

endsWith = str2.endsWith('pt1');
// console.log(endsWith);

let includes = str2.includes('wright');
// console.log(includes);

includes = str2.includes('wright', 10);
// console.log(includes);

let concat = str2.concat(' Welcome');
// console.log(concat);

let indexOf = str2.indexOf('T');
// console.log(indexOf);

let lastIndexOf = str2.lastIndexOf('T');
// console.log(lastIndexOf);

let replace = str2.replace('t', 'T');
// console.log(replace);

let replaceAll = str2.replaceAll('t', 'T');
// console.log(replaceAll);

let slice = str2.slice(2, 12);
// console.log(slice);

let substring = str2.substring(2, 12);
// console.log(substring);

let split: string[] = str2.split(' ');
// console.table(split);
// let temp: string | undefined = '';
// for (let word of split) {
//     if (word.length > 1) {
//         // temp = temp + " " + word;
//         temp += " " + word;
//     }
// }
// console.log(temp);

str2 = 'Playwright Typescript Learning';

let match = str2.match(/[A-Za-z\s]+/g);
// console.log(match);

let input = 'Abcdgfdf@$#%123456';
// get only numbers

let op = input.match(/[A-Za-z]+/g);
console.log(op);
console.log(op?.join());
console.log(op?.join().replace(',', ''));

op = input.match(/[0-9]+/g);
console.log(op?.[0]);

op = input.match(/[@$#%]+/g);
console.log(op);
console.log(op?.join());




