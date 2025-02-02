/*Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters 
in the first string form a subsequence of the characters in the second string. In other words, the function should 
check whether the characters in the first string appear somewhere in the second string, without their order changing.
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

/* This was so far the hardest one for me, because I didn't understand totally the instructuons at first. I thought
I need to find any sequence of more than 2 letter in the 2 string, but actually I need to have the entire 1st string
as part of the 2nd string, even if there are other word in the middle of it. So finally, I could find a solution.
*/

    function isSubsequence(val1, val2) {
        let i = 0;
        let sequence = 0;
        for (let j = 0; j < val2.length; j++) {
            if (val1[i] == val2[j]) {
                sequence += 1;
                i++;
                j--;
            } else {
                continue;
            }
        } 
        if (sequence >= val1.length) {
            console.log('true');
            return true
        } else {
            console.log('false');
            return false
        }
    }


//Teacher Solution
// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//       if (str2[j] === str1[i]) i++;
//       if (i === str1.length) return true;
//       j++;
//     }
//     return false;
//   }


//Tests
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
