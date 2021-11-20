const serialport = require('serialport');
const arduino = new serialport("COM10", {
    baudRate: 9600,
    parser: new serialport.parsers.Readline('\n')
});
arduino.open(function(){
    
})