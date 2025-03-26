

function linearSearch(numsList, num) {
    for (let i in numsList)
        if (numsList[i] === num) {
            //console.log(parseInt(i));
            return parseInt(i); //Needs to transform to type int, as the index come as string
        } // no need to have else statement
    return -1;
}

//Tests
linearSearch([10, 15, 20, 25, 30], 15) // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
// linearSearch([100], 100) // 0
// linearSearch([1,2,3,4,5], 6) // -1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
// linearSearch([100], 200) // -1