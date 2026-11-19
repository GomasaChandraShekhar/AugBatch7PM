import { Employee } from "./09EmployeeInterface";
import { NewEmployee } from "./EmployeeImplement";
// Object Literal Notation :: 

let Sujeet = {
    sName: "Sujeet",
    sId: 100,
    sPhno: 900090000,
    sCollege: "JNTUH"
}

// Retrieve object data

// object.key

Sujeet.sName
Sujeet.sId
Sujeet.sPhno
Sujeet.sCollege

// console.log(`Hello ${Sujeet.sName} ${Sujeet.sId} ${Sujeet.sPhno} ${Sujeet.sCollege}`);

interface Student {
    sName: string;
    sId: number;
    sPhno: number;
    sCollege: string;
}

// Way 1
const Chandra: Student & {
    [key: string]: any
} = {
    "sName": 'Chandra',
    "sId": 101,
    "sPhno": 9100774577,
    "sCollege": 'JNTUH'
}

// console.log(`Hello I am ${Chandra.sName} ${Chandra.sId} ${Chandra.sPhno} ${Chandra.sCollege}`);

// Way 2
const Shekhar: Student = {
    sName: 'Shekhar',
    sId: 102,
    sPhno: 9100774577,
    sCollege: 'JNTUH'
}

// console.log(`Hello 
//      ${Shekhar.sName} ${Shekhar.sId} ${Shekhar.sPhno} ${Shekhar.sCollege}`);


// type - user defined type = Custom type

type Laptop = {
    laptopId: string;
    laptopName: string;
    laptopPrice: number;
    laptopMadeIn: string;
    laptopBrand: string
}

const Lenovo: Laptop = {
    laptopId: "lenovo123",
    laptopName: "Lenovo Think Pad",
    laptopPrice: 120000,
    laptopMadeIn: "India",
    laptopBrand: "Lenovo"
}

// console.log(`${Lenovo.laptopName}
//             ${Lenovo.laptopId}
//             ${Lenovo.laptopBrand}
//             ${Lenovo.laptopMadeIn}
//             ${Lenovo.laptopPrice}`);



let Narayana = new NewEmployee("Narayana", 101, "Hyderabad");

Narayana.display();

