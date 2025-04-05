/**
 * Finds the longest common prefix string among an array of strings.
 *
 * @param {string[]} strs - An array of strings.
 * @return {string} - The longest common prefix.
 */
var longestCommonPrefix = function(strs) {
    // Edge case: if the input is an empty string (should actually check if array is empty)
    if (strs == "") {
        return '';
    }

    // Loop through each character in the first string
    for (let i = 0; i < strs[0].length; i++) {
        // Compare this character with the character at the same position in all other strings
        for (let value of strs) {
            // If the current string is shorter than i or characters don't match
            if (value[i] != strs[0][i]) {
                // Return the substring from 0 to i from the current string
                // This is the common prefix found so far
                return value.slice(0, i);
            }
        }
    }

    // If loop completes, the entire first string is a common prefix
    return strs[0];
};
