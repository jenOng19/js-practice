function reverseWords(message) {

    // First we reverse all the characters in the entire message
    reverseCharacters(message, 0, message.length - 1);
    // This gives us the right word order
    // but with each word backward

    // Now we'll make the words forward again
    // by reversing each word's characters

    // We hold the index of the *start* of the current word
    // as we look for the *end* of the current word
    let currentWordStartIndex = 0;
    for (let i = 0; i <= message.length; i++) {

      // Found the end of the current word!
        if (i === message.length || message[i] === ' ') {

        // If we haven't exhausted the string our
        // next word's start is one character ahead
        reverseCharacters(message, currentWordStartIndex, i - 1);
        currentWordStartIndex = i + 1;
        }
    }
}

function reverseCharacters(message, leftIndex, rightIndex) {

    // Walk towards the middle, from both sides
    while (leftIndex < rightIndex) {

        // Swap the left char and right char
        const temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}

const message = [ 't', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ',
    'h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd' ];

const passMessage = reverseWords(message);

// The naive solution of reversing the words one at a time had a worst-case O(n^2)runtime. That's because swapping words with 
// different lengths required "scooting over" all the other characters to make room.

//To get around this "scooting over" issue, we reversed all the characters in the message first. This put all the words in the 
//correct spots, but with the characters in each word backward. So to get the final answer, we reversed the characters in each word. 
//This all takes two passes through the message, so O(n) time total.

//This might seem like a blind insight, but we derived it by using a clear strategy:

//Solve a simpler version of the problem (in this case, reversing the characters instead of the words), and see if that gets 
//us closer to a solution for the original problem.
