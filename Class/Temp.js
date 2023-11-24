const Sensor = require('./Sensor.js');

class TemperatureSensor extends Sensor {
  constructor(sensor_id, name, floor_number) {
    // Вызываем конструктор базового класса с помощью super
    super(sensor_id, name, 'temperature', floor_number);
  }

  measure() {
    const beta = 3950; // should match the Beta Coefficient of the thermistor
    const value = Math.floor(Math.random() * 1025); // Adjusted to match the Python randint behavior
    const celsius =
      1 / (Math.log(1 / (1023 / value - 1)) / beta + 1.0 / 298.15) - 273.15;
    return celsius;
  }
}

module.exports = { TemperatureSensor };