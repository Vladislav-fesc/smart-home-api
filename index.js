//  импорт 
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

const { TemperatureSensor, GTemp } = require('./Class/Temp');
// методы 
let numbers = new Array(1, 2, 3, 4,5);
for (let i = 0; i <=numbers.length; i += 1) {
  const tempSensor = new TemperatureSensor(numbers[i], 'TempSensor1', 1);
  tempSensor.temp(numbers[i]);
}
//код
app.use(cors())

app.get('/', (req, res) => {
  const temp1 = {
    "temperature 1": GTemp[1]
  }
  const temp2 = {
    "temperature 2": GTemp[2]
  }
  const temp3 = {
    "temperature 3": GTemp[3]
  }
  const temp4 = {
    "temperature 4": GTemp[4]
  }
  const temp5 = {
    "temperature 5": GTemp[5]
  }
  res.json([temp1, temp2, temp3, temp4,temp5])
})

app.listen(port, '0.0.0.0',() => {
  console.log(`Example app listening on port ${port}`)
})

