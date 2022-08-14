/**
 * BMI Ranges
 */
const BMIRange = [
  { min: 0, max: 18.4 },
  { min: 18.5, max: 24.9 },
  { min: 25, max: 29.9 },
  { min: 30, max: 34.9 },
  { min: 35, max: 39.9 },
  { min: 40, max: Infinity },
];

/**
 * BMI Categories
 */
const BMICategories = [
  { condition: "Underweight" },
  { condition: "Normal WeightKg" },
  { condition: "Overweight" },
  { condition: "Moderately obese" },
  { condition: "Severel obese" },
  { condition: "Very severely obese" },
];

/**
 * Calculates the BMI and gives condition as well according to data
 * @param {Array} weightHeightJson
 * @returns {Array}
 */
function calculateBMI(weightHeightJson = []) {
  let memo = {};
  let res = [];

  if (!weightHeightJson || weightHeightJson.length === 0) return res;

  weightHeightJson.forEach((wh, index) => {
    const { WeightKg, HeightCm, Gender } = wh;
    if (!WeightKg || !HeightCm) {
      res[index] = {};
      return;
    }
    let bmi = (WeightKg / Math.pow(HeightCm / 100, 2)).toFixed(2);
    let resObj = { bmi, WeightKg, HeightCm, Gender };
    if (memo[bmi]) {
      resObj.condition = memo[bmi];
    } else {
      BMIRange.forEach((br, i) => {
        const { min, max } = br;
        if (min && bmi > min && max && max > bmi) {
          memo[bmi] = BMICategories[i].condition;
          resObj.condition = memo[bmi];
          return;
        }
      });
    }
    res[index] = { ...resObj };
  });

  return res;
}

module.exports = { calculateBMI };
