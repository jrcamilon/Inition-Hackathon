// Load Grove module
var groveSensor = require('jsupm_grove');

// Create the light sensor object using AIO pin 0
var light = new groveSensor.GroveLight(1);

// Read the input and print both the raw value and a rough lux value,
// waiting one second between readings
function readLightSensorValue() {
    console.log(light.name() + " raw value is " + light.raw_value() +
            ", which is roughly " + light.value() + " lux");
}
setInterval(readLightSensorValue, 1000);