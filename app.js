"use strict";

var j5 = require("johnny-five");
var board = new j5.Board();
var LEDPIN = 7;
var MOISTURESENSOR = 2;
var UVSENSOR = 1;
var TEMP = 0;
var BTNPIN = 8;
var ledOn = false;
var SERVO = 6;
var pumpOn = false;
 
board.on("ready", function(){

  var led = new j5.Led(LEDPIN);
  var btn = new j5.Button(BTNPIN);
  var moisture = new j5.Sensor(MOISTURESENSOR);
  var uvSensor = new j5.Sensor(UVSENSOR);
  var temperature = new j5.Sensor(TEMP);
  var ledbar = new j5.Sensor(3,4);
  var lcd = new j5.LCD({ controller: "JHD1313M1"});
  var servo = new j5.Servo(6);

 
  btn.on("press", function(){
    led.on();

      console.log("Moisture Level: ", moisture.value);
      console.log("UV Sensor Level: ", uvSensor.value);
      console.log("temperature Sensor Level: ", temperature.value);


      moisture.scale(0, 100).on("change", function() {
        // console.log("moisture Level: ", this.value);  

          if(moisture.value == 0 || moisture.value < 0.05) {
              lcd.bgColor("#ff0000"); //red, pretty dry
              lcd.cursor(0, 0).print(moisture.value);
                //turn on pump
                servo.to(180);
          } 
          else {
              lcd.bgColor("#21ff00"); //green, pretty moist
              lcd.cursor(0,0).print(moisture.value);
                //turn off pump
                servo.to(0);
          }

        // lcd.cursor(1, 0).print("UVSensor: ", uvSensor.value);

      });


  });



});
