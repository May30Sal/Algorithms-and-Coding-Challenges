//Training about Loops

// Here I defined an array with 5 elements. The array.length returns me the number pf elements!
arr1 = [8,9,6,4,7] // This array gores from index 0 to 4
console.log(arr1.length); //5

// This loop will return me the index number, not the values.
function getLoopIndexByLength(arr) {
    for(let i = 0; i < arr.length; i++)
        console.log(i) //0 1 2 3 4
}

// This loop will return the values.
function getLoopValueByLength(arr) {
    for(let i = 0; i < arr.length; i++)
        console.log(arr[i]) //8 9 6 4 7
}

getLoopIndexByLength(arr1)
getLoopValueByLength(arr1)


function getLoopIndexByNum(arr) {
    for(let i = 0; i <= 4; i++) //4 here stands for the number of iterations that we want, starting at index 0 (will print the index)
        console.log(i) //0 1 2 3 
}

function getLoopValueByNum(arr) {
    for(let i = 0; i <= 4; i++) //4 here stands for the number of iterations that we want, starting at index 0 (will print the value)
        console.log(arr[i]) //8 9 6 4 
}

getLoopIndexByNum(arr1)
getLoopValueByNum(arr1)


