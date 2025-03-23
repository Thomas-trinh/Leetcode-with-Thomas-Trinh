/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Main function to add two numbers represented by linked lists
var addTwoNumbers = function(l1, l2) {
    // Dummy head to simplify adding new nodes
    const dummyHead = new ListNode(0);
    let current = dummyHead;  // Pointer to build the result list
    let carry = 0;  // Carry starts at 0

    // Continue looping while there's something to process
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Extract values from current nodes (or 0 if the list has ended)
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // Calculate sum and carry
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);  // Carry for next iteration
        const digit = sum % 10;  // Current digit to store

        // Create a new node for the current digit and move the pointer
        current.next = new ListNode(digit);
        current = current.next;

        // Move l1 and l2 forward if possible
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // Return the result list (skipping the dummy head)
    return dummyHead.next;
};
