
// Function without parameters

function woParams() {
    console.log("I am function without parameters");
}

// woParams();


// Function with parameters

function wParams(sName: string, sAge: number) {
    console.log(`my name is ${sName} and my age is ${sAge}`);
    // console.log('my name is ', sName, ' and my age is ', sAge);
}

// wParams('Playwright', 5);
// wParams('Chandra', 40);
// wParams('Bala', 35);
// wParams('Mounika', 5);


// Function with default parameters

function wDefaultParams(sName: string, sAge: number, sCountry: string = 'India') {
    console.log(`my name is ${sName} and my age is ${sAge} and my country is ${sCountry}`);
}

// wDefaultParams('Playwright', 5);
// wDefaultParams('Chandra', 40, 'Canada');
// wDefaultParams('Bala', 35, 'USA');
// wDefaultParams('Mounika', 5);


// Function with Optional Parameters - ?

function wOptionalParams(sName: string, sAge: number, sCountry?: string) {
    if (typeof (sCountry) == 'undefined') {
        console.log(`my name is ${sName} and my age is ${sAge}`);
    } else {
        console.log(`my name is ${sName} and my age is ${sAge} and my country is ${sCountry}`);
    }
}

// wOptionalParams('Playwright', 5);
// wOptionalParams('Chandra', 40, 'Canada');
// wOptionalParams('Bala', 35, 'USA');
// wOptionalParams('Mounika', 5);

function wOptionalDefParams(sName: string, sCountry: string = 'India', sAge: number, sState?: string) {
    if (typeof (sState) == 'undefined') {
        console.log(`my name is ${sName} and my age is ${sAge} and my country is ${sCountry}`);
    } else {
        console.log(`my name is ${sName} and my age is ${sAge} and my country is ${sCountry} and state is ${sState}`);
    }
}

// wOptionalDefParams('Playwright', 'Canada', 5, 'TS');
// wOptionalDefParams('Chandra', 'Canada', 40, 'Ontario');
// wOptionalDefParams('Bala', 'USA', 35, 'Ohio');
// wOptionalDefParams('Mounika', 'India', 5, 'AP');


// Anonymus Function - Nameless function

let status01 = function (sName: string, sCountry: string = 'India') {
    console.log(`I am ${sName} from ${sCountry}`);
}

// status01('Shekhar');


// Arrow Function ===== =>

let result = (sName: string, sCountry: string = 'India') => {
    console.log(`I am ${sName} from ${sCountry}`);
}

// result('Narayana');

let n1 = (a: number): number => {
    return a;
}

let sName = (): string => {
    return 'Playwright'
}

let ip1 = n1(5);

function sum(ip1: number, ip2: number): void {
    console.log(ip1 + ip2);
}

sum(n1(5), n1(10));

sum(40, 30);

// n1 - Callable function
// sum - calling function



