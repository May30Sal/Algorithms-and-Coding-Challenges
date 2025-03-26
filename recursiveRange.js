/* recursiveRange
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
*/

// Not recursive solution
// function recursiveRange(num){
//     let x = 0;
//     let y = 0;
//     while (x <= num) {
//         y = y + x;
//         x++;
//     }
//  console.log(y);
//  }

function recursiveRange(num){
    if (num === 0) {
        return 0;
    } return num + recursiveRange(num - 1)
 }

 //Tests
//recursiveRange(6) // 21
//recursiveRange(10) // 55 
recursiveRange(28) // 55
