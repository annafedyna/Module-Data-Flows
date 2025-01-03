let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const input = 1;
  // Act
  const result = convertToNewRoman(input);
  // Assert
  expect(result).toEqual("I");
});

test("returns II if passed 2 as an argument", function () {
  // Arrange
  const input = 2;
  // Act
  const result = convertToNewRoman(input);
  // Assert
  expect(result).toEqual("II");
});

test("returns LXV if passed 65 as an argument", function () {
  // Arrange
  const input = 64;
  // Act
  const result = convertToNewRoman(input);
  // Assert
  expect(result).toEqual("LXIV");
});
