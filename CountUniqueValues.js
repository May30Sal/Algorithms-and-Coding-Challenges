/* Counting unique values in an array using Multiple Pointers (pointers that corresponde to an index and move towards the beginning, the end or the middle 
of an array based on a certain condition) */

//This was my first solution without using Multiple Pointers.
//This have time and space complexity of O(n)->depending on the size of the array
function countUniqueValues(arrNum) {
    let unique = [];
    for (val of arrNum) {
        if (unique.includes(val)) {
            continue
        } else {
            unique.push(val)
        }
    }
    console.log(unique.length)
    return true
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4


//My second solution, now using Multiple Pointers
//This have time complexity of O(n) and space O(1)->constant
function countUniqueValues2(arrNum) {
    let point1 = 0;
    let count = 0;
    for (let point2 = 1; point2 < arrNum.length; point2++) {
        if (arrNum[point1] == arrNum[point2]) {
            point1++
        } else {
            point1++
            count++
        }
    }
    if (count > 0) {
        console.log(count+1)
    } else {
        console.log(0)
    }
}
countUniqueValues2([1,1,2,3,3]) // 3

//Tests
countUniqueValues2([1,1,1,1,1,2]) // 2
countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues2([]) // 0
countUniqueValues2([-2,-1,-1,0,1]) // 4

//Teacher Solution
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])