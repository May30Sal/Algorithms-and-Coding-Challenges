//Sliding Window O(n)
/* This one was particularly difficult to me, because I tried to solve it first without looking at the teacher the explanation.
As I couldn't do it after around a day, I finish watching the explanation, and then I tried to do it again by myself to consolidate my learning.
*/

function MaxSubarraySum(arr, num) {
    if (arr.length > num) {
        var curSum = 0;
        var maxSum = 0;
        for (var i = 0; i < num; i++) { //num here is the number of iterations
            curSum += arr[i]
            }
        //console.log(curSum)
        maxSum = curSum
        for (var i = num; i <= arr.length - 1;i++) {
            curSum = curSum - arr[i-num] + arr[i] //arr[i-num] = arr[0]
            //console.log(curSum)
            maxSum = Math.max(curSum, maxSum)
        }
        console.log(maxSum)
    }
}

MaxSubarraySum([8,2,5,2,2,10,1], 3) //15
// MaxSubarraySum([1,1], 2)
// MaxSubarraySum([1], 2)
