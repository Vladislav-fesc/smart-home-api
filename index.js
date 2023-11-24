const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
const { TemperatureSensor } = require('./Class/Temp');
const tempSensor = new TemperatureSensor(1, 'TempSensor1', 2);
const temperature = tempSensor.measure();
const tempSensor1 = new TemperatureSensor(3, 'TempSensor2', 3);
const temperature1 = tempSensor1.measure();
app.use(cors())

app.get('/', (req, res) => {
  res.json(`Temperature1: ${temperature.toFixed(2)} °C,Temperature2: ${temperature1.toFixed(4)} °C,`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

