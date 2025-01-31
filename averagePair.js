//Write a function called averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

//Time: O(N) - Space: O(1)
function averagePair(arrNum, valNum) {
    let pointer2 = (arrNum.length - 1);
    for(let pointer1 = 0; pointer1 < arrNum.length; pointer1++) {
        if ((arrNum[pointer1] + arrNum[pointer2]) > (valNum * 2)) {
            pointer2--
            pointer1--
            continue
        } else if ((arrNum[pointer1] + arrNum[pointer2]) < (valNum * 2)) {
            continue
        } else{
            console.log('true');
            return true
        } 
    }
    console.log('false');
    return false
}


//Tests
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false