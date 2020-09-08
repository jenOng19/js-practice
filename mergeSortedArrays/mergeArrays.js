function mergeArrays(myArray, alicesArray) {

    // Set up our mergedArray
    const mergedArray = [];

    let currentIndexAlices = 0;
    let currentIndexMine = 0;
    let currentIndexMerged = 0;

    while (currentIndexMerged < (myArray.length + alicesArray.length)) {

        const isMyArrayExhausted = currentIndexMine >= myArray.length;
        const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

      // Case: next comes from my array
      // My array must not be exhausted, and EITHER:
      // 1) Alice's array IS exhausted, or
      // 2) The current element in my array is less
      //    than the current element in Alice's array
        if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
            (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

            mergedArray[currentIndexMerged] = myArray[currentIndexMine];
            currentIndexMine++;

            // Case: next comes from Alice's array
        } else {
            mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
            currentIndexAlices++;
        }

        currentIndexMerged++;
    }

    return mergedArray;
}

const mySortedArray = [3, 4, 6, 10, 11, 15];
const friendsSortedArray = [1, 5, 8, 12, 14, 19];
const passInArrays= mergeArrays(mySortedArray,friendsSortedArray)


//First, we allocate our answer array, getting its size by adding the size of myArray and alicesArray.

//We keep track of a current index in myArray, a current index in alicesArray, and a current index in mergedArray. So at each step, 
//there's a "current item" in alicesArray and in myArray. The smaller of those is the next one we add to the mergedArray!

//But careful: we also need to account for the case where we exhaust one of our arrays and there are still elements in the other. 
//To handle this, we say that the current item in myArray is the next item to add to mergedArray only if myArray is not exhausted AND, either:

//1.alicesArray is exhausted, or
//2.the current item in myArray is less than the current item in alicesArray

//The if statement is carefully constructed to avoid indexing past the end of an array, because JavaScript would give us undefined 
//and we don't want to compare undefined with an integer. We take advantage of JavaScript's short circuit evaluation ↴ and check first if the arrays are exhausted.

//O(n) time and O(n) additional space, where n is the number of items in the merged array.

//The added space comes from allocating the mergedArray. There's no way to do this " in place" ↴ because neither of our input arrays are necessarily big enough to hold the merged array.