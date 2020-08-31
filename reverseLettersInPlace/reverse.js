function reverse(arrayOfChars) {

    let leftIndex = 0;
    let rightIndex = arrayOfChars.length - 1;

    while (leftIndex < rightIndex) {

      // Swap characters
      const temp = arrayOfChars[leftIndex];
      arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
      arrayOfChars[rightIndex] = temp;

      // Move towards middle
      leftIndex++;
      rightIndex--;
    }
    return arrayOfChars;
}

const word = ['h', 'e', 'l', 'l', 'o'];
const reversed = reverse(word);
console.log(reversed);