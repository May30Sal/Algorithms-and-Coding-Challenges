//Anagram Challenge using Frequency Counter

/*In this challenge we work with Anagrams (different words that contains exactly the same letters) to understand and apply the Big O concept.
For the algorithm to have a runtime of O(n), meaning that the time it takes to run grows accordingly to the size of it, it's better to avoid using nested loops.
To approach the solution I passed the 2 strings into an object, and then compared the 2 objects, avoiding using nested loops.*/

function validAnagram(word1, word2){
    if ((word1.length != word2.length) || (typeof word1 != 'string') || (typeof word2 != 'string')) {
        console.log("false")
        return false;
    } else {
        let anagram1 = {};
        let anagram2 = {};

        for (i of word1) {
            anagram1[i] = (anagram1[i] || 0) + 1;
        }

        for (i of word2) {
            anagram2[i] = (anagram2[i] || 0) + 1;
        }

        for (let key in anagram1) {
            if (anagram1[key] === anagram2[key]) {
                continue; //Is important to put the continue, so it will keep going the loop
            } else {
                console.log("false")
                return false;
            }
        }
        console.log(anagram1, anagram2);
        console.log('true')
        return true //Always return the value (not only print it to the console!)
  }
}

//Tests:
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
