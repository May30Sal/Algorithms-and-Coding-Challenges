/* Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates 
among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

function areThereDuplicates() { //to accept n number of arguments we don't need to write them, and we can use the 'for' loop to access them.
    let arrNums = [];
    for (var i = 0; i < arguments.length; i++) {
      if (arrNums.includes(arguments[i]) !=true) {
        arrNums.push(arguments[i])
      } else {
        console.log('true');
        return true;
      }
    }
    console.log('false');
    return false
}

//Tests 
areThereDuplicates(1,3,2,5,9) //false
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 