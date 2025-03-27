let s = "pwwkew";

let max = 0;
let count = 0;
let prevCount = 0;
let startIndexOfMax = 0;
let charSet = new Set();

while (count < s.length) {
    // If the current character is not in the set, it's unique within the window
    if (!charSet.has(s.charAt(count))) {
        charSet.add(s.charAt(count));  // Add the character to the set

        // If the current window is larger than the previous max, update max and record start index
        if (charSet.size > max) {
            max = charSet.size;             // Update max length
            startIndexOfMax = prevCount;    // Remember where this max window starts
        }

        count++;  // Move the right boundary forward
    } else {
        // If current character is a duplicate (already in set), shrink window from the left
        charSet.delete(s.charAt(prevCount));  // Remove the leftmost character
        prevCount++;  // Move the left boundary forward
    }
}


// Extract the longest substring using slice()
let longestSubstring = s.slice(startIndexOfMax, startIndexOfMax + max);
console.log("Longest substring:", longestSubstring);
console.log("Length:", max);
