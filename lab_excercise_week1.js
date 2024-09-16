/* ----------------------------------------------------------Start------------------------------------------------------------ */
//Question1
function capitalizeWords(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(' ');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
      // Ensure the word is not empty
      if (word.length > 0) {
        // Capitalize the first letter and concatenate the rest of the word
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        // If the word is empty, return it as is
        return word;
      }
    });
  
    // Join the capitalized words back into a single string
    const result = capitalizedWords.join(' ');
  
    return result;
  }
  
  // Example usage:
  const inputString = "the quick brown fox";
  const capitalizedResult = capitalizeWords(inputString);
  console.log(capitalizedResult); // "Hello World, How Are You?"

/* --------------------------------------------------------------------------------------------------------------------------- */
//Question2
function max(a, b, c) {
    return Math.max(a, b, c);
  }
  
  console.log(max(1, 0, 1)); // 1
  console.log(max(0, -10, -20)); // 0
  console.log(max(1000, 510, 440)); // 1000

/* --------------------------------------------------------------------------------------------------------------------------- */
//Question3
function right(inputString) {
    // Check if the input string has at least three characters
    if (inputString.length >= 3) {
        // Extract the last three characters
        const lastThree = inputString.slice(-3);
        // Remove the last three characters from the original string
        const remaining = inputString.slice(0, -3);
        // Combine the last three characters with the remaining string
        const result = lastThree + remaining;
        return result;
    } else {
        // If the input string is too short, return it unchanged
        return inputString;
    }
}

// Example usage:
console.log(right("Python")); // Output: "honPyt"
console.log(right("JavaScript")); // Output: "iptJavaScr"
console.log(right("Hi")); // Output: "Hi"

/* --------------------------------------------------------------------------------------------------------------------------- */
//Question4
function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle (outside the range 0-180 degrees)";
    }
}

// Example usage:
console.log(angle_Type(47)); // Output: "Acute angle"
console.log(angle_Type(90)); // Output: "Right angle"
console.log(angle_Type(145)); // Output: "Obtuse angle"
console.log(angle_Type(180)); // Output: "Straight angle"

/* ---------------------------------------------------------------End-------------------------------------------------------- */