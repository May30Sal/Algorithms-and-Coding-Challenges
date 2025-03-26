/* Binary Search 
Write a function called binarySearch which accepts a sorted array and a value and returns the index at
 which the value exists. Otherwise, return -1. */

  function binarySearch(sortArr, num){
    let start = 0; //start on index 0
    let final = sortArr.length - 1 // finish at the last index
    let middle = Math.round((final + start) / 2) // middle index
    //we need to make the index walks, but compare the actual value
    while (sortArr[start] !== sortArr[final]) { //it will get out of the loop if the array doesn't have the number we are looking for
      if (sortArr[middle] > num) {
        final = middle
        middle = Math.round((final + start) / 2)
        continue
      } else if (sortArr[middle] < num) {
        start = middle
        middle = Math.round((final + start) / 2)
        continue
      } else {return middle}
    }
    return -1
  }


// Code to test performance
// const startTime = performance.now()
// test code go here
// const endTime = performance.now()
// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

//Tests
// binarySearch([1,2,3,4,5],7) // 1
//  binarySearch([1,2,3,4,5],3) // 2
//   binarySearch([1,2,3,4,5],5) // 4
//   binarySearch([1,2,3,4,5],6) // -1
//   binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
   binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1