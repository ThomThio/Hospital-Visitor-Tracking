var Bleacon = require('./lib/bleacon');
// console.log(Bleacon);

var bleacon = new Bleacon();

bleacon.BleuStation = require('./bleu-station/bleu-station');
var Estimote = bleacon.Estimote = require('./estimote/estimote');
bleacon.EstimoteSticker = require('./estimote-sticker/estimote-sticker');

module.exports = bleacon;

var uuid_1 = '43FB737941FCC163';
var uuid_2 = 'dcccf79c84d77521';

var uuid = 'd0d3fa86ca7645ec9bd96af4dcccf79c';

bleacon.startScanning(uuid);
// bleacon.startAdvertising(uuid, major, minor, measuredPower);
// bleacon.on('discover', function(bleacon) {
//    console.log(this);
// });





// Bleacon.stopAdvertising();



Estimote.discover(callback(esimote));
Estimote.discoverAll(callback(estimote));
