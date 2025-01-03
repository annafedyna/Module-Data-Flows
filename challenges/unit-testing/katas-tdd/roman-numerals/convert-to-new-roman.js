function convertToNewRoman(n) {
     const roman = {
       1: "I",
       4: "IV",
       5: "V",
       9: "IX",
       10: "X",
       40: "XL",
       50: "L",
       90: "XC",
       100: "C",
       400: "CD",
       500: "D",
       900: "CM",
       1000: "M",
     };
     res = "";
     while (n > 0) {
       for (const key of Object.keys(roman).reverse()) {
         if (Math.floor(n / Number(key)) !== 0) {
           while (n >= Number(key)) {
             res += roman[key];
             n -= Number(key);
           }
         }
       }
     }
     return res;
}

console.log(convertToNewRoman(4));
console.log(convertToNewRoman(19));

module.exports = convertToNewRoman;
