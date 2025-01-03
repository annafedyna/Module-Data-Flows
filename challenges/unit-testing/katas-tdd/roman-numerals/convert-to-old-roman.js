function convertToOldRoman(n) {
  const roman = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  res = "";
  while (n > 0) {
    for (const key of Object.keys(roman).reverse()) {
        if (Math.floor(n / Number(key)) !== 0) {
          const whole_part = Math.floor(n / Number(key))
        for (let i = 0; i < whole_part; i++) {
          res += roman[key];
          n -= key;
        }
      } 
    }
  }
    return res;
}

console.log(convertToOldRoman(3000));
console.log(convertToOldRoman(19));

module.exports = convertToOldRoman;
