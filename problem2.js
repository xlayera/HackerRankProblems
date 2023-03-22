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
    let seaLevel = 0
    let valleysCount = 0
    let valleysFlag = false

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] == 'U') seaLevel++
        if (tempArray[i] == 'D') seaLevel--

        if (seaLevel < 0) valleysFlag = true
        
        if (valleysFlag == true && seaLevel == 0) {
            valleysCount++
            valleysFlag = false
        }

    }

    return valleysCount
}


function main() {

    const steps = 8;

    const path = "UDDDUDUU";


    const result = countingValleys(steps, path);

    console.log("steps = ", steps + '\n');
    console.log("path = ", path + '\n');
    console.log("Result steps", result);
}
