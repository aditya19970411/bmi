# BMI
BMI calculator

## APIs

### POST API
#### /api/calculate-bmi
  - body: {
            "healthData": [{
                            Gender, 
                            HeightCm, 
                            WeightKg
                            }]
          }
  - response: [{
                bmi, 
                WeightKg, 
                HeightCm, 
                Gender, 
                condition
               }]
 
 
