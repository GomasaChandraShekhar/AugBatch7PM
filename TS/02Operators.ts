
function aritOpr() {
    console.log("Addition of 10 and 15 :: ", 10 + 15); //25
    console.log("Subtraction of 10 and 15 :: ", 15 - 10); // 5
    console.log("Multiplication of 10 and 15 :: ", 10 * 15); //150
    console.log("Division of 10 and 2 :: ", 10 / 2); // 5
    console.log("Modulous of 10 and 2 :: ", 10 % 2); // 0
}

// aritOpr();

function assignOpr() {
    let a = 20;
    console.log("Addition And Opr :: ", a += 5); //  a = 25
    console.log("a updated value is :: ", a); // 25
    console.log("Subtraction And Opr :: ", a -= 5); // a = 20;
    console.log("a updated value is :: ", a); // 20
    console.log("Multiplication And Opr :: ", a *= 5); // a = 100
    console.log("a updated value is :: ", a); // 100
    console.log("Division And Opr :: ", a /= 5); // a = 20
    console.log("a updated value is :: ", a); // 20
    console.log("Modulous And Opr :: ", a %= 5); // a = 0
    console.log("a updated value is :: ", a); // 0
}

// assignOpr()


function increDecreOpr() {
    let a = 10;
    console.log("Initial value of a :: ", a); // 10
    console.log("Pre increament of a :: ", ++a); // 11
    console.log("After pre increament a :: ", a); // 11

    console.log("Post increament of a :: ", a++); // 10
    console.log("After post increament a :: ", a); // 11

    console.log("Pre decreament of a :: ", --a); // 9
    console.log("After pre decreament a :: ", a); // 9

    console.log("Post decreament of a :: ", a--); // 10
    console.log("After post decreament a :: ", a); // 9

}

// increDecreOpr()

function compOpr() {

    console.log("Equal To :: 10 == 10 :: ", 10 == 10); //  true
    // console.log("Equal To :: A == A :: ", 'A' == 'A'); // true
    // console.log("Equal To :: '10' == 10 :: ", '10' == 10); // true
    // console.log("Equal To :: A == a :: ", 'A' == 'a'); // false
    // console.log("Equal To :: 10 == 20 :: ", 10 == 20); // false

    // console.log("Not Equal To :: A != a :: ", 'A' != 'a'); // true
    // console.log("Not Equal To :: 10 != 20 :: ", 10 != 20); // true
    // console.log("Not Equal To :: 10 != 10 :: ", 10 != 10); //  false
    // console.log(" Not Equal To :: A != A :: ", 'A' != 'A'); // false

    console.log("LessTan :: 10 < 20 :: ", 10 < 20); //true
    console.log("LessTan :: 100 < 20 :: ", 100 < 20); //false

    console.log("LessTan Or Equal :: 10 <= 20 :: ", 10 <= 20); // true
    console.log("LessTan Or Equal :: 100 <= 100 :: ", 100 <= 100); // true
    console.log("LessTan Or Equal :: 1000 <= 100 :: ", 1000 <= 100); // false

    console.log("GreaterTan :: 100 > 20 :: ", 100 > 20); //true
    console.log("GreaterTan :: 10 > 20 :: ", 10 > 20); //false

    console.log("GreaterTan Or Equal :: 100 >= 20 :: ", 100 >= 20); // true
    console.log("GreaterTan Or Equal :: 100 >= 100 :: ", 100 >= 100); // true
    console.log("GreaterTan Or Equal :: 1000 >= 2000 :: ", 1000 >= 2000); // false

    // console.log("Strictly Equal To :: 10 === 10 :: ", 10 === 10); //  true
    // console.log("Strictly Equal To :: A === A :: ", 'A' === 'A'); // true
    // console.log("Strictly Equal To :: '10' === 10 :: ", '10' === 10); // false
    // console.log("Strictly Equal To :: A === a :: ", 'A' === 'a'); // false
    // console.log("Strictly Equal To :: 10 === 20 :: ", 10 === 20); // false

    // console.log("Strictly Not Equal To :: A !== a :: ", 'A' !== 'a'); // true
    // console.log("Strictly Not Equal To :: 10 !== 20 :: ", 10 !== 20); // true
    // console.log("Strictly Not Equal To :: 10 !== 10 :: ", 10 !== 10); //  false
    // console.log("Strictly Not Equal To :: A !== A :: ", 'A' !== 'A'); // false

}

// compOpr();

function terOpr(name: string, age: number) {
    let status = (age >= 18)
        ? `${name} age is ${age}, so he is Major`
        : `${name} age is ${age}, so he is Minor`;

    console.log(status);

}

// terOpr('Chandra', 17); // false
// terOpr('Chandra Shekhar', 18); // true
// terOpr('Gomasa', 19); // true

function logicalOpr() {
    // Logical AND Operator
    // console.log('true && true :: ', true && true);
    // console.log('true && false :: ', true && false);
    // console.log('false && true :: ', false && true);
    // console.log('false && false :: ', false && false);

    // Logical OR Operator
    console.log('true || true :: ', true || true);
    console.log('true || false :: ', true || false);
    console.log('false || true :: ', false || true);
    console.log('false || false :: ', false || false);

    // Logical NOT Operator
    console.log('! true :: ', !true);
    console.log('! false :: ', !false);



}

// logicalOpr();










