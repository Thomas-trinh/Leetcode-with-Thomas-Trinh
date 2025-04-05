/**
* @param {string} s - The input string to be converted.
 * @param {number} numRows - The number of rows to use in the zigzag pattern.
 * @return {string} - The zigzag converted string read line by line.
 */
var convert = function(s, numRows) {
    // If only one row or numRows is greater than or equal to the string length,
    // no zigzag is needed. Return the string as is.
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // `count` keeps track of the current row we’re writing to.
    let count = 0;

    // `goDown` determines the direction we are moving through the rows.
    // Starts as false because we go down on first switch.
    let goDown = false;

    // Create an array of empty strings, one for each row.
    // This will hold the characters for each row.
    let arr = new Array(numRows).fill("");

    // Loop through each character in the input string
    for (let i = 0; i < s.length; i++) {
        let value = s[i]; // Current character

        // Append the character to the current row
        arr[count] += value;

        // If we’re at the top (row 0) or bottom (row numRows - 1),
        // change direction (zigzag).
        if (count === 0 || count === numRows - 1) {
            goDown = !goDown; // Toggle direction
        }

        // Update the row index based on direction
        if (goDown) {
            count++; // Go down to the next row
        } else {
            count--; // Go up to the previous row
        }
    }

    // Combine all rows into a single string and return
    return arr.join("");
};

// if numRows = 3 then we join like this arr[[PAHN],[APLSIIG],[YIR]]