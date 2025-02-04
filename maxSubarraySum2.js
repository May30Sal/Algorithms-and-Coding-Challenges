/*Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a 
subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array. In the first example below, 
[100, 200, 300] is a subarray of the original array, but [100, 300] is not.
Time Complexity - O(N)
Space Complexity - O(1)
*/

//I needed to look at the previous model of this algotrithm, as I wasn't understading exactly how it works. 

function maxSubarraySum(arrVal, numVal){
    let maxSum = 0;
    let currSum = 0;
    if( arrVal.length < numVal) {
        return false;
    } else {
        for (let i = 0; i < numVal; i++) {
            currSum += arrVal[i]
        }
        for (let i = numVal; i <= arrVal.length-1; i++) {
            let leftWin = arrVal[i];
            let rigthWin = arrVal[i-numVal];
            currSum = currSum - rigthWin + leftWin
            maxSum = Math.max(maxSum, currSum)
      }
      console.log(maxSum);
      return maxSum;
    }
}

//Tests
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

