const { calculateBMI } = require("./bmi");

// Test for null input
test("Null should return empty Array", () => {
  expect(calculateBMI()).toStrictEqual([]);
});

// Test for empty array
test("Empty Array return empty Array", () => {
  expect(calculateBMI([])).toStrictEqual([]);
});

// Test for empty object in array
test("Array of empty objects should return empty object as result", () => {
  expect(calculateBMI([{}])).toStrictEqual([{}]);
});

// Normal test case
test("Array of Inputs", () => {
  expect(
    calculateBMI([{ Gender: "Male", HeightCm: 171, WeightKg: 96 }])
  ).toStrictEqual([
    {
      bmi: "32.83",
      WeightKg: 96,
      HeightCm: 171,
      Gender: "Male",
      condition: "Moderately obese",
    },
  ]);
});
