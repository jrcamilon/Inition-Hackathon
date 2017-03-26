var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Plug the Grove TSL2561 Light sensor module
  // into an I2C jack
var moisture = new five.Sensor(2);

  // moisture.on("change", function() {

    moisture.scale(0, 500).on("change", function() {
    console.log("moisture Level: ", this.value);



    // if(this.level == 0){
   	// 	var led = new five.Led(7);

   	// 	// led.blink(1000);
   	// 	led.on();
    // }
    // else if (this.level > 0){
    // 	var led = new five.Led(7);

    // 	led.off();
    // }

  });
});
