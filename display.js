var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var lcd = new five.LCD({
    controller: "JHD1313M1"                                  
  });

  lcd.useChar("heart");

  lcd.cursor(0, 0).print("hello :heart:");

  lcd.blink();

  lcd.cursor(1, 0).print("Blinking? ");

});