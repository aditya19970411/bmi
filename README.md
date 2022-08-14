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
 

## HOST
  Hosted on Hiroku - https://bmi-calculator-task.herokuapp.com/
  
## CI
  Via github actions for nodejs
