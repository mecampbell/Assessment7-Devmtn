function addToZero (arr) {
    let value = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                if (arr[i] + arr[j] === 0) {
                    value = true;
                }
            }
        }
    }
    return value;
}

console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

// O(n^2)

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

// O(n)

function isPangram (str) {
   str = str.toLowerCase();
   const { length } = str;
   const letters = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = letters.split('');
   for(let i = 0; i < length; i++){
      const el = str[i];
      const index = alphaArr.indexOf(el);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// O(n)

function findLongestWord (arr) {
    var longestWord = "";
  
    arr.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }

console.log(findLongestWord(["hi", "hello"]));

// O(n)