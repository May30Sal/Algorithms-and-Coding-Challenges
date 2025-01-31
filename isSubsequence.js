/*Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters 
in the first string form a subsequence of the characters in the second string. In other words, the function should 
check whether the characters in the first string appear somewhere in the second string, without their order changing.
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

function isSubsequence(val1, val2) {
    for(let i of val1) {
        //if (val1[i] === val2[i])
       console.log(i);
    }
}


//Tests
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
