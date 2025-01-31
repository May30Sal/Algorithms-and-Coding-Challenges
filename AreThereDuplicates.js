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

//areThereDuplicates Teacher Solutions

//check on this one!
//Multiple pointers
// The rest parameter (...parameter) allows a function to accept an indefinite number of arguments as an array.
  // function areThereDuplicates(...args) {
  //   args.sort((a, b) => {
  //     if (a < b) return -1;
  //     if (a > b) return 1;
  //     return 0;
  //   });
  
  //   let start = 0;
  //   let next = 1;
  //   while (next < args.length) {
  //     if (args[start] === args[next]) {
  //       return true;
  //     }
  //     start++;
  //     next++;
  //   }
  //   return false;
  // }

// The 'Set' object lets you store unique values of any type. So here, the new Set(arguments) will return a new set with only the unique values of the arguments,
// then get its size and compare to the original arguments size. If it matches there's no duplicates.
//It's O(1) time and space
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length; 
}

