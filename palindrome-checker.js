function palindrome(str) {
  // Convert String to lower case
  // Remove any non alphanumeric characters
  str = str.toLowerCase().replace(/[\W_]/g, '');
  // Compare the reversed string with the original string and return true if both are same.
  return str === str.split('').reverse().join('');
}

palindrome("eye");
