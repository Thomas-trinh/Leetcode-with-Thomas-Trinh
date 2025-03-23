function reverse(x) {
    const isNegative = x < 0;
    let str = Math.abs(x).toString();  // Convert to string (ignoring negative sign)
    let reversedStr = str.split('').reverse().join(''); // splits string into array, reverses, and joins back into string.
    let reversedNum = parseInt(reversedStr); // converts the reversed string back into a number.

    if (isNegative) {
        reversedNum = -reversedNum;  // Add the negative back
    }

    if (reversedNum < -(2**31) || reversedNum > (2**31 - 1)) {
        return 0;
    }

    return reversedNum;
}