function rot13(str) {
  // Create an array to store the decoded characters
  let decodedArr = [];

  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code of the current character
    let charCode = str.charCodeAt(i);

    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(str[i])) {
      // Apply the ROT13 decoding logic
      let decodedCharCode = ((charCode - 65 + 13) % 26) + 65;

      // Convert the decoded character code back to a string
      let decodedChar = String.fromCharCode(decodedCharCode);

      // Add the decoded character to the array
      decodedArr.push(decodedChar);
    } else {
      // If the character is non-alphabetic, pass it as is
      decodedArr.push(str[i]);
    }
  }

  // Join the decoded characters to form the final decoded string
  let decodedStr = decodedArr.join('');

  return decodedStr;
}

rot13("SERR PBQR PNZC");
