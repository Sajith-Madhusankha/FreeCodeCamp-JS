function convertToRoman(num) {
  const romanNumerals = {
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C : 100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I : 1
  };
  
  // Initialize result
  let result = '';
  
  // Go Through every key in romanNumerals
  for (let key in romanNumerals) {
    // Check if num is bigger than the corresponding key value
    while (num >= romanNumerals[key]) {
      // If Yes add that value to result
      result += key;
      //Substract the same value from num
      num -= romanNumerals[key];
    }
  }
  // Return result at the end
  return result;
}

convertToRoman(36);
