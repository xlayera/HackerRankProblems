'use strict';

main();


/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here

    const tempArray = [...path];
    let count = 1
    let stepAr = []

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] == tempArray[i]) {
            count++
        } else {
            stepAr.push({ step: tempArray[i], count: count })
            count = 1
        }
    }

    for (let j = 0; j < stepAr.length; j++) {
        console.log(j, " ", stepAr[j]);
        console.log(stepAr[j + 1] ? stepAr[j + 1].count - stepAr[j].count : "nada");
        if (stepAr[j].step == 'U') {
           
        }
    }


    return stepAr
}


function main() {

    const steps = 8;

    const path = "UDDDUDUU";


    const result = countingValleys(steps, path);

    console.log("steps = ", steps + '\n');
    console.log("path = ", path + '\n');
    console.log("Result steps", result);
}
