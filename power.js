/*power
Write a function called power which accepts a base and an exponent. The function should return the power of the 
base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative 
bases and exponents.
*/


function power(num1, num2){
    if (num2 === 0) return 1;
    return num1 * (power(num1, num2 - 1))
}

//Tests
power(2,0) // 1
power(2,2) // 4
power(2,4) // 16


//console.log(Math.pow(2, 2))