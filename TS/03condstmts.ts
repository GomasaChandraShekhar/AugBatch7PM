
function ifCondition(age: number) {
    if (age >= 18) {
        console.log(`Major`);
    }
    else {
        console.log('Minor');
    }
}


// ifCondition(17); // Minor
// ifCondition(18); // Major
// ifCondition(19); // Major


function elseIfCond(marks: number) {
    if (marks >= 40 && marks <= 59) {
        console.log(`Passed in Secodn Division with marks ${marks}`);
    }
    else if (marks >= 60 && marks <= 79) {
        console.log(`Passed in First Division with marks ${marks}`);
    }
    else if (marks >= 80 && marks <= 100) {
        console.log(`Passed in Distrinction with marks ${marks}`);
    }
    else if (marks < 40 && marks >= 0) {
        console.log(`Failed with marks ${marks}`);
    }
    else {
        console.log('Student is did not appeared in exams or Provided invalid marks');
    }
}

// elseIfCond(39);
// elseIfCond(90);
// elseIfCond(70);
// elseIfCond(49);
// elseIfCond(-49);

function switchCase(browserName: string) {
    switch (browserName) {
        case 'chrome':
            console.log('Launch chrome browser');
            break;
        case 'firefox':
            console.log('Launch firefox browser');
            break;
        case 'edge':
            console.log('Launch ege browser');
            break;
        case 'safari':
            console.log('Launch safari browser');
            break;
        default:
            console.log('By default launch chrome browser');
    }
    console.log('Out of switch case');
}

// switchCase('safari');















