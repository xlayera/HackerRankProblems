'use strict';

main()


/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here

    let duplicados = [];

    const tempArray = [...ar].sort();

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] === tempArray[i]) {
            i++
            duplicados.push(tempArray[i]);
        }
    }
    return duplicados.length;
}

function main() {

    const n = 9;

    const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];


    const result = sockMerchant(n, ar);

    console.log("N = ", n + '\n');
    console.log("ar = ", ar + '\n');
    console.log("Result pairs", result );
}
