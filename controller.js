const express = require("express");
const { calculateBMI } = require("./services/bmi");
const router = express.Router();

router.post("/calculate-bmi", (req, res, next) => {
  try {
    const { healthData } = req.body;
    let bmi = calculateBMI(healthData);
    res.status(200).json(bmi);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
