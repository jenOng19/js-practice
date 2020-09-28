function checkIfPalindrome(word){
    const unpairedCharacters= new Set();

    for(let char of word){
        if(unpairedCharacters.has(char)){
            unpairedCharacters.delete(char)
        }else{
            unpairedCharacters.add(char)
        }
    }

    return unpairedCharacters.size <= 1;
}

const word = "racecar";
checkIfPalindrome(word)