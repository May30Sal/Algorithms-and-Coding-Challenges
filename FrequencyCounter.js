/*Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. 
*/

function sameFrequency(val1, val2) {
    let arrVal1 = Array.from(String([val1]), Number);
    let arrVal2 = Array.from(String([val2]), Number);
    let countVal1 = {};
    let countVal2 = {};
    if (arrVal1.length != arrVal2.length) {
        return false;
    } else { 
        for (let key in arrVal1) {
            countVal1[arrVal1[key]] = (countVal1[arrVal1[key]] || 0) + 1; // || (OR) operator. If the key-value pair exists OR if it's 0 will be added +1
        }
        for (let key in arrVal2) {
            countVal2[arrVal2[key]] = (countVal2[arrVal2[key]] || 0) + 1; // || (OR) operator. If the key-value pair exists OR if it's 0 will be added +1
        }
        for (let key in countVal1) {
            if (countVal1[key] === countVal2[key]) {
                console.log('true');
                return true
            } else {
                console.log('false');
                return false
            }
        }
    }
}

//Tests
sameFrequency(55,54) // false
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false



