const addToZero = arr => {
    for (let i = 0; i < arr.length; i++) {                 
        for (let j = i + 1; j < arr.length; j++) {          
            if (arr[i] + arr[j] === 0) {                   
                return true;
            };
        };
    };

    return false;
};

console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1, 2, 3]))
console.log(addToZero([1, 2, 3, -2]))
// Runtime Complexity O(n^2)
// Space Complexity O(1)


const uniqueChars = str => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            };
        };
    };

    return true;
};

console.log(uniqueChars('Monday'));
console.log(uniqueChars('Moonday'));
// Runtime Complexity O(n^2)
// Space Complexity O(1)


const isPangram = str => {
    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if(strArr.indexOf(alphabet[i]) < 0) {
            return false;
        };
    };

    return true;
};

console.log(isPangram('The quick brown fox jumps over the lazy dog!'));
console.log(isPangram('I like cats, but not mice'));
// Runtime Complexity O(1)
// Space Complexity O(n)


const findLongestWord = arr => {
    let longestWord = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i].length > longestWord) {
            longestWord = arr[i].length;
        };
    };

    return longestWord;
};

console.log(findLongestWord(['hi', 'hello']));
// Runtime Complexity O(n)
// Space Complexity O(n)